/**
 * Gestión centralizada del consentimiento de cookies (RGPD / LSSI art. 22.2).
 *
 * Regla principal: ninguna cookie o dispositivo de seguimiento no estrictamente
 * necesario se instala hasta que el usuario lo acepta de forma expresa.
 *
 * El script inline de `src/layouts/Layout.astro` usa la MISMA clave de
 * almacenamiento y expone `window.cbConsent` para poder aplicar el
 * consentimiento antes de que React se hidrate.
 */

export const CONSENT_STORAGE_KEY = "cb-cookie-consent";
export const CONSENT_VERSION = 2;

// La política de cookies informa de un máximo de 24 meses de conservación.
export const CONSENT_MAX_AGE_MS = 24 * 30 * 24 * 60 * 60 * 1000;

export const CONSENT_CHANGE_EVENT = "cb-consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "cb-open-cookie-settings";

/** Categorías realmente utilizadas en la web. `necessary` es siempre true. */
export const DEFAULT_PREFERENCES = {
  necessary: true,
  analytics: false,
};

/**
 * Lee el consentimiento guardado.
 * Devuelve `null` si no existe, si caducó o si la versión de la política cambió,
 * de modo que se vuelva a solicitar el consentimiento.
 */
export function readConsent() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw);
    if (!stored || stored.version !== CONSENT_VERSION) return null;

    const savedAt = Date.parse(stored.date);
    if (!Number.isFinite(savedAt)) return null;
    if (Date.now() - savedAt > CONSENT_MAX_AGE_MS) return null;

    return {
      preferences: { ...DEFAULT_PREFERENCES, ...stored.preferences, necessary: true },
      date: stored.date,
    };
  } catch {
    return null;
  }
}

/** Guarda el consentimiento, lo aplica y avisa al resto de la página. */
export function saveConsent(preferences) {
  const normalized = { ...DEFAULT_PREFERENCES, ...preferences, necessary: true };

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({
          version: CONSENT_VERSION,
          date: new Date().toISOString(),
          preferences: normalized,
        })
      );
    } catch {
      // Navegación privada o almacenamiento bloqueado: se seguirá preguntando.
    }

    applyConsent(normalized);
    window.dispatchEvent(
      new CustomEvent(CONSENT_CHANGE_EVENT, { detail: normalized })
    );
  }

  return normalized;
}

/** Borra el consentimiento para volver a mostrar el selector. */
export function clearConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // sin acción
  }
}

/** Carga o descarga los dispositivos de seguimiento según las preferencias. */
export function applyConsent(preferences) {
  if (typeof window === "undefined") return;
  window.cbConsent?.apply?.(preferences);
}

/** Abre el panel de configuración de cookies desde cualquier punto de la web. */
export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
