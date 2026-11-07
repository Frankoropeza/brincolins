/**
 * Contenido editorial por página de producto — BRINCOLINS
 * ────────────────────────────────────────────────────────
 * Consumido por src/pages/inflables/[slug].astro (jul 2026). Antes cada
 * producto era un .astro de ~240 líneas con la MISMA plantilla copiada 8
 * veces (~1,900 líneas). Los datos duros (precio, medidas, edades) siguen
 * viniendo de data/inflables.ts — aquí solo vive el contenido editorial
 * que varía entre productos: copys, galería, paquetes, FAQs y relacionados.
 *
 * Para agregar un producto nuevo: entrada aquí + entrada en inflables.ts.
 * La URL /inflables/<slug>/ se genera sola.
 */

import { PRICE_NOTE } from "./inflables";

export interface GalleryImage { src: string; alt: string; }
export interface PricingFeature { text: string; included: boolean; }
export interface PricingPackage {
  name: string;
  badge?: string;
  highlight?: boolean;
  price: string;
  priceNote?: string;
  description: string;
  features: PricingFeature[];
  ctaHref: string;
  ctaLabel?: string;
}
export interface FaqEntry { question: string; answer: string; }
export interface RelatedCard {
  slug: string; name: string; description: string; price: string;
  size: string; ages: string; category: string; categoryColor: string;
  image: string;
}
export interface SectionCopy { copy1: string; copy2: string; }
/** Enlace interno con nota de contexto (guías del blog y zonas). */
export interface EnlaceNota { slug: string; anchor: string; nota: string; }
/** Contenido comercial propio de cada ficha (nov 2026). Todo lo que es
    cifra (precio, medidas, altura libre, edades) debe coincidir con
    data/inflables.ts; el envío por zona se lee de data/coverage.ts. */
export interface ProductoDetalle {
  /** H1: "<antes> <nombre del modelo> <despues>" (el nombre va resaltado). */
  h1: { antes: string; despues: string };
  /** Respuesta directa del primer pantallazo (40–60 palabras). */
  resumen: string;
  paraQuien: string;
  espacio: string;
  instalacion: string;
  incluye: string;
  ideas: { titulo: string; texto: string }[];
  /** Comparación con el modelo hermano más cercano (slug de /inflables/). */
  comparacion: { slug: string; nombre: string; texto: string };
  /** Slugs de /cobertura/<slug>/ con nota de logística. */
  zonas: EnlaceNota[];
  /** Slugs de /blog/<slug>/. */
  guias: EnlaceNota[];
}
export interface ProductoPagina {
  /** <title> y meta description de la página */
  title: string;
  description: string;
  /** Texto del hero__badge */
  badge: string;
  /** Label del CTA primario del hero y del CtaBanner final */
  cta: string;
  galeria: SectionCopy;
  precios: SectionCopy;
  relacionados: SectionCopy;
  galleryImages: GalleryImage[];
  pricingPackages: PricingPackage[];
  faqItems: FaqEntry[];
  cards: RelatedCard[];
  detalle?: ProductoDetalle;
}

export const PRODUCTOS_PAGINAS: Record<string, ProductoPagina> = {
  "barco-pirata": {
    title: "Renta de Barco Pirata inflable con tobogán desde $2,300",
    description: "Barco Pirata inflable con tobogán: $2,300 MXN por 4 a 6 horas con instalación, motor y recolección. Para niños y adultos al aire libre. Cotiza tu fecha.",
    badge: "Aventura pirata de gran tamaño",
    cta: "Cotizar Barco Pirata",
    galeria: {
      copy1: "El Barco Pirata impresiona desde cualquier ángulo: su imponente estructura de 3.80 metros de altura con ancla, banderas piratas y franjas morada, negra, verde y azul lo convierte en el centro de atención de cualquier evento al aire libre.",
      copy2: "Míralo desde todos los ángulos y en detalle: la proa con el ancla, el mástil con su cofa y cañón, el túnel lateral y la rampa de acceso. Así sabes exactamente cómo luce armado antes de reservar.",
    },
    precios: {
      copy1: "El Barco Pirata es ideal para fiestas grandes donde necesitas una atracción que mantenga entretenidos a varios niños al mismo tiempo. Sus 6 metros de largo y el tobogán integrado lo convierten en uno de los modelos de mayor impacto del catálogo.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con instalación profesional y recolección incluidos; el traslado se cotiza según zona. Sin costos ocultos ni cargos extra el día del evento. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/barco-pirata/barco-pirata-tres-cuartos-jardin-casa.avif", alt: "Barco Pirata inflable visto desde la proa en jardín de casa en CDMX" },
      { src: "/img/inflables/barco-pirata/barco-pirata-perfil-jardin-eventos.avif", alt: "Barco Pirata inflable de perfil en jardín de eventos" },
      { src: "/img/inflables/barco-pirata/barco-pirata-popa-rampa-acceso.avif", alt: "Barco Pirata inflable visto desde la popa con rampa de acceso" },
      { src: "/img/inflables/barco-pirata/barco-pirata-detalle-mastil.avif", alt: "Detalle del mástil con cofa, cañón, bandera y loro del Barco Pirata inflable" },
      { src: "/img/inflables/barco-pirata/barco-pirata-detalle-proa-ancla.avif", alt: "Detalle de la proa del Barco Pirata inflable con ancla y franjas de colores" },
      { src: "/img/inflables/barco-pirata/barco-pirata-cochera-privada.avif", alt: "Barco Pirata inflable en cochera de casa en privada" },
      { src: "/img/inflables/barco-pirata/barco-pirata-patio-escolar-cdmx.avif", alt: "Barco Pirata inflable en patio de escuela en CDMX" },
      { src: "/img/inflables/barco-pirata/barco-pirata-jardin-atardecer.avif", alt: "Barco Pirata inflable en jardín de salón de eventos al atardecer" },
      { src: "/img/inflables/barco-pirata/barco-pirata-vista-aerea-cubierta.avif", alt: "Barco Pirata inflable visto desde arriba con cubierta, torres y rampa de acceso" },
    ],
    pricingPackages: [
      {
        name: "Renta del Barco Pirata",
        price: "$2,300",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Barco Pirata 6×3.5×3.80m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Barco Pirata",
      },
    ],
    faqItems: [
      { question: "¿Pueden subir adultos al Barco Pirata?", answer: "Sí. Es uno de los tres modelos del catálogo que admiten adultos, junto con el Extremo y el Castillo Blanco. Lo recomendable es hacer turnos separados de niños y adultos para que nadie brinque junto a alguien mucho más pesado, siempre con una persona adulta supervisando desde afuera." },
      { question: "¿Cómo funciona el tobogán del Barco Pirata?", answer: "Los niños suben por el interior del barco y bajan deslizándose por el tobogán integrado. Para que funcione seguro, pide que bajen sentados, de uno en uno y que nadie se quede parado al pie del tobogán. Un adulto en la salida basta para mantener el orden." },
      { question: "¿Se puede instalar el Barco Pirata sobre cemento o adoquín?", answer: "Sí. En pasto lo anclamos con estacas y en cemento, adoquín o loseta usamos sacos de arena. La superficie debe ser plana y sin vidrios ni objetos punzantes; si tu patio tiene desnivel, mándanos una foto antes de apartar." },
      { question: "¿El Barco Pirata cabe en un salón de fiestas?", answer: "Casi nunca. Mide 3.80 m de alto y pide 5.2 m de altura libre, así que está pensado para exterior: jardín, patio amplio, quinta o explanada. Si tu evento es bajo techo, los modelos indicados son el Castillo Baby y el Gusanitos." },
      { question: "¿Sirve el Barco Pirata para una kermés o evento escolar?", answer: "Sí. El tobogán genera un flujo continuo de niños y el rango de 3 a 12 años cubre preescolar y primaria. Conviene armar turnos por grupo y dejar a un adulto en la salida del tobogán. Si la escuela necesita factura, se agrega el 16% de IVA." },
      { question: "¿Dónde pongo la decoración pirata alrededor del barco?", answer: "La mesa de dulces, la zona de fotos y los globos van a un costado del barco, nunca frente a la salida del tobogán. No amarres decoración al inflable con grapas, alambre o cinta: cualquier objeto punzante puede dañar la lona." },
    ],
    detalle: {
      h1: { antes: "Renta de inflable", despues: "con tobogán para fiestas" },
      resumen: "El Barco Pirata es un inflable de 6 × 3.5 m con mástil, velas y tobogán para fiestas al aire libre de niños de 3 a 12 años; también lo pueden usar adultos. La renta cuesta $2,300 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Funciona mejor en cumpleaños de 5 a 12 años con muchos invitados, en reuniones de primos con edades mezcladas y en eventos familiares donde los adultos también quieren subir. Es de los tres modelos del catálogo que admiten adultos, junto con el Extremo y el Castillo Blanco, así que también sirve en convivios de empresa o fiestas de adolescentes. Para menores de 3 años no es la mejor opción: el tobogán está pensado para niños que ya suben y bajan solos.",
      espacio: "Mide 6 m de largo, 3.5 m de ancho y 3.80 m de alto, y necesita 5.2 m de altura libre. Por eso se instala solo en exterior: jardín, patio amplio, quinta, explanada o terraza descubierta. Revisa que sobre el área no haya cables, ramas ni toldos, y que frente al tobogán quede espacio despejado para la llegada de los niños.",
      instalacion: "El montaje toma unos 30 minutos y llegamos antes de que empiece la fiesta. Extendemos el barco, lo anclamos con estacas en pasto o con sacos de arena en cemento y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar las 4 a 6 horas lo desinflamos y lo recogemos; tú no cargas nada.",
      incluye: "Barco Pirata sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Si necesitas factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Fiesta pirata clásica", texto: "Mapa del tesoro, parches y monedas de chocolate: el barco se vuelve el escenario de la búsqueda y del abordaje final." },
        { titulo: "Sirenas y piratas", texto: "Para hermanos o primos con gustos distintos: el barco al centro y la mesa de dulces en tonos aqua." },
        { titulo: "Cumpleaños de 10 a 12 años", texto: "Turnos cronometrados en el tobogán y retos por equipos; a esa edad el barco sigue siendo un desafío." },
        { titulo: "Convivio familiar o de empresa", texto: "Como admite adultos, padres e hijos pueden subir en turnos separados durante la misma tarde." },
      ],
      comparacion: { slug: "extremo", nombre: "Extremo", texto: "El Barco Pirata es más compacto (6 m contra 8 m de largo) y más temático: es un escenario para fiesta pirata con tobogán. El Extremo es un circuito de obstáculos de doble carril pensado para competir, ideal en kermeses y eventos con muchos participantes. Si el espacio es justo o la fiesta tiene temática, elige el barco; si buscas carreras, el Extremo." },
      zonas: [
        { slug: "huixquilucan", anchor: "Renta del Barco Pirata en Huixquilucan", nota: "Casas con jardín amplio; confirma el acceso del vehículo si es fraccionamiento." },
        { slug: "naucalpan", anchor: "Barco Pirata en Naucalpan y Satélite", nota: "Patios y jardines residenciales; el traslado se cotiza por colonia." },
        { slug: "coyoacan", anchor: "inflables grandes en Coyoacán", nota: "Jardines de casa y quintas; revisa ramas y cables sobre el área." },
        { slug: "tlalpan", anchor: "renta de inflables en Tlalpan y el sur", nota: "Jardines con pasto, donde el anclaje con estacas es más firme." },
      ],
      guias: [
        { slug: "fiesta-pirata-infantil-tobogan-cdmx", anchor: "Guía de fiesta pirata infantil con tobogán", nota: "Decoración, juegos y comida alrededor del barco." },
        { slug: "barco-pirata-o-extremo-inflables-grandes", anchor: "¿Barco Pirata o Extremo?", nota: "Comparativa de los dos inflables grandes." },
        { slug: "reglas-de-uso-tobogan-inflable-ninos", anchor: "Reglas de uso del tobogán inflable", nota: "Cómo organizar turnos y la bajada." },
        { slug: "medidas-de-inflables-para-fiestas-tabla", anchor: "Tabla de medidas de inflables", nota: "Para medir tu jardín antes de apartar." },
        { slug: "fiesta-de-sirenas-y-piratas-con-inflable", anchor: "Fiesta de sirenas y piratas", nota: "Ideas para una temática compartida." },
      ],
    },
    cards: [
      { slug: "extremo", name: "Extremo", description: "Circuito de 8m con obstáculos y tobogán doble.", price: "$2,500", size: "8×4.5×3.50m", ages: "3-12 años", category: "Extremo", categoryColor: "extremo", image: "/img/inflables/extremo.avif" },
      { slug: "castillo-blanco", name: "Castillo Blanco", description: "Elegante para bodas, bautizos y XV años.", price: "$2,600", size: "5×7×4m", ages: "3-12 años", category: "Bodas", categoryColor: "bodas", image: "/img/inflables/castillo-blanco.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Castillo", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
    ],
  },
  "castillo-blanco": {
    title: "Renta de castillo inflable blanco para bodas y XV $2,600",
    description: "Castillo inflable blanco para bodas, XV años y bautizos: $2,600 MXN por 4 a 6 horas con instalación, motor y recolección. Admite adultos. Cotiza tu fecha.",
    badge: "Premium para bodas y eventos elegantes",
    cta: "Cotizar Castillo Blanco",
    galeria: {
      copy1: "El Castillo Blanco se ve espectacular en bodas, bautizos y quinceañeras. Estas fotos muestran cómo nuestros clientes lo han integrado en eventos elegantes con decoraciones de flores, globos y tules que complementan el diseño blanco puro.",
      copy2: "Míralo desde varios ángulos y en detalle: columnas con remate cónico, paredes acolchadas y base perimetral, todo en blanco. Así sabes cómo luce armado antes de reservar.",
    },
    precios: {
      copy1: "El Castillo Blanco es un inflable premium con acabados superiores, pensado para eventos donde la estética importa tanto como la diversión. La renta incluye sanitización para mantener el blanco impecable.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con instalación profesional y recolección incluidos; el traslado se cotiza según zona. Coordinamos la hora de montaje con el venue para no interferir con la logística del evento.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/castillo-blanco/castillo-blanco-terraza-jardin-bodas.avif", alt: "Castillo Blanco inflable en terraza jardín de salón de bodas" },
      { src: "/img/inflables/castillo-blanco/castillo-blanco-frontal-hacienda.avif", alt: "Castillo Blanco inflable de frente en jardín de hacienda para bodas" },
      { src: "/img/inflables/castillo-blanco/castillo-blanco-perfil-lateral.avif", alt: "Castillo Blanco inflable visto de perfil sobre pasto" },
      { src: "/img/inflables/castillo-blanco/castillo-blanco-vista-aerea-jardin.avif", alt: "Castillo Blanco inflable visto desde arriba sobre pasto" },
      { src: "/img/inflables/castillo-blanco/castillo-blanco-jardin-bodas-atardecer.avif", alt: "Castillo Blanco inflable en jardín de bodas al atardecer" },
      { src: "/img/inflables/castillo-blanco/castillo-blanco-detalle-columna.avif", alt: "Detalle de columna y paredes acolchadas del Castillo Blanco inflable" },
      { src: "/img/inflables/castillo-blanco/alquiler-castillo-blanco-bodas-terraza-cdmx.avif", alt: "Renta inflable Castillo Blanco en CDMX - bodas terraza" },
      { src: "/img/inflables/castillo-blanco/brincolin-blanco-bodas-ceremonia-cdmx.avif", alt: "Renta inflable Castillo Blanco en CDMX - ceremonia de boda" },
      { src: "/img/inflables/castillo-blanco/brincolin-blanco-bodas-decoracion-globos.avif", alt: "Renta inflable Castillo Blanco en CDMX - decoración con globos" },
    ],
    pricingPackages: [
      {
        name: "Renta del Castillo Blanco",
        price: "$2,600",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Castillo Blanco 5×7×4m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Castillo Blanco",
      },
    ],
    faqItems: [
      { question: "¿Por qué elegir un castillo inflable blanco para una boda?", answer: "Porque se integra con la decoración en lugar de competir con ella: combina con flores, tules y mantelería clara y no rompe la paleta del evento. Además da a los niños invitados un espacio propio, lo que permite a los adultos disfrutar la recepción con más calma." },
      { question: "¿Los adultos y los quinceañeros pueden usar el Castillo Blanco?", answer: "Sí. Es uno de los tres modelos del catálogo que admiten adultos, junto con el Barco Pirata y el Extremo. En XV años y bodas conviene separar turnos de niños y de adultos, y siempre debe haber una persona adulta supervisando." },
      { question: "¿Puedo decorar el Castillo Blanco con flores o globos?", answer: "Sí, alrededor del castillo puedes colocar flores, tules, globos y letreros. La decoración no debe sujetarse con tachuelas, grapas, alambre ni nada punzante, y tampoco debe colgar dentro del área de salto." },
      { question: "¿Llega limpio el Castillo Blanco?", answer: "Sí. Lo limpiamos y sanitizamos antes de cada evento para que llegue blanco. Durante la fiesta ayuda pedir que se entre sin zapatos y sin comida ni bebida dentro del inflable, que es lo que más mancha la lona." },
      { question: "¿A qué hora se instala el Castillo Blanco en una boda o recepción?", answer: "El montaje toma unos 30 minutos y se coordina con el horario del lugar. Lo habitual es instalarlo antes de que lleguen los invitados para que no interfiera con la ceremonia ni con las fotos. Si el jardín de eventos tiene horario de acceso para proveedores, avísanos al cotizar." },
      { question: "¿Sirve el Castillo Blanco para un bautizo o una primera comunión?", answer: "Sí, es una de sus aplicaciones más comunes. Su color neutro va con la estética de una celebración religiosa y da a los niños un lugar donde jugar mientras los adultos conviven. Para bebés menores de 3 años, el Castillo Baby es más adecuado." },
    ],
    detalle: {
      h1: { antes: "Renta de", despues: "inflable para bodas, XV años y bautizos" },
      resumen: "El Castillo Blanco es un inflable de color blanco pensado para bodas, XV años, bautizos y eventos formales. Lo usan niños de 3 a 12 años y también adultos. La renta cuesta $2,600 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Es el modelo para eventos donde la estética importa tanto como el juego: bodas con niños invitados, XV años, bautizos, primeras comuniones, baby showers y fiestas de temática all white. Funciona para niños de 3 a 12 años y es uno de los tres modelos del catálogo que admiten adultos, así que en una fiesta de XV la quinceañera y sus amigos también pueden subir en su turno.",
      espacio: "Mide 5 × 7 m de planta y 4 m de alto, con 4.7 m de altura libre necesaria, así que se instala en exterior: jardín de eventos, terraza descubierta, quinta o patio amplio. Reserva un margen libre alrededor para que la decoración no invada el área de salto y para que los invitados circulen sin pasar pegados al inflable.",
      instalacion: "El montaje toma unos 30 minutos. Lo coordinamos con el horario del lugar para que el castillo quede listo antes de la ceremonia o la recepción. Se ancla con estacas en pasto o con sacos de arena en piso firme y se infla con un motor conectado a una toma de 110 V a menos de 20 m. Al terminar lo desinflamos y lo retiramos sin interrumpir el evento.",
      incluye: "Castillo Blanco limpio y sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de la zona; en eventos con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Boda con niños invitados", texto: "Una zona infantil a la vista de la mesa de los papás, con el castillo como fondo claro para las fotos." },
        { titulo: "XV años", texto: "Turno para los chambelanes y amigos de la quinceañera después del vals, con globos blancos y dorados alrededor." },
        { titulo: "Bautizo o primera comunión", texto: "Tonos blancos y verdes, flores naturales y el castillo como espacio para que los primos jueguen durante la comida." },
        { titulo: "Fiesta all white o boho", texto: "Arco de globos en tonos arena y blanco, tapetes y cojines alrededor del área de seguridad." },
      ],
      comparacion: { slug: "castillo-princesas", nombre: "Castillo de Princesas", texto: "Los dos son castillos, pero con objetivos distintos. El Castillo de Princesas ($1,800) es temático, en rosa y azul turquesa, para cumpleaños infantiles de 2 a 10 años. El Castillo Blanco ($2,600) es neutro, más grande y admite adultos, por eso encaja en bodas, XV años y eventos formales donde el inflable debe combinar con la decoración." },
      zonas: [
        { slug: "polanco", anchor: "Castillo Blanco en Polanco, Lomas y Santa Fe", nota: "Terrazas y jardines de eventos; coordinamos el horario de proveedores." },
        { slug: "cuajimalpa", anchor: "renta de inflables en Cuajimalpa", nota: "Jardines amplios para bodas y recepciones." },
        { slug: "xochimilco", anchor: "inflable para bodas en Xochimilco", nota: "Quintas y jardines con pasto, buenos para anclar con estacas." },
        { slug: "metepec", anchor: "Castillo Blanco en Metepec", nota: "Jardines de eventos; el traslado se cotiza aparte." },
      ],
      guias: [
        { slug: "inflables-eventos-formales-cdmx", anchor: "Inflables para eventos formales", nota: "Cómo integrar un inflable en bodas y recepciones." },
        { slug: "decoracion-inflable-xv-anos-cdmx", anchor: "Decoración con inflable para XV años", nota: "Ideas para la fiesta de quince." },
        { slug: "fiesta-infantil-all-white-boho-decoracion", anchor: "Fiesta all white y boho", nota: "Paleta y montaje alrededor del castillo." },
        { slug: "castillos-inflables-comparativa-princesas-blanco-baby", anchor: "Comparativa de castillos inflables", nota: "Princesas, Blanco y Baby lado a lado." },
        { slug: "como-se-limpia-y-sanitiza-un-inflable", anchor: "Cómo se limpia y sanitiza un inflable", nota: "Qué hacemos antes de cada evento." },
      ],
    },
    cards: [
      { slug: "barco-pirata", name: "Barco Pirata", description: "Aventura pirata con resbaladilla de altura.", price: "$2,300", size: "6×3.5×3.80m", ages: "3-12 años", category: "Aventura", categoryColor: "pirata", image: "/img/inflables/barco-pirata.avif" },
      { slug: "extremo", name: "Extremo", description: "Circuito de 8m con obstáculos y tobogán doble.", price: "$2,500", size: "8×4.5×3.50m", ages: "3-12 años", category: "Extremo", categoryColor: "extremo", image: "/img/inflables/extremo.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Castillo", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
    ],
  },
  "castillo-princesas": {
    title: "Renta de brincolín de princesas con resbaladilla $1,800",
    description: "Castillo inflable de princesas con resbaladilla para niñas de 2 a 10 años: $1,800 MXN por 4 a 6 horas con instalación y recolección. Cotiza tu fecha hoy.",
    badge: "Favorito para fiestas de niñas",
    cta: "Cotizar Castillo de Princesas",
    galeria: {
      copy1: "El Castillo de Princesas en jardín, patio, cochera y salón, visto de frente, desde arriba y en tres cuartos. El diseño en rosa y azul turquesa con torres decorativas convierte cualquier espacio en un escenario de cuento de hadas para las niñas.",
      copy2: "Nuestro equipo instala el inflable en jardines, terrazas, patios y salones de fiestas. Las fotos lo muestran desde varios ángulos para que veas cómo lucirá el castillo en tu celebración.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta de princesas: de 4 a 6 horas de renta con instalación y retiro incluidos sin costo adicional. Sin escalera de paquetes ni cargos sorpresa el día del evento.",
      copy2: "Los precios son netos, en pesos mexicanos, e incluyen entrega, instalación profesional y recolección al terminar. Si necesitas factura se agrega el 16% de IVA. Reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    relacionados: {
      copy1: "Complementa tu fiesta de princesas con otros inflables del catálogo. Los Dragones Rojos son perfectos si buscas una temática de aventura, la Jungla para safari tropical y el Castillo Baby para los más pequeños de la fiesta.",
      copy2: "Todos nuestros inflables incluyen sanitización, entrega y motor silencioso. Cotiza varios modelos sin compromiso y arma la combinación perfecta para tu evento.",
    },
    galleryImages: [
      { src: "/img/inflables/castillo-princesas/castillo-princesas-tres-cuartos-jardin.avif", alt: "Castillo de Princesas inflable con resbaladilla en jardín de casa en CDMX" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-frontal-jardin-eventos.avif", alt: "Castillo de Princesas inflable de frente en jardín de eventos" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-vista-aerea-jardin.avif", alt: "Castillo de Princesas inflable visto desde arriba en jardín" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-salon-fiestas.avif", alt: "Castillo de Princesas inflable dentro de salón de fiestas" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-patio-escolar-cdmx.avif", alt: "Castillo de Princesas inflable en patio de escuela en CDMX" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-cochera-privada.avif", alt: "Castillo de Princesas inflable en cochera de casa en privada" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-jardin-atardecer.avif", alt: "Castillo de Princesas inflable en jardín al atardecer" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-detalle-torres.avif", alt: "Detalle de torres, almenas y puerta del Castillo de Princesas inflable" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-renta-cdmx.avif", alt: "Renta de Castillo de Princesas inflable en CDMX" },
    ],
    pricingPackages: [
      {
        name: "Renta del Castillo de Princesas",
        price: "$1,800",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Castillo de Princesas 5×3.30×3m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Castillo de Princesas",
      },
    ],
    faqItems: [
      { question: "¿Con qué temáticas de princesas combina el castillo?", answer: "Con casi todas: su paleta rosa y azul turquesa va con decoraciones de princesas clásicas, castillos de hielo, hadas, unicornios o sirenas. Solo elige globos y mantelería en tonos que no choquen con el rosa y el turquesa, y el castillo se vuelve el fondo natural de las fotos." },
      { question: "¿Pueden usarlo también los niños de la fiesta?", answer: "Sí. Aunque la temática es de princesas, el castillo funciona para cualquier niño de 2 a 10 años: tiene área de salto, resbaladilla y mallas laterales. En fiestas mixtas conviene organizar turnos por edad para que los más grandes no compartan el área con los de 2 o 3 años." },
      { question: "¿El Castillo de Princesas tiene resbaladilla y mallas?", answer: "Sí. Tiene resbaladilla integrada al frente y mallas de seguridad en los costados, que dejan ver a los niños desde afuera. Pide que bajen sentados y de uno en uno, y que nadie espere al pie de la resbaladilla." },
      { question: "¿Se puede poner el Castillo de Princesas en un salón de fiestas?", answer: "Solo si el salón tiene al menos 4.2 m de altura libre, porque el castillo mide 3 m de alto. En la mayoría de los salones con techo estándar no cabe. Si tu fiesta es bajo techo y las invitadas son bebés, el Castillo Baby está hecho para interiores." },
      { question: "¿Qué hago si la cumpleañera tiene 2 años y sus primas 8?", answer: "El Castillo de Princesas cubre ese rango de 2 a 10 años, así que sirve para las dos. Lo que más ayuda es hacer turnos cortos por edades y tener a un adulto en la entrada. Si casi todas las invitadas son menores de 3 años, conviene más el Castillo Baby." },
    ],
    detalle: {
      h1: { antes: "Renta del", despues: "inflable para fiestas de niñas" },
      resumen: "El Castillo de Princesas es un brincolín temático en rosa y azul turquesa con torres, resbaladilla y mallas laterales, para niñas y niños de 2 a 10 años. La renta cuesta $1,800 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Es el modelo para cumpleaños de niñas de 2 a 10 años con temática de princesas, hadas, unicornios o castillos. Funciona igual en fiestas mixtas, porque el juego es el mismo de cualquier brincolín con resbaladilla. Donde más luce es en el tercer, quinto y séptimo cumpleaños, cuando la temática todavía decide la fiesta y el castillo es la pieza central de las fotos.",
      espacio: "Mide 5 m de largo, 3.30 m de ancho y 3 m de alto, con 4.2 m de altura libre necesaria. Por eso va en exterior: jardín, patio, cochera descubierta o terraza sin techo. Deja libre el frente de la resbaladilla y aleja la mesa de dulces del área de salto para que nadie choque al bajar.",
      instalacion: "El montaje toma unos 20 minutos. Llegamos antes de la fiesta, anclamos el castillo con estacas en pasto o sacos de arena en cemento y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar lo desinflamos, lo doblamos y nos lo llevamos.",
      incluye: "Castillo de Princesas sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Princesas clásicas", texto: "Coronas, varitas y una mesa de dulces en rosa pastel con el castillo como fondo." },
        { titulo: "Castillo de hielo", texto: "El azul turquesa del castillo combina con copos, plateado y blanco." },
        { titulo: "Unicornios y hadas", texto: "Arco de globos en tonos pastel y alas de hada como recuerdo para cada invitada." },
        { titulo: "Spa y pijamada de día", texto: "Rincón de uñas y peinados de un lado y castillo para brincar del otro, para niñas de 7 a 10 años." },
      ],
      comparacion: { slug: "dragones-rojos", nombre: "Dragones Rojos", texto: "Tienen tamaño y juego muy parecidos: área de salto, resbaladilla y mallas. La diferencia está en la temática y la edad. El Castillo de Princesas ($1,800) empieza desde los 2 años y se pensó para fiestas de princesas; Dragones Rojos ($1,600) es de 3 a 8 años, en rojo y dorado, y encaja con dragones, caballeros o fiestas sin temática definida." },
      zonas: [
        { slug: "benito-juarez", anchor: "Castillo de Princesas en Benito Juárez", nota: "Patios y cocheras; mide el frente de la resbaladilla antes de apartar." },
        { slug: "coyoacan", anchor: "renta de castillo inflable en Coyoacán", nota: "Jardines de casa con espacio para el castillo y la mesa de dulces." },
        { slug: "atizapan", anchor: "Castillo de Princesas en Atizapán", nota: "Fraccionamientos con jardín; avísanos si hay control de acceso." },
        { slug: "naucalpan", anchor: "inflables para fiesta en Naucalpan", nota: "Casas con patio y jardines comunes de condominio." },
      ],
      guias: [
        { slug: "fiesta-princesas-ninas-inflable-cdmx", anchor: "Guía de fiesta de princesas con inflable", nota: "Decoración, juegos y orden del día." },
        { slug: "cuanto-cuesta-fiesta-de-princesas-en-casa", anchor: "Cuánto cuesta una fiesta de princesas en casa", nota: "Presupuesto por partida." },
        { slug: "castillos-inflables-comparativa-princesas-blanco-baby", anchor: "Princesas, Blanco o Baby: comparativa de castillos", nota: "Cuál conviene según edad y evento." },
        { slug: "fiesta-de-unicornios-y-hadas-con-inflable", anchor: "Fiesta de unicornios y hadas", nota: "Otra temática que combina con el castillo." },
        { slug: "fiesta-de-7-anos-nina-ideas-castillo", anchor: "Ideas para la fiesta de 7 años de una niña", nota: "Actividades para esa edad." },
      ],
    },
    cards: [
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Más popular", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "mini-jungla", name: "Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,600", size: "5×3×2.50m", ages: "3-8 años", category: "Aventura", categoryColor: "jungla", image: "/img/inflables/mini-jungla.avif" },
      { slug: "mini-castillo", name: "Castillo Baby", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$1,400", size: "2.5×2×2m", ages: "1-3 años", category: "Chico", categoryColor: "castillo", image: "/img/inflables/mini-castillo.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,600", size: "5×3×2.80m", ages: "2-8 años", category: "Tropical", categoryColor: "jungla", image: "/img/inflables/gusanitos.avif" },
    ],
  },
  "dragones-rojos": {
    title: "Renta de inflable Dragones Rojos con resbaladilla $1,600",
    description: "Dragones Rojos, el brincolín más rentado: $1,600 MXN por 4 a 6 horas con resbaladilla, instalación y recolección. Para niños de 3 a 8 años. Cotiza hoy.",
    badge: "Inflable más rentado en CDMX",
    cta: "Cotizar Dragones Rojos",
    galeria: {
      copy1: "Estas son fotografías reales del inflable Dragones Rojos tomadas en fiestas infantiles, eventos corporativos y celebraciones familiares en CDMX y Estado de México. El diseño en rojo y dorado con los dos dragones de 3 metros es el imán visual de cualquier evento.",
      copy2: "Cada imagen muestra el inflable instalado en diferentes escenarios: jardines, terrazas, salones y patios. Nuestro equipo se encarga de la instalación completa para que el inflable luzca perfecto sin importar el espacio disponible.",
    },
    precios: {
      copy1: "El Dragones Rojos es el modelo más pedido del catálogo y se renta de 4 a 6 horas, la duración típica de un cumpleaños. Un solo precio, sin escalera de paquetes.",
      copy2: "Todos los precios son netos, en pesos mexicanos, e incluyen instalación y retiro. Si necesitas factura se agrega el 16% de IVA. Reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    relacionados: {
      copy1: "Si el Dragones Rojos no se ajusta a lo que buscas, explora nuestro catálogo completo. El Castillo de Princesas es perfecto para fiestas de niñas, la Jungla para temáticas safari y los Gusanitos para eventos tropicales al aire libre.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza sin compromiso y recibe respuesta en minutos. Reserva con el 50% de anticipo y asegura tu fecha.",
    },
    galleryImages: [
      { src: "/img/inflables/dragones-rojos/castillo-dragones-exterior-jardin.avif", alt: "Inflable Dragones Rojos en jardín exterior para fiesta infantil CDMX" },
      { src: "/img/inflables/dragones-rojos/castillo-dragones-lateral-cdmx.avif", alt: "Vista lateral del castillo Dragones Rojos en evento CDMX" },
      { src: "/img/inflables/dragones-rojos/castillo-dragones-renta-cdmx.avif", alt: "Renta de castillo inflable Dragones Rojos en Ciudad de México" },
      { src: "/img/inflables/dragones-rojos/dragones-detalle-exterior.avif", alt: "Detalle de los dragones decorativos del inflable rojo" },
      { src: "/img/inflables/dragones-rojos/dragones-frontal-centrado.avif", alt: "Vista frontal centrada del inflable Dragones Rojos" },
      { src: "/img/inflables/dragones-rojos/dragones-frontal-resbaladilla.avif", alt: "Resbaladilla frontal del inflable Dragones Rojos" },
      { src: "/img/inflables/dragones-rojos/dragones-inflable-corporativo.avif", alt: "Inflable Dragones Rojos en evento corporativo" },
      { src: "/img/inflables/dragones-rojos/dragones-inflable-fiesta-infantil.avif", alt: "Dragones Rojos en fiesta infantil con niños jugando" },
      { src: "/img/inflables/dragones-rojos/dragones-interior-lateral.avif", alt: "Interior lateral del inflable Dragones Rojos con mallas de seguridad" },
      { src: "/img/inflables/dragones-rojos/dragones-rojos-brincolin-evento.avif", alt: "Brincolin Dragones Rojos instalado en evento al aire libre" },
      { src: "/img/inflables/dragones-rojos/dragones-terraza-exterior.avif", alt: "Inflable Dragones Rojos en terraza exterior" },
    ],
    pricingPackages: [
      {
        name: "Renta del Dragones Rojos",
        price: "$1,600",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Dragones Rojos 5×3×2.80m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Dragones Rojos",
      },
    ],
    faqItems: [
      { question: "¿Por qué Dragones Rojos es el inflable más rentado?", answer: "Porque resuelve la mayoría de las fiestas sin pensarlo mucho: tiene área de salto, resbaladilla y mallas laterales, sirve de 3 a 8 años y su diseño en rojo no depende de una temática. Además está en el precio de entrada de los modelos medianos, $1,600 MXN." },
      { question: "¿Dragones Rojos sirve para una fiesta sin temática?", answer: "Sí, es su punto fuerte. Los dos dragones decorativos llaman la atención, pero el rojo combina con casi cualquier decoración de cumpleaños. Si la fiesta sí tiene temática, encaja mejor con dragones, caballeros, superhéroes o colores primarios." },
      { question: "¿Cómo se usa la resbaladilla de Dragones Rojos?", answer: "Los niños suben por dentro del inflable y bajan por la resbaladilla del frente. Pide que bajen sentados, de uno en uno y que nadie se quede al pie. Las mallas laterales permiten que un adulto vea a todos los niños desde afuera." },
      { question: "¿Dragones Rojos cabe en un patio con cemento?", answer: "Sí, siempre que el patio sea plano y tenga 4.5 m de altura libre, sin cables, tendederos ni ramas encima. En cemento lo anclamos con sacos de arena en lugar de estacas. Si dudas del espacio, mándanos una foto por WhatsApp." },
      { question: "¿Sirve Dragones Rojos para un niño de 2 años?", answer: "Está recomendado desde los 3 años porque la resbaladilla pide que el niño suba y baje solo. Si el festejado o la mayoría de los invitados tienen 1 o 2 años, el Castillo Baby es más adecuado, y para edades mezcladas desde los 2 años el Castillo de Princesas o el Gusanitos." },
    ],
    detalle: {
      h1: { antes: "Renta de inflable", despues: "con resbaladilla para fiestas" },
      resumen: "Dragones Rojos es nuestro brincolín más rentado: un castillo inflable rojo con dos dragones decorativos, resbaladilla y mallas laterales para niños de 3 a 8 años. La renta cuesta $1,600 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Es la opción segura para cumpleaños de 3 a 8 años, sobre todo cuando la fiesta no tiene una temática cerrada o mezcla niños y niñas. También encaja con fiestas de dragones, caballeros o superhéroes. Por precio y tamaño es el modelo que más se elige para fiestas en casa, privadas y condominios con patio o jardín.",
      espacio: "Mide 5 m de largo, 3 m de ancho y 2.80 m de alto, y necesita 4.5 m de altura libre por los dragones decorativos. Se instala en exterior: jardín, patio, cochera descubierta o área común de condominio. Deja despejado el frente de la resbaladilla y confirma que no haya cables ni ramas sobre el área.",
      instalacion: "El montaje toma unos 20 minutos. Llegamos antes de la fiesta, extendemos el inflable, lo anclamos con estacas en pasto o sacos de arena en cemento y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar lo desinflamos y lo recogemos.",
      incluye: "Inflable Dragones Rojos sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Dragones y caballeros", texto: "Escudos de cartón, espadas de espuma y una búsqueda del huevo de dragón en el jardín." },
        { titulo: "Superhéroes", texto: "El rojo del inflable combina con capas y antifaces; arma un circuito de entrenamiento antes del turno de brincar." },
        { titulo: "Cumpleaños de 5 o 6 años", texto: "Turnos por equipos con canciones: cuando para la música, cambia el grupo que brinca." },
        { titulo: "Fiesta en privada o condominio", texto: "Un solo inflable para todos los niños del conjunto, instalado en el área común." },
      ],
      comparacion: { slug: "mini-jungla", nombre: "Jungla", texto: "Dragones Rojos y Jungla cuestan lo mismo ($1,600) y comparten rango de edad, de 3 a 8 años. Los dos tienen resbaladilla. Dragones Rojos es el más versátil para fiestas sin temática; la Jungla es un poco más baja (2.50 m), se instala en 15 minutos y su decoración de dinosaurios y palmeras encaja mejor en fiestas de safari o dinosaurios." },
      zonas: [
        { slug: "iztapalapa", anchor: "Dragones Rojos en Iztapalapa", nota: "Patios y cocheras; mide el área antes de apartar." },
        { slug: "gustavo-a-madero", anchor: "renta de brincolín en Gustavo A. Madero", nota: "Casas con patio y áreas comunes de unidades habitacionales." },
        { slug: "ecatepec", anchor: "inflable Dragones Rojos en Ecatepec", nota: "Patios y calles cerradas con permiso vecinal." },
        { slug: "tlalpan", anchor: "brincolines en Tlalpan", nota: "Jardines con pasto donde el anclaje con estacas es más firme." },
      ],
      guias: [
        { slug: "fiesta-de-dragones-y-caballeros-ideas", anchor: "Ideas para una fiesta de dragones y caballeros", nota: "Decoración y juegos alrededor del inflable." },
        { slug: "inflables-de-1600-comparativa-dragones-jungla-gusanitos", anchor: "Comparativa de inflables de $1,600", nota: "Dragones Rojos, Jungla y Gusanitos lado a lado." },
        { slug: "donde-instalar-inflable-pasto-cemento-tierra", anchor: "Dónde instalar un inflable: pasto, cemento o tierra", nota: "Cómo preparar el piso." },
        { slug: "fiesta-de-5-anos-ideas-juegos-cdmx", anchor: "Juegos para una fiesta de 5 años", nota: "Actividades para la edad más común del modelo." },
        { slug: "normas-de-seguridad-juegos-inflables", anchor: "Normas de seguridad en juegos inflables", nota: "Lo que debe vigilar el adulto a cargo." },
      ],
    },
    cards: [
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla incluida.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "mini-jungla", name: "Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,600", size: "5×3×2.50m", ages: "3-8 años", category: "Aventura", categoryColor: "jungla", image: "/img/inflables/mini-jungla.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,600", size: "5×3×2.80m", ages: "2-8 años", category: "Tropical", categoryColor: "jungla", image: "/img/inflables/gusanitos.avif" },
      { slug: "mini-castillo", name: "Castillo Baby", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$1,400", size: "2.5×2×2m", ages: "1-3 años", category: "Chico", categoryColor: "castillo", image: "/img/inflables/mini-castillo.avif" },
    ],
  },
  "extremo": {
    title: "Renta de inflable Extremo: circuito de obstáculos $2,500",
    description: "Circuito inflable Extremo de 8 m con doble carril: $2,500 MXN por 4 a 6 horas con instalación y recolección. Para niños, jóvenes y adultos. Cotiza hoy.",
    badge: "Circuito de carreras con doble carril",
    cta: "Cotizar Inflable Extremo",
    galeria: {
      copy1: "El circuito Extremo impresiona por su recorrido: 8 metros de pura diversión inflable que domina cualquier espacio al aire libre. Las fotos lo muestran desde varios ángulos y en distintos espacios, para que calcules si cabe en el tuyo.",
      copy2: "Desde la pista de obstáculos hasta el tobogán doble, cada sección del Extremo ofrece una experiencia diferente. Los participantes corren, escalan, esquivan y se deslizan en un circuito que no deja a nadie sentado.",
    },
    precios: {
      copy1: "El Extremo es la opción para eventos que necesitan una atracción de alto impacto: un circuito de obstáculos para competencias por equipos, con rotación continua de participantes.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con instalación profesional y recolección incluidos; el traslado se cotiza según zona. La dinámica de competencia por equipos hace que los turnos se regulen solos.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/extremo/extremo-circuito-completo.avif", alt: "Renta inflable Extremo en CDMX - circuito completo" },
      { src: "/img/inflables/extremo/extremo-frontal-cdmx.avif", alt: "Renta inflable Extremo en CDMX - vista frontal" },
      { src: "/img/inflables/extremo/extremo-lateral-evento.avif", alt: "Renta inflable Extremo en CDMX - lateral en evento" },
      { src: "/img/inflables/extremo/extremo-tobogan-doble.avif", alt: "Renta inflable Extremo en CDMX - tobogán doble" },
      { src: "/img/inflables/extremo/extremo-pista-obstaculos.avif", alt: "Renta inflable Extremo en CDMX - pista de obstáculos" },
      { src: "/img/inflables/extremo/extremo-carrera-cdmx.avif", alt: "Renta inflable Extremo en CDMX - carrera competitiva" },
      { src: "/img/inflables/extremo/extremo-vista-general.avif", alt: "Renta inflable Extremo en CDMX - vista general" },
      { src: "/img/inflables/extremo/extremo-circuito-renta-cdmx.avif", alt: "Renta inflable Extremo en CDMX - circuito renta" },
      { src: "/img/inflables/extremo/alquiler-brincolin-extremo-fiestas-infantiles.avif", alt: "Alquiler brincolin Extremo para fiestas infantiles" },
      { src: "/img/inflables/extremo/alquiler-circuito-extremo-fiestas-mexico.avif", alt: "Alquiler circuito Extremo para fiestas en México" },
      { src: "/img/inflables/extremo/alquiler-circuito-obstaculos-inflable-cdmx.avif", alt: "Alquiler circuito de obstáculos inflable CDMX" },
      { src: "/img/inflables/extremo/alquiler-inflable-extremo-grande-fiestas.avif", alt: "Alquiler inflable Extremo grande para fiestas" },
      { src: "/img/inflables/extremo/brincolin-extremo-angulo-renta-eventos.avif", alt: "Brincolin Extremo desde otro ángulo en renta de eventos" },
      { src: "/img/inflables/extremo/extremo-angulo-corporativo.avif", alt: "Circuito Extremo en evento corporativo CDMX" },
    ],
    pricingPackages: [
      {
        name: "Renta del Extremo",
        price: "$2,500",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Extremo 8×4.5×3.50m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Extremo",
      },
    ],
    faqItems: [
      { question: "¿Pueden usar el Extremo adolescentes y adultos?", answer: "Sí. El Extremo es uno de los tres modelos del catálogo que admiten adultos, junto con el Barco Pirata y el Castillo Blanco. Por eso funciona en fiestas de 10 a 12 años, eventos de empresa y family days. Haz turnos separados por edad y peso, y mantén a un adulto supervisando la salida del tobogán." },
      { question: "¿Cómo es el recorrido del circuito Extremo?", answer: "Es una pista de obstáculos de 8 m con doble carril: dos participantes entran al mismo tiempo, cruzan los obstáculos y terminan bajando por el tobogán doble. Gana quien llega primero. Esa dinámica de carrera hace que los turnos roten rápido." },
      { question: "¿Cómo organizo competencias en el Extremo?", answer: "Lo más sencillo es armar dos filas, una por carril, y que salgan en parejas a la señal de un adulto. Puedes hacer eliminatorias, relevos por equipos o tiempos con cronómetro. Agrupa a los participantes por edad y estatura para que las carreras sean parejas." },
      { question: "¿El Extremo funciona en una cancha o un estacionamiento?", answer: "Sí, si la superficie es plana y está limpia. En cemento o asfalto lo anclamos con sacos de arena. Necesita 4.5 m de altura libre, una toma de 110 V a menos de 20 m y acceso para el vehículo de entrega; en escuelas y empresas avísanos el horario de acceso para proveedores." },
      { question: "¿Es buena opción el Extremo para una activación de marca o un family day?", answer: "Sí. El formato de carrera atrae público, se entiende sin explicaciones y permite que participen niños y adultos en turnos. Para empresas emitimos factura con el 16% de IVA. Si el evento es grande, puedes combinarlo con otro inflable para los más pequeños." },
    ],
    detalle: {
      h1: { antes: "Renta del inflable", despues: "circuito de obstáculos con doble carril" },
      resumen: "El Extremo es un circuito inflable de obstáculos de 8 m con doble carril y tobogán doble, para competir en parejas. Lo usan niños de 3 a 12 años y también adolescentes y adultos. La renta cuesta $2,500 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas con 50% de anticipo.",
      paraQuien: "Es el modelo para eventos con muchos participantes y ganas de competir: kermeses, días del niño en escuelas, family days de empresa, activaciones de marca y fiestas de 8 a 12 años donde un brincolín ya se queda corto. Como admite adultos, también sirve para fiestas de adolescentes y convivios donde los papás quieren correr contra sus hijos.",
      espacio: "Mide 8 m de largo, 4.5 m de ancho y 3.50 m de alto, con 4.5 m de altura libre necesaria. Es el inflable más largo del catálogo y se instala en exterior: jardín amplio, cancha, explanada, patio escolar o estacionamiento cerrado. Deja espacio en la entrada para las dos filas y frente al tobogán para la llegada.",
      instalacion: "El montaje toma unos 30 minutos. Extendemos el circuito a lo largo del área, lo anclamos con estacas en pasto o sacos de arena en piso firme y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar el evento lo desinflamos y lo recogemos.",
      incluye: "Circuito Extremo sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona. Para escuelas y empresas emitimos factura con el 16% de IVA.",
      ideas: [
        { titulo: "Fiesta ninja", texto: "Bandas en la frente, entrenamiento previo y torneo final en el circuito por eliminatorias." },
        { titulo: "Kermés o día del niño", texto: "Carreras por grupo o por grado con tabla de tiempos en un pizarrón junto a la entrada." },
        { titulo: "Family day de empresa", texto: "Relevos de papás contra hijos y premiación al equipo más rápido." },
        { titulo: "Fiesta de 10 a 12 años", texto: "Retos de velocidad y revancha; a esa edad el formato de carrera mantiene a todos ocupados." },
        { titulo: "Fiesta de gemelos o hermanos", texto: "El doble carril permite que los dos festejados compitan en la carrera inaugural." },
      ],
      comparacion: { slug: "barco-pirata", nombre: "Barco Pirata", texto: "El Extremo ($2,500) es un circuito para competir: dos carriles, obstáculos y 8 m de largo. El Barco Pirata ($2,300) es más compacto, mide 6 m y es un escenario temático con tobogán, mejor para fiestas piratas. Si el evento gira alrededor de carreras y muchos participantes, elige el Extremo; si quieres temática y menos espacio, el barco." },
      zonas: [
        { slug: "iztapalapa", anchor: "circuito inflable en Iztapalapa", nota: "Escuelas, explanadas y canchas; avísanos el horario de acceso." },
        { slug: "cuautitlan-izcalli", anchor: "Extremo en Cuautitlán Izcalli", nota: "Jardines amplios y áreas deportivas." },
        { slug: "tlalnepantla", anchor: "renta de inflables en Tlalnepantla", nota: "Empresas y escuelas; emitimos factura." },
        { slug: "ecatepec", anchor: "circuito de obstáculos en Ecatepec", nota: "Explanadas y canchas; en cemento anclamos con sacos de arena." },
      ],
      guias: [
        { slug: "fiesta-ninja-con-circuito-de-obstaculos", anchor: "Fiesta ninja con circuito de obstáculos", nota: "Cómo organizar el torneo." },
        { slug: "organizar-kermesse-escolar-inflables-cdmx-checklist", anchor: "Checklist para una kermés escolar con inflables", nota: "Turnos, permisos y logística." },
        { slug: "inflables-para-adultos-eventos-corporativos", anchor: "Inflables para adultos y eventos corporativos", nota: "Qué modelos aguantan adultos." },
        { slug: "instalar-inflable-en-explanada-cancha-estacionamiento", anchor: "Instalar un inflable en explanada o cancha", nota: "Requisitos del piso y del acceso." },
        { slug: "juegos-para-fiesta-infantil-ideas-por-edad", anchor: "Juegos para fiesta infantil por edad", nota: "Para complementar las carreras." },
      ],
    },
    cards: [
      { slug: "barco-pirata", name: "Barco Pirata", description: "Aventura pirata con resbaladilla de altura.", price: "$2,300", size: "6×3.5×3.80m", ages: "3-12 años", category: "Aventura", categoryColor: "pirata", image: "/img/inflables/barco-pirata.avif" },
      { slug: "castillo-blanco", name: "Castillo Blanco", description: "Elegante para bodas, bautizos y XV años.", price: "$2,600", size: "5×7×4m", ages: "3-12 años", category: "Bodas", categoryColor: "bodas", image: "/img/inflables/castillo-blanco.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Castillo", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
    ],
  },
  "gusanitos": {
    title: "Renta de inflable Gusanitos con túnel y resbaladilla $1,600",
    description: "Inflable Gusanitos con túnel y resbaladilla doble para niños de 2 a 8 años, apto bajo techo: $1,600 MXN por 4 a 6 horas con instalación y recolección. Cotiza hoy.",
    badge: "El más colorido y tropical",
    cta: "Cotizar Gusanitos",
    galeria: {
      copy1: "Estas son imágenes reales del inflable Gusanitos en fiestas infantiles y eventos familiares en CDMX y Edomex. Sus colores vibrantes en verde, morado, amarillo y azul lo convierten en el centro de atención y la atracción más fotografiada.",
      copy2: "El Gusanitos luce espectacular en jardines, patios y terrazas al aire libre. Nuestro equipo se encarga de la instalación completa para que el inflable quede perfectamente colocado y seguro para los niños.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta: el Gusanitos se renta de 4 a 6 horas, la duración típica de un cumpleaños, y también funciona para fiestas de verano, pool parties y eventos al aire libre.",
      copy2: "Precios netos en pesos mexicanos; con factura se agrega el 16% de IVA. La renta incluye instalación, retiro y extensión eléctrica sin costo adicional. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Si buscas más opciones para tu evento, la Jungla comparte la temática tropical con dinosaurios y palmeras, el Castillo de Princesas es perfecto para fiestas de niñas y los Dragones Rojos son el favorito absoluto de CDMX.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza sin compromiso y recibe respuesta en minutos. Reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    galleryImages: [
      { src: "/img/inflables/gusanitos/gusanitos-tres-cuartos-jardin.avif", alt: "Inflable Gusanitos con resbaladilla y dos gusanos en jardín de casa en CDMX" },
      { src: "/img/inflables/gusanitos/gusanitos-tres-cuartos-terraza.avif", alt: "Inflable Gusanitos en terraza con piso de adoquín" },
      { src: "/img/inflables/gusanitos/gusanitos-vista-aerea-andador.avif", alt: "Inflable Gusanitos visto desde arriba sobre andador de adoquín" },
      { src: "/img/inflables/gusanitos/gusanitos-patio-concreto-cdmx.avif", alt: "Inflable Gusanitos en patio de concreto de casa en CDMX" },
      { src: "/img/inflables/gusanitos/gusanitos-salon-fiestas-interior.avif", alt: "Inflable Gusanitos dentro de salón de fiestas" },
      { src: "/img/inflables/gusanitos/gusanitos-patio-escolar-cdmx.avif", alt: "Inflable Gusanitos en patio de escuela en CDMX" },
      { src: "/img/inflables/gusanitos/gusanitos-cochera-privada.avif", alt: "Inflable Gusanitos en cochera de casa en privada" },
      { src: "/img/inflables/gusanitos/gusanitos-vista-general.avif", alt: "Vista general del inflable Gusanitos con colores vibrantes" },
      { src: "/img/inflables/gusanitos/gusanitos-exterior-jardin.avif", alt: "Inflable Gusanitos en jardín exterior para fiesta" },
    ],
    pricingPackages: [
      {
        name: "Renta del Gusanitos",
        price: "$1,600",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Gusanitos 5×3×2.80m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Gusanitos",
      },
    ],
    faqItems: [
      { question: "¿En qué se diferencia el Gusanitos de un brincolín normal?", answer: "El Gusanitos no es una sola cama de salto: los niños entran por un túnel verde, brincan bajo los arcos y bajan por una resbaladilla doble con dos gusanos. Como el juego avanza por partes, se reparten en lugar de amontonarse en un punto. Por eso funciona bien con edades mezcladas." },
      { question: "¿El Gusanitos sirve para niños tímidos o que nunca han subido a un inflable?", answer: "Sí, suele ser la mejor entrada. El túnel de entrada es corto y la resbaladilla es de poca altura, así que el niño avanza a su ritmo y no tiene que brincar junto a otros más grandes. Un adulto puede acompañarlo desde afuera y esperarlo al pie de la resbaladilla." },
      { question: "¿Se puede instalar el Gusanitos bajo techo?", answer: "Sí, es uno de los dos modelos del catálogo aptos para interiores, junto con el Castillo Baby. Necesita 3.2 m de altura libre y una toma de 110 V a menos de 20 m. Funciona en salones, terrazas techadas y patios cubiertos, útil en temporada de lluvias." },
      { question: "¿Con qué temáticas combina el Gusanitos?", answer: "Con fiestas de bichitos e insectos, jardín encantado, colores o arcoíris y temáticas tropicales. Su paleta verde, morado, amarillo y azul también queda bien en posadas infantiles y fiestas sin temática donde quieres mucho color." },
      { question: "¿Sirve el Gusanitos para kermeses o guarderías?", answer: "Sí. Como es un recorrido con entrada por el túnel y salida por la resbaladilla, permite que los niños pasen en fila de forma ordenada y sin competir por el mismo espacio. Para eventos escolares conviene un adulto en la entrada y otro al pie de la resbaladilla. Con factura se agrega el 16% de IVA." },
    ],
    detalle: {
      h1: { antes: "Renta de inflable", despues: "circuito de túneles para fiestas" },
      resumen: "El Gusanitos es un inflable con túnel de entrada, zona de brinco y resbaladilla doble con dos gusanos, para niños de 2 a 8 años, que también puede instalarse bajo techo. La renta cuesta $1,600 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Es para fiestas con niños de 2 a 8 años y edades mezcladas, donde un brincolín tradicional haría que los grandes acaparen el espacio. Funciona muy bien con niños tímidos o que suben por primera vez a un inflable, en posadas, guarderías, kermeses y fiestas de bichitos o de colores. Por ser apto para interiores, es una de las opciones para temporada de lluvias.",
      espacio: "Mide 5 m de largo, 3 m de ancho y 2.80 m de alto, con 3.2 m de altura libre según su ficha técnica. Es uno de los dos modelos aptos para interiores, así que funciona en jardín, patio, terraza techada o salón con techo suficiente. Por su forma alargada se acomoda bien en patios estrechos; deja libres los extremos para las entradas y salidas.",
      instalacion: "El montaje toma unos 20 minutos. Extendemos el circuito, lo anclamos con estacas en pasto o sacos de arena en piso firme y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Bajo techo revisamos antes que no haya lámparas ni ventiladores encima. Al terminar lo desinflamos y lo recogemos.",
      incluye: "Inflable Gusanitos sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Fiesta de bichitos", texto: "Antenas, lupas y una búsqueda de insectos de juguete escondidos alrededor del circuito." },
        { titulo: "Arcoíris y colores", texto: "Globos en los mismos tonos del inflable y un recuerdo de un color por niño." },
        { titulo: "Posada infantil", texto: "El circuito bajo techo mantiene ocupados a los niños mientras los adultos rompen la piñata." },
        { titulo: "Fiesta de lluvia o bajo techo", texto: "En terraza techada o salón con altura suficiente, sin depender del clima." },
      ],
      comparacion: { slug: "mini-castillo", nombre: "Castillo Baby", texto: "Son los dos modelos aptos para interiores. El Castillo Baby ($1,400) es más pequeño (2.5 × 2 m) y está pensado para bebés de 1 a 3 años. El Gusanitos ($1,600) mide 5 m de largo, suma túnel y resbaladilla doble y cubre de 2 a 8 años, así que conviene cuando hay niños más grandes o muchos invitados bajo techo." },
      zonas: [
        { slug: "iztacalco", anchor: "Gusanitos en Iztacalco", nota: "Patios y terrazas techadas; confirma la altura libre al cotizar." },
        { slug: "venustiano-carranza", anchor: "renta de inflable en Venustiano Carranza", nota: "Patios estrechos donde su forma alargada se acomoda bien." },
        { slug: "gustavo-a-madero", anchor: "inflable para interiores en Gustavo A. Madero", nota: "Salones y patios cubiertos para posadas y temporada de lluvias." },
        { slug: "nezahualcoyotl", anchor: "Gusanitos en Nezahualcóyotl", nota: "Patios y cocheras; el traslado se confirma por colonia." },
      ],
      guias: [
        { slug: "circuito-de-tuneles-vs-brincolin", anchor: "Circuito de túneles o brincolín", nota: "Cuándo conviene cada uno." },
        { slug: "fiesta-de-bichitos-insectos-con-inflable", anchor: "Fiesta de bichitos con inflable", nota: "Decoración y juegos para esta temática." },
        { slug: "inflable-bajo-techo-temporada-de-lluvias-cdmx", anchor: "Inflable bajo techo en temporada de lluvias", nota: "Qué revisar en salón o terraza techada." },
        { slug: "inflable-para-ninos-timidos-o-con-miedo", anchor: "Inflables para niños tímidos", nota: "Cómo ayudarles a animarse." },
        { slug: "inflables-de-1600-comparativa-dragones-jungla-gusanitos", anchor: "Comparativa de inflables de $1,600", nota: "Gusanitos frente a Dragones Rojos y Jungla." },
      ],
    },
    cards: [
      { slug: "mini-jungla", name: "Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,600", size: "5×3×2.50m", ages: "3-8 años", category: "Aventura", categoryColor: "jungla", image: "/img/inflables/mini-jungla.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con torres decorativas y resbaladilla incluida.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Más popular", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "mini-castillo", name: "Castillo Baby", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$1,400", size: "2.5×2×2m", ages: "1-3 años", category: "Chico", categoryColor: "castillo", image: "/img/inflables/mini-castillo.avif" },
    ],
  },
  "mini-castillo": {
    title: "Renta de Castillo Baby: inflable para bebés desde $1,400",
    description: "Castillo Baby inflable para bebés de 1 a 3 años, apto bajo techo: $1,400 MXN por 4 a 6 horas con instalación, motor y recolección. Cotiza tu fecha hoy.",
    badge: "Ideal para bebés y espacios pequeños",
    cta: "Cotizar Castillo Baby",
    galeria: {
      copy1: "El Castillo Baby luce increíble en cualquier espacio: desde jardines amplios hasta salones de departamento. Aquí lo ves de frente, de perfil, en jardín, patio, cochera y dentro de un salón, para que compares con tu espacio.",
      copy2: "Cada imagen muestra el Castillo Baby en diferentes escenarios para que puedas visualizar cómo quedaría en tu evento. Solo necesitas 3.2 m de altura libre, piso plano y una toma de 110 V a menos de 20 m.",
    },
    precios: {
      copy1: "El Castillo Baby es nuestro inflable más accesible, desde $1,400 MXN por 4 a 6 horas de renta, pensado para fiestas de cumpleaños de primer año, bautizos y reuniones íntimas donde los bebés son los protagonistas.",
      copy2: "La renta incluye el inflable sanitizado, motor inflador silencioso, instalación profesional y recolección al terminar; el traslado se cotiza según zona. Un solo precio, sin cargos extra.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-jardin-casa.avif", alt: "Castillo Baby inflable con alberca de pelotas en jardín de casa en CDMX" },
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-frontal-jardin.avif", alt: "Castillo Baby inflable de frente con entrada y escalón" },
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-lateral-patio.avif", alt: "Castillo Baby inflable de perfil con alberca de pelotas" },
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-salon-interior.avif", alt: "Castillo Baby inflable dentro de salón de fiestas" },
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-cochera-adoquin.avif", alt: "Castillo Baby inflable en cochera con piso de adoquín" },
      { src: "/img/inflables/mini-castillo/mini-castillo-baby-patio-escolar.avif", alt: "Castillo Baby inflable en patio de escuela" },
      { src: "/img/inflables/mini-castillo/mini-castillo-interior-fiesta.avif", alt: "Renta inflable Castillo Baby en CDMX - fiesta en interior" },
      { src: "/img/inflables/mini-castillo/mini-castillo-cumpleanos-infantil.avif", alt: "Renta inflable Castillo Baby en CDMX - cumpleaños infantil" },
      { src: "/img/inflables/mini-castillo/mini-castillo-exterior.avif", alt: "Renta inflable Castillo Baby en CDMX - evento exterior" },
    ],
    pricingPackages: [
      {
        name: "Renta del Castillo Baby",
        price: "$1,400",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Castillo Baby 2.5×2×2m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Castillo Baby",
      },
    ],
    faqItems: [
      { question: "¿El Castillo Baby cabe en un departamento?", answer: "En muchos casos sí. Mide 2.5 × 2 m de base y 2 m de alto, y necesita 3.2 m de altura libre, así que entra en salas amplias, terrazas techadas y salones con techo de esa altura o más. Mide tu techo antes de apartar; si queda justo, mándanos una foto por WhatsApp." },
      { question: "¿Es seguro el Castillo Baby para un bebé de 1 año?", answer: "Está pensado para niños de 1 a 3 años: es compacto, de paredes bajas y permite que un adulto vea a todos desde afuera. Para bebés de 1 año lo recomendable es que entren pocos a la vez y con un adulto pendiente todo el tiempo, sin niños mayores dentro." },
      { question: "¿Pueden entrar niños más grandes al Castillo Baby?", answer: "No es recomendable. Un niño de 6 u 8 años brinca con mucha más fuerza y puede lastimar a los bebés. Si en tu fiesta hay hermanos o primos mayores, combina el Castillo Baby con otro modelo o elige el Gusanitos, que cubre de 2 a 8 años." },
      { question: "¿Puedo instalar el Castillo Baby sobre alfombra o duela?", answer: "Sí, siempre que el piso sea plano y esté limpio, sin objetos punzantes. Bajo techo no se clavan estacas: se estabiliza con el propio peso y con sacos si hace falta. Necesita una toma de 110 V a menos de 20 m." },
      { question: "¿El Castillo Baby sirve para un bautizo o un primer cumpleaños?", answer: "Sí, son sus dos usos más comunes. En un bautizo da a los bebés y niños pequeños un espacio propio mientras los adultos conviven, y en un primer cumpleaños es lo bastante pequeño para salón o casa. Para eventos formales con niños más grandes, el Castillo Blanco es la alternativa." },
      { question: "¿Hace mucho ruido el motor dentro de casa?", answer: "El motor queda encendido toda la renta para mantener el inflado, y su sonido es constante pero moderado. Bajo techo conviene colocarlo en una esquina, lejos de la mesa principal, y pasar la extensión por un lugar donde nadie tropiece." },
    ],
    detalle: {
      h1: { antes: "Renta de", despues: "inflable para bebés de 1 a 3 años" },
      resumen: "El Castillo Baby es nuestro inflable más pequeño: mide 2.5 × 2 × 2 m, cabe bajo techo y está pensado para bebés y niños de 1 a 3 años. La renta cuesta $1,400 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Apartas tu fecha con 50% de anticipo.",
      paraQuien: "Es para primeros y segundos cumpleaños, bautizos, presentaciones de 3 años, guarderías y reuniones donde la mayoría de los invitados todavía son bebés. Su tamaño compacto permite que un adulto supervise sin perder de vista a nadie. Para niños mayores de 3 años conviene otro modelo, porque necesitan más espacio y brincan con más fuerza.",
      espacio: "Mide 2.5 m de largo, 2 m de ancho y 2 m de alto, con 3.2 m de altura libre necesaria. Es uno de los dos modelos aptos para interiores: funciona en salas amplias, terrazas techadas, salones y patios pequeños. Deja un margen libre alrededor y aleja muebles con esquinas, macetas y la mesa de dulces.",
      instalacion: "El montaje toma unos 15 minutos y es el más rápido del catálogo. Extendemos el castillo, lo estabilizamos según el piso (estacas en pasto, sacos en piso firme o interior) y lo inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar lo desinflamos y lo recogemos sin dejar rastro.",
      incluye: "Castillo Baby sanitizado, motor inflador con extensión eléctrica, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Primer cumpleaños", texto: "El castillo junto a la zona de fotos del pastel, con globos en tonos suaves." },
        { titulo: "Bautizo en salón o casa", texto: "Un rincón para los bebés invitados mientras los adultos comen." },
        { titulo: "Presentación de 3 años", texto: "Juegos tranquilos después de la ceremonia, con los primos más pequeños." },
        { titulo: "Guardería o estancia infantil", texto: "Turnos cortos por sala durante un festejo o el día del niño." },
      ],
      comparacion: { slug: "gusanitos", nombre: "Gusanitos", texto: "Son los dos modelos aptos para interiores. El Castillo Baby ($1,400) es el más pequeño y se pensó para bebés de 1 a 3 años. El Gusanitos ($1,600) mide 5 m, tiene túnel y resbaladilla doble y cubre de 2 a 8 años, así que conviene cuando en la fiesta también hay niños más grandes." },
      zonas: [
        { slug: "cuauhtemoc", anchor: "Castillo Baby en Cuauhtémoc", nota: "Departamentos y salones en Roma, Doctores y Santa María la Ribera." },
        { slug: "benito-juarez", anchor: "inflable para departamento en Benito Juárez", nota: "Salas amplias y terrazas techadas." },
        { slug: "miguel-hidalgo", anchor: "Castillo Baby en Miguel Hidalgo", nota: "Departamentos y salones; mide la altura del techo antes de apartar." },
      ],
      guias: [
        { slug: "mejor-inflable-para-ninos-menores-de-3-anos", anchor: "El mejor inflable para menores de 3 años", nota: "Qué revisar en edades pequeñas." },
        { slug: "fiesta-primer-cumpleanos-con-inflable", anchor: "Primer cumpleaños con inflable", nota: "Ideas y horarios para bebés." },
        { slug: "inflable-para-departamento-altura-techo-cdmx", anchor: "Inflable para departamento: altura del techo", nota: "Cómo medir tu espacio." },
        { slug: "bautizo-con-inflable-zona-infantil-cdmx", anchor: "Bautizo con zona infantil inflable", nota: "Cómo organizar el área de niños." },
        { slug: "ideas-de-fiesta-por-edad-1-a-12-anos", anchor: "Ideas de fiesta por edad, de 1 a 12 años", nota: "Qué funciona en cada etapa." },
      ],
    },
    cards: [
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Castillo", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Tropical con gusanitos y colores vibrantes.", price: "$1,600", size: "5×3×2.80m", ages: "2-8 años", category: "Tropical", categoryColor: "jungla", image: "/img/inflables/gusanitos.avif" },
      { slug: "mini-jungla", name: "Jungla", description: "Temático con animales y palmeras tropicales.", price: "$1,600", size: "5×3×2.50m", ages: "3-8 años", category: "Aventura", categoryColor: "jungla", image: "/img/inflables/mini-jungla.avif" },
    ],
  },
  "mini-jungla": {
    title: "Renta de inflable Jungla para fiesta safari desde $1,600",
    description: "Inflable Jungla con dinosaurios y palmeras para niños de 3 a 8 años: $1,600 MXN por 4 a 6 horas con instalación, motor y recolección. Cotiza tu fecha hoy.",
    badge: "Aventura tropical para exploradores",
    cta: "Cotizar Jungla",
    galeria: {
      copy1: "Fotografías reales de la Jungla en acción durante fiestas infantiles y eventos al aire libre en CDMX y Edomex. Los dinosaurios decorativos y las palmeras tropicales crean un escenario de aventura que fascina a los niños exploradores.",
      copy2: "El inflable se adapta a jardines amplios, patios residenciales, cocheras descubiertas y parques con toma de corriente. Por su altura se instala al aire libre, y el montaje toma unos 15 minutos.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta safari o de dinosaurios: la Jungla se renta de 4 a 6 horas, la duración típica de un cumpleaños o de una kermés escolar.",
      copy2: "Precios netos en pesos mexicanos; con factura se agrega el 16% de IVA. La renta incluye todo lo necesario para un evento sin complicaciones: instalación, retiro, motor y sanitización. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Explora más opciones para tu fiesta: los Gusanitos son perfectos para temática tropical, el Castillo de Princesas para niñas, los Dragones Rojos para aventuras medievales y el Barco Pirata para grupos más grandes.",
      copy2: "Todos los inflables incluyen sanitización y motor silencioso. Cotiza varios modelos sin compromiso por WhatsApp y arma la combinación ideal para tu evento.",
    },
    galleryImages: [
      { src: "/img/inflables/mini-jungla/mini-jungla-tres-cuartos-jardin.avif", alt: "Inflable Jungla con palmeras y resbaladilla en jardín de casa en CDMX" },
      { src: "/img/inflables/mini-jungla/mini-jungla-frontal-resbaladilla.avif", alt: "Inflable Jungla de frente con resbaladilla y dos dinosaurios" },
      { src: "/img/inflables/mini-jungla/mini-jungla-perfil-lateral.avif", alt: "Inflable Jungla visto de perfil con resbaladilla y dinosaurios" },
      { src: "/img/inflables/mini-jungla/mini-jungla-vista-aerea-jardin.avif", alt: "Inflable Jungla visto desde arriba en jardín" },
      { src: "/img/inflables/mini-jungla/mini-jungla-salon-fiestas-interior.avif", alt: "Inflable Jungla dentro de salón de fiestas" },
      { src: "/img/inflables/mini-jungla/mini-jungla-patio-escolar-cdmx.avif", alt: "Inflable Jungla en patio de escuela en CDMX" },
      { src: "/img/inflables/mini-jungla/mini-jungla-cochera-privada.avif", alt: "Inflable Jungla en cochera de casa en privada" },
      { src: "/img/inflables/mini-jungla/mini-jungla-detalle-dinosaurios.avif", alt: "Detalle de los dinosaurios y palmeras del inflable Jungla" },
      { src: "/img/inflables/mini-jungla/mini-jungla-frontal-jardin.avif", alt: "Vista frontal del inflable Jungla en jardín" },
    ],
    pricingPackages: [
      {
        name: "Renta de la Jungla",
        price: "$1,600",
        priceNote: PRICE_NOTE,
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Jungla 5×3×2.50m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Instalación profesional; traslado según zona", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Sanitización antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Jungla",
      },
    ],
    faqItems: [
      { question: "¿Qué decoración tiene el inflable Jungla?", answer: "Tiene figuras de dinosaurios y palmeras integradas al diseño, en colores de selva. Son parte del mismo inflable, sin piezas sueltas ni duras, así que los niños pueden jugar alrededor sin riesgo de golpes contra objetos rígidos." },
      { question: "¿La Jungla sirve para una fiesta de dinosaurios?", answer: "Sí, es el modelo del catálogo que mejor encaja con dinosaurios. Combínala con huellas en el piso, huevos de dinosaurio como sorpresa y una excavación de fósiles en arena. También funciona con safari, selva, animales y exploradores." },
      { question: "¿Cuánto tarda en instalarse la Jungla?", answer: "Unos 15 minutos, empatada con el Castillo Baby como la instalación más rápida del catálogo. Aun así llegamos con margen antes de la fiesta. Solo necesitas el área despejada y una toma de 110 V a menos de 20 m." },
      { question: "¿Se puede instalar la Jungla en un parque?", answer: "Sí, siempre que el área sea plana, tenga pasto o piso firme y cuente con una toma de corriente a menos de 20 m. Muchos parques no tienen contactos, así que confirma la luz antes de apartar. Si el parque pide permiso para eventos, tramítalo con anticipación." },
      { question: "¿La Jungla funciona para un curso de verano o el día del niño?", answer: "Sí. Su temática de selva va con actividades de exploración y el rango de 3 a 8 años cubre preescolar y los primeros años de primaria. Organiza turnos cortos por grupo y deja a un adulto en la entrada. Con factura se agrega el 16% de IVA." },
    ],
    detalle: {
      h1: { antes: "Renta de inflable", despues: "para fiestas de safari y dinosaurios" },
      resumen: "La Jungla es un brincolín con dinosaurios y palmeras para niños de 3 a 8 años, ideal en fiestas de safari, selva o dinosaurios al aire libre. La renta cuesta $1,600 MXN por 4 a 6 horas e incluye instalación, motor, sanitización y recolección. Se instala en unos 15 minutos y apartas con 50% de anticipo.",
      paraQuien: "Es para cumpleaños de 3 a 8 años con temática de dinosaurios, safari, animales o exploradores. Por su decoración funciona tanto para niñas como para niños, y su altura de 2.50 m la hace un poco menos imponente que otros modelos medianos, algo que ayuda en fiestas de 3 y 4 años. También se usa en cursos de verano, días del niño y fiestas en parque.",
      espacio: "Mide 5 m de largo, 3 m de ancho y 2.50 m de alto, con 4.2 m de altura libre necesaria. Se instala en exterior: jardín, patio, cochera descubierta o parque con toma de corriente. Revisa que no haya ramas bajas ni cables sobre el área y deja libre la entrada del inflable.",
      instalacion: "El montaje toma unos 15 minutos. Extendemos la Jungla, la anclamos con estacas en pasto o sacos de arena en cemento y la inflamos con el motor conectado a una toma de 110 V a menos de 20 m. Al terminar la desinflamos y la recogemos.",
      incluye: "Inflable Jungla sanitizado, motor inflador con extensión eléctrica, anclaje, instalación y recolección. El traslado depende de tu zona y te lo confirmamos al cotizar. Con factura se agrega el 16% de IVA.",
      ideas: [
        { titulo: "Fiesta de dinosaurios", texto: "Excavación de fósiles en una tina de arena y huevos sorpresa junto al inflable." },
        { titulo: "Safari", texto: "Binoculares de cartón, sombreros de explorador y una búsqueda de animales de peluche." },
        { titulo: "Cumpleaños de 4 años", texto: "Turnos cortos con canciones de animales; la Jungla no intimida a los más pequeños." },
        { titulo: "Curso de verano", texto: "Semana de la selva con el inflable como premio al final de cada actividad." },
      ],
      comparacion: { slug: "dragones-rojos", nombre: "Dragones Rojos", texto: "Jungla y Dragones Rojos cuestan lo mismo ($1,600) y cubren de 3 a 8 años. La Jungla es un poco más baja (2.50 m contra 2.80 m), se instala en 15 minutos y su decoración de dinosaurios y palmeras pide una fiesta de selva o safari. Dragones Rojos, con sus dos dragones en rojo, combina mejor con fiestas sin temática definida." },
      zonas: [
        { slug: "xochimilco", anchor: "Jungla en Xochimilco", nota: "Jardines y quintas con pasto, buenos para anclar con estacas." },
        { slug: "tlahuac", anchor: "renta de inflable en Tláhuac", nota: "Patios y jardines de casa." },
        { slug: "coacalco", anchor: "inflable Jungla en Coacalco", nota: "Fraccionamientos con jardín; avísanos si hay control de acceso." },
        { slug: "alvaro-obregon", anchor: "brincolín de dinosaurios en Álvaro Obregón", nota: "Jardines y parques; confirma la toma de corriente." },
      ],
      guias: [
        { slug: "fiesta-de-dinosaurios-con-inflable-cdmx", anchor: "Fiesta de dinosaurios con inflable", nota: "Decoración, juegos y recuerdos." },
        { slug: "fiesta-tematica-safari-inflable-cdmx", anchor: "Fiesta temática de safari", nota: "Ideas para exploradores." },
        { slug: "fiesta-de-4-anos-ideas-inflable-cdmx", anchor: "Ideas para una fiesta de 4 años", nota: "Juegos para la edad ideal del modelo." },
        { slug: "fiesta-infantil-en-parque-con-inflable", anchor: "Fiesta infantil en parque con inflable", nota: "Permisos, luz y logística." },
        { slug: "tematicas-fiesta-infantil-tendencias-2027", anchor: "Temáticas de fiesta infantil en tendencia", nota: "Más ideas para elegir tema." },
      ],
    },
    cards: [
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,600", size: "5×3×2.80m", ages: "2-8 años", category: "Tropical", categoryColor: "jungla", image: "/img/inflables/gusanitos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con torres decorativas y resbaladilla incluida.", price: "$1,800", size: "5×3.30×3m", ages: "2-10 años", category: "Princesas", categoryColor: "princesas", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,600", size: "5×3×2.80m", ages: "3-8 años", category: "Más popular", categoryColor: "castillo", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "barco-pirata", name: "Barco Pirata", description: "Barco pirata de gran escala con velas y tobogán gigante.", price: "$2,300", size: "6×3.5×3.80m", ages: "3-12 años", category: "Grande", categoryColor: "pirata", image: "/img/inflables/barco-pirata.avif" },
    ],
  },
};
