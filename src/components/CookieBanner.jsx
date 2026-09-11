import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DEFAULT_PREFERENCES,
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsent,
  saveConsent,
} from "../lib/consent.js";

const ALL_ACCEPTED = { necessary: true, analytics: true };
const ONLY_NECESSARY = { necessary: true, analytics: false };

/**
 * Selector de cookies conforme al art. 22.2 LSSI y al RGPD:
 * - Se muestra en todas las páginas hasta que hay una decisión expresa.
 * - Aceptar y rechazar tienen el mismo peso visual.
 * - Enlaza directamente con la Política de Cookies, la Política de Privacidad
 *   y el Aviso Legal.
 * - Permite retirar o cambiar el consentimiento en cualquier momento.
 */
export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookieSettings, setCookieSettings] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const consent = readConsent();

    if (consent) {
      setCookieSettings(consent.preferences);
    } else {
      // Sin consentimiento válido (o caducado a los 24 meses): volver a preguntar.
      setShowBanner(true);
    }
  }, []);

  // Permite reabrir el panel desde el pie de página o desde la política de cookies.
  useEffect(() => {
    const handleOpenSettings = () => {
      const consent = readConsent();
      setCookieSettings(consent ? consent.preferences : DEFAULT_PREFERENCES);
      setShowPreferences(true);
      setShowBanner(true);
    };

    // Delegación de clics: cualquier enlace con [data-cookie-settings] abre el
    // panel, aunque su componente se haya renderizado como HTML estático.
    // Sin JavaScript, el enlace lleva igualmente a la Política de Cookies.
    const handleDelegatedClick = (event) => {
      const trigger = event.target.closest?.("[data-cookie-settings]");
      if (!trigger) return;
      event.preventDefault();
      handleOpenSettings();
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    document.addEventListener("click", handleDelegatedClick);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
      document.removeEventListener("click", handleDelegatedClick);
    };
  }, []);

  const persist = useCallback((preferences) => {
    setCookieSettings(saveConsent(preferences));
    setShowPreferences(false);
    setShowBanner(false);
  }, []);

  const acceptAll = () => persist(ALL_ACCEPTED);
  const rejectAll = () => persist(ONLY_NECESSARY);
  const acceptSelected = () => persist(cookieSettings);

  const toggleCookie = (type) => {
    if (type === "necessary") return;
    setCookieSettings((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <>
        {/* Overlay: el aviso no desaparece hasta que hay una decisión expresa */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
        />

        {/* Banner principal */}
        {!showPreferences && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Configuración de cookies"
            className="fixed bottom-0 left-0 right-0 z-[101] bg-white border-t-4 border-teal-500 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto p-6 md:p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-teal-700 mb-2">
                    🍪 Cookies y dispositivos de seguimiento
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    En <strong>Clínica Barajas</strong> utilizamos cookies y dispositivos
                    de seguimiento propios y de terceros con fines analíticos, para conocer
                    de forma estadística cómo se navega por la web y mejorar nuestros
                    servicios. Salvo las cookies técnicas necesarias para el funcionamiento
                    del sitio, <strong>no se instalará ninguna cookie sin tu consentimiento
                    expreso</strong>. Puedes aceptarlas, rechazarlas o configurarlas de
                    forma granular.
                  </p>
                  <p className="text-gray-600 text-sm mt-3">
                    Más información en nuestra{" "}
                    <a
                      href="/cookies"
                      className="text-teal-600 font-semibold underline hover:text-teal-800"
                    >
                      Política de Cookies
                    </a>
                    ,{" "}
                    <a
                      href="/politica-privacidad"
                      className="text-teal-600 font-semibold underline hover:text-teal-800"
                    >
                      Política de Privacidad
                    </a>{" "}
                    y{" "}
                    <a
                      href="/aviso-legal"
                      className="text-teal-600 font-semibold underline hover:text-teal-800"
                    >
                      Aviso Legal
                    </a>
                    .
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-3 text-teal-700 border border-teal-400 rounded-lg hover:bg-teal-50 transition-colors text-sm font-semibold"
                  >
                    Configurar
                  </button>

                  <button
                    type="button"
                    onClick={rejectAll}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-semibold"
                  >
                    Rechazar todo
                  </button>

                  <button
                    type="button"
                    onClick={acceptAll}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-semibold shadow-lg"
                  >
                    Aceptar todo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Panel de configuración granular */}
        {showPreferences && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Configuración detallada de cookies"
            className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:w-[640px] md:-translate-x-1/2 z-[101] bg-white rounded-2xl shadow-2xl border border-teal-100 max-h-[85vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4 gap-4">
                <h2 className="text-2xl font-bold text-teal-700">
                  Configuración de cookies
                </h2>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  aria-label="Volver"
                  className="w-8 h-8 shrink-0 flex items-center justify-center text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Selecciona qué categorías deseas permitir. Puedes consultar el detalle de
                cada cookie, su finalidad y su duración en la{" "}
                <a
                  href="/cookies"
                  className="text-teal-600 font-semibold underline hover:text-teal-800"
                >
                  Política de Cookies
                </a>
                .
              </p>

              <div className="space-y-4">
                <CookieCategory
                  title="Cookies técnicas o necesarias"
                  description="Imprescindibles para el funcionamiento del sitio y para recordar tus preferencias de cookies. Están exceptuadas del consentimiento (art. 22.2 LSSI) y no pueden desactivarse."
                  detail="Guardan únicamente tu decisión sobre cookies en el almacenamiento local de tu navegador. No se utilizan para identificarte ni para elaborar perfiles."
                  checked
                  locked
                />

                <CookieCategory
                  title="Cookies analíticas"
                  description="Cookies de Google Analytics (_ga, _ga_*) que nos permiten medir de forma estadística el número de visitas y cómo se navega por la web, para mejorar nuestros servicios."
                  detail="Duración: 13 meses. Sólo se instalan si las aceptas aquí. Si las rechazas o retiras tu consentimiento, se eliminan de tu navegador."
                  checked={cookieSettings.analytics}
                  onToggle={() => toggleCookie("analytics")}
                />
              </div>

              <div className="mt-6 pt-4 border-t border-teal-100 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Rechazar todo
                </button>

                <button
                  type="button"
                  onClick={acceptSelected}
                  className="flex-1 px-4 py-3 border border-teal-500 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
                >
                  Guardar preferencias
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold shadow-lg"
                >
                  Aceptar todo
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Conservaremos tu decisión durante un máximo de 24 meses. Podrás
                modificarla o retirarla cuando quieras desde el enlace
                «Configuración de cookies» del pie de página.
              </p>
            </div>
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}

function CookieCategory({ title, description, detail, checked, onToggle, locked = false }) {
  return (
    <div
      className={`rounded-lg p-4 border ${
        locked ? "border-teal-200 bg-teal-50/60" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-teal-700">{title}</h3>

        {locked ? (
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-teal-700 bg-teal-100 px-2 py-1 rounded">
            Siempre activas
          </span>
        ) : (
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={`Activar o desactivar ${title}`}
            onClick={onToggle}
            className="shrink-0"
          >
            <div
              className={`w-11 h-6 rounded-full shadow-inner transition-colors ${
                checked ? "bg-teal-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                  checked ? "translate-x-[22px]" : "translate-x-0.5"
                }`}
              />
            </div>
          </button>
        )}
      </div>

      <p className="text-sm text-gray-700">{description}</p>
      {detail && <p className="text-xs text-gray-500 mt-2">{detail}</p>}
    </div>
  );
}
