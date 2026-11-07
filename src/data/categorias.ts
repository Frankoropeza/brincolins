/**
 * src/data/categorias.ts
 * ──────────────────────────────────────────────────────────────
 * Fuente única de verdad de las CATEGORÍAS de inflables.
 *
 * Por qué existe (ago 2026):
 * El sitio tenía 8 fichas de producto excelentes colgando de un solo
 * catálogo plano. Los competidores que se llevan el tráfico (cocoy,
 * pelotinas) tienen páginas PEORES —512 palabras, sin precios, sin
 * schema— pero organizadas en categorías. Ganan por arquitectura, no
 * por calidad. Este archivo es esa arquitectura.
 *
 * Reglas:
 *  - Un inflable vive en 3-5 categorías a la vez (solapamiento deliberado).
 *  - Cada categoría tiene FAQs EXCLUSIVAS. Nada de repetir el bloque global.
 *  - Los datos duros (precio, medidas, edades) NUNCA se escriben aquí:
 *    salen de inflables.ts. Aquí sólo va el contenido editorial.
 *  - Cada categoría ataca UNA keyword distinta (rev. 2026-11-04):
 *      brincolines  = término genérico/coloquial y precio ("renta/costo de brincolines")
 *      para-ninos   = por edad ("renta de inflables para niños")
 *      medianos     = por tamaño y precio ($1,600–$1,800)
 *      para-adultos = "renta de brincolines para adultos"
 *
 * Consumir desde:
 *  - src/components/CategoriaInflables.astro
 *  - src/components/FacetasInflables.astro
 *  - src/pages/inflables/index.astro (hub)
 *  - src/pages/inflables/<categoria>/index.astro
 */

import { INFLABLES, BADGE, type Inflable } from "@/data/inflables";

export type GrupoFaceta = "tamano" | "tipo" | "publico";

export interface CategoriaFaq {
  question: string;
  answer:   string;
}

export interface CategoriaEnlace {
  /** Ruta interna absoluta, con barra final */
  href:   string;
  /** Anchor descriptivo */
  anchor: string;
}

export interface CategoriaZona {
  /** Slug de src/data/coverage.ts (/cobertura/<slug>/) */
  slug:   string;
  /** Por qué la categoría encaja en esa zona (una frase) */
  motivo: string;
}

export interface Categoria {
  /** Slug de URL: /inflables/<slug>/ — NO puede coincidir con un slug de producto */
  slug:        string;
  /** Etiqueta corta para el bloque de facetas y breadcrumbs */
  nav:         string;
  /** Nombre completo de la categoría */
  name:        string;
  /** Badge del hero */
  badge:       string;
  h1:          string;
  title:       string;
  description: string;
  /** Keyword objetivo principal — la que debe aparecer en el anchor interno */
  keyword:     string;
  /** Anchor exacto que deben usar los enlaces internos hacia esta categoría */
  anchor:      string;
  /** Respuesta directa a la intención (40-60 palabras): qué incluye, precio, edades/espacio */
  respuesta:   string;
  /** 3-5 viñetas "Puntos clave" tras la respuesta directa */
  puntosClave: string[];
  /** 2 párrafos de intro (80-120 palabras en total) */
  intro:       [string, string];
  /** Título del bloque guía */
  guiaTitle:   string;
  /** Subtítulo del bloque guía */
  guiaSub:     string;
  /** 2 párrafos de criterio real de elección (200-300 palabras) */
  guia:        [string, string];
  /** Frase propia de la categoría para el bloque "Qué incluye la renta" */
  incluyeNota: string;
  /** 3-5 guías del blog relacionadas */
  guias:       CategoriaEnlace[];
  /** 3-5 zonas de /cobertura/ donde la categoría encaja */
  zonas:       CategoriaZona[];
  /** Slugs de inflables que lista esta categoría, en el orden en que se muestran */
  productos:   string[];
  /** FAQs exclusivas de esta categoría */
  faqs:        CategoriaFaq[];
  grupo:       GrupoFaceta;
  prioridad:   1 | 2 | 3;
  /** Color del sistema de tarjetas (product-card--<color>) */
  color:       string;
  /** Imagen representativa para la tarjeta del hub */
  image:       string;
}

export const CATEGORIAS: Categoria[] = [
  /* ─────────────────── P1 ─────────────────── */
  {
    slug: "para-ninos",
    nav:  "Para niños",
    name: "Inflables para Niños",
    badge: "Por edad",
    h1:   "Renta de inflables para niños: el modelo correcto para cada edad",
    title: "Renta de inflables para niños por edad: desde $1,400",
    description: "Inflables para niños de 1 a 10 años, de $1,400 a $1,800 por evento, con instalación, motor y recolección. Elige por edad y espacio y cotiza por WhatsApp.",
    keyword: "renta de inflables para niños",
    anchor:  "inflables para niños",
    respuesta: "Rentamos cinco inflables para niños en CDMX y Estado de México, ordenados por edad: el Castillo Baby para 1 a 3 años y cuatro modelos con resbaladilla o túneles para 2 a 10 años. Cuestan de $1,400 a $1,800 por evento, con instalación, motor inflador y recolección incluidos.",
    puntosClave: [
      "De 1 a 3 años: Castillo Baby ($1,400), único con paredes bajas y sin resbaladilla.",
      "De 2 a 10 años: Dragones Rojos, Jungla, Gusanitos ($1,600) y Castillo de Princesas ($1,800).",
      "Castillo Baby y Gusanitos se pueden instalar bajo techo; los demás van al aire libre.",
      "Para fiestas con niños de 11 y 12 años conviene revisar los inflables grandes.",
    ],
    intro: [
      "Elegimos los inflables para niños por etapa: de los 12 meses a los 10 años hay cinco modelos, y cada uno cambia la altura de las paredes, la resbaladilla y el tipo de juego según la edad a la que va dirigido.",
      "El error más común al rentar un inflable infantil es elegir por diseño y no por edad. Un niño de 3 años no aprovecha un tobogán alto, y un grupo de 9 años se aburre rápido en un castillo para bebés. Por eso esta página ordena el catálogo por rango de edad antes que por temática.",
    ],
    guiaTitle: "Qué inflable elegir según la edad de tu hijo",
    guiaSub:   "La edad del festejado decide el modelo antes que el tema.",
    guia: [
      "De 1 a 3 años el criterio es la contención, no la emoción: el Castillo Baby tiene paredes bajas, no tiene resbaladilla y permite que un adulto vigile de cerca. Es el modelo indicado para primer y segundo cumpleaños, donde varios invitados todavía no caminan con seguridad. De 3 a 8 años funcionan mejor Dragones Rojos y Jungla, que combinan área de salto con resbaladilla corta y mallas laterales.",
      "Cuando la fiesta mezcla edades, por ejemplo primos de 4 y de 10 años, el mejor resultado no lo da el inflable más grande sino el que reparte a los niños. Gusanitos, de 2 a 8 años, combina túnel de entrada, zona de brinco y resbaladilla doble, y el Castillo de Princesas cubre de 2 a 10 años con resbaladilla integrada. Si la mayoría de los invitados pasa de 8 años, revisa los inflables grandes, recomendados de 3 a 12 años.",
    ],
    incluyeNota: "En fiestas con bebés y niños pequeños dejamos el inflable listo antes de que lleguen los invitados y te explicamos las reglas de uso para el adulto que supervisa.",
    guias: [
      { href: "/blog/ideas-de-fiesta-por-edad-1-a-12-anos/", anchor: "ideas de fiesta por edad, de 1 a 12 años" },
      { href: "/blog/mejor-inflable-para-ninos-menores-de-3-anos/", anchor: "el mejor inflable para niños menores de 3 años" },
      { href: "/blog/juegos-para-fiesta-infantil-ideas-por-edad/", anchor: "juegos para fiesta infantil según la edad" },
      { href: "/blog/seguridad-inflables-fiestas-infantiles/", anchor: "seguridad de inflables en fiestas infantiles" },
    ],
    zonas: [
      { slug: "coyoacan", motivo: "Cumpleaños familiares en casas con patio o jardín." },
      { slug: "tlalpan", motivo: "Jardines donde caben los modelos con resbaladilla." },
      { slug: "magdalena-contreras", motivo: "Fiestas infantiles en casa, con o sin espacio techado." },
      { slug: "tultitlan", motivo: "Áreas comunes de fraccionamiento para fiestas de niños." },
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Desde qué edad puede un niño usar un inflable?", answer: "Desde los 12 meses, en un modelo de paredes bajas y con un adulto vigilando todo el tiempo. El Castillo Baby es el único del catálogo pensado para 1 a 3 años. Los modelos con resbaladilla se recomiendan a partir de los 2 o 3 años, según la ficha de cada uno." },
      { question: "¿Pueden brincar juntos niños de edades muy distintas?", answer: "Sí, pero conviene separarlos por turnos cuando la diferencia de edad es grande, porque el rebote desequilibra a los más chicos. Un turno para pequeños y otro para grandes evita empujones. En fiestas mixtas recomendamos Gusanitos: los niños entran por el túnel, brincan y bajan por la resbaladilla doble, así que el grupo se reparte a lo largo de sus 5 m." },
      { question: "¿Qué inflable conviene para un niño de 5 o 6 años?", answer: "Dragones Rojos y Jungla, ambos de 3 a 8 años y con resbaladilla corta, son los más pedidos en esa edad. Si la fiesta es de niña y tiene temática, el Castillo de Princesas cubre de 2 a 10 años. Los tres requieren espacio al aire libre." },
      { question: "¿Necesito a alguien que cuide a los niños en el inflable?", answer: "Sí. Nosotros entregamos, instalamos y recogemos, pero durante la fiesta un adulto de tu evento debe estar atento al área de salto. Es un requisito de seguridad, no un servicio adicional." },
      { question: "¿Qué pasa si llueve el día de la fiesta infantil?", answer: "Un inflable no debe usarse con lluvia porque la lona se vuelve resbalosa. Si el pronóstico es malo, avísanos y reprogramamos la fecha sin costo. Si ya está instalado, se apaga hasta que pase la lluvia." },
      { question: "¿Hay un inflable para niños que quepa bajo techo?", answer: "Sí, dos: el Castillo Baby, con altura libre requerida de 3.2 m según su ficha, y Gusanitos, cuya instalación en interiores se confirma según la altura del lugar al cotizar. Los otros tres modelos para niños son de exterior. Mándanos la altura del techo por WhatsApp antes de apartar." },
    ],
    grupo: "publico",
    prioridad: 1,
    color: "castillo",
    image: "/img/inflables/dragones-rojos.avif",
  },
  {
    slug: "castillos",
    nav:  "Castillos",
    name: "Castillos Inflables",
    badge: "Por tipo",
    h1:   "Renta de castillos inflables: Baby, Princesas y Castillo Blanco",
    title: "Renta y alquiler de castillos inflables desde $1,400",
    description: "Alquiler de castillos inflables en CDMX y Edomex: Castillo Baby, de Princesas y Blanco para XV años, de $1,400 a $2,600 con instalación. Cotiza hoy.",
    keyword: "renta de castillos inflables",
    anchor:  "castillos inflables",
    respuesta: "Rentamos tres castillos inflables en CDMX y Estado de México: el Castillo Baby ($1,400) para 1 a 3 años, el Castillo de Princesas ($1,800) para 2 a 10 años y el Castillo Blanco ($2,600) para bodas, bautizos y XV años. Todos incluyen instalación, motor inflador, sanitización y recolección.",
    puntosClave: [
      "Tres castillos, tres eventos distintos: primer cumpleaños, fiesta temática de niña y evento formal.",
      "El Castillo Baby es el único que se instala bajo techo.",
      "Princesas y Blanco traen resbaladilla integrada; el Baby no, por seguridad.",
      "Precios de $1,400 a $2,600 por evento; traslado según zona.",
    ],
    intro: [
      "Un castillo inflable es el formato clásico: torres, almenas y área de salto cerrada con mallas. Tenemos tres castillos en renta y cada uno cubre un tipo de evento, desde el primer cumpleaños hasta una boda.",
      "La diferencia entre ellos no es sólo el tamaño. El Castillo Baby cabe bajo techo, el Castillo de Princesas está construido alrededor de una temática infantil y el Castillo Blanco es un modelo neutro para eventos formales donde el inflable no debe romper la decoración.",
    ],
    guiaTitle: "Cómo elegir entre los tres castillos",
    guiaSub:   "Espacio disponible, edad de los invitados y tipo de evento.",
    guia: [
      "El primer filtro es el espacio. El Castillo Baby mide 2.5×2×2 m y pide 3.2 m de altura libre, así que funciona en patios chicos y salones. El Castillo de Princesas mide 5×3.30×3 m y el Castillo Blanco 5×7×4 m; ambos son de exterior y necesitan 4.2 m y 4.7 m de altura libre, respectivamente. Mide antes de elegir: el margen alrededor del inflable es lo que permite anclarlo con seguridad.",
      "El segundo filtro es el tono del evento. Para un cumpleaños de niña el Castillo de Princesas gana por temática: torres decorativas, colores rosa y turquesa y resbaladilla integrada. Para bodas, bautizos y XV años el Castillo Blanco se integra con la decoración en lugar de competir con ella. Si los invitados son bebés, el Castillo Baby no tiene sustituto: sus paredes bajas permiten vigilar a todos desde afuera.",
    ],
    incluyeNota: "En bodas y XV años coordinamos con tu organizador el horario de montaje para que el Castillo Blanco quede listo antes de la recepción.",
    guias: [
      { href: "/blog/castillos-inflables-comparativa-princesas-blanco-baby/", anchor: "comparativa de castillos inflables: Princesas, Blanco y Baby" },
      { href: "/blog/fiesta-princesas-ninas-inflable-cdmx/", anchor: "ideas para una fiesta de princesas con inflable" },
      { href: "/blog/decoracion-inflable-xv-anos-cdmx/", anchor: "cómo integrar un inflable en la decoración de XV años" },
      { href: "/blog/castillo-inflable-pequeno-rentar-o-comprar/", anchor: "castillo inflable pequeño: rentar o comprar" },
    ],
    zonas: [
      { slug: "polanco", motivo: "Eventos formales y jardines residenciales para el Castillo Blanco." },
      { slug: "huixquilucan", motivo: "Bautizos y XV años en casas con jardín." },
      { slug: "alvaro-obregon", motivo: "Fiestas de princesas en jardines de casa." },
      { slug: "metepec", motivo: "Celebraciones familiares en jardín de eventos." },
    ],
    productos: ["mini-castillo", "castillo-princesas", "castillo-blanco"],
    faqs: [
      { question: "¿Cuánto cuesta el alquiler de un castillo inflable?", answer: "El Castillo Baby cuesta $1,400, el Castillo de Princesas $1,800 y el Castillo Blanco $2,600 por evento. Incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona. Si necesitas factura se agrega el 16% de IVA." },
      { question: "¿Cuál castillo inflable cabe en un patio chico?", answer: "El Castillo Baby, que mide 2.5×2×2 m y necesita 3.2 m de altura libre. El Castillo de Princesas y el Castillo Blanco son más grandes y sólo se instalan en exteriores. Mándanos las medidas del patio y confirmamos antes de apartar." },
      { question: "¿El Castillo Blanco sirve para XV años y bodas?", answer: "Para eso está pensado: es el único modelo del catálogo en color neutro, sin personajes infantiles. Se integra con la decoración de bodas, bautizos y XV años donde hay niños invitados. Su capacidad se confirma al cotizar." },
      { question: "¿Los castillos inflables traen resbaladilla?", answer: "El Castillo de Princesas y el Castillo Blanco incluyen resbaladilla integrada. El Castillo Baby no la tiene, porque para niños de 1 a 3 años una resbaladilla suma riesgo sin sumar diversión." },
      { question: "¿Se puede anclar un castillo inflable sobre loseta o pasto artificial?", answer: "Sí. Sobre pasto natural anclamos con estaca y sobre loseta, cemento o pasto artificial usamos contrapesos. Dinos el tipo de piso al cotizar para llevar el anclaje correcto." },
    ],
    grupo: "tipo",
    prioridad: 1,
    color: "princesas",
    image: "/img/inflables/castillo-princesas.avif",
  },
  {
    slug: "grandes",
    nav:  "Grandes",
    name: "Inflables Grandes",
    badge: "Por tamaño",
    h1:   "Renta de inflables grandes: Barco Pirata, Extremo y Castillo Blanco",
    title: "Renta de inflables grandes: precios de $2,300 a $2,600",
    description: "Precio de inflables grandes en CDMX: Barco Pirata $2,300, Extremo $2,500 y Castillo Blanco $2,600, con instalación y recolección. Revisa medidas y cotiza.",
    keyword: "renta de inflables grandes",
    anchor:  "inflables grandes",
    respuesta: "Los inflables grandes que rentamos son el Barco Pirata ($2,300), el circuito Extremo ($2,500) y el Castillo Blanco ($2,600). Miden de 6 a 8 metros de largo, son sólo para exteriores y se recomiendan de 3 a 12 años. El precio incluye instalación, motor inflador, sanitización y recolección.",
    puntosClave: [
      "Precios de $2,300 a $2,600 por evento; traslado según zona.",
      "Necesitan entre 4.5 y 5.2 m de altura libre: jardín, campo o explanada.",
      "Convienen cuando hay muchos invitados y un inflable mediano obligaría a turnos cortos.",
      "Toma de 110 V a menos de 20 m del área de instalación.",
    ],
    intro: [
      "Los inflables grandes son el Barco Pirata, el circuito Extremo y el Castillo Blanco. Se rentan cuando la lista de invitados es larga y los turnos en un inflable mediano se volverían demasiado cortos.",
      "Ninguno de los tres entra bajo techo. Antes de cotizar conviene medir el jardín, el patio o el campo donde se va a instalar y revisar que no haya cables, ramas ni toldos encima.",
    ],
    guiaTitle: "Cómo saber si un inflable grande cabe en tu evento",
    guiaSub:   "Metros libres, altura, acceso y toma de corriente.",
    guia: [
      "Empieza por las medidas. El Barco Pirata mide 6×3.5×3.80 m y pide 5.2 m de altura libre; el Extremo mide 8×4.5×3.50 m y pide 4.5 m; el Castillo Blanco mide 5×7×4 m y pide 4.7 m. Cables de luz, ramas bajas y toldos son el obstáculo que más aparece a última hora, y se resuelve mirando hacia arriba antes de apartar la fecha.",
      "Después revisa el acceso y la corriente. El inflable llega enrollado, así que necesitamos un paso de al menos 90 cm de ancho y un recorrido sin escaleras largas hasta el punto de instalación. Si el evento es en azotea o en un jardín al que sólo se llega por escaleras, avísanos al cotizar. La toma de 110 V debe quedar a menos de 20 metros, porque el motor trabaja todo el evento.",
    ],
    incluyeNota: "Para los modelos grandes llegamos con tiempo suficiente: el montaje toma de 15 a 30 minutos una vez que el área está despejada.",
    guias: [
      { href: "/blog/barco-pirata-o-extremo-inflables-grandes/", anchor: "Barco Pirata o Extremo: cuál inflable grande elegir" },
      { href: "/blog/instalar-inflable-en-explanada-cancha-estacionamiento/", anchor: "instalar un inflable en explanada, cancha o estacionamiento" },
      { href: "/blog/fiesta-en-quinta-o-jardin-de-eventos-edomex/", anchor: "fiesta en quinta o jardín de eventos" },
      { href: "/blog/cuanta-luz-consume-un-inflable-contacto-extension/", anchor: "cuánta luz consume un inflable y qué extensión usar" },
    ],
    zonas: [
      { slug: "chalco", motivo: "Patios y terrenos amplios para modelos de 6 a 8 m." },
      { slug: "texcoco", motivo: "Quintas y jardines de eventos al aire libre." },
      { slug: "ecatepec", motivo: "Explanadas y eventos con muchos invitados." },
      { slug: "atizapan", motivo: "Jardines residenciales donde cabe un modelo grande." },
    ],
    productos: ["castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Cuál es el precio de un inflable grande?", answer: "El Barco Pirata cuesta $2,300, el Extremo $2,500 y el Castillo Blanco $2,600 por evento. Incluyen instalación, motor inflador, sanitización y recolección. El traslado depende de la zona y la factura suma 16% de IVA." },
      { question: "¿Cuál es el inflable más grande que rentan?", answer: "Por largo, el Extremo: 8×4.5 m de pista. Por altura, el Castillo Blanco, de 4 m. El Barco Pirata es el que pide más altura libre, 5.2 m, por su mástil y su tobogán." },
      { question: "¿Cuántos niños aguanta un inflable grande al mismo tiempo?", answer: "La capacidad se confirma al cotizar según el modelo y la edad de los invitados. En el Extremo los niños pasan por turnos en cada carril, lo que ordena la fila. Si hay muchos invitados, organizar turnos por edad funciona mejor que llenar el inflable." },
      { question: "¿Puedo rentar dos inflables grandes para el mismo evento?", answer: "Sí, es común en kermeses y eventos de empresa. Cada inflable necesita su propia toma de 110 V y su área libre, así que hay que medir el espacio sumado. Cotiza los dos juntos por WhatsApp para revisar la logística." },
      { question: "¿Qué pasa si el inflable grande no cabe el día del evento?", answer: "Por eso pedimos medidas y fotos antes de apartar: confirmamos que el modelo cabe con su margen de seguridad. Si el espacio cambia de última hora, buscamos contigo un modelo que sí quepa." },
    ],
    grupo: "tamano",
    prioridad: 1,
    color: "pirata",
    image: "/img/inflables/barco-pirata.avif",
  },
  {
    slug: "para-adultos",
    nav:  "Para adultos",
    name: "Inflables para Adultos y Adolescentes",
    badge: "Por público",
    h1:   "Renta de brincolines para adultos y adolescentes",
    title: "Renta de brincolines para adultos: desde $2,300",
    description: "Brincolines para adultos y adolescentes: Extremo, Barco Pirata y Castillo Blanco, de $2,300 a $2,600 con instalación. Para empresas, kermeses y XV años.",
    keyword: "renta de brincolines para adultos",
    anchor:  "inflables para adultos",
    respuesta: "Sólo tres de nuestros inflables admiten adolescentes y adultos: el circuito Extremo ($2,500), el Barco Pirata ($2,300) y el Castillo Blanco ($2,600). Se rentan para eventos de empresa, kermeses, XV años y bodas, siempre con turnos y supervisión. El precio incluye instalación, motor inflador, sanitización y recolección.",
    puntosClave: [
      "Tres modelos aptos para adultos: Extremo, Barco Pirata y Castillo Blanco.",
      "Precios de $2,300 a $2,600 por evento; traslado según zona.",
      "Son de exterior: requieren de 4.5 a 5.2 m de altura libre.",
      "Peso y capacidad por turno se confirman al cotizar.",
    ],
    intro: [
      "No todos los inflables aguantan adultos. De nuestro catálogo, sólo el circuito Extremo, el Barco Pirata y el Castillo Blanco se rentan para adolescentes y adultos, con turnos y un responsable en el inflable.",
      "Se piden sobre todo para kermeses escolares, eventos de empresa, XV años y fiestas donde los invitados grandes acaban usando el inflable tanto como los niños.",
    ],
    guiaTitle: "Cómo elegir un brincolín para adultos",
    guiaSub:   "Competencia, tono del evento y espacio al aire libre.",
    guia: [
      "Si buscas competencia, el modelo es el Extremo. Sus 8 metros de pista con obstáculos terminan en un tobogán de doble carril, lo que permite carreras cabeza a cabeza y convierte el inflable en una actividad con reglas. Es el que mejor funciona en eventos de empresa y kermeses, porque genera público alrededor y turnos naturales.",
      "Si el evento es formal, como una boda o unos XV años, el Castillo Blanco es la opción sensata: su diseño neutro no compite con la decoración. El Barco Pirata queda en medio: es el de mayor impacto en fotos y funciona en fiestas al aire libre con grupos mixtos. Los tres exigen un adulto supervisando, turnos sin calzado y un límite de personas que se confirma al cotizar.",
    ],
    incluyeNota: "Para eventos de empresa y kermeses podemos emitir factura (se agrega 16% de IVA) y coordinamos el montaje con el horario de tu evento.",
    guias: [
      { href: "/blog/inflables-para-adultos-eventos-corporativos/", anchor: "inflables para adultos en eventos corporativos" },
      { href: "/blog/family-day-empresa-inflables-para-hijos/", anchor: "family day de empresa con inflables" },
      { href: "/blog/organizar-kermesse-escolar-inflables-cdmx-checklist/", anchor: "checklist para organizar una kermés con inflables" },
      { href: "/blog/normas-de-seguridad-juegos-inflables/", anchor: "normas de seguridad para juegos inflables" },
    ],
    zonas: [
      { slug: "cuajimalpa", motivo: "Eventos de empresa y family day en la zona de Santa Fe." },
      { slug: "miguel-hidalgo", motivo: "Eventos corporativos y celebraciones formales." },
      { slug: "azcapotzalco", motivo: "Kermeses escolares y eventos en explanadas." },
      { slug: "toluca", motivo: "Eventos de empresa y escolares en espacios abiertos." },
    ],
    productos: ["extremo", "barco-pirata", "castillo-blanco"],
    faqs: [
      { question: "¿Qué brincolines aguantan adultos?", answer: "El Extremo, el Barco Pirata y el Castillo Blanco son los tres modelos que rentamos para adolescentes y adultos. Los demás inflables del catálogo son sólo para niños. El peso máximo y el número de personas por turno se confirman al cotizar." },
      { question: "¿Cuánto cuesta rentar un brincolín para adultos?", answer: "De $2,300 a $2,600 por evento: Barco Pirata $2,300, Extremo $2,500 y Castillo Blanco $2,600. Incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona." },
      { question: "¿Se puede usar un inflable en una kermés escolar?", answer: "Sí, es uno de los usos más frecuentes del Extremo y del Barco Pirata. Recomendamos turnos por grupo o por grado y un adulto encargado de cada inflable." },
      { question: "¿Sirven para eventos de empresa o team building?", answer: "El Extremo es el más contratado para eso: el doble carril permite armar torneos por equipos sin necesidad de facilitador. Si tu evento requiere varios inflables, los cotizamos juntos." },
      { question: "¿Puedo rentar un brincolín para adultos en un departamento?", answer: "No. Los tres modelos aptos para adultos necesitan de 4.5 a 5.2 m de altura libre, así que sólo se instalan en exteriores. Para espacios techados revisa los inflables para interiores, que son infantiles." },
      { question: "¿Qué reglas deben seguir los adultos dentro del inflable?", answer: "Sin zapatos, sin lentes ni objetos en los bolsillos, sin bebidas y sin mezclar adultos con niños pequeños en el mismo turno. Un responsable controla cuántas personas entran a la vez." },
    ],
    grupo: "publico",
    prioridad: 1,
    color: "extremo",
    image: "/img/inflables/extremo.avif",
  },

  /* ─────────────────── P2 ─────────────────── */
  {
    slug: "chicos",
    nav:  "Chicos",
    name: "Inflables Pequeños",
    badge: "Por tamaño",
    h1:   "Renta de inflables chicos para patios y espacios reducidos",
    title: "Renta de inflables chicos para patios: desde $1,400",
    description: "Inflables chicos para patios, terrazas y fiestas de pocos niños: Castillo Baby $1,400 y Gusanitos $1,600, con instalación. Mándanos tus medidas y cotiza.",
    keyword: "renta de inflables chicos",
    anchor:  "inflables pequeños",
    respuesta: "Para espacios reducidos rentamos dos inflables chicos: el Castillo Baby ($1,400), de 2.5×2×2 m para niños de 1 a 3 años, y Gusanitos ($1,600), de 5×3×2.80 m para 2 a 8 años. Ambos se instalan bajo techo (el Castillo Baby con 3.2 m de altura libre; en Gusanitos la altura se confirma al cotizar) e incluyen instalación y recolección.",
    puntosClave: [
      "Castillo Baby: el inflable más compacto y económico del catálogo.",
      "Gusanitos: forma alargada para patios largos, pasillos de jardín o salones.",
      "Los dos funcionan en interiores: Castillo Baby con 3.2 m de altura libre; Gusanitos, según la altura del lugar al cotizar.",
      "Ideales para fiestas de pocos invitados o patios de casa.",
    ],
    intro: [
      "Los inflables chicos resuelven el problema del espacio: el Castillo Baby y Gusanitos funcionan en patios pequeños, terrazas y salones donde un modelo grande no cabe.",
      "También son la opción lógica para fiestas de pocos invitados. Con un grupo reducido, un inflable grande no mejora la fiesta: sólo encarece la renta y complica la instalación.",
    ],
    guiaTitle: "Cómo elegir un inflable chico",
    guiaSub:   "La forma del espacio y la edad deciden entre los dos.",
    guia: [
      "El Castillo Baby mide 2.5×2×2 m y es el más fácil de acomodar: entra en un patio cuadrado, una terraza techada o la sala de una casa con techo alto. Su rango es de 1 a 3 años, así que es el modelo para primeros cumpleaños. Si tus invitados tienen 7 años, se les quedará chico pronto.",
      "Gusanitos resuelve el caso contrario: un espacio largo y angosto. Con 5×3×2.80 m, cabe en pasillos de jardín, patios rectangulares y estacionamientos, y funciona con niños de 2 a 8 años. Entre los dos cubren casi todas las fiestas chicas: uno por edad mínima y el otro por forma del terreno. Si tu espacio es amplio y cuadrado, compara con los inflables medianos antes de decidir.",
    ],
    incluyeNota: "Si el acceso es angosto, por escaleras o elevador, dínoslo al cotizar: los modelos chicos son los más fáciles de subir y llegan enrollados.",
    guias: [
      { href: "/blog/fiesta-en-patio-pequeno-con-inflable/", anchor: "fiesta en patio pequeño con inflable" },
      { href: "/blog/fiesta-primer-cumpleanos-con-inflable/", anchor: "primer cumpleaños con inflable" },
      { href: "/blog/fiesta-infantil-en-privada-o-condominio-cdmx/", anchor: "fiesta infantil en privada o condominio" },
      { href: "/blog/inflable-en-azotea-que-revisar-cdmx/", anchor: "qué revisar antes de poner un inflable en la azotea" },
    ],
    zonas: [
      { slug: "benito-juarez", motivo: "Patios, terrazas y áreas comunes de edificio." },
      { slug: "iztacalco", motivo: "Patios de casa donde un modelo compacto es la opción." },
      { slug: "venustiano-carranza", motivo: "Fiestas en casa con espacio limitado." },
      { slug: "nezahualcoyotl", motivo: "Patios y cocheras para fiestas de pocos niños." },
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Cuál es el inflable más chico que rentan?", answer: "El Castillo Baby: 2.5×2×2 m y 3.2 m de altura libre. Es el más económico del catálogo, $1,400 por evento, y el único pensado para niños de 1 a 3 años." },
      { question: "¿Cabe un inflable en una cochera o patio pequeño?", answer: "En muchos casos sí, sobre todo el Castillo Baby. Gusanitos entra si el espacio es alargado. Mándanos por WhatsApp largo, ancho y altura del lugar y te confirmamos antes de apartar." },
      { question: "¿Un inflable chico es más barato?", answer: "Sí: el Castillo Baby cuesta $1,400 y Gusanitos $1,600. El servicio es el mismo que en los modelos grandes: instalación, motor inflador, sanitización y recolección; el traslado depende de la zona." },
      { question: "¿Cuántos niños caben en un inflable chico?", answer: "La capacidad se confirma al cotizar según la edad de los niños. Si esperas muchos invitados brincando al mismo tiempo, conviene un modelo mediano o grande en lugar de turnos muy largos." },
      { question: "¿Qué inflable chico conviene para niños de 4 a 8 años?", answer: "Gusanitos, recomendado de 2 a 8 años. Su túnel, zona de brinco y resbaladilla doble mantienen ocupados a niños más grandes que el Castillo Baby, que está pensado para 1 a 3 años." },
    ],
    grupo: "tamano",
    prioridad: 2,
    color: "castillo",
    image: "/img/inflables/mini-castillo.avif",
  },
  {
    slug: "toboganes",
    nav:  "Toboganes",
    name: "Toboganes y Resbaladillas Inflables",
    badge: "Por tipo",
    h1:   "Renta de toboganes inflables: Barco Pirata, Extremo y Jungla",
    title: "Renta de toboganes inflables: desde $1,600 en CDMX",
    description: "Toboganes inflables en renta: Jungla $1,600, Barco Pirata $2,300 y Extremo $2,500, con instalación, motor y recolección. Compara alturas y cotiza tu fecha.",
    keyword: "renta de toboganes inflables",
    anchor:  "toboganes inflables",
    respuesta: "Rentamos tres inflables con tobogán en CDMX y Estado de México: la Jungla ($1,600) con resbaladilla corta para 3 a 8 años, el Barco Pirata ($2,300) con tobogán por la popa y el Extremo ($2,500) con tobogán de doble carril, ambos para 3 a 12 años. Todos son de exterior.",
    puntosClave: [
      "Precios de $1,600 a $2,500 por evento, con instalación y recolección.",
      "Jungla para niños pequeños; Barco Pirata y Extremo para 3 a 12 años.",
      "Los tres son de exterior: piden de 4.2 a 5.2 m de altura libre.",
      "Uso en seco: no se usan con agua ni con lluvia.",
    ],
    intro: [
      "Un tobogán inflable cambia la dinámica de la fiesta: en lugar de saltar en un mismo punto, los niños hacen fila, suben y bajan, y se forma un circuito que se sostiene solo durante horas.",
      "Los tres modelos son de exterior. El tobogán es justamente lo que sube la altura del inflable por encima de un techo estándar, así que para un salón cerrado esta no es la categoría.",
    ],
    guiaTitle: "Cómo elegir un tobogán inflable",
    guiaSub:   "Altura de bajada, tipo de juego y edad mínima.",
    guia: [
      "El Barco Pirata tiene el tobogán más vistoso del catálogo: baja por la popa desde un inflable de 3.80 m de alto y pide 5.2 m de altura libre, así que necesita jardín o campo abierto. Es el que más fila genera y el que más aparece en fotos. Está recomendado de 3 a 12 años, siempre con un niño a la vez en la bajada.",
      "El Extremo termina en un tobogán de doble carril, pensado para competir: dos niños bajan al mismo tiempo después de recorrer los obstáculos. La Jungla, en cambio, integra una resbaladilla corta dentro del área de salto, ideal para niños de 3 a 8 años que todavía no manejan una bajada alta. Elegir entre los tres es elegir altura y tipo de juego.",
    ],
    incluyeNota: "Al instalar un tobogán dejamos despejada la zona de salida y explicamos al adulto responsable la regla de un niño por carril.",
    guias: [
      { href: "/blog/brincolin-vs-tobogan-inflable-cdmx/", anchor: "brincolín o tobogán inflable: diferencias" },
      { href: "/blog/reglas-de-uso-tobogan-inflable-ninos/", anchor: "reglas de uso del tobogán inflable para niños" },
      { href: "/blog/fiesta-pirata-infantil-tobogan-cdmx/", anchor: "fiesta pirata infantil con tobogán" },
      { href: "/blog/donde-instalar-inflable-pasto-cemento-tierra/", anchor: "dónde instalar un inflable: pasto, cemento o tierra" },
    ],
    zonas: [
      { slug: "xochimilco", motivo: "Jardines y terrenos abiertos para modelos altos." },
      { slug: "tlahuac", motivo: "Patios amplios al aire libre." },
      { slug: "coacalco", motivo: "Áreas comunes de fraccionamiento sin techo." },
      { slug: "tecamac", motivo: "Fiestas en jardín con espacio para un tobogán." },
    ],
    productos: ["mini-jungla", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Cuánto cuesta rentar un tobogán inflable?", answer: "La Jungla cuesta $1,600, el Barco Pirata $2,300 y el Extremo $2,500 por evento. Incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona." },
      { question: "¿Qué altura libre necesita un tobogán inflable?", answer: "Según la ficha de cada modelo: Jungla 4.2 m, Extremo 4.5 m y Barco Pirata 5.2 m. Mide del piso a la rama, cable o toldo más bajo sobre el área de instalación." },
      { question: "¿A partir de qué edad se puede usar un tobogán inflable?", answer: "La Jungla, con resbaladilla corta, se recomienda de 3 a 8 años. El Barco Pirata y el Extremo, de 3 a 12 años, siempre que el niño pueda subir por su cuenta." },
      { question: "¿Los toboganes inflables se usan con agua?", answer: "No. Nuestros modelos son de uso en seco: mojar la lona vuelve peligroso el frenado. Tampoco se usan con lluvia; si el pronóstico es malo, reprogramamos sin costo." },
      { question: "¿Cuántos niños pueden bajar al mismo tiempo?", answer: "Uno por carril, esperando a que el anterior salga de la zona de llegada. El Extremo tiene doble carril, así que permite dos bajadas a la vez; en el Barco Pirata baja un niño a la vez." },
    ],
    grupo: "tipo",
    prioridad: 2,
    color: "jungla",
    image: "/img/inflables/mini-jungla.avif",
  },
  {
    slug: "para-interiores",
    nav:  "Para interiores",
    name: "Inflables para Interiores y Salones",
    badge: "Bajo techo",
    h1:   "Renta de inflables para interiores: los 2 modelos que caben en un salón",
    title: "Renta de inflables para interiores: desde $1,400",
    description: "Inflables para salón o espacio techado: Castillo Baby $1,400 y Gusanitos $1,600, con instalación incluida. Revisa altura libre y requisitos.",
    keyword: "renta de inflables para interiores",
    anchor:  "inflables para interiores",
    respuesta: "Sólo dos de nuestros inflables se instalan bajo techo: el Castillo Baby ($1,400), para 1 a 3 años, y Gusanitos ($1,600), para 2 a 8 años. El Castillo Baby necesita 3.2 m de altura libre; en Gusanitos la altura se confirma al cotizar. Ambos piden un acceso de 90 cm y una toma de 110 V a menos de 20 m. Incluyen instalación y recolección.",
    puntosClave: [
      "Altura libre: 3.2 m para el Castillo Baby; en Gusanitos se confirma al cotizar. Se mide al punto más bajo del techo.",
      "Anclaje con contrapesos: nunca perforamos el piso.",
      "Acceso mínimo de 90 cm; el inflable llega enrollado.",
      "Precios de $1,400 y $1,600 por evento; traslado según zona.",
    ],
    intro: [
      "De los ocho modelos del catálogo, sólo el Castillo Baby y Gusanitos son aptos para interiores. Funcionan en salones de fiestas, terrazas techadas y casas con techo alto.",
      "Es la primera pregunta de quien celebra en salón, y aquí está respondida con números: altura libre, ancho de acceso, tipo de piso y corriente necesaria para instalar un inflable bajo techo.",
    ],
    guiaTitle: "Requisitos para instalar un inflable bajo techo",
    guiaSub:   "Altura libre, acceso, piso y toma de corriente.",
    guia: [
      "La altura libre es el primer filtro. Se mide del piso al punto más bajo del techo en el área de instalación, descontando lámparas colgantes, ventiladores, ductos y trabes. El Castillo Baby pide 3.2 m según su ficha; en Gusanitos se confirma según la altura del lugar al cotizar. Si tu salón tiene techo más bajo, mándanos la medida antes de reservar y te decimos si es viable.",
      "Después vienen el acceso, el piso y la corriente. El inflable necesita una puerta de al menos 90 cm y un recorrido sin escalones estrechos. El piso debe estar seco y sin objetos punzantes; como en interiores no se estaca, anclamos con contrapesos. La toma de 110 V debe quedar a menos de 20 metros y conviene no compartirla con el equipo de sonido.",
    ],
    incluyeNota: "En salones de fiestas coordinamos con el encargado del lugar el horario de acceso y el punto de corriente antes del día del evento.",
    guias: [
      { href: "/blog/inflable-para-departamento-altura-techo-cdmx/", anchor: "inflable para departamento: qué altura de techo necesitas" },
      { href: "/blog/inflable-en-salon-de-fiestas-que-preguntar/", anchor: "qué preguntar al salón antes de llevar un inflable" },
      { href: "/blog/inflable-bajo-techo-temporada-de-lluvias-cdmx/", anchor: "inflable bajo techo en temporada de lluvias" },
      { href: "/blog/salon-de-fiestas-o-fiesta-en-casa-cdmx/", anchor: "salón de fiestas o fiesta en casa" },
    ],
    zonas: [
      { slug: "cuauhtemoc", motivo: "Departamentos y salones donde se celebra bajo techo." },
      { slug: "miguel-hidalgo", motivo: "Terrazas techadas y salones de eventos." },
      { slug: "gustavo-a-madero", motivo: "Salones de fiestas infantiles." },
      { slug: "tlalnepantla", motivo: "Salones y espacios techados para fiestas." },
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Qué altura de techo necesito para un inflable en interiores?", answer: "3.2 m de altura libre para el Castillo Baby, según su ficha; en Gusanitos se confirma según la altura del lugar al cotizar. Se mide al punto más bajo del techo, descontando lámparas, ventiladores y trabes." },
      { question: "¿Pasa el inflable por una puerta estándar?", answer: "Sí. Llega desinflado y enrollado y necesita un acceso de al menos 90 cm. Avísanos si hay escaleras, pasillos con vuelta cerrada o elevadores pequeños, porque cambian el tiempo de montaje." },
      { question: "¿Cómo se ancla un inflable si no se puede estacar el piso?", answer: "Con contrapesos, que forman parte del equipo de instalación. En loseta, cemento o duela nunca perforamos el piso. El margen alrededor del inflable se respeta igual que en exteriores." },
      { question: "¿Cuánto ruido hace el motor dentro de un salón?", answer: "El motor trabaja de forma continua y en un espacio cerrado se nota más que al aire libre. Lo colocamos lo más lejos posible de las mesas y del área de sonido." },
      { question: "¿Mi salón de fiestas permite inflables?", answer: "Depende del salón: algunos tienen reglas sobre horarios de montaje o puntos de corriente. Pregunta al encargado antes de apartar y comparte con nosotros sus condiciones para confirmar la instalación." },
    ],
    grupo: "publico",
    prioridad: 2,
    color: "castillo",
    image: "/img/inflables/gusanitos.avif",
  },
  {
    slug: "brincolines",
    nav:  "Brincolines",
    name: "Brincolines Clásicos",
    badge: "Clásicos",
    h1:   "Renta de brincolines en CDMX: precios y los 8 modelos",
    title: "Renta de brincolines en CDMX: precios desde $1,400",
    description: "¿Cuánto cuesta un brincolín? Renta de $1,400 a $2,600 por evento con instalación, motor y recolección. Compara los 8 modelos y aparta por WhatsApp.",
    keyword: "renta de brincolines",
    anchor:  "renta de brincolines",
    respuesta: "La renta de un brincolín en CDMX y Estado de México cuesta de $1,400 a $2,600 por evento, según el modelo. Incluye instalación, motor inflador, sanitización y recolección para una fiesta de 4 a 6 horas; el traslado se cotiza según zona. Tenemos 8 modelos, para 1 a 12 años.",
    puntosClave: [
      "Precio por evento: $1,400 a $2,600; factura +16% de IVA.",
      "Se aparta con 50% de anticipo; el resto se liquida el día del evento.",
      "Reprogramación sin costo si llueve.",
      "Atención por WhatsApp de lunes a domingo, de 8:00 a 20:00.",
    ],
    intro: [
      "Brincolín, inflable o castillo: en México todos nombran lo mismo. Aquí están los ocho brincolines que rentamos en CDMX y Estado de México, con precio, medidas y edad recomendada de cada uno.",
      "Si ya sabes qué buscas, entra por categoría: tamaño, tipo o público. Si todavía no lo tienes claro, esta es la vista general con todos los modelos comparados y los costos de renta a la vista.",
    ],
    guiaTitle: "Cómo elegir un brincolín para tu fiesta",
    guiaSub:   "Tres decisiones en orden: espacio, edad y número de invitados.",
    guia: [
      "El orden importa. Primero mide el espacio: es el único dato que no puedes cambiar y el que descarta modelos de inmediato. Anota largo, ancho y la altura libre si el evento es bajo techo o hay cables y ramas encima. Con esas medidas te confirmamos qué brincolín cabe antes de que apartes.",
      "Segundo, la edad de la mayoría de los invitados: de 1 a 3 años el Castillo Baby; de 2 a 10 años los modelos medianos; de 3 a 12 años el Barco Pirata, el Extremo y el Castillo Blanco. Tercero, el número de niños que brincarán al mismo tiempo, que no es el total de invitados. Con esas tres respuestas la elección suele reducirse a dos modelos, y a partir de ahí decide la temática.",
    ],
    incluyeNota: "El costo publicado es el precio de renta por evento; lo único que cambia según tu dirección es el traslado.",
    guias: [
      { href: "/blog/cuanto-cuesta-una-fiesta-infantil-cdmx-presupuesto/", anchor: "cuánto cuesta una fiesta infantil en CDMX" },
      { href: "/blog/como-rentar-inflable-brincolins-proceso-paso-a-paso/", anchor: "cómo rentar un brincolín paso a paso" },
      { href: "/blog/medidas-de-inflables-para-fiestas-tabla/", anchor: "tabla de medidas de inflables para fiestas" },
      { href: "/blog/cuando-reservar-inflable-temporadas-cdmx/", anchor: "con cuánta anticipación reservar un inflable" },
      { href: "/blog/como-se-limpia-y-sanitiza-un-inflable/", anchor: "cómo se limpia y sanitiza un inflable" },
    ],
    zonas: [
      { slug: "cdmx", motivo: "Las 16 alcaldías de la Ciudad de México." },
      { slug: "edomex", motivo: "Municipios conurbados del Estado de México." },
      { slug: "iztapalapa", motivo: "Fiestas en casa, patios y calles cerradas." },
      { slug: "naucalpan", motivo: "Jardines y áreas comunes de fraccionamiento." },
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos", "castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Cuánto cuesta rentar un brincolín?", answer: "De $1,400 a $2,600 por evento: Castillo Baby $1,400; Dragones Rojos, Jungla y Gusanitos $1,600; Castillo de Princesas $1,800; Barco Pirata $2,300; Extremo $2,500 y Castillo Blanco $2,600. El traslado se cotiza según tu zona." },
      { question: "¿Qué incluye la renta de un brincolín?", answer: "Entrega, instalación, motor inflador, sanitización antes del evento y recolección al terminar. El precio es neto: si necesitas factura se agrega el 16% de IVA." },
      { question: "¿Cuánto tiempo dura la renta de un brincolín?", answer: "La renta cubre un evento de 4 a 6 horas. Llegamos antes para instalar y recogemos al terminar. Si necesitas más horas, cotiza la extensión por WhatsApp antes de apartar." },
      { question: "¿Cuál es la diferencia entre un brincolín y un inflable?", answer: "En la práctica, ninguna: en México se usan como sinónimos, junto con castillo inflable. Un brincolín de resorte, con estructura metálica, es otro producto que no rentamos. Todo nuestro catálogo es de inflables con motor de aire continuo." },
      { question: "¿Cómo aparto un brincolín?", answer: "Escríbenos por WhatsApp con fecha, dirección y modelo. Se aparta con 50% de anticipo y el resto se paga el día del evento. Respondemos de lunes a domingo, de 8:00 a 20:00." },
      { question: "¿Qué necesito tener listo el día de la instalación?", answer: "Un área plana y despejada, sin vidrio ni objetos punzantes, una toma de 110 V a menos de 20 metros y un adulto que supervise durante la fiesta." },
    ],
    grupo: "tipo",
    prioridad: 2,
    color: "castillo",
    image: "/img/inflables/castillo-blanco.avif",
  },

  /* ─────────────────── P3 ─────────────────── */
  {
    slug: "medianos",
    nav:  "Medianos",
    name: "Inflables Medianos",
    badge: "Por tamaño",
    h1:   "Renta de inflables medianos: 4 modelos de $1,600 a $1,800",
    title: "Renta de inflables medianos: de $1,600 a $1,800",
    description: "Inflables medianos de 5×3 m: Dragones Rojos, Jungla y Gusanitos $1,600 y Castillo de Princesas $1,800, con instalación y recolección. Compara y cotiza.",
    keyword: "renta de inflables medianos",
    anchor:  "inflables medianos",
    respuesta: "Los inflables medianos miden alrededor de 5×3 metros y cuestan de $1,600 a $1,800 por evento: Dragones Rojos, Jungla y Gusanitos ($1,600) y Castillo de Princesas ($1,800). Son para niños de 2 a 10 años y caben en la mayoría de los jardines y patios de casa. Incluyen instalación y recolección.",
    puntosClave: [
      "Base de 5×3 m a 5×3.30 m y altura de 2.50 a 3 m.",
      "Precio de $1,600 a $1,800 por evento; traslado según zona.",
      "Gusanitos es el único mediano que se instala bajo techo.",
      "Dragones Rojos es el modelo más rentado del catálogo.",
    ],
    intro: [
      "Los inflables medianos son el punto de equilibrio del catálogo: caben en la mayoría de los jardines y patios de casa y tienen resbaladilla o túneles para mantener ocupados a los niños.",
      "Son cuatro modelos con medidas parecidas que se distinguen por temática y por el tipo de juego: área de salto con resbaladilla o recorrido de túneles.",
    ],
    guiaTitle: "Cómo elegir entre los cuatro medianos",
    guiaSub:   "Con medidas parecidas, deciden el tema y el techo.",
    guia: [
      "Tres de los cuatro comparten formato: Dragones Rojos mide 5×3×2.80 m, Castillo de Princesas 5×3.30×3 m y Jungla 5×3×2.50 m; los tres son de exterior y piden de 4.2 a 4.5 m de altura libre. Entre ellos decide la temática: Dragones Rojos es el más rentado y funciona con público mixto, el Castillo de Princesas es el favorito en cumpleaños de niña y la Jungla cubre safari, dinosaurios y naturaleza.",
      "Gusanitos mide 5×3×2.80 m y es el único mediano apto para interiores; la altura libre se confirma según el lugar al cotizar. Su recorrido de túnel, brinco y resbaladilla doble reparte a los niños en lugar de concentrarlos en un solo punto. Si tu espacio es techado o alargado, Gusanitos es la respuesta directa; si es un jardín abierto, elige por tema.",
    ],
    incluyeNota: "Los medianos son los que más se rentan en fin de semana: conviene apartar con anticipación en temporada alta.",
    guias: [
      { href: "/blog/inflables-de-1600-comparativa-dragones-jungla-gusanitos/", anchor: "comparativa de inflables de $1,600: Dragones, Jungla y Gusanitos" },
      { href: "/blog/fiesta-de-dragones-y-caballeros-ideas/", anchor: "ideas para una fiesta de dragones y caballeros" },
      { href: "/blog/fiesta-tematica-safari-inflable-cdmx/", anchor: "fiesta temática de safari con inflable" },
      { href: "/blog/fiesta-de-5-anos-ideas-juegos-cdmx/", anchor: "ideas y juegos para una fiesta de 5 años" },
    ],
    zonas: [
      { slug: "cuautitlan-izcalli", motivo: "Jardines de casa y áreas comunes de fraccionamiento." },
      { slug: "nicolas-romero", motivo: "Patios y jardines familiares." },
      { slug: "gustavo-a-madero", motivo: "Patios de casa donde cabe un modelo de 5×3 m." },
      { slug: "tlalpan", motivo: "Jardines residenciales para fiestas infantiles." },
    ],
    productos: ["dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Qué se considera un inflable mediano?", answer: "En nuestro catálogo, un modelo con base de 5×3 a 5×3.30 m y precio de $1,600 a $1,800. Son Dragones Rojos, Castillo de Princesas, Jungla y Gusanitos." },
      { question: "¿Cuál es el inflable mediano más rentado?", answer: "Dragones Rojos. Combina resbaladilla integrada, mallas laterales y una temática que funciona con niños y niñas de 3 a 8 años." },
      { question: "¿Qué diferencia hay entre un mediano de $1,600 y uno de $1,800?", answer: "El Castillo de Princesas ($1,800) es un poco más ancho y alto, 5×3.30×3 m, y cubre un rango de edad más amplio, de 2 a 10 años. Los de $1,600 se diferencian entre sí por temática y tipo de juego." },
      { question: "¿Un inflable mediano sirve para una fiesta de 20 niños?", answer: "Sí, organizando turnos. La capacidad simultánea se confirma al cotizar. Si prefieres que todos brinquen a la vez, compara con un modelo grande." },
      { question: "¿Algún inflable mediano se puede poner en un salón?", answer: "Gusanitos, que es apto para interiores; la altura del salón se confirma al cotizar. Dragones Rojos, Castillo de Princesas y Jungla son de exterior." },
    ],
    grupo: "tamano",
    prioridad: 3,
    color: "jungla",
    image: "/img/inflables/mini-jungla.avif",
  },
  {
    slug: "con-obstaculos",
    nav:  "Con obstáculos",
    name: "Inflables con Obstáculos y Circuitos",
    badge: "Por tipo",
    h1:   "Renta de inflables con obstáculos y circuitos de carreras",
    title: "Renta de inflables con obstáculos: desde $1,600",
    description: "Circuitos inflables con obstáculos: Extremo de doble carril $2,500 y recorrido Gusanitos $1,600, con instalación. Para kermeses, escuelas y empresas. Cotiza.",
    keyword: "renta de inflables con obstáculos",
    anchor:  "inflables con obstáculos",
    respuesta: "Rentamos dos inflables de recorrido: el Extremo ($2,500), un circuito de 8 metros con obstáculos y tobogán de doble carril para 3 a 12 años, y Gusanitos ($1,600), un recorrido corto de túnel, brinco y resbaladilla doble para 2 a 8 años que también se instala bajo techo. Ambos incluyen instalación, motor inflador y recolección.",
    puntosClave: [
      "Extremo: carreras de dos participantes a la vez, al aire libre.",
      "Gusanitos: túnel de entrada, zona de brinco y resbaladilla doble para niños pequeños, apto para interiores.",
      "Precios de $1,600 y $2,500 por evento; traslado según zona.",
      "Ideales para kermeses, Día del Niño y eventos de empresa.",
    ],
    intro: [
      "Un inflable con obstáculos no se salta: se recorre. El niño avanza por túneles, muros y rampas hasta la meta, y el juego se vuelve una carrera con reglas y turnos naturales.",
      "Tenemos dos modelos de este tipo: el Extremo, con doble carril para competir, y Gusanitos, un recorrido corto con túnel y resbaladilla doble para niños más pequeños.",
    ],
    guiaTitle: "Circuito de competencia o recorrido de exploración",
    guiaSub:   "La edad y el lugar deciden cuál de los dos formatos funciona.",
    guia: [
      "El Extremo está hecho para competir. Sus 8 metros de pista con obstáculos terminan en un tobogán dividido en dos carriles, así que dos participantes recorren el trayecto al mismo tiempo. Ese formato genera público, turnos y ganadores, y por eso es el más contratado para kermeses escolares y eventos de empresa. Es de exterior y pide 4.5 m de altura libre.",
      "Gusanitos aplica la misma lógica a una edad menor. Su túnel de entrada, la zona de brinco y la resbaladilla doble forman un recorrido de exploración, no una carrera: los niños de 2 a 8 años entran por un lado y bajan por el otro, lo que reparte al grupo. Es apto para interiores (la altura del lugar se confirma al cotizar), así que funciona en salones donde el Extremo no cabe. Si el evento es competitivo y al aire libre, Extremo; si es infantil o bajo techo, Gusanitos.",
    ],
    incluyeNota: "En kermeses y eventos escolares instalamos el circuito antes de la llegada de los grupos para que los turnos arranquen a tiempo.",
    guias: [
      { href: "/blog/circuito-de-tuneles-vs-brincolin/", anchor: "circuito de túneles o brincolín: cuál conviene" },
      { href: "/blog/fiesta-ninja-con-circuito-de-obstaculos/", anchor: "fiesta ninja con circuito de obstáculos" },
      { href: "/blog/dia-del-nino-inflables-escuela-empresa-cdmx/", anchor: "inflables para el Día del Niño en escuelas y empresas" },
      { href: "/blog/graduacion-kinder-primaria-con-inflable/", anchor: "graduación de kínder o primaria con inflable" },
    ],
    zonas: [
      { slug: "iztapalapa", motivo: "Kermeses y eventos escolares con muchos niños." },
      { slug: "azcapotzalco", motivo: "Explanadas y patios escolares." },
      { slug: "tlalnepantla", motivo: "Eventos escolares y de empresa." },
      { slug: "cuautitlan-izcalli", motivo: "Áreas comunes amplias para el circuito." },
    ],
    productos: ["extremo", "gusanitos"],
    faqs: [
      { question: "¿Qué obstáculos tiene el circuito inflable?", answer: "El Extremo tiene una pista de 8 metros con obstáculos y un tobogán final de doble carril. Gusanitos es un recorrido corto: túnel de entrada, zona de brinco y resbaladilla doble de poca altura." },
      { question: "¿Se pueden hacer carreras de dos participantes?", answer: "Sí, es el diseño del Extremo: dos carriles paralelos para recorrer el trayecto al mismo tiempo y llegar juntos al tobogán. Cuántas personas entran por turno se confirma al cotizar." },
      { question: "¿Cuánto cuesta rentar un circuito inflable?", answer: "El Extremo cuesta $2,500 y Gusanitos $1,600 por evento, con instalación, motor inflador, sanitización y recolección. El traslado depende de la zona." },
      { question: "¿Sirve un circuito inflable para una kermés o el Día del Niño?", answer: "Es uno de sus mejores usos: genera fila ordenada y turnos cortos cuando hay muchos niños. Recomendamos un adulto encargado del inflable y turnos por grado o grupo." },
      { question: "¿Qué espacio necesita un circuito inflable?", answer: "El Extremo mide 8×4.5 m y sólo se instala en exteriores con 4.5 m de altura libre. Gusanitos mide 5×3 m y puede ir bajo techo; en interiores se confirma según la altura del lugar al cotizar." },
    ],
    grupo: "tipo",
    prioridad: 3,
    color: "extremo",
    image: "/img/inflables/extremo.avif",
  },
  {
    slug: "tematicos",
    nav:  "Temáticos",
    name: "Inflables Temáticos",
    badge: "Por tema",
    h1:   "Renta de inflables temáticos: piratas, princesas, dragones y selva",
    title: "Renta de inflables temáticos: desde $1,600 en CDMX",
    description: "Inflables temáticos: Dragones Rojos y Jungla $1,600, Castillo de Princesas $1,800 y Barco Pirata $2,300, con instalación incluida. Elige tu tema y cotiza.",
    keyword: "renta de inflables temáticos",
    anchor:  "inflables temáticos",
    respuesta: "Tenemos cuatro inflables temáticos: Dragones Rojos y Jungla ($1,600), Castillo de Princesas ($1,800) y Barco Pirata ($2,300). Cubren las temáticas de dragones, selva, princesas y piratas para niños de 2 a 12 años, y funcionan como pieza central de la decoración. Incluyen instalación, motor inflador y recolección.",
    puntosClave: [
      "Cuatro temas: piratas, princesas, dragones y selva.",
      "Precios de $1,600 a $2,300 por evento; traslado según zona.",
      "La temática viene integrada en el inflable: figuras y colores.",
      "Los cuatro son de exterior.",
    ],
    intro: [
      "Cuando la fiesta tiene tema, el inflable es la pieza de decoración más grande y la que aparece en todas las fotos. Cuatro modelos del catálogo están construidos alrededor de una temática, no sólo pintados de colores.",
      "Barco pirata, princesas, dragones y selva cubren las temáticas más pedidas en fiestas infantiles. Elegir el inflable que coincide con el tema ahorra parte del presupuesto de decoración.",
    ],
    guiaTitle: "Cómo hacer que el inflable sostenga la temática",
    guiaSub:   "Coherencia visual, punto de fotos y presupuesto de decoración.",
    guia: [
      "El Barco Pirata es el más literal: mástil, velas y casco de barco de 6 metros de largo. Puesto cerca de la entrada funciona como fondo de fotos, y con eso una fiesta pirata queda resuelta visualmente con muy poca decoración extra. El Castillo de Princesas cumple el mismo papel en rosa y turquesa, con torres que combinan con globos del mismo tono.",
      "Dragones Rojos y Jungla son las opciones de aventura. El primero funciona para fiestas medievales, de caballeros o de dragones; la Jungla, con animales y palmeras, cubre safari, selva y exploradores. En los cuatro casos el criterio práctico es el mismo: elige primero el inflable, porque es la pieza que no puedes modificar, y después ajusta manteles, globos y piñata a su paleta.",
    ],
    incluyeNota: "Coordinamos con tu decorador el punto de instalación para que el inflable quede donde mejor luce en las fotos.",
    guias: [
      { href: "/blog/tematicas-fiesta-infantil-tendencias-2027/", anchor: "temáticas de fiesta infantil en tendencia para 2027" },
      { href: "/blog/fiesta-de-sirenas-y-piratas-con-inflable/", anchor: "fiesta de sirenas y piratas con inflable" },
      { href: "/blog/fiesta-de-dinosaurios-con-inflable-cdmx/", anchor: "fiesta de dinosaurios con inflable" },
      { href: "/blog/decoracion-completa-fiesta-infantil-cdmx-globos-inflable/", anchor: "decoración de fiesta infantil con globos e inflable" },
    ],
    zonas: [
      { slug: "coyoacan", motivo: "Fiestas temáticas en casa con jardín." },
      { slug: "alvaro-obregon", motivo: "Jardines donde el inflable es el centro de la decoración." },
      { slug: "naucalpan", motivo: "Fiestas temáticas en fraccionamientos." },
      { slug: "atizapan", motivo: "Cumpleaños temáticos en jardín." },
    ],
    productos: ["castillo-princesas", "barco-pirata", "dragones-rojos", "mini-jungla"],
    faqs: [
      { question: "¿Qué temáticas de inflable tienen disponibles?", answer: "Cuatro: piratas con el Barco Pirata, princesas con el Castillo de Princesas, dragones con Dragones Rojos y selva o safari con la Jungla. Para eventos formales está el Castillo Blanco, que es neutro." },
      { question: "¿El inflable temático incluye decoración adicional?", answer: "La temática es parte del inflable: figuras y colores vienen integrados. No incluimos globos ni mesas, pero coordinamos contigo o con tu decorador el punto de instalación." },
      { question: "¿Cuál inflable temático funciona para niños y niñas?", answer: "Dragones Rojos y Jungla son los más neutros y los que recomendamos para fiestas de hermanos o grupos mixtos. El Barco Pirata también funciona bien con grupos mixtos de 3 a 12 años." },
      { question: "¿Puedo pedir un inflable de un personaje específico?", answer: "No fabricamos ni personalizamos inflables de personajes con licencia. Dinos por WhatsApp qué temática buscas y te decimos qué modelo se acerca más." },
      { question: "¿Cuánto cuesta un inflable temático?", answer: "Dragones Rojos y Jungla $1,600, Castillo de Princesas $1,800 y Barco Pirata $2,300 por evento. Incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona." },
    ],
    grupo: "tipo",
    prioridad: 3,
    color: "pirata",
    image: "/img/inflables/barco-pirata.avif",
  },
];

/* ──────────────────────────────────────────────────────────────
   Derivados — nada de esto se escribe a mano
   ────────────────────────────────────────────────────────────── */

/** Busca una categoría por slug. */
export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

/** Los inflables de una categoría, resueltos contra el catálogo canónico
    y en el orden declarado en `productos`. */
export function inflablesDeCategoria(cat: Categoria): Inflable[] {
  return cat.productos
.map((slug) => INFLABLES.find((i) => i.slug === slug))
.filter((i): i is Inflable => Boolean(i) && i!.active);
}

/** Categorías en las que aparece un inflable. Alimenta el bloque
    "También en" de las 8 fichas de producto — el enlace de regreso
    que convierte el catálogo en silo en lugar de en árbol. */
export function categoriasDeInflable(slug: string): Categoria[] {
  return CATEGORIAS.filter((c) => c.productos.includes(slug));
}

/** Props listas para <ProductCard>. Evita repetir a mano descripción,
    medidas y badge en cada página: salen de inflables.ts. */
export function cardProps(inf: Inflable) {
  const badge = BADGE[inf.slug];
  return {
    slug:          inf.slug,
    name:          inf.name,
    description:   inf.description,
    price:         inf.price,
    size:          inf.size,
    ages:          inf.ages,
    category:      badge?.label ?? inf.category,
    categoryColor: badge?.color ?? "castillo",
    image:         inf.image,
  };
}

/** Agrupación de facetas para el bloque de silo. El orden y las
    etiquetas son idénticos en las 11 categorías, el hub y las fichas:
    es lo que hace que la autoridad circule siempre por los mismos ejes. */
export const FACETAS: { titulo: string; grupo: GrupoFaceta }[] = [
  { titulo: "Por tamaño",         grupo: "tamano"  },
  { titulo: "Por tipo de inflable", grupo: "tipo"   },
  { titulo: "Por público y entorno", grupo: "publico" },
];

export function categoriasDeGrupo(grupo: GrupoFaceta): Categoria[] {
  return CATEGORIAS.filter((c) => c.grupo === grupo);
}


/* ──────────────────────────────────────────────────────────────
   Enlazado interno — las categorías sólo valen si algo las enlaza
   ────────────────────────────────────────────────────────────── */

/** Las 4 categorías prioritarias que enlaza la home con keyword exacta. */
export const CATEGORIAS_P1 = CATEGORIAS.filter((c) => c.prioridad === 1);

/**
 * Categorías que enlaza una página de zona.
 *
 * Dos fijas —las que concentran la intención de renta local— más una
 * rotativa derivada del slug de la zona. Sin la rotación, las 35 páginas
 * de cobertura repetirían el mismo par de enlaces y Google leería el
 * bloque como plantilla en vez de como recomendación.
 */
export function categoriasParaZona(zoneSlug: string): Categoria[] {
  const fijas     = ["para-ninos", "castillos"];
  const rotativas = ["grandes", "chicos", "para-adultos", "para-interiores", "toboganes", "medianos"];
  const hash      = [...zoneSlug].reduce((a, c) => a + c.charCodeAt(0), 0);
  const elegida   = rotativas[hash % rotativas.length];
  return [...fijas, elegida]
.map((s) => getCategoria(s))
.filter((c): c is Categoria => Boolean(c));
}

/** Anchor localizado: "inflables para niños en Coyoacán". */
export function anchorEnZona(cat: Categoria, zonePhrase: string): string {
  return `${cat.anchor} en ${zonePhrase}`;
}
