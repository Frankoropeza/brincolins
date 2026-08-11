/**
 * src/data/blogCategorias.ts
 * ──────────────────────────────────────────────────────────────
 * Mapa explícito post → categoría de inflables.
 *
 * Por qué explícito y no adivinado por keywords: 59 posts es poco para
 * automatizar y mucho para revisar dos veces. Con el mapa a la vista se
 * audita de un vistazo y se corrige un post sin tocar código.
 *
 * Cada post enlaza a UNA categoría, con el anchor exacto de esa
 * categoría (campo `anchor` de categorias.ts). Un post sin entrada aquí
 * simplemente no renderiza el bloque — no rompe el build.
 */

export const BLOG_CATEGORIA: Record<string, string> = {
  /* Catálogo general y proceso de renta → el hub de brincolines,
     que antes era una isla sin un solo enlace entrante. */
  "brincolin-vs-otras-alternativas-fiesta-infantil":       "brincolines",
  "brincolines-cdmx-precios-modelos":                      "brincolines",
  "calidad-servicio-inflables-cdmx-estandares":            "brincolines",
  "como-rentar-inflable-brincolins-proceso-paso-a-paso":   "brincolines",
  "compromiso-brincolins-valores-empresa-inflables-cdmx":  "brincolines",
  "consejos-rentar-inflable-primera-vez":                  "brincolines",
  "cuanto-cuesta-rentar-inflable-cdmx":                    "brincolines",
  "elegir-empresa-renta-inflables-profesional-cdmx":       "brincolines",
  "experiencia-20-anos-renta-inflables-cdmx":              "brincolines",
  "flota-inflables-brincolins-catalogo-modelos-cdmx":      "brincolines",
  "garantia-servicio-brincolins-renta-inflables-cdmx":     "brincolines",
  "paquetes-completos-fiesta-inflable-cdmx":               "brincolines",
  "por-que-elegir-brincolins-empresa-inflables-cdmx":      "brincolines",
  "senales-proveedor-inflables-confiable-cdmx":            "brincolines",

  /* Fiestas infantiles por edad */
  "como-elegir-inflable-fiesta-infantil":                  "para-ninos",
  "coordinacion-proveedores-fiesta-infantil-cdmx":         "para-ninos",
  "ideas-fiesta-infantil-cdmx":                            "para-ninos",
  "inflables-coloridos-fiestas-infantiles-cdmx":           "para-ninos",
  "mesa-dulces-inflable-cumpleanos-cdmx":                  "para-ninos",
  "palomita-inflable-fiesta-infantil-cdmx":                "para-ninos",
  "planear-cumpleanos-infantil-completo-cdmx":             "para-ninos",
  "seguridad-inflables-fiestas-infantiles":                "para-ninos",

  /* Castillos */
  "castillo-inflable-cumpleanos-infantil-cdmx":            "castillos",
  "fiesta-princesas-ninas-inflable-cdmx":                  "castillos",
  "renta-castillo-blanco-inflable-bodas-cdmx":             "castillos",
  "renta-castillo-princesas-inflable-cdmx":                "castillos",

  /* Tamaño */
  "brincolines-para-ninos-pequenos-cdmx":                  "chicos",
  "inflable-chico-vs-grande-cuantos-invitados-cdmx":       "chicos",
  "fiesta-infantil-jardin-inflable-cdmx":                  "grandes",
  "fiesta-jardin-exterior-inflable-mobiliario-cdmx":       "grandes",
  "garden-party-inflable-mesas-picnic-cdmx":               "grandes",
  "inflables-jardin-exterior-cdmx":                        "grandes",
  "pantalla-led-inflable-evento-cdmx":                     "grandes",
  "renta-barco-pirata-inflable-grande-cdmx":               "grandes",
  "inflable-dragones-rojos-cdmx":                          "medianos",
  "renta-inflable-gusanitos-cdmx":                         "medianos",
  "renta-inflable-jungla-cdmx":                            "medianos",

  /* Interiores */
  "inflable-pequeno-fiestas-interiores-cdmx":              "para-interiores",
  "renta-mini-castillo-inflable-bebes-cdmx":               "para-interiores",

  /* Toboganes */
  "brincolin-vs-tobogan-inflable-cdmx":                    "toboganes",
  "inflables-grandes-con-tobogan-cdmx":                    "toboganes",

  /* Obstáculos y circuitos */
  "inflable-extremo-eventos-corporativos-cdmx":            "con-obstaculos",
  "kermesse-escolar-inflables-edomex-guia":                "con-obstaculos",
  "organizar-kermesse-escolar-inflables-cdmx-checklist":   "con-obstaculos",
  "renta-pista-inflable-obstaculos-cdmx":                  "con-obstaculos",

  /* Adultos, adolescentes y eventos formales */
  "decoracion-inflable-xv-anos-cdmx":                      "para-adultos",
  "iluminacion-tecnologia-inflables-fiesta-cdmx":          "para-adultos",
  "inflable-elegante-quince-anos-cdmx":                    "para-adultos",
  "inflables-eventos-formales-cdmx":                       "para-adultos",
  "inflables-para-adolescentes-jovenes-cdmx":              "para-adultos",
  "inflables-para-adultos-eventos-corporativos":           "para-adultos",
  "renta-inflables-bodas-xv-anos":                         "para-adultos",

  /* Temáticos y decoración */
  "arcos-globos-inflable-fiesta-infantil-cdmx":            "tematicos",
  "decoracion-completa-fiesta-infantil-cdmx-globos-inflable": "tematicos",
  "decoracion-fiesta-infantil-inflable":                   "tematicos",
  "fiesta-pirata-infantil-tobogan-cdmx":                   "tematicos",
  "fiesta-tematica-safari-inflable-cdmx":                  "tematicos",
  "inflables-tematicos-infantiles-cdmx":                   "tematicos",
  "inflables-tematicos-ninas-cdmx":                        "tematicos",
};
