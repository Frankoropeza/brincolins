/**
 * src/data/site.ts
 * Fuente única de verdad para datos del sitio BRINCOLINS.
 * Importar desde aquí en lugar de hardcodear en componentes/páginas.
 */

export const SITE_URL   = "https://brincolins.com";
export const SITE_NAME  = "BRINCOLINS";
export const PHONE      = "55 3128 1706";
export const PHONE_TEL  = "+525531281706";   // formato tel: / schema
export const WHATSAPP   = "525531281706";  // E.164 sin "+" — WhatsApp exige código de país
export const EMAIL      = "info@brincolins.com";
export const QUOTE_PATH = "/cotizar/";

/* ──────────────────────────────────────────────────────────────
   Captura de leads — Web3Forms
   ──────────────────────────────────────────────────────────────
   PENDIENTE: pegar aquí el access key.
   Se obtiene gratis y al instante en https://web3forms.com —
   sólo hay que escribir el correo donde deben llegar los leads
   y confirmar el enlace que mandan. No requiere crear cuenta.

   Mientras esté vacío, los formularios siguen funcionando por
   WhatsApp (con confirmación en pantalla y fallback si el pop-up
   se bloquea), pero NO se guarda copia del lead en el correo.
   ────────────────────────────────────────────────────────────── */
export const WEB3FORMS_KEY      = "";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/* ──────────────────────────────────────────────────────────────
   Analítica — Google Analytics 4
   ──────────────────────────────────────────────────────────────
   PENDIENTE: pegar el Measurement ID (formato G-XXXXXXXXXX).
   Se saca en analytics.google.com → Administrar → Flujos de datos.

   Mientras esté vacío no se carga ningún script de terceros ni se
   escriben cookies, así que el sitio no necesita banner de consentimiento.
   ────────────────────────────────────────────────────────────── */
export const GA4_ID = "";

/**
 * Genera URL de WhatsApp con mensaje preformateado.
 * @param message Texto del mensaje (sin encodear)
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** URL de WhatsApp genérica para CTAs de contacto rápido */
export const WA_GENERAL = buildWhatsAppUrl(
  "Hola BRINCOLINS, quiero cotizar un inflable para mi fiesta."
);
