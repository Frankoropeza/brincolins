/**
 * Grupos de enlaces del sidebar que se repiten en todas las plantillas
 * (fichas, categorías y las que se sumen). Cada plantilla arma sus
 * grupos propios y agrega estos al final.
 */
import { SERVICIO_ANCHORS, A } from "@/data/anchors";

export const grupoServicios = () => ({
  titulo: "Completa tu fiesta",
  enlaces: Object.entries(SERVICIO_ANCHORS).map(([href, label]) => ({ href, label })),
});

export const grupoReservar = () => ({
  titulo: "Antes de reservar",
  enlaces: [
    { href: "/precios/", label: A.precios.full },
    { href: "/renta-de-inflables-cerca-de-mi/", label: "Renta de inflables cerca de mí" },
    { href: "/preguntas-frecuentes/", label: A.faq.full },
    { href: "/politica-de-cancelacion/", label: "Política de cancelación" },
  ],
});
