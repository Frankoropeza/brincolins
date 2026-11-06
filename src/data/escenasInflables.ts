/**
 * src/data/escenasInflables.ts
 * Escenas de cada modelo para el blog: el mismo inflable del catálogo en
 * distintos lugares (jardín, patio, kermés, privada, salón, empresa).
 * Viven en /img/inflables/<slug>/<slug>-<escena>.avif (1200×675).
 *
 * Consumir desde:
 *  - src/components/InflableDestacado.astro (tarjeta al final de cada post)
 *  - artículos del blog (imagen junto al enlace a la ficha)
 */

import { INFLABLES } from "./inflables";

export type Escena =
  | "jardin-casa"
  | "patio-cochera"
  | "salon-fiestas"
  | "kermes-escolar"
  | "privada-condominio"
  | "jardin-eventos"
  | "evento-empresa";

/* Lugar de cada escena, para armar el alt: "<nombre> <lugar>". */
const LUGAR: Record<Escena, string> = {
  "jardin-casa":        "instalado en el jardín de una casa en CDMX",
  "patio-cochera":      "instalado sobre lona en el patio de cemento de una casa",
  "salon-fiestas":      "instalado dentro de un salón de fiestas infantiles",
  "kermes-escolar":     "instalado en el patio de una escuela para la kermés",
  "privada-condominio": "instalado en el área verde común de una privada",
  "jardin-eventos":     "instalado en un jardín de eventos junto a las mesas de la fiesta",
  "evento-empresa":     "instalado en el área verde de unas oficinas para un día familiar de empresa",
};

/* Solo los modelos que caben bajo techo llevan escena de salón. */
const ESCENAS_EXTERIOR: Escena[] = ["jardin-casa", "patio-cochera", "kermes-escolar", "privada-condominio", "jardin-eventos", "evento-empresa"];
const ESCENAS_INTERIOR: Escena[] = ["jardin-casa", "salon-fiestas", "kermes-escolar", "privada-condominio", "jardin-eventos", "evento-empresa"];

export interface ImagenEscena {
  src: string;
  alt: string;
  escena: Escena;
}

export const ESCENAS_INFLABLES: Record<string, ImagenEscena[]> = Object.fromEntries(
  INFLABLES.map((i) => [
    i.slug,
    (i.indoor ? ESCENAS_INTERIOR : ESCENAS_EXTERIOR).map((escena) => ({
      src: `/img/inflables/${i.slug}/${i.slug}-${escena}.avif`,
      alt: `Inflable ${i.name} ${LUGAR[escena]}`,
      escena,
    })),
  ]),
);
