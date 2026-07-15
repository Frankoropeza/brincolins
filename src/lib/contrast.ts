/**
 * src/lib/contrast.ts
 * ────────────────────────────────────────────────────────────────────────
 * Utilidades de contraste WCAG 2.1 calculadas en BUILD (cero JS en cliente).
 *
 * Por qué existe: BRINCOLINS asigna colores de marca por categoría desde
 * datos (`catColors` en BlogCard, `color` en QuickNav, categorías del
 * catálogo). Esos colores se pintaban con texto blanco fijo, y varios daban
 * menos de 4.5:1 — el peor caso medido fue blanco sobre el verde WhatsApp
 * #25D366: 1.98:1.
 *
 * Oscurecer los fondos volvería marrones los colores vivos de una marca de
 * fiestas infantiles. En su lugar se elige el color de TEXTO según la
 * luminancia del fondo, o se ajusta un color de texto lo mínimo necesario.
 *
 * Ventaja principal: cualquier color que se añada a los datos en el futuro
 * queda cubierto automáticamente. No hay que acordarse de comprobarlo.
 *
 * Referencia: WCAG 2.1 SC 1.4.3 (Contrast Minimum) — 4.5:1 texto normal,
 * 3:1 texto grande (≥18.66px bold o ≥24px) y componentes de UI.
 */

/** Texto oscuro para fondos claros de alta saturación (verdes, naranjas, amarillos). */
export const TEXT_DARK = "#111B21";

/** Luminancia relativa según la fórmula de WCAG 2.1. */
export function relLuminance(hex: string): number {
  const h = hex.replace("#", "").trim();
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** Ratio de contraste entre dos colores hex. Devuelve un número entre 1 y 21. */
export function contrast(a: string, b: string): number {
  const [l1, l2] = [relLuminance(a), relLuminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * Devuelve el color de texto (blanco o TEXT_DARK) con mejor contraste sobre `bg`.
 * Úsalo cuando el fondo viene de datos y no se puede predecir.
 */
export function textOn(bg: string): string {
  return contrast("#FFFFFF", bg) >= contrast(TEXT_DARK, bg) ? "#FFFFFF" : TEXT_DARK;
}

/**
 * Oscurece `fg` progresivamente —conservando el tono— hasta alcanzar `target`
 * de contraste sobre `bg`. Si ya lo cumple, lo devuelve intacto.
 *
 * Úsalo para colores de marca usados como TEXTO sobre fondos claros, donde
 * cambiar a blanco/negro perdería la identidad de la categoría.
 */
export function ensureContrast(fg: string, bg: string, target = 4.5): string {
  if (contrast(fg, bg) >= target) return fg;
  const h = fg.replace("#", "").trim();
  let [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  const bgIsLight = relLuminance(bg) > 0.5;
  for (let i = 0; i < 100; i++) {
    // Sobre fondo claro se oscurece; sobre fondo oscuro se aclara.
    const k = bgIsLight ? 0.96 : 1.05;
    r = Math.max(0, Math.min(255, Math.round(r * k)));
    g = Math.max(0, Math.min(255, Math.round(g * k)));
    b = Math.max(0, Math.min(255, Math.round(b * k)));
    const c = `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
    if (contrast(c, bg) >= target) return c;
    if (!bgIsLight && r === 255 && g === 255 && b === 255) return c;
    if (bgIsLight && r === 0 && g === 0 && b === 0) return c;
  }
  return fg;
}
