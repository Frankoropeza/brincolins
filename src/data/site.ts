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

/* Ahrefs: verificación de propiedad + Web Analytics (sin cookies). */

/* ──────────────────────────────────────────────────────────────
   Perfiles públicos — sameAs del schema + enlaces del footer
   ──────────────────────────────────────────────────────────────
   PENDIENTE: pegar las URLs cuando existan los perfiles.

   Esto es lo que conecta el dominio con la entidad de negocio a
   ojos de Google. Sin `sameAs` apuntando a una ficha de Google
   Business Profile, Google no asocia brincolins.com con el negocio
   local — y el Local Pack ocupa la posición 1-2 en las cuatro
   keywords principales del nicho.

   Sólo se emiten en el HTML las entradas con URL: las cadenas
   vacías se filtran, así que no hay enlaces rotos ni sameAs vacíos.
   Ver GUIA-PRESENCIA-LOCAL.md en la raíz del repo.
   ────────────────────────────────────────────────────────────── */
export const SOCIAL_PROFILES = {
  /** Ficha de Google Business Profile (el enlace "Ver perfil de empresa"). */
  google:    "",
  facebook:  "",
  instagram: "",
  tiktok:    "",
} as const;

/** URLs no vacías, listas para `sameAs`. */
export const SAME_AS: string[] = Object.values(SOCIAL_PROFILES).filter(Boolean);

/**
 * Genera URL de WhatsApp con mensaje preformateado.
 * @param message Texto del mensaje (sin encodear)
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
