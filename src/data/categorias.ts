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
    title: "Inflables para niños en renta en CDMX y Estado de México",
    description: "Renta de inflables y juegos inflables para niños de 1 a 12 años en CDMX. Elige por edad, capacidad y espacio disponible. Desde $1,400; traslado según zona.",
    keyword: "inflables para niños",
    anchor:  "inflables para niños",
    intro: [
      "Rentamos inflables para niños en CDMX y Estado de México con cinco modelos que cubren de los 12 meses a los 12 años. Cada juego inflable de esta categoría está pensado para una etapa distinta: altura de paredes, tamaño de la resbaladilla y capacidad simultánea cambian según la edad a la que va dirigido.",
      "El error más común al rentar un brincolín infantil es elegir por diseño y no por edad. Un niño de 3 años no aprovecha una resbaladilla de 3.8 metros, y un grupo de 9 años se aburre en un castillo baby. Aquí puedes filtrar por edad, número de invitados y espacio disponible antes de decidir.",
    ],
    guiaTitle: "Qué inflable elegir según la edad de tu hijo",
    guiaSub:   "La tabla que nadie publica y que decide toda la renta.",
    guia: [
      "De 1 a 3 años el criterio es la contención, no la emoción: el Castillo Baby tiene paredes bajas y permite que un adulto entre a acompañar sin problema. Es el único modelo del catálogo que funciona en fiestas de primer y segundo cumpleaños, donde la mitad de los invitados todavía no camina bien. Dragones Rojos, Castillo de Princesas y Jungla tienen resbaladilla integrada y mallas laterales, que es la combinación que más tiempo mantiene a los niños dentro del inflable.",
      "Cuando la fiesta mezcla edades —primos de 4 y de 10, hermanos con mucha diferencia— el mejor resultado no lo da el inflable más grande sino el que tiene más entradas y salidas. Gusanitos, con 5 metros de largo y varios túneles conectados, distribuye a los niños en lugar de concentrarlos en una sola resbaladilla, que es donde ocurren los empujones. A partir de los 6 años, si el espacio lo permite, conviene revisar la categoría de inflables grandes: la capacidad y el espacio se confirman al cotizar.",
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Desde qué edad puede un niño usar un inflable?", answer: "Desde los 12 meses, siempre con supervisión adulta dentro del área de salto y en un modelo de paredes bajas. El Castillo Baby es el único de nuestro catálogo diseñado para ese rango: mide 2.5×2×2 m y tiene acceso a nivel de piso. Los modelos con resbaladilla se recomiendan a partir de los 3 años." },
      { question: "¿Pueden brincar juntos niños de edades muy distintas?", answer: "Sí, pero conviene separarlos por turnos de 10 a 15 minutos cuando la diferencia supera los 4 años. Un niño de 9 años pesa el doble que uno de 4 y el rebote del piso inflable los desequilibra. En fiestas con edades mezcladas recomendamos Gusanitos, que al tener varios túneles y salidas evita que todos coincidan en el mismo punto." },
      { question: "¿Cuántos niños caben en un inflable infantil?", answer: "La capacidad del Castillo Baby y de los modelos medianos se confirma al cotizar. Si tu lista de invitados pasa de 15 niños, la recomendación no es meter más niños al mismo inflable sino organizar turnos o rentar un modelo grande." },
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
    title: "Renta de castillos inflables en CDMX: 3 modelos",
    description: "Renta de castillos inflables en CDMX: castillo baby para bebés, castillo de princesas y castillo blanco para XV años. Desde $1,400; traslado según zona.",
    keyword: "castillo inflable",
    anchor:  "castillos inflables",
    intro: [
      "Un castillo inflable es el formato clásico de brincolín: torres, almenas y un área de salto cerrada por mallas. Rentamos tres castillos inflables en CDMX y Edomex, y cada uno cubre un tipo de evento distinto — desde el primer cumpleaños hasta una boda.",
      "La diferencia entre ellos no es sólo el tamaño. El Castillo Baby cabe bajo techo, el Castillo de Princesas está construido alrededor de una temática infantil y el Castillo Blanco es un modelo neutro pensado para eventos formales donde el inflable no debe romper la decoración.",
    ],
    guiaTitle: "Cómo elegir entre los tres castillos",
    guiaSub:   "Espacio disponible, edad de los invitados y tipo de evento.",
    guia: [
      "El primer filtro siempre es el espacio libre. El espacio de instalación y la altura libre requerida de cada modelo se confirman al cotizar. Mide tu espacio antes de enamorarte de un modelo, porque el margen perimetral no es negociable — es lo que permite anclar y lo que evita que un niño caiga contra una pared.",
      "El segundo filtro es el tono del evento. Para un cumpleaños de niña de 2 a 10 años el Castillo de Princesas gana por temática: rosa y azul turquesa, torres decorativas y resbaladilla integrada. Para bodas, bautizos y XV años el Castillo Blanco es el único que se integra con la decoración en lugar de competir con ella, y su capacidad se confirma al cotizar. Y si los invitados son bebés, el Castillo Baby no tiene sustituto en el catálogo: es el único con paredes lo bastante bajas para que un adulto supervise desde afuera sin perder de vista a nadie.",
    ],
    productos: ["mini-castillo", "castillo-princesas", "castillo-blanco"],
    faqs: [
      { question: "¿Cuál castillo inflable cabe en un patio de 5×5 metros?", answer: "El Castillo Baby es el candidato, pero el espacio de instalación se confirma al cotizar. El Castillo de Princesas y el Castillo Blanco también requieren confirmación de espacio; ninguno debe instalarse sin validar el margen de seguridad disponible." },
      { question: "¿El Castillo Blanco sirve para XV años y bodas?", answer: "Es exactamente para lo que está diseñado. Es el único modelo del catálogo en color neutro, con torres decorativas y sin personajes infantiles, y su capacidad se confirma al cotizar. Se usa habitualmente en bodas, bautizos y XV años donde hay niños invitados pero la estética del evento es formal." },
      { question: "¿Los castillos inflables traen resbaladilla?", answer: "El Castillo de Princesas y el Castillo Blanco incluyen resbaladilla integrada. El Castillo Baby no la tiene: es un área de salto cerrada, porque a la edad para la que está diseñado —de 1 a 3 años— una resbaladilla añade riesgo sin añadir diversión." },
      { question: "¿Cuánto cuesta rentar un castillo inflable en CDMX?", answer: "Desde $1,400 el Castillo Baby, $1,800 el Castillo de Princesas y $2,600 el Castillo Blanco por evento. Los tres precios incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona. Son precios netos: si necesitas factura se agrega el 16% de IVA." },
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
    h1:   "Inflables Grandes en Renta: Barco Pirata, Extremo y Castillo Blanco",
    title: "Inflables grandes en renta en CDMX y Estado de México",
    description: "Renta de inflables grandes en CDMX: Barco Pirata, Castillo Blanco y Extremo. Edad recomendada de 3 a 12 años; espacio y capacidad se confirman al cotizar.",
    keyword: "inflables grandes",
    anchor:  "inflables grandes",
    intro: [
      "Los inflables grandes de nuestro catálogo son el Barco Pirata (6×3.5×3.80 m), Extremo (8×4.5×3.50 m) y Castillo Blanco (5×7×4 m). Se rentan cuando la lista de invitados hace que los turnos en un inflable mediano se vuelvan demasiado cortos; la capacidad se confirma al cotizar.",
      "El espacio de instalación, la capacidad y la altura libre requerida se confirman al cotizar. Ninguno de los tres entra bajo techo. Antes de cotizar conviene medir el jardín, el patio o el campo donde se va a instalar.",
    ],
    guiaTitle: "Cómo saber si un inflable grande cabe en tu evento",
    guiaSub:   "Metros libres, altura, acceso y toma de corriente.",
    guia: [
      "El espacio de instalación y la altura libre requerida se confirman al cotizar; ese dato define si el modelo cabe con seguridad. Cables de luz, ramas bajas y toldos son el obstáculo que más veces aparece a última hora, y se resuelve mirando hacia arriba antes de apartar la fecha, no el día del evento.",
      "El tercer dato es el acceso. Un inflable grande llega desinflado pero pesa más de 100 kilos y se transporta enrollado, así que necesitamos una entrada de al menos 90 centímetros de ancho y un recorrido sin escalones largos hasta el punto de instalación. Si el evento es en una azotea, un salón en segundo piso o un jardín al que sólo se llega por escaleras, dinos al cotizar: no es un impedimento automático, pero cambia el tiempo de montaje. Por último, la toma de corriente de 110V debe quedar a menos de 20 metros del inflable, porque el motor trabaja de forma continua durante todo el evento.",
    ],
    productos: ["castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Cuánto espacio necesita un inflable grande?", answer: "El espacio de instalación y la altura libre requerida se confirman al cotizar según el modelo y el lugar." },
      { question: "¿Cuál es el inflable más grande que rentan?", answer: "El Barco Pirata, con 6×3.5×3.80 metros. Es el de mayor impacto visual del catálogo, con mástil, velas y tobogán por la popa. Requiere un espacio de instalación y una altura libre que se confirman al cotizar, así que sólo funciona en exteriores amplios." },
      { question: "¿Cuántos niños aguanta un inflable grande al mismo tiempo?", answer: "La capacidad se confirma al cotizar para cada modelo y evento. En el Circuito Extremo se organizan turnos por carril para mantener la pista segura." },
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
    h1:   "Renta de Inflables para Adultos y Adolescentes en CDMX",
    title: "Renta de inflables para adultos en CDMX: eventos y fiestas",
    description: "Renta de inflables para adolescentes en CDMX: circuito extremo, barco pirata y castillo blanco. Para kermeses, eventos de empresa y XV años. Desde $1,400.",
    keyword: "inflables para adultos",
    anchor:  "inflables para adultos",
    intro: [
      "No todos los inflables aguantan adultos. Tres modelos de nuestro catálogo sí: el Circuito Extremo, el Barco Pirata y el Castillo Blanco, construidos con lona reforzada y estructura pensada para peso y altura de adolescente o adulto.",
      "Se rentan sobre todo para kermeses escolares, eventos de empresa, XV años y fiestas donde los invitados grandes acaban usando el inflable más que los niños. Si tu evento es de adolescentes o de team building, esta es la categoría correcta.",
    ],
    guiaTitle: "Cómo elegir un inflable para adultos",
    guiaSub:   "Competencia, capacidad y tipo de evento.",
    guia: [
      "Si lo que buscas es competencia, el Circuito Extremo es el modelo. Sus 8 metros de pista con muros, túneles y tobogán final están divididos en doble carril, lo que permite carreras cabeza a cabeza y convierte al inflable en una actividad con reglas en lugar de un área de salto libre. Es el que mejor funciona en eventos de empresa y kermeses, porque genera público alrededor y turnos naturales. Está recomendado para niños de 3 a 12 años.",
      "Si el evento es formal —una boda, unos XV años, un bautizo con invitados de todas las edades— el Castillo Blanco es la opción sensata: su capacidad se confirma al cotizar y su diseño neutro no compite con la decoración. El Barco Pirata queda en medio: es el de mayor impacto fotográfico y funciona bien en fiestas al aire libre con grupos mixtos de 3 a 12 años. Los tres exigen un adulto supervisando y un límite de personas simultáneas; la capacidad se confirma al cotizar.",
    ],
    productos: ["extremo", "barco-pirata", "castillo-blanco"],
    faqs: [
      { question: "¿Cuánto peso soporta el Circuito Extremo?", answer: "Está fabricado con lona vinílica de grado comercial. El peso máximo y la capacidad se confirman al cotizar; respetar los turnos por carril es lo que mantiene la pista segura." },
      { question: "¿Se puede usar un inflable en una kermés escolar?", answer: "Sí, es uno de los usos más frecuentes del Circuito Extremo y del Barco Pirata. Para kermeses recomendamos organizar turnos por grupo o por grado y designar a un adulto por inflable. A partir de tres inflables en el mismo evento incluimos coordinador de logística sin costo adicional." },
      { question: "¿Sirven para eventos de empresa o team building?", answer: "El Circuito Extremo es el que más se contrata para eso: el doble carril permite armar torneos por equipos y el recorrido de obstáculos funciona como dinámica sin necesidad de facilitador. Cotizamos también paquetes multi-inflable para eventos corporativos." },
      { question: "¿Qué rango de edad tienen estos inflables?", answer: "El Barco Pirata, el Circuito Extremo y el Castillo Blanco están recomendados para niños de 3 a 12 años. La capacidad se confirma al cotizar y siempre deben usarse con supervisión adulta, sin calzado, objetos punzantes ni bebidas." },
      { question: "¿Puedo rentar un inflable para adolescentes en una fiesta en departamento?", answer: "No. Los tres modelos de esta categoría requieren un espacio de instalación y una altura libre que se confirman al cotizar, así que sólo funcionan en exteriores. Si tu evento es bajo techo, revisa la categoría de inflables para interiores." },
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
    title: "Inflables pequeños en renta para fiestas chicas en CDMX",
    description: "Renta de inflables pequeños en CDMX desde $1,400. El espacio de instalación se confirma al cotizar; son ideales para departamentos, patios y fiestas de pocos niños. Traslado según zona.",
    keyword: "inflables pequeños",
    anchor:  "inflables pequeños",
    intro: [
      "Los inflables pequeños son la respuesta cuando el problema no es el presupuesto sino el espacio. Rentamos dos modelos que funcionan en patios chicos, terrazas y salones: el Castillo Baby y Gusanitos, cuyo espacio de instalación se confirma al cotizar.",
      "Son también los modelos correctos para fiestas de pocos invitados. Si el grupo es reducido, un inflable grande no mejora la fiesta: sólo encarece la renta y complica la instalación. Aquí el criterio es proporción, no tamaño máximo; la capacidad se confirma al cotizar.",
    ],
    guiaTitle: "Cómo elegir un inflable pequeño",
    guiaSub:   "Metros reales, forma del espacio y edad de los invitados.",
    guia: [
      "El Castillo Baby mide 2.5×2×2 metros y su espacio de instalación se confirma al cotizar. Es el único modelo del catálogo que entra en la sala de un departamento, en una terraza techada o en un patio de vecindad. Su rango es de 1 a 3 años. Si tus invitados tienen 7 años, se les queda chico en quince minutos.",
      "Gusanitos resuelve el caso contrario: un espacio que no es cuadrado. Con base de 5×3×2.80 metros, cabe en pasillos de jardín, patios largos y estacionamientos, y funciona con niños de 2 a 8 años. Su altura libre requerida se confirma al cotizar, igual que la del Castillo Baby, así que hay que validar si entra bajo techo. Entre los dos cubren el rango completo de fiestas chicas: uno por edad mínima, el otro por forma del terreno. Si tu espacio es amplio, conviene comparar con la categoría de inflables medianos antes de decidir.",
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Cuál es el inflable más pequeño que rentan?", answer: "El Castillo Baby: 2.5×2×2 metros de inflable. El espacio de instalación se confirma al cotizar. Es el más económico del catálogo, desde $1,400 por evento, y el único diseñado específicamente para niños de 1 a 3 años." },
      { question: "¿Cabe un inflable en el patio de un departamento?", answer: "El Castillo Baby puede funcionar en un departamento si la altura libre y el acceso son adecuados; el espacio se confirma al cotizar. Gusanitos entra si el espacio es alargado. Mándanos las medidas por WhatsApp y te confirmamos antes de que apartes la fecha." },
      { question: "¿Un inflable pequeño es más barato?", answer: "Sí, pero por tamaño y capacidad, no por menor calidad ni menor servicio. El Castillo Baby cuesta $1,400 y Gusanitos $1,600; ambos incluyen instalación, motor inflador, sanitización y recolección; el traslado se cotiza según zona." },
      { question: "¿Cuántos niños caben en un inflable pequeño?", answer: "La capacidad del Castillo Baby y Gusanitos se confirma al cotizar. Si tu fiesta tiene más de 10 niños brincando al mismo tiempo, la solución no es un inflable pequeño con turnos largos: es un modelo mediano o grande." },
      { question: "¿Se puede instalar un inflable pequeño en interiores?", answer: "Sí, el Castillo Baby y Gusanitos son los modelos aptos para interiores. La altura libre requerida y el espacio de instalación se confirman al cotizar; revisa la categoría de inflables para interiores, donde explicamos acceso y requisitos de piso." },
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
    title: "Renta de toboganes inflables en CDMX y Estado de México",
    description: "Renta de toboganes inflables en CDMX: barco pirata, circuito extremo y jungla con resbaladilla. Desde $1,400; traslado según zona.",
    keyword: "tobogán inflable",
    anchor:  "toboganes inflables",
    intro: [
      "Un tobogán inflable cambia la dinámica de la fiesta: en lugar de saltar en un mismo punto, los niños hacen fila, suben y bajan, y se genera un circuito que se sostiene solo durante horas. Rentamos tres modelos con resbaladilla de altura real en CDMX y Estado de México.",
      "Los tres son de exterior. La resbaladilla es justamente lo que sube la altura total del inflable por encima de lo que admite un techo estándar, así que si tu evento es en salón cerrado esta no es la categoría.",
    ],
    guiaTitle: "Qué diferencia a un tobogán de una resbaladilla integrada",
    guiaSub:   "Altura de caída, longitud de deslizamiento y edad mínima.",
    guia: [
      "El Barco Pirata tiene el tobogán más largo del catálogo: baja por la popa desde 3.80 metros de altura total, con caída amplia y zona de frenado en la base. Es el que produce fila y el que más se fotografía. Su espacio de instalación y la altura libre requerida se confirman al cotizar, así que asume jardín o campo abierto. Está recomendado para niños de 3 a 12 años, porque el niño necesita poder subir por su cuenta.",
      "El Circuito Extremo termina en un tobogán de doble carril, pensado para competencia más que para deslizamiento: dos niños bajan al mismo tiempo tras recorrer los obstáculos. Es el modelo para niños de 3 a 12 años. La Jungla, en cambio, integra una resbaladilla más corta dentro del área de salto: no es un tobogán independiente, es la opción para niños de 3 a 8 años que todavía no manejan una caída alta. Elegir entre los tres es elegir altura: la emoción del circuito o una bajada corta y controlada para los pequeños.",
    ],
    productos: ["mini-jungla", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Qué altura tiene el tobogán inflable más grande?", answer: "El Barco Pirata mide 6×3.5×3.80 metros y su tobogán baja desde la popa. La altura libre requerida se confirma al cotizar en el sitio de instalación, contando ramas, cables y toldos." },
      { question: "¿A partir de qué edad puede un niño usar un tobogán inflable?", answer: "El Barco Pirata y el Circuito Extremo están recomendados para niños de 3 a 12 años. La Jungla, con resbaladilla corta integrada, también es para niños de 3 a 8 años." },
      { question: "¿Los toboganes inflables se usan con agua?", answer: "No. Nuestros modelos son de uso en seco: la lona no está diseñada para deslizamiento con agua y mojarla vuelve peligroso el frenado y el anclaje. Tampoco se deben usar con lluvia por la misma razón." },
      { question: "¿Cuántos niños pueden bajar al mismo tiempo?", answer: "Uno por carril y siempre esperando a que el anterior haya salido de la zona de frenado. El Circuito Extremo tiene doble carril, así que permite dos bajadas simultáneas. En el Barco Pirata la regla es un niño a la vez en el tobogán; la capacidad del inflable se confirma al cotizar." },
      { question: "¿Puedo instalar un tobogán inflable bajo techo?", answer: "No con estos modelos. La altura libre requerida se confirma al cotizar y estos tres están diseñados para exteriores. Si tu evento es en salón cerrado, revisa la categoría de inflables para interiores." },
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
    title: "Inflables para interiores y salones en renta en CDMX",
    description: "Renta de inflables aptos para interiores en CDMX. Castillo Baby y Gusanitos caben en salones y espacios techados. Medidas exactas y altura mínima.",
    keyword: "inflables para interiores",
    anchor:  "inflables para interiores",
    intro: [
      "De los ocho modelos del catálogo, sólo dos son aptos para interiores: el Castillo Baby y Gusanitos. La altura libre requerida y el espacio de instalación se confirman al cotizar; valida ambos datos en un salón de fiestas, una terraza techada o un departamento con losa alta.",
      "Esta página existe porque es la primera pregunta de quien celebra en salón y nadie la contesta con números. Aquí están las medidas exactas, la altura mínima, el ancho de acceso y los requisitos de piso para instalar un inflable en interiores en CDMX y Edomex.",
    ],
    guiaTitle: "Requisitos reales para instalar un inflable bajo techo",
    guiaSub:   "Altura libre, acceso, piso y toma de corriente.",
    guia: [
      "La altura libre es un filtro importante para interiores. Se mide del piso al punto más bajo del techo en el área de instalación, y hay que descontar lámparas colgantes, ventiladores, ductos y trabes. La altura libre requerida del Castillo Baby y Gusanitos se confirma al cotizar, junto con el espacio de instalación. Si tu salón tiene techo bajo, comparte las medidas antes de reservar.",
      "El segundo requisito es el acceso: el inflable llega enrollado y necesita una puerta de al menos 90 centímetros de ancho y un recorrido sin escalones estrechos. El piso debe estar seco, sin vidrio ni objetos punzantes, y como en interiores no se puede estacar, anclamos con contrapesos que llevamos siempre. Finalmente, la toma de 110V debe quedar a menos de 20 metros del inflable y no compartirse con el equipo de sonido. Si el evento es en un salón que ya tienes apartado, consulta también nuestro directorio de salones: en varios de ellos ya conocemos el acceso y la altura.",
    ],
    productos: ["mini-castillo", "gusanitos"],
    faqs: [
      { question: "¿Qué altura libre necesito para un inflable en interiores?", answer: "La altura libre requerida se confirma al cotizar, medida del piso al punto más bajo del techo y descontando lámparas, ventiladores y trabes. El Castillo Baby y Gusanitos son los dos modelos del catálogo aptos para instalación bajo techo." },
      { question: "¿Pasa el inflable por una puerta estándar?", answer: "Sí. Llega desinflado y enrollado, y necesita un acceso de al menos 90 centímetros de ancho. Lo que sí conviene avisarnos al cotizar son escaleras, pasillos con vuelta cerrada o elevadores pequeños, porque cambian el tiempo de montaje." },
      { question: "¿Cómo se ancla un inflable si no se puede estacar el piso?", answer: "Con contrapesos, que forman parte del equipo estándar de instalación. En interiores, loseta, cemento o pasto artificial nunca perforamos el piso. El anclaje con contrapesos es igual de seguro siempre que respetemos el metro de margen perimetral." },
      { question: "¿Cuánto ruido hace el motor dentro de un salón?", answer: "El motor inflador es silencioso pero trabaja de forma continua, y en un espacio cerrado se nota más que al aire libre. Lo colocamos en el punto más alejado de las mesas y del área de sonido. En un salón con música en vivo no representa ninguna molestia." },
      { question: "¿Puedo instalar un inflable en un departamento?", answer: "El Castillo Baby puede funcionar si la altura libre y el acceso son adecuados; el espacio se confirma al cotizar. Es su caso de uso más frecuente en CDMX para primeros cumpleaños. Gusanitos también requiere confirmar el espacio antes de reservar." },
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
    title: "Renta de brincolines para niños en CDMX: 8 modelos",
    description: "Renta de brincolines e inflables para fiestas en CDMX y Edomex. Catálogo con 8 modelos. Instalación y recolección incluidas; traslado según zona.",
    keyword: "renta de brincolines",
    anchor:  "renta de brincolines",
    intro: [
      "Brincolín, inflable, castillo o saltarín: en México todos nombran lo mismo. Esta página reúne los ocho modelos que rentamos en CDMX y Estado de México, de $1,400 a $2,600 por evento, con instalación y recolección incluidas; el traslado se cotiza según zona.",
      "Si ya sabes qué tipo de brincolín buscas, conviene entrar por categoría —tamaño, tipo o público— en lugar de recorrer el catálogo completo. Si todavía no lo tienes claro, esta es la vista general con todos los modelos comparados.",
    ],
    guiaTitle: "Cómo elegir un brincolín para tu fiesta",
    guiaSub:   "Tres decisiones en orden: espacio, edad y número de invitados.",
    guia: [
      "El orden importa. Primero valida el espacio libre: es el único dato que no puedes cambiar y el que descarta modelos de inmediato. El espacio de instalación se confirma al cotizar para cada modelo. Anota también la altura libre si el evento es bajo techo o hay cables y ramas encima del área.",
      "Segundo, la edad del cumpleañero y de la mayoría de los invitados: de 1 a 3 años el Castillo Baby, de 3 a 8 los medianos, de 3 a 12 el Circuito Extremo, y para eventos con grupos mixtos el Castillo Blanco o el Barco Pirata. Tercero, la capacidad simultánea, que no es el total de invitados: se confirma al cotizar. Con esas tres respuestas la elección suele reducirse a dos modelos, y a partir de ahí decide la temática.",
    ],
    productos: ["mini-castillo", "dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos", "castillo-blanco", "barco-pirata", "extremo"],
    faqs: [
      { question: "¿Qué incluye la renta de un brincolín?", answer: "Instalación profesional, motor inflador, sanitización antes del evento y recolección al finalizar. El precio publicado es neto: si necesitas factura se agrega el 16% de IVA, y el traslado se cotiza según zona." },
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
    title: "Inflables medianos en renta en CDMX y Estado de México",
    description: "Renta de inflables medianos en CDMX: Dragones Rojos, Castillo de Princesas, Jungla y Gusanitos desde $1,600. Espacio y capacidad se confirman al cotizar.",
    keyword: "inflables medianos",
    anchor:  "inflables medianos",
    intro: [
      "Los inflables medianos son los que más se rentan en CDMX por una razón práctica: funcionan bien en jardines y patios, mientras que el espacio de instalación y la capacidad se confirman al cotizar.",
      "Son cuatro modelos —Dragones Rojos, Castillo de Princesas, Jungla y Gusanitos— que comparten capacidad y rango de edad pero se diferencian por temática y por la forma del espacio que necesitan.",
    ],
    guiaTitle: "Cómo elegir entre los cuatro medianos",
    guiaSub:   "Cuando la capacidad es la misma, deciden la forma y el tema.",
    guia: [
      "Tres de los cuatro comparten formato: Dragones Rojos mide 5×3×2.80 m, Castillo de Princesas 5×3.30×3 m y Jungla 5×3×2.50 m. El espacio de instalación y la altura libre requerida se confirman al cotizar. Entre ellos decide la temática: Dragones Rojos es el más rentado y funciona con público mixto, el Castillo de Princesas es el favorito en cumpleaños de niñas, y la Jungla es la opción de safari, dinosaurios y naturaleza.",
      "Gusanitos mide 5×3×2.80 m y su forma alargada funciona bien en patios rectangulares. El espacio de instalación, la capacidad y la altura libre requerida se confirman al cotizar; es apto para interiores. Si tu espacio es alargado o techado, Gusanitos es la respuesta directa.",
    ],
    productos: ["dragones-rojos", "castillo-princesas", "mini-jungla", "gusanitos"],
    faqs: [
      { question: "¿Qué se considera un inflable mediano?", answer: "En nuestro catálogo, un modelo con base entre 5×3 y 5×3.30 metros, con capacidad que se confirma al cotizar y precio de $1,600 a $1,800. Son Dragones Rojos, Castillo de Princesas, Jungla y Gusanitos." },
      { question: "¿Cuál es el inflable mediano más rentado?", answer: "Dragones Rojos. Su combinación de resbaladilla integrada, mallas de seguridad y temática que funciona con niños y niñas lo convierte en el modelo más solicitado del catálogo en CDMX y Estado de México." },
      { question: "¿Cuánto espacio necesita un inflable mediano?", answer: "El espacio de instalación y la altura libre requerida se confirman al cotizar según el modelo y el lugar." },
      { question: "¿Un inflable mediano sirve para una fiesta de 20 niños?", answer: "Sí, organizando turnos. La capacidad simultánea se confirma al cotizar. Si prefieres que estén todos dentro al mismo tiempo, consulta un modelo grande." },
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
    title: "Renta de circuitos inflables con obstáculos en CDMX",
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
      "El Circuito Extremo está construido para competir. Sus 8 metros de pista incluyen muros para escalar, túneles de arrastre y un tobogán final dividido en dos carriles, de modo que dos participantes recorren el trayecto al mismo tiempo. Ese formato genera público, turnos y ganadores, y es lo que lo hace el modelo más contratado para kermeses escolares, eventos de empresa y fiestas de adolescentes. Está recomendado para niños de 3 a 12 años y su capacidad se confirma al cotizar.",
      "Gusanitos aplica la misma lógica a una edad menor. Sus túneles de colores conectados con varias entradas y salidas forman un recorrido de exploración, no una carrera: los niños de 2 a 8 años entran, se cruzan y salen por puntos distintos, lo que reparte el grupo en lugar de concentrarlo. Además es más bajo —2.80 metros— y apto para interiores, así que funciona en salones donde el Circuito Extremo no cabe. Si el evento es competitivo y al aire libre, Extremo; si es infantil, mixto o bajo techo, Gusanitos.",
    ],
    productos: ["extremo", "gusanitos"],
    faqs: [
      { question: "¿Qué obstáculos tiene el circuito inflable?", answer: "El Circuito Extremo incluye muros para escalar, túneles de arrastre, rampas y un tobogán final de doble carril, a lo largo de 8 metros de pista. Gusanitos es un recorrido de túneles conectados con varias entradas y salidas, sin muros ni caídas." },
      { question: "¿Se pueden hacer carreras con dos participantes a la vez?", answer: "Sí, es el diseño del Circuito Extremo: doble carril paralelo para que dos personas recorran el trayecto simultáneamente y lleguen al tobogán final al mismo tiempo. Admite de 2 a 4 personas por carril por turno." },
      { question: "¿Sirve un circuito inflable para una kermés escolar?", answer: "Es uno de sus usos más frecuentes. Genera fila ordenada y turnos cortos, que es justo lo que se necesita cuando hay cientos de niños. Recomendamos un adulto encargado del inflable y turnos por grado o por grupo." },
      { question: "¿Qué espacio necesita un circuito de obstáculos inflable?", answer: "El espacio de instalación y la altura libre requerida se confirman al cotizar. El Circuito Extremo sólo se instala en exteriores; Gusanitos puede instalarse bajo techo." },
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
    title: "Inflables temáticos en renta en CDMX: piratas y princesas",
    description: "Renta de inflables temáticos en CDMX: barco pirata, castillo de princesas, dragones y jungla. El inflable como decoración central de la fiesta.",
    keyword: "inflables temáticos",
    anchor:  "inflables temáticos",
    intro: [
      "Cuando la fiesta tiene tema, el inflable es la pieza de decoración más grande del evento y la que aparece en todas las fotos. Cuatro modelos de nuestro catálogo están construidos alrededor de una temática completa, no sólo pintados de colores.",
      "Barco pirata, princesas, dragones y selva cubren las cuatro temáticas más pedidas en fiestas infantiles en CDMX. Elegir el inflable que coincide con el tema ahorra buena parte del presupuesto de decoración.",
    ],
    guiaTitle: "Cómo hacer que el inflable sostenga la temática",
    guiaSub:   "Coherencia visual, punto fotográfico y presupuesto de decoración.",
    guia: [
      "El Barco Pirata es el más literal: mástil, velas y casco de barco de 6 metros de largo. Puesto a la entrada del evento funciona como arco de bienvenida y como fondo de fotos, y con eso una fiesta pirata queda resuelta visualmente sin comprar un solo adorno más. El Castillo de Princesas cumple el mismo papel en rosa y azul turquesa, con torres decorativas que combinan con globos del mismo tono y son el punto natural para la mesa de pastel.",
      "Dragones Rojos y Jungla son las opciones para temáticas de aventura. Los dos dragones de tres metros del primero funcionan igual de bien para una fiesta medieval, de caballeros o de dinosaurios; la Jungla, con animales y palmeras, cubre safari, selva y exploradores. En los cuatro casos el criterio práctico es el mismo: elige primero el inflable temático, porque es la pieza que no puedes modificar, y después ajusta manteles, globos y piñata a su paleta. Al revés se paga más caro y casi nunca coincide.",
    ],
    productos: ["castillo-princesas", "barco-pirata", "dragones-rojos", "mini-jungla"],
    faqs: [
      { question: "¿Qué temáticas de inflable tienen disponibles?", answer: "Cuatro temáticas completas: piratas con el Barco Pirata, princesas con el Castillo de Princesas, dragones y castillos medievales con Dragones Rojos, y selva o safari con la Jungla. El Castillo Blanco es el modelo neutro para eventos formales." },
      { question: "¿El inflable temático incluye decoración adicional?", answer: "La temática es parte del inflable: figuras, colores y elementos decorativos vienen integrados en la estructura. No incluimos globos, mesas ni decoración de salón, pero sí coordinamos con el resto de tu montaje para dejar el inflable en el punto que mejor luce." },
      { question: "¿Cuál inflable temático funciona para niños y niñas?", answer: "Dragones Rojos y Jungla son los más neutros en cuanto a público, y son los que recomendamos cuando la fiesta es de dos hermanos o cuando la lista de invitados es mixta. El Barco Pirata también funciona muy bien en grupos mixtos por su tamaño y su tobogán." },
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
  return [...fijas, elegida]
.map((s) => getCategoria(s))
.filter((c): c is Categoria => Boolean(c));
}

/** Anchor localizado: "inflables para niños en Coyoacán". */
export function anchorEnZona(cat: Categoria, zonePhrase: string): string {
  return `${cat.anchor} en ${zonePhrase}`;
}
