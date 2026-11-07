/**
 * src/data/blogCategorias.ts
 * ──────────────────────────────────────────────────────────────
 * Mapa explícito post → categoría de inflables.
 *
 * Por qué explícito y no adivinado por keywords: el blog es poco para
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
  "como-rentar-inflable-brincolins-proceso-paso-a-paso":   "brincolines",
  "elegir-empresa-renta-inflables-profesional-cdmx":       "brincolines",

  /* Fiestas infantiles por edad */
  "como-elegir-inflable-fiesta-infantil":                  "para-ninos",
  "coordinacion-proveedores-fiesta-infantil-cdmx":         "para-ninos",
  "ideas-fiesta-infantil-cdmx":                            "para-ninos",
  "mesa-dulces-inflable-cumpleanos-cdmx":                  "para-ninos",
  "palomita-inflable-fiesta-infantil-cdmx":                "para-ninos",
  "planear-cumpleanos-infantil-completo-cdmx":             "para-ninos",
  "seguridad-inflables-fiestas-infantiles":                "para-ninos",

  /* Castillos */
  "fiesta-princesas-ninas-inflable-cdmx":                  "castillos",

  /* Tamaño */
  "fiesta-jardin-exterior-inflable-mobiliario-cdmx":       "grandes",
  "pantalla-led-inflable-evento-cdmx":                     "grandes",

  /* Interiores */

  /* Toboganes */
  "brincolin-vs-tobogan-inflable-cdmx":                    "toboganes",

  /* Obstáculos y circuitos */
  "organizar-kermesse-escolar-inflables-cdmx-checklist":   "con-obstaculos",

  /* Adultos, adolescentes y eventos formales */
  "decoracion-inflable-xv-anos-cdmx":                      "para-adultos",
  "inflables-eventos-formales-cdmx":                       "para-adultos",
  "inflables-para-adultos-eventos-corporativos":           "para-adultos",

  /* Temáticos y decoración */
  "arcos-globos-inflable-fiesta-infantil-cdmx":            "tematicos",
  "decoracion-completa-fiesta-infantil-cdmx-globos-inflable": "tematicos",
  "fiesta-pirata-infantil-tobogan-cdmx":                   "tematicos",
  "fiesta-tematica-safari-inflable-cdmx":                  "tematicos",

  /* Guías por modelo (2026-10-01): 5 artículos por inflable. Cada uno
     apunta a la categoría del catálogo que corresponde a su intención. */
  /* Castillo Baby */
  "inflable-para-departamento-altura-techo-cdmx":          "para-interiores",
  "fiesta-de-2-anos-ideas-inflable-cdmx":                  "chicos",
  "bautizo-con-inflable-zona-infantil-cdmx":               "para-interiores",
  "inflable-para-guarderia-estancia-infantil-cdmx":        "chicos",
  "mejor-inflable-para-ninos-menores-de-3-anos":           "chicos",
  /* Dragones Rojos */
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
  "castillo-inflable-pequeno-rentar-o-comprar":           "chicos",
  "fiesta-primer-cumpleanos-con-inflable":            "chicos",

  /* Tanda 80 — Dragones Rojos */
  "fiesta-de-6-anos-ideas-inflable":        "medianos",
  "fiesta-de-dragones-y-caballeros-ideas":          "medianos",

  /* Tanda 80 — Castillo de Princesas */
  "fiesta-spa-para-ninas-con-inflable":                   "castillos",
  "fiesta-de-7-anos-nina-ideas-castillo":                 "castillos",
  "fiesta-de-9-anos-nina-con-inflable":                   "castillos",

  /* Tanda 80 — Jungla */
  "fiesta-infantil-en-parque-con-inflable":               "medianos",

  /* Tanda 80 — Gusanitos */
  "inflable-para-ninos-timidos-o-con-miedo":              "con-obstaculos",

  /* Tanda 80 — Barco Pirata */
  "fiesta-de-11-y-12-anos-ideas":                         "grandes",

  /* Tanda 80 — Castillo Blanco */
  "inflable-en-pedida-de-mano-o-compromiso":              "castillos",

  /* Tanda 80 — Extremo */
  "inflable-para-activacion-de-marca":                    "con-obstaculos",

  /* Contenido geo 2026-11 — guías de planeación (horario, lugar, clima,
     temporada, presupuesto). Categoría según la intención del lector. */
  "horario-fiesta-infantil-cuantas-horas-inflable":       "para-ninos",
  "inflable-en-azotea-que-revisar-cdmx":                  "chicos",
  "cuanta-luz-consume-un-inflable-contacto-extension":    "para-interiores",
  "dia-de-reyes-fiesta-infantil-con-inflable":            "castillos",
  "fiesta-infantil-en-invierno-al-aire-libre-cdmx":       "para-interiores",
  "cuando-reservar-inflable-temporadas-cdmx":             "brincolines",
  "fiesta-infantil-con-poco-presupuesto-cdmx":            "medianos",
  "salon-de-fiestas-o-fiesta-en-casa-cdmx":               "para-interiores",

  /* Contenido profesional 2026-11: guías de referencia (juegos, checklist,
     presupuesto total, temáticas y medidas). Categoría según la intención. */
  "juegos-para-fiesta-infantil-ideas-por-edad":           "para-ninos",
  "lista-de-cosas-para-fiesta-infantil-checklist":        "para-ninos",
  "cuanto-cuesta-una-fiesta-infantil-cdmx-presupuesto":   "medianos",
  "tematicas-fiesta-infantil-tendencias-2027":            "tematicos",
  "medidas-de-inflables-para-fiestas-tabla":              "para-interiores",
  "normas-de-seguridad-juegos-inflables":                  "para-ninos",
  "como-se-limpia-y-sanitiza-un-inflable":                 "brincolines",
  "cuanta-comida-por-nino-fiesta-infantil":                "para-ninos",
  "ideas-de-fiesta-por-edad-1-a-12-anos":                  "para-ninos",

  /* Tanda 2026-11-05 — 20 guías nuevas: temáticas, temporada, eventos
     familiares y planeación. Categoría según la intención del lector. */
  "fiesta-de-superheroes-con-inflable":                    "tematicos",
  "fiesta-de-futbol-infantil-con-inflable":                "con-obstaculos",
  "fiesta-del-espacio-astronautas-con-inflable":           "tematicos",
  "fiesta-de-carros-de-carreras-con-inflable":             "con-obstaculos",
  "fiesta-de-halloween-infantil-con-inflable":             "tematicos",
  "fiesta-mexicana-infantil-con-inflable":                 "para-ninos",
  "fiesta-de-granja-animales-con-inflable":                "chicos",
  "fiesta-de-bomberos-y-oficios-con-inflable":             "con-obstaculos",
  "fiesta-de-13-a-15-anos-adolescentes-ideas":             "para-adultos",
  "fiesta-para-adultos-con-zona-infantil-inflable":        "para-ninos",
  "reunion-familiar-carne-asada-con-inflable":             "medianos",
  "fiesta-infantil-inclusiva-ninos-con-autismo":           "para-interiores",
  "invitaciones-fiesta-infantil-cuando-enviar":            "para-ninos",
  "cuantos-ninos-invitar-a-una-fiesta-infantil":           "grandes",
  "bolsitas-y-recuerdos-fiesta-infantil-ideas":            "para-ninos",
  "pinata-fiesta-infantil-tamano-y-reglas":                "para-ninos",
  "pastel-fiesta-infantil-porciones-y-tamanos":            "para-ninos",
  "musica-para-fiesta-infantil-playlist-por-edad":         "para-ninos",
  "fiesta-infantil-sustentable-sin-plasticos":             "brincolines",
  "cuidar-el-pasto-antes-y-despues-de-un-inflable":        "medianos",

  /* Tanda 2026-11-06 — 10 guías con keyword medida en Ahrefs MX. */
  "pijamada-infantil-con-inflable-ideas":                  "para-interiores",
  "fiesta-neon-infantil-con-inflable":                     "para-adultos",
  "fiesta-hawaiana-infantil-con-inflable":                 "tematicos",
  "fiesta-charra-y-vaquera-infantil-con-inflable":         "tematicos",
  "comida-para-fiesta-infantil-menu-ideas":                "para-ninos",
  "mesa-de-snacks-y-postres-fiesta-infantil":              "para-ninos",
  "centros-de-mesa-para-cumpleanos-infantil":              "castillos",
  "donde-festejar-cumpleanos-de-ninos-cdmx":               "grandes",
  "trampolin-para-ninos-comprar-o-rentar-inflable":        "brincolines",
  "que-ropa-llevar-a-una-fiesta-infantil-con-inflable":    "para-ninos",

  /* Tanda 2026-11-07 — 80 guías de mesas de dulces × inflables (5 por
     servicio). Categoría = la del primer inflable que recomienda cada guía. */
  /* cumpleanos-infantil */
  "golosinas-para-mesa-de-dulces-fiesta-infantil":       "medianos",
  "mesa-de-dulces-sencilla-para-cumpleanos":             "medianos",
  "ideas-mesa-de-dulces-tematica-infantil":              "medianos",
  "mesa-de-dulces-para-3-anos":                          "chicos",
  "mesa-de-dulces-para-cumpleanos-adultos":              "con-obstaculos",
  /* bautizo */
  "mesa-de-dulces-para-bautizo-economica":               "para-interiores",
  "mesa-de-dulces-para-bautizo-nina":                    "chicos",
  "mesa-de-dulces-para-bautizo-nino":                    "para-adultos",
  "centros-de-mesa-para-bautizo-con-dulces":             "chicos",
  "como-decorar-mesa-de-dulces-para-bautizo":            "para-interiores",
  /* baby-shower */
  "mesa-de-dulces-baby-shower-nina-sencilla":            "chicos",
  "mesa-de-dulces-baby-shower-nino-sencilla":            "para-interiores",
  "que-lleva-una-mesa-de-dulces-para-baby-shower":       "chicos",
  "centros-de-mesa-para-baby-shower-con-dulces":         "castillos",
  "ideas-mesa-de-dulces-baby-shower-tematicas":          "para-interiores",
  /* primera-comunion */
  "centros-de-mesa-primera-comunion-con-dulces":         "para-adultos",
  "mesa-de-dulces-primera-comunion-nina":                "para-adultos",
  "mesa-de-dulces-primera-comunion-nino":                "grandes",
  "mesa-de-dulces-elegante-primera-comunion":            "para-adultos",
  "mesa-de-postres-para-primera-comunion":               "para-adultos",
  /* xv-anos */
  "mesa-de-dulces-para-15-anos-economica":               "para-adultos",
  "mesa-de-dulces-juvenil-quinceanera":                  "con-obstaculos",
  "centros-de-mesa-con-dulces-para-15-anos":             "para-adultos",
  "mesa-de-dulces-xv-anos-por-color":                    "para-adultos",
  "mesa-de-dulces-para-xv-anos-100-personas":            "para-adultos",
  /* boda */
  "mesa-de-dulces-para-boda-civil":                      "para-adultos",
  "mesa-de-dulces-vintage-para-boda":                    "para-adultos",
  "mesa-de-dulces-para-boda-economica":                  "para-adultos",
  "centros-de-mesa-con-dulces-para-boda":                "para-adultos",
  "que-dulces-lleva-una-mesa-de-dulces-para-boda":       "para-adultos",
  /* fuente-de-chocolate */
  "chocolate-para-fuente-de-chocolate":                  "castillos",
  "que-poner-en-una-fuente-de-chocolate":                "castillos",
  "como-funciona-una-fuente-de-chocolate":               "medianos",
  "mini-fuente-de-chocolate-comprar-o-rentar":           "castillos",
  "fresas-con-chocolate-para-fiesta":                    "castillos",
  /* fuente-de-chamoy */
  "que-es-una-chamoyada":                                "medianos",
  "chamoyada-de-mango-para-fiesta":                      "medianos",
  "frutas-con-chamoy-para-fiesta":                       "medianos",
  "dulces-mexicanos-picantes":                           "medianos",
  "gomitas-con-chamoy-para-fiesta":                      "medianos",
  /* pared-de-dulces */
  "que-lleva-un-candy-bar":                              "castillos",
  "candy-bar-facil-y-economico":                         "medianos",
  "candy-bar-para-boda":                                 "para-adultos",
  "carrito-candy-bar":                                   "castillos",
  "backdrop-para-fotos-mesa-de-dulces":                  "castillos",
  /* stand-para-pastel */
  "pastel-para-bautizo":                                 "chicos",
  "pastel-para-primera-comunion":                        "para-adultos",
  "pastel-de-xv-anos-por-invitados":                     "para-adultos",
  "pastel-para-boda-civil":                              "para-adultos",
  "mesa-de-pastel-decoracion":                           "castillos",
  /* mesa-de-frutas */
  "mesa-de-frutas-sencilla":                             "medianos",
  "mesa-de-frutas-para-fiesta-infantil":                 "medianos",
  "centros-de-mesa-con-frutas":                          "medianos",
  "mesa-de-frutas-y-botanas":                            "medianos",
  "mesa-de-fruta-para-fiesta-cuanta-fruta":              "grandes",
  /* mesa-de-postres */
  "mini-postres-para-mesa-de-dulces":                    "castillos",
  "mesa-de-postres-para-boda":                           "para-adultos",
  "mesa-de-postres-para-15-anos":                        "para-adultos",
  "mesa-de-postres-sencilla":                            "castillos",
  "mesa-de-postres-para-baby-shower":                    "chicos",
  /* mesa-de-quesos */
  "tabla-de-quesos-y-carnes-frias":                      "con-obstaculos",
  "tabla-de-quesos-sencilla":                            "para-interiores",
  "que-lleva-una-tabla-de-quesos":                       "para-adultos",
  "tabla-de-quesos-y-vino":                              "para-adultos",
  "que-es-charcuteria":                                  "con-obstaculos",
  /* mesa-de-botanas */
  "botanas-para-fiesta":                                 "medianos",
  "botanas-mexicanas-para-fiestas":                      "medianos",
  "mesa-de-botanas-para-adultos":                        "con-obstaculos",
  "mesa-de-botanas-sencilla":                            "medianos",
  "botanas-para-el-15-de-septiembre":                    "medianos",
  /* mesa-de-dulces-mexicanos */
  "dulces-tipicos-mexicanos":                            "medianos",
  "lista-de-dulces-mexicanos":                           "medianos",
  "dulces-mexicanos-antiguos":                           "para-adultos",
  "centros-de-mesa-mexicanos-con-dulces":                "medianos",
  "dulces-navidenos-mexicanos":                          "para-interiores",
  /* mesa-de-donas-y-cupcakes */
  "donas-decoradas":                                     "castillos",
  "mini-donas-mesa-de-donas":                            "para-interiores",
  "cupcakes-de-cumpleanos":                              "medianos",
  "pastel-de-cupcakes":                                  "chicos",
  "cupcakes-navidenos":                                  "para-interiores",
};
