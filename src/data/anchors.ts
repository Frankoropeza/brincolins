/**
 * src/data/anchors.ts
 * ────────────────────────────────────────────────────────────────────────
 * Textos de ancla (anchor text) del sitio — fuente única de verdad.
 *
 * Por qué existe: los botones de las cards y los enlaces repetidos en todo
 * el sitio decían "Ver detalles", "Ver inflables", "Leer artículo" o
 * "Ver todas las zonas". Eran 1,700+ enlaces internos cuyo texto no le decía
 * a Google (ni a un lector de pantalla) a qué página llevaban. Aquí viven
 * los textos con palabra clave, por destino, para que cada componente los
 * consuma en vez de escribirlos a mano.
 *
 * Reglas de redacción:
 *  - Describen el DESTINO, no la acción ("Renta de Castillo Baby", no "Ver").
 *  - Solo afirman lo que la ficha del inflable ya dice (ver inflables.ts).
 *  - Hay variante larga (`full`, para botones anchos y listas) y corta
 *    (`short`, para espacios reducidos como footer), y así el mismo destino
 *    no repite siempre la misma frase exacta en toda la página.
 */

import { INFLABLES } from "./inflables";

export interface Anchor {
  /** Texto principal con palabra clave. */
  full: string;
  /** Variante corta para menús, footer y chips. */
  short: string;
  /** Texto para enlaces a la galería de fotos del mismo destino. */
  foto: string;
}

/* ── Inflables ───────────────────────────────────────────────────────── */
export const INFLABLE_ANCHORS: Record<string, Anchor> = {
  "mini-castillo": {
    full:  "Renta de Castillo Baby para bebés",
    short: "Castillo Baby inflable",
    foto:  "Fotos del Castillo Baby inflable",
  },
  "dragones-rojos": {
    full:  "Renta de inflable Dragones Rojos",
    short: "Brincolín Dragones Rojos",
    foto:  "Fotos del inflable Dragones Rojos",
  },
  "castillo-princesas": {
    full:  "Renta de Castillo de Princesas inflable",
    short: "Castillo inflable de Princesas",
    foto:  "Fotos del Castillo de Princesas",
  },
  "mini-jungla": {
    full:  "Renta de inflable Jungla para fiestas",
    short: "Brincolín temático Jungla",
    foto:  "Fotos del inflable Jungla",
  },
  "gusanitos": {
    full:  "Renta de inflable Gusanitos con túneles",
    short: "Circuito inflable Gusanitos",
    foto:  "Fotos del inflable Gusanitos",
  },
  "barco-pirata": {
    full:  "Renta de Barco Pirata inflable con tobogán",
    short: "Brincolín Barco Pirata",
    foto:  "Fotos del Barco Pirata inflable",
  },
  "castillo-blanco": {
    full:  "Renta de Castillo Blanco inflable para bodas y XV años",
    short: "Castillo blanco inflable",
    foto:  "Fotos del Castillo Blanco inflable",
  },
  "extremo": {
    full:  "Renta de circuito inflable Extremo",
    short: "Inflable de obstáculos Extremo",
    foto:  "Fotos del circuito inflable Extremo",
  },
};

/** Ancla de un inflable por slug. Si aparece un modelo nuevo sin entrada
    manual, se deriva del nombre del catálogo para que nunca quede "Ver". */
export function anchorInflable(slug: string): Anchor {
  const a = INFLABLE_ANCHORS[slug];
  if (a) return a;
  const name = INFLABLES.find((i) => i.slug === slug)?.name ?? slug;
  return {
    full:  `Renta de inflable ${name}`,
    short: `Inflable ${name}`,
    foto:  `Fotos del inflable ${name}`,
  };
}

/** Ancla a partir de una URL tipo /inflables/<slug>/ (cards con href). */
export function anchorInflableHref(href: string): string | undefined {
  const m = href.match(/^\/inflables\/([^/]+)\/?$/);
  return m ? anchorInflable(m[1]).full : undefined;
}

/* ── Zonas de cobertura ──────────────────────────────────────────────── */
export const anchorZona = (zona: string) => `Renta de inflables en ${zona}`;

/* ── Salones del directorio ──────────────────────────────────────────── */
export const anchorSalon = (nombre: string, zona: string) =>
  `Salón de fiestas ${nombre} en ${zona}`;

/* ── Servicios (por URL) ─────────────────────────────────────────────── */
export const SERVICIO_ANCHORS: Record<string, string> = {
  "/servicios/renta-de-inflables/":      "Servicio de renta de inflables en CDMX",
  "/servicios/paquetes-de-fiesta/":      "Paquetes de fiesta con inflables en CDMX",
  "/servicios/mobiliario-para-fiestas/": "Renta de mobiliario para fiestas en CDMX",
  "/servicios/iluminacion-eventos/":     "Iluminación para eventos y fiestas en CDMX",
  "/servicios/inflables-para-eventos/":  "Inflables para eventos corporativos y kermeses",
};

/* ── Destinos que se repiten en muchas páginas ───────────────────────── */
export const A = {
  catalogo:        { full: "Catálogo de renta de inflables en CDMX",        short: "Catálogo de inflables" },
  catalogoFiestas: { full: "Catálogo completo de inflables para fiestas",   short: "Inflables para fiestas" },
  zonas:           { full: "Zonas de cobertura de renta de inflables",      short: "Zonas de cobertura" },
  zonasCdmx:       { full: "Zonas de cobertura de inflables en CDMX",       short: "Cobertura en CDMX" },
  zonasEdomex:     { full: "Zonas de cobertura de inflables en Edomex",     short: "Cobertura en Edomex" },
  servicios:       { full: "Servicios de renta de inflables y mobiliario",  short: "Servicios para fiestas" },
  faq:             { full: "Preguntas frecuentes sobre renta de inflables", short: "Preguntas sobre inflables" },
  precios:         { full: "Precios de renta de inflables en CDMX",         short: "Precios de inflables" },
  blog:            { full: "Guías y consejos para fiestas infantiles",      short: "Blog de inflables" },
  cotizar:         { full: "Cotizar renta de inflables",                    short: "Cotizar inflable" },
  salonesCdmx:     { full: "Salones de fiestas infantiles en CDMX",         short: "Salones en CDMX" },
  salonesEdomex:   { full: "Salones de fiestas infantiles en Edomex",       short: "Salones en Edomex" },
} as const;
