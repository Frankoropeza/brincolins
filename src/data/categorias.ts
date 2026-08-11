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
  /** 2 párrafos de intro (80-120 palabras en total) */
  intro:       [string, string];
  /** Título del bloque guía */
  guiaTitle:   string;
  /** Subtítulo del bloque guía */
  guiaSub:     string;
  /** 2 párrafos de criterio real de elección (200-300 palabras) */
  guia:        [string, string];
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
    h1:   "Inflables para Niños en Renta: 5 Modelos por Edad y Capacidad",
    title: "Inflables para Niños en Renta — CDMX y Edomex | BRINCOLINS",
    description: "Renta de inflables y juegos inflables para niños de 1 a 12 años en CDMX. Elige por edad, capacidad y espacio disponible. Desde $800 con entrega incluida.",
    keyword: "inflables para niños",
    anchor:  "inflables para niños",
    intro: [
      "Rentamos inflables para niños en CDMX y Estado de México con cinco modelos que cubren de los 12 meses a los 12 años. Cada juego inflable de esta categoría está pensado para una etapa distinta: altura de paredes, tamaño de la resbaladilla y capacidad simultánea cambian según la edad a la que va dirigido.",
      "El error más común al rentar un brincolín infantil es elegir por diseño y no por edad. Un niño de 3 años no aprovecha una resbaladilla de 3.8 metros, y un grupo de 9 años se aburre en un mini castillo. Aquí puedes filtrar por edad, número de invitados y espacio disponible antes de decidir.",
    ],
    guiaTitle: "Qué inflable elegir según la edad de tu hijo",
    guiaSub:   "La tabla que nadie publica y que decide toda la renta.",
    guia: [
      "De 1 a 4 años el criterio es la contención, no la emoción: el Mini Castillo tiene paredes bajas, área de salto de 2×2 m y permite que un adulto entre a acompañar sin problema. Es el único modelo del catálogo que funciona en fiestas de primer y segundo cumpleaños, donde la mitad de los invitados todavía no camina bien. De 3 a 10 años el rango se abre: Dragones Rojos, Castillo de Princesas y Mini Jungla comparten base de 4×4 m con resbaladilla integrada y mallas laterales, que es la combinación que más tiempo mantiene a los niños dentro del inflable.",
      "Cuando la fiesta mezcla edades —primos de 4 y de 10, hermanos con mucha diferencia— el mejor resultado no lo da el inflable más grande sino el que tiene más entradas y salidas. Gusanitos, con 5 metros de largo y varios túneles conectados, distribuye a los niños en lugar de concentrarlos en una sola resbaladilla, que es donde ocurren los empujones. A partir de los 6 años, si el espacio lo permite, conviene revisar la categoría de inflables grandes: la capacidad sube de 5-7 a 8-10 niños y el turno por niño se acorta menos.",
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Desde qué edad puede un niño usar un inflable?", answer: "Desde los 12 meses, siempre con supervisión adulta dentro del área de salto y en un modelo de paredes bajas. El Mini Castillo es el único de nuestro catálogo diseñado para ese rango: 2×2 m de base, 2.5 m de alto y acceso a nivel de piso. Los modelos con resbaladilla se recomiendan a partir de los 3 años." },
      { question: "¿Pueden brincar juntos niños de edades muy distintas?", answer: "Sí, pero conviene separarlos por turnos de 10 a 15 minutos cuando la diferencia supera los 4 años. Un niño de 9 años pesa el doble que uno de 4 y el rebote del piso inflable los desequilibra. En fiestas con edades mezcladas recomendamos Gusanitos, que al tener varios túneles y salidas evita que todos coincidan en el mismo punto." },
      { question: "¿Cuántos niños caben en un inflable infantil?", answer: "El Mini Castillo admite 3 o 4 niños pequeños a la vez. Los modelos medianos —Dragones Rojos, Castillo de Princesas, Mini Jungla y Gusanitos— trabajan cómodos con 5 a 7 niños simultáneos. Si tu lista de invitados pasa de 15 niños, la recomendación no es meter más niños al mismo inflable sino organizar turnos o rentar un modelo grande." },
      { question: "¿Necesito contratar a alguien que cuide a los niños?", answer: "Nosotros entregamos, instalamos y recogemos, pero la supervisión durante el evento corre por cuenta de un adulto responsable de la fiesta. Es un requisito de seguridad, no un extra opcional: basta con una persona atenta al área de salto mientras el inflable esté en uso." },
      { question: "¿Qué pasa si llueve el día de la fiesta infantil?", answer: "Un inflable no debe usarse con lluvia ni con viento fuerte: la lona se vuelve resbalosa y el anclaje pierde eficacia. Si el pronóstico es malo, avísanos con anticipación y reprogramamos la fecha sin penalización. Si el evento ya está instalado, el equipo debe apagarse hasta que pase la lluvia." },
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
    h1:   "Castillos Inflables en Renta para Fiestas en CDMX",
    title: "Renta de Castillos Inflables en CDMX | 3 Modelos | BRINCOLINS",
    description: "Renta de castillos inflables en CDMX: mini castillo para bebés, castillo de princesas y castillo blanco para XV años. Desde $800, instalación incluida.",
    keyword: "castillo inflable",
    anchor:  "castillos inflables",
    intro: [
      "Un castillo inflable es el formato clásico de brincolín: torres, almenas y un área de salto cerrada por mallas. Rentamos tres castillos inflables en CDMX y Edomex, y cada uno cubre un tipo de evento distinto — desde el primer cumpleaños hasta una boda.",
      "La diferencia entre ellos no es sólo el tamaño. El Mini Castillo cabe bajo techo, el Castillo de Princesas está construido alrededor de una temática infantil y el Castillo Blanco es un modelo neutro pensado para eventos formales donde el inflable no debe romper la decoración.",
    ],
    guiaTitle: "Cómo elegir entre los tres castillos",
    guiaSub:   "Espacio disponible, edad de los invitados y tipo de evento.",
    guia: [
      "El primer filtro siempre es el espacio libre. El Mini Castillo necesita 3×3 metros y 3.2 metros de altura libre, lo que lo hace el único viable en un patio chico, una terraza techada o un salón. El Castillo de Princesas pide 6×6 metros y 4.2 de altura, así que asume jardín o patio grande. El Castillo Blanco es el más exigente de los tres: 8×7 metros de área despejada. Mide tu espacio antes de enamorarte de un modelo, porque el metro de margen perimetral no es negociable — es lo que permite anclar y lo que evita que un niño caiga contra una pared.",
      "El segundo filtro es el tono del evento. Para un cumpleaños de niña de 4 a 10 años el Castillo de Princesas gana por temática: rosa y morado, torres decorativas y resbaladilla integrada. Para bodas, bautizos y XV años el Castillo Blanco es el único que se integra con la decoración en lugar de competir con ella, y admite adultos: 8 a 10 personas de capacidad, no sólo niños. Y si los invitados son bebés, el Mini Castillo no tiene sustituto en el catálogo: es el único con paredes lo bastante bajas para que un adulto supervise desde afuera sin perder de vista a nadie.",
    ],
    productos: ["mini-castillo", "castillo-princesas", "castillo-blanco"],
    faqs: [
      { question: "¿Cuál castillo inflable cabe en un patio de 5×5 metros?", answer: "El Mini Castillo, sin discusión: necesita 3×3 metros de área libre. El Castillo de Princesas requiere 6×6 y el Castillo Blanco 8×7, así que ninguno de los dos entra en 5×5 metros con el margen de seguridad de un metro por lado que exigimos en toda instalación." },
      { question: "¿El Castillo Blanco sirve para XV años y bodas?", answer: "Es exactamente para lo que está diseñado. Es el único modelo del catálogo en color neutro, con torres decorativas y sin personajes infantiles, y su capacidad de 8 a 10 personas admite adultos. Se usa habitualmente en bodas, bautizos y XV años donde hay niños invitados pero la estética del evento es formal." },
      { question: "¿Los castillos inflables traen resbaladilla?", answer: "El Castillo de Princesas y el Castillo Blanco incluyen resbaladilla integrada. El Mini Castillo no la tiene: es un área de salto cerrada, porque a la edad para la que está diseñado —de 1 a 4 años— una resbaladilla añade riesgo sin añadir diversión." },
      { question: "¿Cuánto cuesta rentar un castillo inflable en CDMX?", answer: "Desde $800 el Mini Castillo, $1,200 el Castillo de Princesas y $1,700 el Castillo Blanco por evento. Los tres precios incluyen entrega, instalación, motor inflador, sanitización y recolección. Son precios netos: si necesitas factura se agrega el 16% de IVA." },
      { question: "¿Se puede anclar un castillo inflable sobre pasto artificial o loseta?", answer: "Sí. Sobre pasto natural anclamos con estaca; sobre loseta, cemento o pasto artificial usamos contrapesos, que llevamos siempre en la unidad. Lo que sí necesitamos saber al cotizar es el tipo de piso, porque cambia el tiempo de instalación y el espacio perimetral necesario." },
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
    h1:   "Inflables Grandes en Renta: de 6×5 a 7×5 Metros",
    title: "Inflables Grandes en Renta — CDMX y Edomex | BRINCOLINS",
    description: "Renta de inflables grandes en CDMX para fiestas de 8 a 10 niños: barco pirata, castillo blanco y circuito extremo. Consulta el espacio que necesitas.",
    keyword: "inflables grandes",
    anchor:  "inflables grandes",
    intro: [
      "Los inflables grandes de nuestro catálogo miden de 6×5 a 7×5 metros y trabajan con 8 a 10 niños simultáneos. Son los modelos que se rentan cuando la lista de invitados pasa de 20 niños y los turnos en un inflable mediano se vuelven demasiado cortos.",
      "A cambio del tamaño piden espacio real: entre 8×7 y 9×7 metros de área despejada, y de 4.5 a 5.2 metros de altura libre. Ninguno de los tres entra bajo techo. Antes de cotizar conviene medir el jardín, el patio o el campo donde se va a instalar.",
    ],
    guiaTitle: "Cómo saber si un inflable grande cabe en tu evento",
    guiaSub:   "Metros libres, altura, acceso y toma de corriente.",
    guia: [
      "El área que publicamos ya incluye un metro de margen por lado sobre las medidas del inflable, y ese margen es lo que hace la instalación segura. El Castillo Blanco pide 8×7 metros, el Barco Pirata y el Circuito Extremo 9×7 y 9×6 respectivamente. Además de la superficie hay que revisar la altura libre: 4.7 metros para el Castillo Blanco, 5.2 para el Barco Pirata. Cables de luz, ramas bajas y toldos son el obstáculo que más veces aparece a última hora, y se resuelve mirando hacia arriba antes de apartar la fecha, no el día del evento.",
      "El tercer dato es el acceso. Un inflable grande llega desinflado pero pesa más de 100 kilos y se transporta enrollado, así que necesitamos una entrada de al menos 90 centímetros de ancho y un recorrido sin escalones largos hasta el punto de instalación. Si el evento es en una azotea, un salón en segundo piso o un jardín al que sólo se llega por escaleras, dinos al cotizar: no es un impedimento automático, pero cambia el tiempo de montaje. Por último, la toma de corriente de 110V debe quedar a menos de 20 metros del inflable, porque el motor trabaja de forma continua durante todo el evento.",
    ],
    productos: ["castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Cuánto espacio necesita un inflable grande?", answer: "Entre 8×7 y 9×7 metros de área despejada, dependiendo del modelo: 8×7 para el Castillo Blanco, 9×7 para el Barco Pirata y 9×6 para el Circuito Extremo. Esa medida ya incluye el metro de margen por lado que exigimos para anclar y para evitar caídas contra muros u objetos." },
      { question: "¿Cuál es el inflable más grande que rentan?", answer: "El Barco Pirata, con 7×5×4.5 metros. Es el de mayor impacto visual del catálogo, con mástil, velas y tobogán por la popa. Requiere 9×7 metros de área libre y 5.2 metros de altura, así que sólo funciona en exteriores amplios." },
      { question: "¿Cuántos niños aguanta un inflable grande al mismo tiempo?", answer: "De 8 a 10 simultáneos en el Barco Pirata y el Castillo Blanco. El Circuito Extremo trabaja distinto: es una pista de carreras de doble carril, así que la referencia son 6 a 10 personas por turno, entrando de 2 a 4 por carril." },
      { question: "¿Un inflable grande consume mucha luz?", answer: "El motor inflador trabaja de forma continua y consume aproximadamente lo mismo que un refrigerador doméstico. Necesita una toma de 110V dedicada a menos de 20 metros del inflable. No recomendamos compartir el contacto con el equipo de sonido ni con la cocina del evento." },
      { question: "¿Puedo rentar dos inflables grandes para el mismo evento?", answer: "Sí, y es lo habitual en kermeses escolares y eventos de empresa. A partir de tres inflables incluimos coordinador de logística sin costo. Lo que sí hay que verificar es que existan dos tomas de corriente independientes y el área libre sumada de ambos modelos." },
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
    h1:   "Inflables para Adultos y Adolescentes: Renta en CDMX",
    title: "Inflables para Adultos y Adolescentes en Renta | CDMX",
    description: "Renta de inflables para adultos en CDMX: circuito extremo, barco pirata y castillo blanco. Para kermeses, eventos de empresa y XV años. Desde $1,700.",
    keyword: "inflables para adultos",
    anchor:  "inflables para adultos",
    intro: [
      "No todos los inflables aguantan adultos. Tres modelos de nuestro catálogo sí: el Circuito Extremo, el Barco Pirata y el Castillo Blanco, construidos con lona reforzada y estructura pensada para peso y altura de adolescente o adulto.",
      "Se rentan sobre todo para kermeses escolares, eventos de empresa, XV años y fiestas donde los invitados grandes acaban usando el inflable más que los niños. Si tu evento es de adolescentes o de team building, esta es la categoría correcta.",
    ],
    guiaTitle: "Cómo elegir un inflable para adultos",
    guiaSub:   "Competencia, capacidad y tipo de evento.",
    guia: [
      "Si lo que buscas es competencia, el Circuito Extremo es el modelo. Sus 7 metros de pista con muros, túneles y tobogán final están divididos en doble carril, lo que permite carreras cabeza a cabeza y convierte al inflable en una actividad con reglas en lugar de un área de salto libre. Es el que mejor funciona en eventos de empresa y kermeses, porque genera público alrededor y turnos naturales. Está recomendado a partir de los 6 años y es el favorito de adolescentes.",
      "Si el evento es formal —una boda, unos XV años, un bautizo con invitados de todas las edades— el Castillo Blanco es la opción sensata: admite de 8 a 10 personas entre adultos y niños, y su diseño neutro no compite con la decoración. El Barco Pirata queda en medio: es el más grande, el de mayor impacto fotográfico y funciona bien en fiestas al aire libre con grupos mixtos. Los tres exigen un adulto supervisando y un límite de personas simultáneas; el sobrecupo, más que el peso individual, es lo que provoca la mayoría de los golpes en inflables con adultos.",
    ],
    productos: ["extremo", "barco-pirata", "castillo-blanco"],
    faqs: [
      { question: "¿Cuánto peso soporta el Circuito Extremo?", answer: "Está fabricado con lona vinílica de grado comercial y trabaja con 6 a 10 personas por turno, de 2 a 4 por carril. El límite real no es el peso individual de un adulto sino el número de personas simultáneas: respetar el turno por carril es lo que mantiene la pista segura." },
      { question: "¿Se puede usar un inflable en una kermés escolar?", answer: "Sí, es uno de los usos más frecuentes del Circuito Extremo y del Barco Pirata. Para kermeses recomendamos organizar turnos por grupo o por grado y designar a un adulto por inflable. A partir de tres inflables en el mismo evento incluimos coordinador de logística sin costo adicional." },
      { question: "¿Sirven para eventos de empresa o team building?", answer: "El Circuito Extremo es el que más se contrata para eso: el doble carril permite armar torneos por equipos y el recorrido de obstáculos funciona como dinámica sin necesidad de facilitador. Cotizamos también paquetes multi-inflable para eventos corporativos." },
      { question: "¿Hay un límite de edad máximo para usar los inflables?", answer: "No hay límite de edad superior en estos tres modelos, siempre que se respete la capacidad simultánea y no se ingrese con calzado, objetos punzantes ni bebidas. Recomendamos no usarlos bajo efectos del alcohol, que es la causa más común de accidentes en inflables de eventos con adultos." },
      { question: "¿Puedo rentar un inflable para adultos en una fiesta en departamento?", answer: "No. Los tres modelos de esta categoría requieren entre 8×7 y 9×7 metros de área libre y más de 4.5 metros de altura, así que sólo funcionan en exteriores. Si tu evento es bajo techo, revisa la categoría de inflables para interiores." },
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
    h1:   "Inflables Pequeños en Renta: para Espacios y Fiestas Reducidas",
    title: "Inflables Pequeños en Renta para Fiestas Chicas | CDMX",
    description: "Renta de inflables pequeños en CDMX desde $800. Caben en 3×3 m, ideales para departamentos, patios y fiestas de pocos niños. Entrega incluida.",
    keyword: "inflables pequeños",
    anchor:  "inflables pequeños",
    intro: [
      "Los inflables pequeños son la respuesta cuando el problema no es el presupuesto sino el espacio. Rentamos dos modelos que funcionan en patios chicos, terrazas y salones: el Mini Castillo, que necesita apenas 3×3 metros, y Gusanitos, que aprovecha espacios alargados.",
      "Son también los modelos correctos para fiestas de pocos invitados. Con 3 a 7 niños, un inflable de 7 metros no mejora la fiesta: sólo encarece la renta y complica la instalación. Aquí el criterio es proporción, no tamaño máximo.",
    ],
    guiaTitle: "Cómo elegir un inflable pequeño",
    guiaSub:   "Metros reales, forma del espacio y edad de los invitados.",
    guia: [
      "El Mini Castillo mide 2×2×2.5 metros y pide 3×3 metros de área libre con 3.2 metros de altura. Es el único modelo del catálogo que entra en la sala de un departamento, en una terraza techada o en un patio de vecindad. Su límite es la edad: está diseñado para niños de 1 a 4 años y admite 3 o 4 a la vez. Si tus invitados tienen 7 años, se les queda chico en quince minutos.",
      "Gusanitos resuelve el caso contrario: un espacio que no es cuadrado. Con base de 5×3 metros y sólo 2.5 de alto, cabe en pasillos de jardín, patios largos y estacionamientos, y funciona con niños de 4 a 10 años. Su altura libre requerida es de 3.2 metros, la misma que el Mini Castillo, así que también entra bajo techo en salones con altura estándar. Entre los dos cubren el rango completo de fiestas chicas: uno por edad mínima, el otro por forma del terreno. Si tu espacio supera los 6×6 metros libres, conviene comparar con la categoría de inflables medianos antes de decidir.",
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Cuál es el inflable más pequeño que rentan?", answer: "El Mini Castillo: 2×2×2.5 metros de inflable y 3×3 metros de área libre necesaria. Es el más económico del catálogo, desde $800 por evento, y el único diseñado específicamente para niños de 1 a 4 años." },
      { question: "¿Cabe un inflable en el patio de un departamento?", answer: "El Mini Castillo sí, siempre que tengas 3×3 metros despejados y 3.2 metros de altura libre. Gusanitos entra si el espacio es alargado: necesita 7×5 metros. Mándanos las medidas por WhatsApp y te confirmamos antes de que apartes la fecha." },
      { question: "¿Un inflable pequeño es más barato?", answer: "Sí, pero por tamaño y capacidad, no por menor calidad ni menor servicio. El Mini Castillo cuesta $800 y Gusanitos $1,350; ambos incluyen entrega, instalación, motor inflador, sanitización y recolección exactamente igual que los modelos grandes." },
      { question: "¿Cuántos niños caben en un inflable pequeño?", answer: "Tres o cuatro niños pequeños en el Mini Castillo, de 5 a 7 en Gusanitos. Si tu fiesta tiene más de 10 niños brincando al mismo tiempo, la solución no es un inflable pequeño con turnos largos: es un modelo mediano o grande." },
      { question: "¿Se puede instalar un inflable pequeño en interiores?", answer: "Sí. Tanto el Mini Castillo como Gusanitos requieren 3.2 metros de altura libre, que es lo que suele haber en un salón de fiestas o en una terraza techada. Revisa la categoría de inflables para interiores, donde explicamos altura, acceso y requisitos de piso." },
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
    h1:   "Toboganes y Resbaladillas Inflables en Renta — CDMX",
    title: "Renta de Toboganes Inflables en CDMX y Edomex | BRINCOLINS",
    description: "Renta de toboganes inflables en CDMX: barco pirata, circuito extremo y mini jungla con resbaladilla. Desde $1,300 con instalación incluida.",
    keyword: "tobogán inflable",
    anchor:  "toboganes inflables",
    intro: [
      "Un tobogán inflable cambia la dinámica de la fiesta: en lugar de saltar en un mismo punto, los niños hacen fila, suben y bajan, y se genera un circuito que se sostiene solo durante horas. Rentamos tres modelos con resbaladilla de altura real en CDMX y Estado de México.",
      "Los tres son de exterior. La resbaladilla es justamente lo que sube la altura total del inflable por encima de lo que admite un techo estándar, así que si tu evento es en salón cerrado esta no es la categoría.",
    ],
    guiaTitle: "Qué diferencia a un tobogán de una resbaladilla integrada",
    guiaSub:   "Altura de caída, longitud de deslizamiento y edad mínima.",
    guia: [
      "El Barco Pirata tiene el tobogán más largo del catálogo: baja por la popa desde 4.5 metros de altura total, con caída amplia y zona de frenado en la base. Es el que produce fila y el que más se fotografía. Requiere 9×7 metros de área libre y 5.2 metros de altura, así que asume jardín o campo abierto. Está recomendado a partir de los 4 años, porque el niño necesita poder subir por su cuenta.",
      "El Circuito Extremo termina en un tobogán de doble carril, pensado para competencia más que para deslizamiento: dos niños bajan al mismo tiempo tras recorrer los obstáculos. Es el modelo para 6 años en adelante y para adolescentes. La Mini Jungla, en cambio, integra una resbaladilla más corta dentro del área de salto: no es un tobogán independiente, es la opción para niños de 3 a 10 años que todavía no manejan una caída alta. Elegir entre los tres es elegir altura: 4.5 metros de emoción para grandes, o una bajada corta y controlada para los pequeños.",
    ],
    productos: ["mini-jungla", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Qué altura tiene el tobogán inflable más grande?", answer: "El Barco Pirata alcanza 4.5 metros de altura total y su tobogán baja desde la popa. Requiere 5.2 metros de altura libre en el sitio de instalación, contando ramas, cables y toldos." },
      { question: "¿A partir de qué edad puede un niño usar un tobogán inflable?", answer: "A partir de los 4 años en el Barco Pirata y de los 6 en el Circuito Extremo, porque el niño debe poder subir por sí mismo y controlar la bajada. Para menores de 4 años la Mini Jungla, con resbaladilla corta integrada, es la opción adecuada." },
      { question: "¿Los toboganes inflables se usan con agua?", answer: "No. Nuestros modelos son de uso en seco: la lona no está diseñada para deslizamiento con agua y mojarla vuelve peligroso el frenado y el anclaje. Tampoco se deben usar con lluvia por la misma razón." },
      { question: "¿Cuántos niños pueden bajar al mismo tiempo?", answer: "Uno por carril y siempre esperando a que el anterior haya salido de la zona de frenado. El Circuito Extremo tiene doble carril, así que admite dos bajadas simultáneas. En el Barco Pirata la regla es un niño a la vez en el tobogán, aunque haya 8 o 10 jugando en el resto del inflable." },
      { question: "¿Puedo instalar un tobogán inflable bajo techo?", answer: "No con estos modelos. Los tres superan los 4 metros de altura libre requerida. Si tu evento es en salón cerrado, revisa la categoría de inflables para interiores, donde los modelos trabajan con 3.2 metros de altura." },
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
    h1:   "Inflables para Interiores: los 2 Modelos que Caben en un Salón",
    title: "Inflables para Interiores y Salones en Renta | CDMX",
    description: "Renta de inflables aptos para interiores en CDMX. Mini Castillo y Gusanitos caben en salones y espacios techados. Medidas exactas y altura mínima.",
    keyword: "inflables para interiores",
    anchor:  "inflables para interiores",
    intro: [
      "De los ocho modelos del catálogo, sólo dos caben bajo techo: el Mini Castillo y Gusanitos. Ambos requieren 3.2 metros de altura libre, que es lo que ofrece un salón de fiestas estándar, una terraza techada o un departamento con losa alta.",
      "Esta página existe porque es la primera pregunta de quien celebra en salón y nadie la contesta con números. Aquí están las medidas exactas, la altura mínima, el ancho de acceso y los requisitos de piso para instalar un inflable en interiores en CDMX y Edomex.",
    ],
    guiaTitle: "Requisitos reales para instalar un inflable bajo techo",
    guiaSub:   "Altura libre, acceso, piso y toma de corriente.",
    guia: [
      "La altura libre es el filtro que descarta al 75% del catálogo. Se mide del piso al punto más bajo del techo en el área de instalación, y hay que descontar lámparas colgantes, ventiladores, ductos y trabes. El Mini Castillo y Gusanitos necesitan 3.2 metros: el inflable mide 2.5 de alto y el resto es el margen de seguridad que impide que un niño golpee el techo al saltar. Si tu salón tiene 3 metros exactos, no entra; si tiene 3.5, entra con holgura.",
      "El segundo requisito es el acceso: el inflable llega enrollado y necesita una puerta de al menos 90 centímetros de ancho y un recorrido sin escalones estrechos. El piso debe estar seco, sin vidrio ni objetos punzantes, y como en interiores no se puede estacar, anclamos con contrapesos que llevamos siempre. Finalmente, la toma de 110V debe quedar a menos de 20 metros del inflable y no compartirse con el equipo de sonido. Si el evento es en un salón que ya tienes apartado, consulta también nuestro directorio de salones: en varios de ellos ya conocemos el acceso y la altura.",
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Qué altura libre necesito para un inflable en interiores?", answer: "3.2 metros medidos del piso al punto más bajo del techo, descontando lámparas, ventiladores y trabes. Es la altura que requieren el Mini Castillo y Gusanitos, los dos únicos modelos del catálogo aptos para instalación bajo techo." },
      { question: "¿Pasa el inflable por una puerta estándar?", answer: "Sí. Llega desinflado y enrollado, y necesita un acceso de al menos 90 centímetros de ancho. Lo que sí conviene avisarnos al cotizar son escaleras, pasillos con vuelta cerrada o elevadores pequeños, porque cambian el tiempo de montaje." },
      { question: "¿Cómo se ancla un inflable si no se puede estacar el piso?", answer: "Con contrapesos, que forman parte del equipo estándar de instalación. En interiores, loseta, cemento o pasto artificial nunca perforamos el piso. El anclaje con contrapesos es igual de seguro siempre que respetemos el metro de margen perimetral." },
      { question: "¿Cuánto ruido hace el motor dentro de un salón?", answer: "El motor inflador es silencioso pero trabaja de forma continua, y en un espacio cerrado se nota más que al aire libre. Lo colocamos en el punto más alejado de las mesas y del área de sonido. En un salón con música en vivo no representa ninguna molestia." },
      { question: "¿Puedo instalar un inflable en un departamento?", answer: "El Mini Castillo sí, si tienes 3×3 metros despejados y 3.2 de altura libre. Es su caso de uso más frecuente en CDMX para primeros cumpleaños. Gusanitos requiere 7×5 metros, así que en departamento rara vez es viable." },
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
    h1:   "Renta de Brincolines en CDMX — Los 8 Modelos del Catálogo",
    title: "Renta de Brincolines para Niños en CDMX | 8 Modelos",
    description: "Renta de brincolines e inflables para fiestas en CDMX y Edomex. Catálogo con 8 modelos. Entrega, instalación y recolección incluidas.",
    keyword: "renta de brincolines",
    anchor:  "renta de brincolines",
    intro: [
      "Brincolín, inflable, castillo o saltarín: en México todos nombran lo mismo. Esta página reúne los ocho modelos que rentamos en CDMX y Estado de México, de $800 a $1,900 por evento, con entrega, instalación y recolección incluidas.",
      "Si ya sabes qué tipo de brincolín buscas, conviene entrar por categoría —tamaño, tipo o público— en lugar de recorrer el catálogo completo. Si todavía no lo tienes claro, esta es la vista general con todos los modelos comparados.",
    ],
    guiaTitle: "Cómo elegir un brincolín para tu fiesta",
    guiaSub:   "Tres decisiones en orden: espacio, edad y número de invitados.",
    guia: [
      "El orden importa. Primero mide el espacio libre: es el único dato que no puedes cambiar y el que descarta modelos de inmediato. Con 3×3 metros sólo entra el Mini Castillo; con 6×6 se abren los cuatro modelos medianos; con 9×7 tienes el catálogo completo. Anota también la altura libre si el evento es bajo techo o hay cables y ramas encima del área.",
      "Segundo, la edad del cumpleañero y de la mayoría de los invitados: de 1 a 4 años el Mini Castillo, de 3 a 10 los medianos, de 6 en adelante el Circuito Extremo, y para eventos con adultos el Castillo Blanco o el Barco Pirata. Tercero, el número de niños brincando al mismo tiempo, que no es el total de invitados: si esperas 25 niños pero brincarán por turnos, un modelo mediano con 5 a 7 de capacidad basta; si quieres que estén todos dentro a la vez, necesitas un grande. Con esas tres respuestas la elección suele reducirse a dos modelos, y a partir de ahí decide la temática.",
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos", "castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Qué incluye la renta de un brincolín?", answer: "Entrega a domicilio, instalación profesional, motor inflador, sanitización antes del evento y recolección al finalizar. El precio publicado es neto: si necesitas factura se agrega el 16% de IVA, y en municipios distantes del Estado de México aplica un cargo de envío que te indicamos al cotizar." },
      { question: "¿Cuánto tiempo dura la renta de un brincolín?", answer: "La renta estándar cubre el evento completo, de 4 a 6 horas. Llegamos a instalar con anticipación y recogemos al terminar. Si necesitas más horas, se cotiza la extensión por WhatsApp antes de apartar la fecha." },
      { question: "¿Cuál es la diferencia entre un brincolín y un inflable?", answer: "Ninguna en la práctica: en México se usan como sinónimos, junto con castillo inflable y saltarín. Técnicamente un brincolín de resorte es un trampolín de estructura metálica, que es un producto distinto y que nosotros no rentamos. Todo nuestro catálogo es de inflables de aire continuo." },
      { question: "¿Con cuánta anticipación debo apartar un brincolín?", answer: "En temporada alta —fines de semana de mayo a diciembre— recomendamos apartar con dos o tres semanas. Para apartar la fecha se requiere un anticipo del 50%; el saldo se liquida el día del evento antes de la instalación." },
      { question: "¿Qué necesito tener listo el día de la instalación?", answer: "Un área libre y despejada con las medidas del modelo que rentaste, una toma de corriente de 110V a menos de 20 metros, superficie plana sin vidrio ni objetos punzantes, y un adulto responsable que supervise durante todo el evento." },
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
    h1:   "Inflables Medianos en Renta: la Medida más Rentada en CDMX",
    title: "Inflables Medianos en Renta — CDMX y Edomex | BRINCOLINS",
    description: "Renta de inflables medianos en CDMX: base de 4×4 a 5×3 m, de 5 a 7 niños y desde $1,200. Los modelos que caben en un jardín normal.",
    keyword: "inflables medianos",
    anchor:  "inflables medianos",
    intro: [
      "Los inflables medianos son los que más se rentan en CDMX por una razón práctica: caben en un jardín o patio normal de 6×6 metros y trabajan con 5 a 7 niños, que es el tamaño real de la mayoría de los cumpleaños infantiles.",
      "Son cuatro modelos —Dragones Rojos, Castillo de Princesas, Mini Jungla y Gusanitos— que comparten capacidad y rango de edad pero se diferencian por temática y por la forma del espacio que necesitan.",
    ],
    guiaTitle: "Cómo elegir entre los cuatro medianos",
    guiaSub:   "Cuando la capacidad es la misma, deciden la forma y el tema.",
    guia: [
      "Tres de los cuatro comparten base cuadrada: Dragones Rojos y Castillo de Princesas miden 4×4 metros y la Mini Jungla 4.5×4. Los tres piden alrededor de 6×6 metros de área libre y de 4.2 a 4.5 metros de altura, así que son intercambiables desde el punto de vista del espacio. Entre ellos decide la temática: Dragones Rojos es el más rentado y funciona con público mixto, el Castillo de Princesas es el favorito en cumpleaños de niñas, y la Mini Jungla es la opción de safari, dinosaurios y naturaleza.",
      "Gusanitos rompe el patrón: mide 5×3 metros, es el más largo y el más bajo del grupo con 2.5 metros de alto, y necesita 7×5 metros de área. Esa forma alargada lo hace mejor en patios rectangulares donde un 4×4 desperdicia superficie, y su altura reducida es la que le permite entrar bajo techo — es el único mediano apto para interiores. Si tu espacio es cuadrado, elige por tema; si es alargado o techado, Gusanitos es la respuesta directa.",
    ],
    productos: ["dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Qué se considera un inflable mediano?", answer: "En nuestro catálogo, un modelo con base de 4×4 a 5×3 metros, capacidad de 5 a 7 niños simultáneos y precio de $1,200 a $1,350. Son Dragones Rojos, Castillo de Princesas, Mini Jungla y Gusanitos." },
      { question: "¿Cuál es el inflable mediano más rentado?", answer: "Dragones Rojos. Su combinación de resbaladilla integrada, mallas de seguridad y temática que funciona con niños y niñas lo convierte en el modelo más solicitado del catálogo en CDMX y Estado de México." },
      { question: "¿Cuánto espacio necesita un inflable mediano?", answer: "Entre 6×6 y 7×5 metros de área libre según el modelo, con 3.2 a 4.5 metros de altura. Esa medida ya incluye el metro de margen por lado que exigimos para anclar con seguridad." },
      { question: "¿Un inflable mediano sirve para una fiesta de 20 niños?", answer: "Sí, organizando turnos. La capacidad simultánea es de 5 a 7 niños, así que 20 invitados rotan sin problema durante un evento de 4 a 6 horas. Si prefieres que estén todos dentro al mismo tiempo, necesitas un modelo grande." },
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
    h1:   "Inflables con Obstáculos y Circuitos de Carreras en Renta",
    title: "Renta de Circuitos Inflables con Obstáculos | CDMX",
    description: "Renta de inflables con obstáculos en CDMX: circuito extremo de doble carril y túneles Gusanitos. Para kermeses, escuelas y eventos de empresa.",
    keyword: "circuito inflable",
    anchor:  "inflables con obstáculos",
    intro: [
      "Un inflable con obstáculos no se salta: se recorre. En lugar de un área de brinco, el niño avanza por muros, túneles y rampas hasta una meta, lo que convierte el juego en una carrera con reglas y turnos naturales.",
      "Rentamos dos modelos de este tipo en CDMX: el Circuito Extremo, con doble carril para competencias, y Gusanitos, un recorrido de túneles conectados para niños más pequeños.",
    ],
    guiaTitle: "Circuito de competencia o recorrido de exploración",
    guiaSub:   "La edad decide cuál de los dos formatos funciona.",
    guia: [
      "El Circuito Extremo está construido para competir. Sus 7 metros de pista incluyen muros para escalar, túneles de arrastre y un tobogán final dividido en dos carriles, de modo que dos participantes recorren el trayecto al mismo tiempo. Ese formato genera público, turnos y ganadores, y es lo que lo hace el modelo más contratado para kermeses escolares, eventos de empresa y fiestas de adolescentes. Está recomendado a partir de los 6 años y trabaja con 6 a 10 personas por turno.",
      "Gusanitos aplica la misma lógica a una edad menor. Sus túneles de colores conectados con varias entradas y salidas forman un recorrido de exploración, no una carrera: los niños de 4 a 10 años entran, se cruzan y salen por puntos distintos, lo que reparte el grupo en lugar de concentrarlo. Además es más bajo —2.5 metros— y apto para interiores, así que funciona en salones donde el Circuito Extremo no cabe. Si el evento es competitivo y al aire libre, Extremo; si es infantil, mixto o bajo techo, Gusanitos.",
    ],
    productos: ["extremo", "gusanitos"],
    faqs: [
      { question: "¿Qué obstáculos tiene el circuito inflable?", answer: "El Circuito Extremo incluye muros para escalar, túneles de arrastre, rampas y un tobogán final de doble carril, a lo largo de 7 metros de pista. Gusanitos es un recorrido de túneles conectados con varias entradas y salidas, sin muros ni caídas." },
      { question: "¿Se pueden hacer carreras con dos participantes a la vez?", answer: "Sí, es el diseño del Circuito Extremo: doble carril paralelo para que dos personas recorran el trayecto simultáneamente y lleguen al tobogán final al mismo tiempo. Admite de 2 a 4 personas por carril por turno." },
      { question: "¿Sirve un circuito inflable para una kermés escolar?", answer: "Es uno de sus usos más frecuentes. Genera fila ordenada y turnos cortos, que es justo lo que se necesita cuando hay cientos de niños. Recomendamos un adulto encargado del inflable y turnos por grado o por grupo." },
      { question: "¿Qué espacio necesita un circuito de obstáculos inflable?", answer: "El Circuito Extremo requiere 9×6 metros de área libre y 4.5 metros de altura, sólo en exteriores. Gusanitos necesita 7×5 metros y 3.2 metros de altura, y sí puede instalarse bajo techo." },
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
    h1:   "Inflables Temáticos en Renta: Piratas, Princesas, Dragones y Selva",
    title: "Inflables Temáticos en Renta CDMX — Piratas y Princesas",
    description: "Renta de inflables temáticos en CDMX: barco pirata, castillo de princesas, dragones y mini jungla. El inflable como decoración central de la fiesta.",
    keyword: "inflables temáticos",
    anchor:  "inflables temáticos",
    intro: [
      "Cuando la fiesta tiene tema, el inflable es la pieza de decoración más grande del evento y la que aparece en todas las fotos. Cuatro modelos de nuestro catálogo están construidos alrededor de una temática completa, no sólo pintados de colores.",
      "Barco pirata, princesas, dragones y selva cubren las cuatro temáticas más pedidas en fiestas infantiles en CDMX. Elegir el inflable que coincide con el tema ahorra buena parte del presupuesto de decoración.",
    ],
    guiaTitle: "Cómo hacer que el inflable sostenga la temática",
    guiaSub:   "Coherencia visual, punto fotográfico y presupuesto de decoración.",
    guia: [
      "El Barco Pirata es el más literal: mástil, velas y casco de barco a escala real de 7 metros. Puesto a la entrada del evento funciona como arco de bienvenida y como fondo de fotos, y con eso una fiesta pirata queda resuelta visualmente sin comprar un solo adorno más. El Castillo de Princesas cumple el mismo papel en rosa y morado, con torres decorativas que combinan con globos del mismo tono y son el punto natural para la mesa de pastel.",
      "Dragones Rojos y Mini Jungla son las opciones para temáticas de aventura. Los dos dragones de tres metros del primero funcionan igual de bien para una fiesta medieval, de caballeros o de dinosaurios; la Mini Jungla, con animales y palmeras, cubre safari, selva y exploradores. En los cuatro casos el criterio práctico es el mismo: elige primero el inflable temático, porque es la pieza que no puedes modificar, y después ajusta manteles, globos y piñata a su paleta. Al revés se paga más caro y casi nunca coincide.",
    ],
    productos: ["castillo-princesas", "barco-pirata", "dragones-rojos", "mini-jungla"],
    faqs: [
      { question: "¿Qué temáticas de inflable tienen disponibles?", answer: "Cuatro temáticas completas: piratas con el Barco Pirata, princesas con el Castillo de Princesas, dragones y castillos medievales con Dragones Rojos, y selva o safari con la Mini Jungla. El Castillo Blanco es el modelo neutro para eventos formales." },
      { question: "¿El inflable temático incluye decoración adicional?", answer: "La temática es parte del inflable: figuras, colores y elementos decorativos vienen integrados en la estructura. No incluimos globos, mesas ni decoración de salón, pero sí coordinamos con el resto de tu montaje para dejar el inflable en el punto que mejor luce." },
      { question: "¿Cuál inflable temático funciona para niños y niñas?", answer: "Dragones Rojos y Mini Jungla son los más neutros en cuanto a público, y son los que recomendamos cuando la fiesta es de dos hermanos o cuando la lista de invitados es mixta. El Barco Pirata también funciona muy bien en grupos mixtos por su tamaño y su tobogán." },
      { question: "¿Puedo pedir un inflable de un personaje específico?", answer: "Nuestro catálogo es de ocho modelos propios y no fabricamos ni personalizamos temáticas de personajes con licencia. Si buscas una temática concreta, dinos cuál por WhatsApp y te decimos qué modelo se le acerca más." },
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

/** Todas las categorías, ordenadas por prioridad SEO. */
export const CATEGORIAS_POR_PRIORIDAD = [...CATEGORIAS].sort((a, b) => a.prioridad - b.prioridad);

/** Busca una categoría por slug. */
export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

/** Los inflables de una categoría, resueltos contra el catálogo canónico
    y en el orden declarado en `productos`. */
export function inflablesDeCategoria(cat: Categoria): Inflable[] {
  return cat.productos.map((slug) => INFLABLES.find((i) => i.slug === slug)).filter((i): i is Inflable => Boolean(i) && i!.active);
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

/** Slugs de categoría — se usa en el build para verificar que ninguno
    colisiona con un slug de producto de /inflables/[slug].astro. */
export const CATEGORIA_SLUGS = CATEGORIAS.map((c) => c.slug);

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
  return [...fijas, elegida].map((s) => getCategoria(s)).filter((c): c is Categoria => Boolean(c));
}

/** Anchor localizado: "inflables para niños en Coyoacán". */
export function anchorEnZona(cat: Categoria, zonePhrase: string): string {
  return `${cat.anchor} en ${zonePhrase}`;
}
