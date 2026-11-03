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

  /* Guías por modelo (2026-10-01): 5 artículos por inflable. Cada uno
     apunta a la categoría del catálogo que corresponde a su intención. */
  /* Castillo Baby */
  "inflable-para-departamento-altura-techo-cdmx":          "para-interiores",
  "fiesta-de-2-anos-ideas-inflable-cdmx":                  "chicos",
  "bautizo-con-inflable-zona-infantil-cdmx":               "para-interiores",
  "inflable-para-guarderia-estancia-infantil-cdmx":        "chicos",
  "mejor-inflable-para-ninos-menores-de-3-anos":           "chicos",
  /* Dragones Rojos */
  "paquete-fiesta-dragones-rojos-o-jungla":                "medianos",
  "fiesta-de-5-anos-ideas-juegos-cdmx":                    "para-ninos",
  "fiesta-infantil-en-privada-o-condominio-cdmx":          "medianos",
  "donde-instalar-inflable-pasto-cemento-tierra":          "medianos",
  "inflables-de-1600-comparativa-dragones-jungla-gusanitos":"medianos",
  /* Castillo de Princesas */
  "fiesta-de-3-anos-ideas-inflable-cdmx":                  "castillos",
  "fiesta-de-unicornios-y-hadas-con-inflable":             "tematicos",
  "inflable-en-salon-de-fiestas-que-preguntar":            "castillos",
  "cuanto-cuesta-fiesta-de-princesas-en-casa":             "castillos",
  "castillos-inflables-comparativa-princesas-blanco-baby": "castillos",
  /* Jungla */
  "fiesta-de-dinosaurios-con-inflable-cdmx":               "tematicos",
  "fiesta-de-4-anos-ideas-inflable-cdmx":                  "para-ninos",
  "dia-del-nino-inflables-escuela-empresa-cdmx":           "para-ninos",
  "curso-de-verano-con-inflable-cdmx":                     "para-ninos",
  "jungla-o-gusanitos-cual-elegir":                        "medianos",
  /* Gusanitos */
  "inflable-bajo-techo-temporada-de-lluvias-cdmx":         "para-interiores",
  "fiesta-de-bichitos-insectos-con-inflable":              "tematicos",
  "posada-navidena-infantil-con-inflable-cdmx":            "para-ninos",
  "circuito-de-tuneles-vs-brincolin":                      "brincolines",
  "fiesta-en-patio-pequeno-con-inflable":                  "chicos",
  /* Barco Pirata */
  "fiesta-de-sirenas-y-piratas-con-inflable":              "tematicos",
  "fiesta-de-8-anos-ideas-actividades":                    "grandes",
  "reglas-de-uso-tobogan-inflable-ninos":                  "toboganes",
  "fiesta-en-quinta-o-jardin-de-eventos-edomex":           "grandes",
  "barco-pirata-o-extremo-inflables-grandes":              "grandes",
  /* Castillo Blanco */
  "primera-comunion-con-inflable-cdmx":                    "para-adultos",
  "presentacion-de-3-anos-recepcion-con-inflable":         "castillos",
  "fiesta-infantil-all-white-boho-decoracion":             "tematicos",
  "graduacion-kinder-primaria-con-inflable":               "para-adultos",
  "baby-shower-con-inflable-para-ninos-invitados":         "castillos",
  /* Extremo */
  "fiesta-de-10-anos-ideas-actividades":                   "con-obstaculos",
  "fiesta-ninja-con-circuito-de-obstaculos":               "tematicos",
  "family-day-empresa-inflables-para-hijos":               "con-obstaculos",
  "instalar-inflable-en-explanada-cancha-estacionamiento": "con-obstaculos",
  "fiesta-de-gemelos-o-hermanos-con-inflable":             "con-obstaculos",

  /* Tanda 80 — Castillo Baby */
  "castillo-baby-inflable-para-bebes-guia-completa":      "chicos",
  "brincolin-para-bebes-desde-que-edad":                  "chicos",
  "precio-renta-brincolin-para-bebes-cdmx":               "chicos",
  "castillo-inflable-pequeno-rentar-o-comprar":           "chicos",
  "alberca-de-pelotas-o-brincolin-para-bebes":            "chicos",
  "inflable-para-bebes-benito-juarez-cuauhtemoc":         "chicos",
  "inflable-para-bebes-interlomas-huixquilucan":          "chicos",
  "fiesta-de-bebe-en-invierno-inflable-bajo-techo":       "chicos",
  "reglas-seguridad-brincolin-para-bebes":                "chicos",
  "temas-primer-cumpleanos-con-castillo-baby":            "chicos",

  /* Tanda 80 — Dragones Rojos */
  "inflable-dragones-rojos-guia-completa":                "medianos",
  "inflable-con-resbaladilla-para-ninos":                 "medianos",
  "inflable-mas-rentado-cdmx-dragones-rojos":             "medianos",
  "cuanto-cuesta-rentar-inflable-de-dragones":            "medianos",
  "brincolin-de-dragon-para-cumpleanos-de-6-anos":        "medianos",
  "inflable-de-dragones-iztapalapa":                      "medianos",
  "inflable-de-dragones-ecatepec-nezahualcoyotl":         "medianos",
  "inflable-para-fiesta-en-la-calle-o-cerrada":           "medianos",
  "inflable-con-lluvia-o-viento-que-hacer":               "medianos",
  "decoracion-fiesta-de-dragones-rojo-y-dorado":          "medianos",

  /* Tanda 80 — Castillo de Princesas */
  "castillo-inflable-de-princesas-guia-completa":         "castillos",
  "brincolin-de-princesas-para-ninas-por-edad":           "castillos",
  "inflable-de-princesas-precio-renta-cdmx":              "castillos",
  "inflable-rosa-para-fiesta-de-nina":                    "castillos",
  "fiesta-spa-para-ninas-con-inflable":                   "castillos",
  "castillo-de-princesas-coyoacan":                       "castillos",
  "castillo-de-princesas-naucalpan-atizapan":             "castillos",
  "fiesta-de-7-anos-nina-ideas-castillo":                 "castillos",
  "fotos-con-inflable-de-princesas-ideas":                "castillos",
  "fiesta-de-9-anos-nina-con-inflable":                   "castillos",

  /* Tanda 80 — Jungla */
  "inflable-jungla-guia-completa":                        "medianos",
  "renta-de-inflables-de-dinosaurios":                    "medianos",
  "brincolin-de-animales-para-ninos":                     "medianos",
  "fiesta-infantil-en-parque-con-inflable":               "medianos",
  "actividades-vacaciones-de-invierno-ninos-cdmx-inflable": "medianos",
  "inflable-jungla-xochimilco-tlahuac":                   "medianos",
  "inflable-jungla-tlalnepantla":                         "medianos",
  "juegos-para-fiesta-de-animales-salvajes":              "medianos",
  "pintacaritas-de-animales-y-inflable":                  "medianos",
  "decoracion-fiesta-de-selva-globos-y-hojas":            "medianos",

  /* Tanda 80 — Gusanitos */
  "inflable-gusanitos-guia-completa":                     "con-obstaculos",
  "inflable-de-tuneles-como-juegan-los-ninos":            "con-obstaculos",
  "renta-inflable-gusanitos-precio":                      "con-obstaculos",
  "inflable-para-kermes-parroquial":                      "con-obstaculos",
  "montaje-inflable-con-mesa-y-sillas-infantiles":        "con-obstaculos",
  "inflable-gusanitos-gustavo-a-madero":                  "con-obstaculos",
  "inflable-gusanitos-cuautitlan-izcalli-tultitlan":      "con-obstaculos",
  "fiesta-arcoiris-infantil-con-inflable":                "con-obstaculos",
  "inflable-para-ninos-timidos-o-con-miedo":              "con-obstaculos",
  "inflable-para-fiesta-en-cochera":                      "con-obstaculos",

  /* Tanda 80 — Barco Pirata */
  "inflable-barco-pirata-guia-completa":                  "grandes",
  "brincolin-pirata-precio-renta":                        "grandes",
  "inflable-mas-grande-cdmx-comparativa":                 "grandes",
  "busqueda-del-tesoro-fiesta-pirata":                    "grandes",
  "inflable-barco-pirata-tlalpan":                        "grandes",
  "inflable-barco-pirata-texcoco-chalco":                 "grandes",
  "fiesta-de-11-y-12-anos-ideas":                         "grandes",
  "acceso-para-instalar-inflable-grande":                 "grandes",
  "fiesta-pirata-para-ninas-y-ninos":                     "grandes",
  "actividades-ninos-fiesta-de-fin-de-ano-familiar":      "grandes",

  /* Tanda 80 — Castillo Blanco */
  "castillo-inflable-blanco-guia-completa":               "castillos",
  "brincolin-blanco-decorado-con-globos":                 "castillos",
  "inflable-blanco-renta-cdmx-precio":                    "castillos",
  "brincolin-blanco-para-adultos":                        "castillos",
  "castillo-blanco-polanco-lomas":                        "castillos",
  "castillo-blanco-metepec-toluca":                       "castillos",
  "inflable-en-pedida-de-mano-o-compromiso":              "castillos",
  "zona-infantil-en-cena-navidena-familiar":              "castillos",
  "fotos-con-castillo-blanco-luz-y-horario":              "castillos",
  "ninos-con-ropa-de-gala-en-inflable":                   "castillos",

  /* Tanda 80 — Extremo */
  "inflable-extremo-circuito-de-obstaculos-guia":         "con-obstaculos",
  "pista-de-obstaculos-inflable-precio":                  "con-obstaculos",
  "juego-inflable-de-obstaculos-para-escuelas":           "con-obstaculos",
  "inflable-para-activacion-de-marca":                    "con-obstaculos",
  "inflable-extremo-santa-fe-alvaro-obregon":             "con-obstaculos",
  "inflable-extremo-tecamac-coacalco":                    "con-obstaculos",
  "fiesta-deportiva-infantil-con-circuito":               "con-obstaculos",
  "supervision-de-inflables-en-eventos":                  "con-obstaculos",
  "rally-familiar-con-inflable-de-obstaculos":            "con-obstaculos",
  "inflable-de-doble-carril-carreras":                    "con-obstaculos",
};
