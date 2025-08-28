import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Tipos de cookies
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Siempre activas
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Verificar si ya se dio consentimiento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    setCookieSettings(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
    
    // Aquí activarías tus scripts (Google Analytics, etc.)
    console.log('Cookies aceptadas:', allAccepted);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookieSettings));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowPreferences(false);
    
    // Activar solo las cookies seleccionadas
    console.log('Configuración guardada:', cookieSettings);
  };

  const rejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    setCookieSettings(minimal);
    localStorage.setItem('cookie-consent', JSON.stringify(minimal));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const toggleCookie = (type) => {
    if (type !== 'necessary') {
      setCookieSettings(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Banner Principal */}
          {!showPreferences && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-teal-500 shadow-2xl"
            >
              <div className="max-w-6xl mx-auto p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Contenido */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">
                      🍪 Política de Cookies
                    </h3>
                    <p className="text-teal-600 text-sm md:text-base leading-relaxed">
                      En <strong>Clínica Barajas</strong> utilizamos cookies para mejorar tu experiencia de navegación, 
                      analizar nuestro tráfico y personalizar el contenido. 
                      <a href="/politica-privacidad" className="text-teal-500 font-semibold hover:underline ml-1">
                        Más información
                      </a>
                    </p>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-4 py-2 text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors text-sm font-medium"
                    >
                      Configurar
                    </button>
                    
                    <button
                      onClick={rejectAll}
                      className="px-4 py-2 text-teal-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      Solo Necesarias
                    </button>
                    
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-semibold shadow-lg hover:shadow-xl"
                    >
                      Aceptar Todo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Panel de Preferencias */}
          {showPreferences && (
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:w-[600px] md:-translate-x-1/2 z-50 bg-white rounded-2xl shadow-2xl border border-teal-100 max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-teal-700">
                    Configuración de Cookies
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="w-8 h-8 flex items-center justify-center text-teal-500 hover:bg-teal-50 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Tipos de Cookies */}
                <div className="space-y-4">
                  {/* Necesarias */}
                  <div className="border border-teal-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-teal-700">Cookies Necesarias</h4>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={cookieSettings.necessary}
                          disabled
                          className="sr-only"
                        />
                        <div className="w-10 h-5 bg-teal-500 rounded-full shadow-inner">
                          <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-teal-600">
                      Esenciales para el funcionamiento básico del sitio web. Siempre activas.
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-teal-700">Cookies Analíticas</h4>
                      <button
                        onClick={() => toggleCookie('analytics')}
                        className="relative"
                      >
                        <div className={`w-10 h-5 rounded-full shadow-inner transition-colors ${
                          cookieSettings.analytics ? 'bg-teal-500' : 'bg-gray-300'
                        }`}>
                          <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                            cookieSettings.analytics ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                    <p className="text-sm text-teal-600">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                    </p>
                  </div>

                  {/* Marketing */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-teal-700">Cookies de Marketing</h4>
                      <button
                        onClick={() => toggleCookie('marketing')}
                        className="relative"
                      >
                        <div className={`w-10 h-5 rounded-full shadow-inner transition-colors ${
                          cookieSettings.marketing ? 'bg-teal-500' : 'bg-gray-300'
                        }`}>
                          <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                            cookieSettings.marketing ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                    <p className="text-sm text-teal-600">
                      Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.
                    </p>
                  </div>

                  {/* Funcionales */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-teal-700">Cookies Funcionales</h4>
                      <button
                        onClick={() => toggleCookie('functional')}
                        className="relative"
                      >
                        <div className={`w-10 h-5 rounded-full shadow-inner transition-colors ${
                          cookieSettings.functional ? 'bg-teal-500' : 'bg-gray-300'
                        }`}>
                          <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                            cookieSettings.functional ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                    <p className="text-sm text-teal-600">
                      Permiten funcionalidades mejoradas y personalización (chat, formularios, etc.).
                    </p>
                  </div>
                </div>

                {/* Botones del Panel */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-teal-100">
                  <button
                    onClick={rejectAll}
                    className="flex-1 px-4 py-2 text-teal-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Solo Necesarias
                  </button>
                  
                  <button
                    onClick={acceptSelected}
                    className="flex-1 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Guardar Preferencias
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}