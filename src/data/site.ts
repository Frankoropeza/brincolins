/**
 * src/data/site.ts
 * Fuente única de verdad para datos del sitio BRINCOLINS.
 * Importar desde aquí en lugar de hardcodear en componentes/páginas.
 */

export const SITE_URL   = "https://brincolins.com";
export const SITE_NAME  = "BRINCOLINS";
export const PHONE      = "55 3128 1706";
export const PHONE_TEL  = "+525531281706";   // formato tel: / schema
export const WHATSAPP   = "5531281706";
export const EMAIL      = "info@brincolins.com";
export const QUOTE_PATH = "/cotizar/";

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
