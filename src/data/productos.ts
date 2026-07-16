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
  gradient: string; image: string;
}
export interface SectionCopy { copy1: string; copy2: string; }
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
}

export const PRODUCTOS_PAGINAS: Record<string, ProductoPagina> = {
  "barco-pirata": {
    title: "Renta de Barco Pirata Inflable | Inflables para Fiestas Temáticas | CDMX",
    description: "Renta de Barco Pirata inflable para fiestas temáticas en CDMX y Estado de México. El galeón pirata favorito de los niños desde los 4 años. Entrega e instalación incluidas.",
    badge: "Aventura pirata de gran tamaño",
    cta: "Cotizar Barco Pirata",
    galeria: {
      copy1: "El Barco Pirata impresiona desde cualquier ángulo: su imponente estructura de 4.5 metros de altura con decoración de anclas, calaveras y colores azul marino lo convierte en el centro de atención de cualquier evento al aire libre.",
      copy2: "Estas fotografías son de fiestas reales en CDMX y Estado de México donde el Barco Pirata fue la atracción estrella. Los niños no quieren bajarse de esta aventura inflable.",
    },
    precios: {
      copy1: "El Barco Pirata es ideal para fiestas grandes donde necesitas una atracción que mantenga entretenidos a varios niños al mismo tiempo. Con capacidad para 8 a 10 niños simultáneos y 7 metros de largo, es el modelo más grande del catálogo.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con entrega, instalación profesional, recolección y seguro de responsabilidad civil incluidos. Sin costos ocultos ni cargos extra el día del evento. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/barco-pirata/barco-pirata-exterior-evento.avif", alt: "Renta inflable Barco Pirata en CDMX - evento exterior" },
      { src: "/img/inflables/barco-pirata/barco-pirata-lateral-cdmx.avif", alt: "Renta inflable Barco Pirata en CDMX - vista lateral" },
      { src: "/img/inflables/barco-pirata/barco-pirata-renta-cdmx.avif", alt: "Renta inflable Barco Pirata en CDMX - renta a domicilio" },
      { src: "/img/inflables/barco-pirata-inflable-vista-frontal-cdmx.avif", alt: "Inflable Barco Pirata decoración pirata CDMX" },
      { src: "/img/inflables/barco-pirata-decoracion-pirata-evento.avif", alt: "Barco Pirata inflable vista frontal para fiesta infantil" },
      { src: "/img/inflables/barco-pirata-tobogan-altura-fiesta-cdmx.avif", alt: "Renta de Barco Pirata inflable en evento CDMX" },
      { src: "/img/inflables/barco-pirata-zona-brinco-jardin-cdmx.avif", alt: "Barco Pirata inflable instalado en jardín exterior" },
      { src: "/img/inflables/barco-pirata-instalacion-exterior-cdmx.avif", alt: "Inflable temático pirata para cumpleaños infantil" },
      { src: "/img/inflables/barco-pirata-vista-lateral-evento.avif", alt: "Barco Pirata inflable vista lateral con tobogán" },
      { src: "/img/inflables/barco-pirata-fiesta-tematica-pirata.avif", alt: "Renta Barco Pirata inflable fiesta grande CDMX" },
      { src: "/img/inflables/barco-pirata-kermess-escolar-cdmx.avif", alt: "Inflable Barco Pirata en evento al aire libre" },
      { src: "/img/inflables/barco-pirata-renta-evento-grande-cdmx.avif", alt: "Barco Pirata inflable instalado en terraza para kermés" },
    ],
    pricingPackages: [
      {
        name: "Renta del Barco Pirata",
        price: "$1,800",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Barco Pirata 7×5×4.5m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Barco Pirata",
      },
    ],
    faqItems: [
      { question: "¿Qué tan grande es el Barco Pirata?", answer: "El Barco Pirata mide 7 metros de largo, 5 metros de ancho y 4.5 metros de altura. Necesitas un espacio libre de al menos 8×6 metros para la instalación segura, considerando el espacio de acceso y circulación alrededor." },
      { question: "¿Cuántos niños pueden usar el Barco Pirata al mismo tiempo?", answer: "El Barco Pirata tiene capacidad para 8 a 10 niños simultáneamente y funciona desde los 4 años. El tobogán integrado en la popa genera tráfico fluido: los niños suben por dentro y bajan por la resbaladilla sin interferirse." },
      { question: "¿Tiene resbaladilla el Barco Pirata?", answer: "Sí, el Barco Pirata incluye una resbaladilla de altura integrada en la popa del barco. Es una de las características favoritas de los niños y está diseñada con laterales de seguridad para un descenso controlado." },
      { question: "¿Se puede instalar el Barco Pirata en concreto?", answer: "Sí, el Barco Pirata se instala en pasto, concreto, loseta o cualquier superficie plana. En superficies duras utilizamos anclajes especiales con sacos de arena para garantizar la estabilidad durante todo el evento." },
      { question: "¿El Barco Pirata es apto para fiestas temáticas de piratas?", answer: "Es la opción perfecta. Su diseño con decoración de barco pirata, colores azul marino y detalles de anclas y calaveras complementa cualquier fiesta temática de piratas. Muchos clientes lo combinan con decoración y piñatas del mismo tema." },
      { question: "¿Cuánto tiempo tardan en instalar el Barco Pirata?", answer: "La instalación toma aproximadamente 30 minutos. Nuestro equipo llega con anticipación para tener todo listo antes de que lleguen los invitados. Necesitamos una toma de corriente 110V a menos de 15 metros del lugar de instalación." },
    ],
    cards: [
      { slug: "extremo", name: "Extremo", description: "Circuito de 7m con obstáculos y tobogán doble.", price: "$1,900", size: "7×4×3.8m", ages: "6+ años", category: "Extremo", categoryColor: "extremo", gradient: "#E65100, #BF360C", image: "/img/inflables/extremo.avif" },
      { slug: "castillo-blanco", name: "Castillo Blanco", description: "Elegante para bodas, bautizos y XV años.", price: "$1,700", size: "6×5×4m", ages: "3+ años", category: "Bodas", categoryColor: "bodas", gradient: "#7E57C2, #9575CD", image: "/img/inflables/castillo-blanco.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Castillo", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
    ],
  },
  "castillo-blanco": {
    title: "Renta de Castillo Blanco Inflable | Inflables para Eventos Premium | CDMX",
    description: "Renta de Castillo Blanco inflable para fiestas y eventos en CDMX. Diseño elegante y neutro para XV años, bodas y eventos premium. Instalación profesional incluida.",
    badge: "Premium para bodas y eventos elegantes",
    cta: "Cotizar Castillo Blanco",
    galeria: {
      copy1: "El Castillo Blanco se ve espectacular en bodas, bautizos y quinceañeras. Estas fotos muestran cómo nuestros clientes lo han integrado en eventos elegantes con decoraciones de flores, globos y tules que complementan el diseño blanco puro.",
      copy2: "Cada imagen es de un evento real en CDMX y Estado de México. El Castillo Blanco es el inflable más fotografiado de nuestro catálogo gracias a su apariencia premium que eleva la estética de cualquier celebración.",
    },
    precios: {
      copy1: "El Castillo Blanco es un inflable premium con acabados superiores, pensado para eventos donde la estética importa tanto como la diversión. La renta incluye sanitización certificada para mantener el blanco impecable.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con entrega, instalación profesional, recolección y seguro de responsabilidad civil incluidos. Coordinamos la hora de montaje con el venue para no interferir con la logística del evento.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/castillo-blanco/alquiler-castillo-blanco-bodas-decoracion.avif", alt: "Renta inflable Castillo Blanco en CDMX - bodas decoración" },
      { src: "/img/inflables/castillo-blanco/alquiler-castillo-blanco-bodas-terraza-cdmx.avif", alt: "Renta inflable Castillo Blanco en CDMX - bodas terraza" },
      { src: "/img/inflables/castillo-blanco/alquiler-inflable-blanco-bodas-rosas-cdmx.avif", alt: "Renta inflable Castillo Blanco en CDMX - bodas con rosas" },
      { src: "/img/inflables/castillo-blanco/brincolin-blanco-bodas-ceremonia-cdmx.avif", alt: "Renta inflable Castillo Blanco en CDMX - ceremonia de boda" },
      { src: "/img/inflables/castillo-blanco/brincolin-blanco-bodas-decoracion-globos.avif", alt: "Renta inflable Castillo Blanco en CDMX - decoración con globos" },
      { src: "/img/inflables/castillo-blanco-inflable-boda-cdmx.avif", alt: "Castillo Blanco inflable para eventos elegantes CDMX" },
      { src: "/img/inflables/castillo-blanco-boda-terraza-cdmx.avif", alt: "Inflable blanco premium para bodas en CDMX" },
      { src: "/img/inflables/castillo-blanco-xv-anos-inflable-cdmx.avif", alt: "Castillo Blanco inflable vista frontal evento formal" },
      { src: "/img/inflables/castillo-blanco-bautizo-evento-formal.avif", alt: "Renta de castillo inflable blanco para XV años CDMX" },
      { src: "/img/inflables/castillo-blanco-decoracion-elegante-cdmx.avif", alt: "Castillo Blanco inflable instalado en jardín" },
      { src: "/img/inflables/castillo-blanco-instalacion-jardin-boda.avif", alt: "Inflable Castillo Blanco en bautizo decoración elegante" },
      { src: "/img/inflables/castillo-blanco-vista-frontal-evento.avif", alt: "Castillo Blanco inflable vista lateral evento CDMX" },
      { src: "/img/inflables/castillo-blanco-salon-bodas-cdmx.avif", alt: "Renta inflable blanco para eventos formales Estado de México" },
      { src: "/img/inflables/castillo-blanco-terraza-boda-edomex.avif", alt: "Castillo Blanco inflable en terraza para boda" },
    ],
    pricingPackages: [
      {
        name: "Renta del Castillo Blanco",
        price: "$1,700",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Castillo Blanco 6×5×4m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Castillo Blanco",
      },
    ],
    faqItems: [
      { question: "¿El Castillo Blanco es apto para bodas?", answer: "Es nuestra opción número uno para bodas. Su diseño blanco puro combina perfectamente con la decoración nupcial, arreglos florales y temáticas elegantes. Muchos de nuestros clientes lo decoran con tules, luces y globos blancos para integrarlo completamente al ambiente de la boda." },
      { question: "¿Pueden usarlo adultos?", answer: "Sí, el Castillo Blanco tiene capacidad para 8-10 personas y soporta uso por parte de adultos y niños. Su estructura comercial reforzada está diseñada para eventos donde invitados de todas las edades quieren participar en la diversión." },
      { question: "¿Es adecuado para XV años y bautizos?", answer: "Perfecto para ambos. En quinceañeras, el Castillo Blanco se convierte en un área de diversión elegante que complementa la estética del evento. Para bautizos, su color neutro y tamaño familiar lo hacen ideal para celebraciones íntimas y formales." },
      { question: "¿Puedo decorar el Castillo Blanco?", answer: "Sí, el Castillo Blanco es un lienzo perfecto para personalizar. Puedes agregar flores, tules, globos, luces LED y letreros. Solo pedimos que la decoración no use tachuelas, grapas o cualquier elemento punzocortante que pueda dañar el material." },
      { question: "¿Qué espacio necesito para instalar el Castillo Blanco?", answer: "El Castillo Blanco mide 6×5×4 metros. Necesitas un espacio libre de al menos 7×6 metros y una toma de corriente 110V a menos de 15 metros. Se instala en pasto, concreto, loseta o tarimas de madera. La instalación toma 30 minutos." },
      { question: "¿El color blanco se mantiene limpio?", answer: "Realizamos limpieza profunda y sanitización certificada antes de cada evento. El Castillo Blanco se entrega impecable y reluciente. Durante el evento, el material de PVC comercial es fácil de limpiar y resistente a manchas superficiales." },
    ],
    cards: [
      { slug: "barco-pirata", name: "Barco Pirata", description: "Aventura pirata con resbaladilla de altura.", price: "$1,800", size: "7×5×4.5m", ages: "4+ años", category: "Aventura", categoryColor: "pirata", gradient: "#1565C0, #0D47A1", image: "/img/inflables/barco-pirata.avif" },
      { slug: "extremo", name: "Extremo", description: "Circuito de 7m con obstáculos y tobogán doble.", price: "$1,900", size: "7×4×3.8m", ages: "6+ años", category: "Extremo", categoryColor: "extremo", gradient: "#E65100, #BF360C", image: "/img/inflables/extremo.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Castillo", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
    ],
  },
  "castillo-princesas": {
    title: "Renta de Castillo de Princesas | Inflables para Fiestas de Niñas | CDMX",
    description: "Renta de Castillo de Princesas para fiestas infantiles en CDMX y Edomex. El favorito para cumpleaños de niñas: colores vibrantes, diseño temático y mucha diversión. Entrega incluida.",
    badge: "Favorito para fiestas de niñas",
    cta: "Cotizar Castillo de Princesas",
    galeria: {
      copy1: "Estas fotografías muestran el Castillo de Princesas instalado en fiestas reales en CDMX y Estado de México. El diseño en rosa y morado con torres decorativas convierte cualquier espacio en un escenario de cuento de hadas para las niñas.",
      copy2: "Nuestro equipo instala el inflable en jardines, terrazas, patios y salones de fiestas. Cada evento queda documentado para que veas exactamente cómo lucirá el castillo en tu celebración.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta de princesas: de 4 a 6 horas de renta con instalación, retiro y seguro incluidos sin costo adicional. Sin escalera de paquetes ni cargos sorpresa el día del evento.",
      copy2: "Los precios son en pesos mexicanos antes de IVA e incluyen entrega, instalación profesional y recolección al terminar. Reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    relacionados: {
      copy1: "Complementa tu fiesta de princesas con otros inflables del catálogo. Los Dragones Rojos son perfectos si buscas una temática de aventura, la Mini Jungla para safari tropical y el Mini Castillo para los más pequeños de la fiesta.",
      copy2: "Todos nuestros inflables incluyen sanitización certificada, entrega y motor silencioso. Cotiza varios modelos sin compromiso y arma la combinación perfecta para tu evento.",
    },
    galleryImages: [
      { src: "/img/inflables/castillo-princesas/castillo-princesas-exterior-jardin.avif", alt: "Castillo de Princesas inflable instalado en jardín exterior" },
      { src: "/img/inflables/castillo-princesas/castillo-princesas-renta-cdmx.avif", alt: "Renta de Castillo de Princesas inflable en CDMX" },
      { src: "/img/inflables/castillo-princesas/mini-castillo-princesas-fiesta.avif", alt: "Castillo de Princesas en fiesta infantil temática" },
      { src: "/img/inflables/castillo-princesas/mini-princess-renta-cdmx.avif", alt: "Inflable princesas disponible para renta en Ciudad de México" },
      { src: "/img/inflables/castillo-princesas-cumpleanos-nina-cdmx.avif", alt: "Castillo de Princesas inflable rosa cumpleaños niña CDMX" },
      { src: "/img/inflables/castillo-princesas-fiesta-tematica-rosa.avif", alt: "Renta de castillo inflable princesas fiesta temática" },
      { src: "/img/inflables/castillo-princesas-vista-frontal-cdmx.avif", alt: "Inflable Castillo de Princesas vista frontal CDMX" },
      { src: "/img/inflables/castillo-princesas-resbaladilla-decoracion.avif", alt: "Castillo princesas inflable decoración rosa y morado" },
      { src: "/img/inflables/castillo-princesas-jardin-exterior-fiesta.avif", alt: "Inflable princesas instalado en jardín para cumpleaños" },
      { src: "/img/inflables/castillo-princesas-salon-cumpleanos.avif", alt: "Renta Castillo Princesas para fiesta de niña CDMX" },
      { src: "/img/inflables/castillo-princesas-vista-lateral-cdmx.avif", alt: "Castillo de Princesas inflable vista lateral evento" },
      { src: "/img/inflables/castillo-princesas-terraza-evento-nina.avif", alt: "Inflable princesas en terraza para fiesta infantil" },
      { src: "/img/inflables/castillo-princesas-renta-domicilio-cdmx.avif", alt: "Castillo de Princesas inflable renta a domicilio CDMX" },
    ],
    pricingPackages: [
      {
        name: "Renta del Castillo de Princesas",
        price: "$1,200",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Castillo de Princesas 4×4×3.5m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Castillo de Princesas",
      },
    ],
    faqItems: [
      {
        question: "¿El Castillo de Princesas es adecuado para fiestas temáticas de princesas?",
        answer: "Sí, es el inflable ideal para fiestas temáticas de princesas. Su diseño en rosa y morado con torres decorativas crea la atmósfera perfecta de cuento de hadas. Combina perfectamente con decoraciones de Cenicienta, Rapunzel, Frozen o cualquier temática de princesas que elijas para tu evento.",
      },
      {
        question: "¿Cuántos niños pueden usar el Castillo de Princesas al mismo tiempo?",
        answer: "El inflable tiene capacidad para 5 a 7 niños brincando simultáneamente. Está diseñado para niños de 4 a 10 años de edad. Si en tu fiesta hay más niños, nuestros operadores organizan turnos para que todos disfruten de forma segura.",
      },
      {
        question: "¿Qué dimensiones tiene el Castillo de Princesas?",
        answer: "El inflable mide 4 metros de largo por 4 metros de ancho y 3.5 metros de alto. Necesitas un espacio exterior libre de al menos 5×5 metros y acceso a una toma de corriente 110V a no más de 15 metros. Funciona en jardines y patios.",
      },
      {
        question: "¿El Castillo de Princesas incluye resbaladilla?",
        answer: "Sí, el Castillo de Princesas cuenta con una resbaladilla integrada que forma parte del diseño del castillo. Los niños pueden subir, saltar y deslizarse con total seguridad gracias a las mallas de seguridad laterales que permiten a los padres supervisar en todo momento.",
      },
      {
        question: "¿Qué espacio necesito para el Castillo de Princesas?",
        answer: "El Castillo de Princesas requiere un espacio exterior de al menos 5×5 metros libres y una toma de corriente estándar. Con 3.5 metros de altura no es un modelo para interiores: si tu evento es en salón, el Mini Castillo (2×2×2.5 m) es la opción diseñada para techos estándar.",
      },
      {
        question: "¿Qué incluye la renta del Castillo de Princesas?",
        answer: "La renta incluye el inflable de 4 a 6 horas, motor silencioso, extensión eléctrica, entrega a domicilio, instalación profesional, retiro al finalizar y seguro de responsabilidad civil. Todos los inflables pasan por sanitización certificada antes de cada evento.",
      },
    ],
    cards: [
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Más popular", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "mini-jungla", name: "Mini Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,300", size: "4.5×4×3.5m", ages: "3-10 años", category: "Aventura", categoryColor: "jungla", gradient: "#2E7D32, #1B5E20", image: "/img/inflables/mini-jungla.avif" },
      { slug: "mini-castillo", name: "Mini Castillo", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$800", size: "2×2×2.5m", ages: "1-4 años", category: "Chico", categoryColor: "castillo", gradient: "#FF3D00, #ff6d3f", image: "/img/inflables/mini-castillo.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,350", size: "5×3×2.5m", ages: "4-10 años", category: "Tropical", categoryColor: "jungla", gradient: "#558B2F, #827717", image: "/img/inflables/gusanitos.avif" },
    ],
  },
  "dragones-rojos": {
    title: "Renta de Dragones Rojos | Inflables para Fiestas | El Más Rentado CDMX",
    description: "Renta de Dragones Rojos en CDMX y Estado de México. El inflable más solicitado: alta capacidad para grupos de niños, colores llamativos y diversión garantizada. Entrega e instalación incluidas.",
    badge: "Inflable más rentado en CDMX",
    cta: "Cotizar Dragones Rojos",
    galeria: {
      copy1: "Estas son fotografías reales del inflable Dragones Rojos tomadas en fiestas infantiles, eventos corporativos y celebraciones familiares en CDMX y Estado de México. El diseño en rojo y dorado con los dos dragones de 3 metros es el imán visual de cualquier evento.",
      copy2: "Cada imagen muestra el inflable instalado en diferentes escenarios: jardines, terrazas, salones y patios. Nuestro equipo se encarga de la instalación completa para que el inflable luzca perfecto sin importar el espacio disponible.",
    },
    precios: {
      copy1: "El Dragones Rojos es el modelo más pedido del catálogo y se renta de 4 a 6 horas, la duración típica de un cumpleaños. Un solo precio, sin escalera de paquetes.",
      copy2: "Todos los precios son en pesos mexicanos antes de IVA e incluyen instalación, retiro y seguro de responsabilidad civil. Reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    relacionados: {
      copy1: "Si el Dragones Rojos no se ajusta a lo que buscas, explora nuestro catálogo completo. El Castillo de Princesas es perfecto para fiestas de niñas, la Mini Jungla para temáticas safari y los Gusanitos para eventos tropicales al aire libre.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza sin compromiso y recibe respuesta en minutos — reserva con el 50% de anticipo y asegura tu fecha.",
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
        price: "$1,200",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Dragones Rojos 4×4×3.8m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Dragones Rojos",
      },
    ],
    faqItems: [
      {
        question: "¿Cuántos niños pueden brincar a la vez en el Dragones Rojos?",
        answer: "El inflable Dragones Rojos tiene capacidad para 5 a 7 niños brincando simultáneamente. Recomendamos que los niños tengan entre 4 y 10 años de edad para un uso seguro y divertido. Un operador puede supervisar los turnos si hay más niños en el evento.",
      },
      {
        question: "¿Qué medidas tiene el inflable Dragones Rojos y cuánto espacio necesito?",
        answer: "El inflable mide 4 metros de largo por 4 metros de ancho y 3.8 metros de alto, con dos dragones de 3 metros que se distinguen desde la calle. Necesitas un espacio libre mínimo de 5×5 metros, más una toma de corriente 110V a no más de 15 metros.",
      },
      {
        question: "¿El inflable Dragones Rojos incluye resbaladilla?",
        answer: "Sí, el Dragones Rojos cuenta con una resbaladilla integrada de alta velocidad que es parte del diseño del castillo. Los niños pueden subir, brincar y deslizarse de forma segura gracias a las mallas de seguridad laterales que permiten la supervisión de los padres en todo momento.",
      },
      {
        question: "¿Cuánto tiempo toma instalar el Dragones Rojos?",
        answer: "La instalación profesional del inflable Dragones Rojos toma aproximadamente 20 minutos. Nuestro equipo llega con anticipación para tener todo listo antes de que inicie tu evento. El retiro al finalizar está incluido en la renta, sin cargo adicional.",
      },
      {
        question: "¿En qué zonas de CDMX y Edomex entregan el inflable Dragones Rojos?",
        answer: "Cubrimos las 16 alcaldías de la Ciudad de México y los principales municipios del Estado de México: Naucalpan, Tlalnepantla, Ecatepec, Huixquilucan, Atizapán, Cuautitlán Izcalli y más. La entrega está incluida en el precio sin costo adicional dentro de nuestra zona de cobertura.",
      },
      {
        question: "¿El Dragones Rojos es seguro para fiestas infantiles?",
        answer: "Absolutamente. El inflable Dragones Rojos está fabricado con PVC de grado comercial de 18oz resistente a rasgaduras. Cuenta con mallas de seguridad en todos los costados para visibilidad total de los padres, piso acolchonado y pasa por un proceso de sanitización certificada antes de cada evento.",
      },
    ],
    cards: [
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla incluida.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "mini-jungla", name: "Mini Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,300", size: "4.5×4×3.5m", ages: "3-10 años", category: "Aventura", categoryColor: "jungla", gradient: "#2E7D32, #1B5E20", image: "/img/inflables/mini-jungla.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,350", size: "5×3×2.5m", ages: "4-10 años", category: "Tropical", categoryColor: "jungla", gradient: "#558B2F, #827717", image: "/img/inflables/gusanitos.avif" },
      { slug: "mini-castillo", name: "Mini Castillo", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$800", size: "2×2×2.5m", ages: "1-4 años", category: "Chico", categoryColor: "castillo", gradient: "#FF3D00, #ff6d3f", image: "/img/inflables/mini-castillo.avif" },
    ],
  },
  "extremo": {
    title: "Renta de Inflable Extremo | Inflables para Eventos y Kermeses | CDMX",
    description: "Renta de Inflable Extremo para eventos, kermeses y fiestas con muchos niños en CDMX. El circuito de obstáculos más completo: alta capacidad y diversión máxima. Cotiza hoy.",
    badge: "Circuito de carreras con doble carril",
    cta: "Cotizar Inflable Extremo",
    galeria: {
      copy1: "El circuito Extremo impresiona por su recorrido: 7 metros de pura diversión inflable que domina cualquier espacio al aire libre. Estas fotos muestran el Extremo en eventos reales como kermeses, fiestas corporativas y cumpleaños en CDMX y Estado de México.",
      copy2: "Desde la pista de obstáculos hasta el tobogán doble, cada sección del Extremo ofrece una experiencia diferente. Los participantes corren, escalan, esquivan y se deslizan en un circuito que no deja a nadie sentado.",
    },
    precios: {
      copy1: "El Extremo es nuestra opción premium para eventos que necesitan una atracción de alto impacto. Es un circuito de obstáculos para competencias por equipos, con capacidad para 6 a 10 niños por turno y rotación continua.",
      copy2: "Un solo precio de 4 a 6 horas de renta, con entrega, instalación profesional, recolección y seguro de responsabilidad civil incluidos. La dinámica de competencia por equipos hace que los turnos se regulen solos.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza y recibe respuesta en minutos.",
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
        price: "$1,900",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Extremo 7×4×3.8m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Extremo",
      },
    ],
    faqItems: [
      { question: "¿Qué tan grande es el circuito Extremo?", answer: "El Extremo mide 7 metros de largo, 4 metros de ancho y 3.8 metros de altura. Necesitas un espacio libre de al menos 8×5 metros para su instalación, lo que lo hace ideal para patios amplios, explanadas y campos deportivos." },
      { question: "¿Pueden usarlo adultos y adolescentes?", answer: "Sí, el Extremo está diseñado para personas de 6 años en adelante, incluyendo adolescentes y adultos. Su estructura comercial reforzada soporta el uso intensivo y su doble carril permite competencias entre participantes de diferentes edades." },
      { question: "¿Qué incluye el circuito de obstáculos?", answer: "El Extremo incluye pista de obstáculos con barreras inflables, túneles, columnas esquivables, zona de escalada y tobogán doble al final. El doble carril permite que dos personas compitan simultáneamente, creando una experiencia emocionante de carreras." },
      { question: "¿Es adecuado para eventos corporativos?", answer: "El Extremo es nuestra opción número uno para eventos corporativos, team buildings y activaciones de marca. Su formato de competencia en doble carril fomenta el trabajo en equipo y la sana competencia. Incluimos operadores que organizan torneos y dinámicas grupales." },
      { question: "¿Cuántas personas pueden usarlo simultáneamente?", answer: "El circuito tiene capacidad para 6 a 10 niños por turno y está recomendado desde los 6 años. Dos equipos parten al mismo tiempo y el que llega primero gana, así que la rotación es continua y los turnos se regulan solos." },
      { question: "¿Sirve para kermeses y eventos escolares?", answer: "Es la opción ideal para kermeses y festivales escolares. La renta es de 4 a 6 horas e incluye entrega, instalación profesional y recolección. La dinámica de competencia por equipos ordena las filas sin que los adultos tengan que intervenir." },
    ],
    cards: [
      { slug: "barco-pirata", name: "Barco Pirata", description: "Aventura pirata con resbaladilla de altura.", price: "$1,800", size: "7×5×4.5m", ages: "4+ años", category: "Aventura", categoryColor: "pirata", gradient: "#1565C0, #0D47A1", image: "/img/inflables/barco-pirata.avif" },
      { slug: "castillo-blanco", name: "Castillo Blanco", description: "Elegante para bodas, bautizos y XV años.", price: "$1,700", size: "6×5×4m", ages: "3+ años", category: "Bodas", categoryColor: "bodas", gradient: "#7E57C2, #9575CD", image: "/img/inflables/castillo-blanco.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Castillo", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
    ],
  },
  "gusanitos": {
    title: "Renta de Gusanitos Inflables | Inflables para Bebés y Niños Pequeños | CDMX",
    description: "Renta de Gusanitos inflables para fiestas de bebés y niños pequeños en CDMX. Diseño seguro y colorido para menores de 5 años. Entrega e instalación incluidas en toda la ciudad.",
    badge: "El más colorido y tropical",
    cta: "Cotizar Gusanitos",
    galeria: {
      copy1: "Estas son imágenes reales del inflable Gusanitos en fiestas infantiles y eventos familiares en CDMX y Edomex. Sus colores vibrantes en verde, morado, amarillo y azul lo convierten en el centro de atención y la atracción más fotografiada.",
      copy2: "El Gusanitos luce espectacular en jardines, patios y terrazas al aire libre. Nuestro equipo se encarga de la instalación completa para que el inflable quede perfectamente colocado y seguro para los niños.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta: el Gusanitos se renta de 4 a 6 horas, la duración típica de un cumpleaños, y también funciona para fiestas de verano, pool parties y eventos al aire libre.",
      copy2: "Precios en pesos mexicanos antes de IVA. La renta incluye instalación, retiro, extensión eléctrica y seguro de responsabilidad civil sin costo adicional. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Si buscas más opciones para tu evento, la Mini Jungla comparte la temática tropical con dinosaurios y palmeras, el Castillo de Princesas es perfecto para fiestas de niñas y los Dragones Rojos son el favorito absoluto de CDMX.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza sin compromiso y recibe respuesta en minutos — reserva con el 50% de anticipo para asegurar tu fecha.",
    },
    galleryImages: [
      { src: "/img/inflables/gusanitos/gusanitos-brincolin-evento.avif", alt: "Brincolin Gusanitos instalado en evento infantil" },
      { src: "/img/inflables/gusanitos/gusanitos-exterior-jardin.avif", alt: "Inflable Gusanitos en jardín exterior para fiesta" },
      { src: "/img/inflables/gusanitos/gusanitos-inflable-fiesta.avif", alt: "Gusanitos inflable en fiesta infantil con niños jugando" },
      { src: "/img/inflables/gusanitos/gusanitos-lateral-cdmx.avif", alt: "Vista lateral del inflable Gusanitos en CDMX" },
      { src: "/img/inflables/gusanitos/gusanitos-renta-cdmx.avif", alt: "Renta de inflable Gusanitos en Ciudad de México" },
      { src: "/img/inflables/gusanitos/gusanitos-vista-general.avif", alt: "Vista general del inflable Gusanitos con colores vibrantes" },
    ],
    pricingPackages: [
      {
        name: "Renta del Gusanitos",
        price: "$1,350",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Gusanitos 5×3×2.5m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Gusanitos",
      },
    ],
    faqItems: [
      {
        question: "¿Qué hace especial al inflable Gusanitos frente a otros modelos?",
        answer: "El Gusanitos destaca por su diseño tropical multicolor con gusanitos decorativos en verde y morado, palmeras laterales y una combinación de colores vibrantes en verde, morado, amarillo y azul. Es el inflable más original y fotografiado de nuestro catálogo, perfecto para fiestas al aire libre donde quieras un toque de color único.",
      },
      {
        question: "¿Para qué edades es recomendable el inflable Gusanitos?",
        answer: "El Gusanitos está diseñado para niños de 4 a 10 años de edad. Al ser un circuito de túneles con varias entradas y salidas, no hay un uso dominante: cada niño encuentra su forma de recorrerlo sin competir por el mismo espacio.",
      },
      {
        question: "¿Cómo juegan los niños en el Gusanitos?",
        answer: "El Gusanitos es más un circuito que un brincolín: túneles de colores conectados con varias entradas y salidas por donde los niños gatean, se persiguen y se esconden. Con 5 metros de largo es el de mayor alcance del catálogo mediano y funciona bien con edades mezcladas.",
      },
      {
        question: "¿Cuántos niños pueden brincar a la vez en el Gusanitos?",
        answer: "El inflable tiene capacidad para 5 a 7 niños al mismo tiempo. Sus dimensiones de 5×3×2.5 metros forman un recorrido alargado de túneles con varias entradas y salidas, así que los niños se reparten a lo largo del circuito en lugar de concentrarse en un solo punto.",
      },
      {
        question: "¿El Gusanitos se puede usar para fiestas temáticas hawaianas o tropicales?",
        answer: "Es la opción ideal para fiestas temáticas hawaianas, tropicales o de verano. Las palmeras decorativas y los colores vibrantes combinan perfectamente con decoraciones de luau, fiesta en la playa o temática de frutas tropicales. Muchos clientes lo eligen para pool parties y fiestas de jardín.",
      },
      {
        question: "¿Qué necesito tener listo antes de que lleguen a instalar el Gusanitos?",
        answer: "Necesitas un espacio exterior de 6×4 metros en una superficie plana (pasto, concreto o piso firme) y acceso a una toma de corriente 110V a no más de 15 metros. El montaje es ágil gracias a su forma lineal y la extensión eléctrica de 15 metros va incluida en la renta.",
      },
    ],
    cards: [
      { slug: "mini-jungla", name: "Mini Jungla", description: "Inflable temático con animales y palmeras tropicales.", price: "$1,300", size: "4.5×4×3.5m", ages: "3-10 años", category: "Aventura", categoryColor: "jungla", gradient: "#2E7D32, #1B5E20", image: "/img/inflables/mini-jungla.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con torres decorativas y resbaladilla incluida.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Más popular", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "mini-castillo", name: "Mini Castillo", description: "Compacto para bebés. Perfecto para interiores y espacios reducidos.", price: "$800", size: "2×2×2.5m", ages: "1-4 años", category: "Chico", categoryColor: "castillo", gradient: "#FF3D00, #ff6d3f", image: "/img/inflables/mini-castillo.avif" },
    ],
  },
  "mini-castillo": {
    title: "Renta de Mini Castillo Inflable | Inflables para Fiestas Pequeñas | CDMX",
    description: "Renta de Mini Castillo inflable para fiestas en espacios pequeños. Base de solo 2×2 m. El inflable más accesible de BRINCOLINS desde $800 MXN. Ideal para interiores, terrazas y patios en CDMX.",
    badge: "Ideal para bebés y espacios pequeños",
    cta: "Cotizar Mini Castillo",
    galeria: {
      copy1: "El Mini Castillo luce increíble en cualquier espacio: desde jardines amplios hasta salones de departamento. Estas fotos son de eventos reales donde nuestros clientes rentaron este inflable para cumpleaños y bautizos en CDMX.",
      copy2: "Cada imagen muestra el Mini Castillo en diferentes escenarios para que puedas visualizar cómo quedaría en tu evento. Recuerda que solo necesitas un espacio de 3×3 metros y una toma de corriente cercana.",
    },
    precios: {
      copy1: "El Mini Castillo es nuestro inflable más accesible, desde $800 MXN por 4 a 6 horas de renta, pensado para fiestas de cumpleaños de primer año, bautizos y reuniones íntimas donde los bebés son los protagonistas.",
      copy2: "La renta incluye el inflable sanitizado, motor inflador silencioso, entrega a domicilio, instalación profesional, recolección al terminar y seguro de responsabilidad civil. Un solo precio, sin cargos extra.",
    },
    relacionados: {
      copy1: "Contamos con 8 modelos de inflables para fiestas infantiles, bodas y eventos en toda la Zona Metropolitana.",
      copy2: "Todos nuestros inflables pasan por sanitización certificada antes de cada evento. Cotiza y recibe respuesta en minutos.",
    },
    galleryImages: [
      { src: "/img/inflables/mini-castillo/mini-castillo-cumpleanos-infantil.avif", alt: "Renta inflable Mini Castillo en CDMX - cumpleaños infantil" },
      { src: "/img/inflables/mini-castillo/mini-castillo-exterior.avif", alt: "Renta inflable Mini Castillo en CDMX - evento exterior" },
      { src: "/img/inflables/mini-castillo/mini-castillo-interior-fiesta.avif", alt: "Renta inflable Mini Castillo en CDMX - fiesta en interior" },
      { src: "/img/inflables/mini-castillo/mini-castillo-renta-cdmx.avif", alt: "Renta inflable Mini Castillo en CDMX - entrega a domicilio" },
      { src: "/img/inflables/mini-castillo-primer-cumpleanos-bebe.avif", alt: "Mini Castillo inflable compacto para bebés CDMX" },
      { src: "/img/inflables/mini-castillo-interior-departamento-cdmx.avif", alt: "Renta Mini Castillo inflable para niños pequeños" },
      { src: "/img/inflables/mini-castillo-fiesta-interior-pequeno.avif", alt: "Inflable Mini Castillo vista frontal en interior de fiesta" },
      { src: "/img/inflables/mini-castillo-bautizo-nino-pequeno.avif", alt: "Mini Castillo brincolin compacto evento departamento" },
      { src: "/img/inflables/mini-castillo-vista-frontal-fiesta.avif", alt: "Renta Mini Castillo inflable primer cumpleaños bebé" },
      { src: "/img/inflables/mini-castillo-salon-bebe-renta.avif", alt: "Mini Castillo inflable en bautizo fiesta familiar" },
      { src: "/img/inflables/mini-castillo-instalacion-terraza-cdmx.avif", alt: "Inflable Mini Castillo renta a domicilio CDMX" },
      { src: "/img/inflables/mini-castillo-evento-familiar-cdmx.avif", alt: "Mini Castillo inflable instalado en salón de fiestas" },
      { src: "/img/inflables/mini-castillo-brincolin-compacto-cdmx.avif", alt: "Brincolin Mini Castillo para bebés Estado de México" },
    ],
    pricingPackages: [
      {
        name: "Renta del Mini Castillo",
        price: "$800",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Mini Castillo 2×2×2.5m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Mini Castillo",
      },
    ],
    faqItems: [
      { question: "¿El Mini Castillo cabe en un departamento?", answer: "Sí, con solo 2×2 metros de base y 2.5 metros de altura, el Mini Castillo es el único inflable de nuestro catálogo diseñado para funcionar en interiores, departamentos y salones: basta con 2.5 metros de altura libre y no requiere anclas externas." },
      { question: "¿Es seguro para bebés de 1 año?", answer: "Absolutamente. El Mini Castillo tiene paredes acolchonadas sin bordes rígidos y una altura reducida pensada específicamente para bebés y niños de 1 a 4 años. Además, su tamaño compacto permite supervisión total desde cualquier ángulo." },
      { question: "¿Cuántos niños pueden brincar al mismo tiempo?", answer: "El Mini Castillo tiene capacidad para 3-4 niños simultáneamente. Recomendamos que todos sean menores de 4 años para garantizar la seguridad y el espacio adecuado para cada pequeño." },
      { question: "¿Qué se necesita para instalar el Mini Castillo?", answer: "Solo necesitas un espacio libre de 3×3 metros y una toma de corriente 110V a menos de 10 metros. La instalación tarda aproximadamente 15 minutos. Funciona en pasto, concreto, loseta o alfombra." },
      { question: "¿Incluye motor inflador?", answer: "Sí, todos nuestros paquetes incluyen el motor inflador silencioso, que es ideal para interiores ya que no genera ruido excesivo ni interfiere con la música de la fiesta." },
      { question: "¿Hacen entregas los fines de semana?", answer: "Sí, trabajamos los 7 días de la semana incluyendo días festivos. Las entregas se realizan en toda la CDMX y los principales municipios del Estado de México. Reserva con el 50% de anticipo." },
    ],
    cards: [
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con princesas de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más popular con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Castillo", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "gusanitos", name: "Gusanitos", description: "Tropical con gusanitos y colores vibrantes.", price: "$1,350", size: "5×3×2.5m", ages: "4-10 años", category: "Tropical", categoryColor: "jungla", gradient: "#558B2F, #827717", image: "/img/inflables/gusanitos.avif" },
      { slug: "mini-jungla", name: "Mini Jungla", description: "Temático con animales y palmeras tropicales.", price: "$1,300", size: "4.5×4×3.5m", ages: "3-10 años", category: "Aventura", categoryColor: "jungla", gradient: "#2E7D32, #1B5E20", image: "/img/inflables/mini-jungla.avif" },
    ],
  },
  "mini-jungla": {
    title: "Renta de Mini Jungla Inflable | Inflables para Niños Pequeños | CDMX",
    description: "Renta de Mini Jungla inflable para fiestas infantiles en CDMX y Estado de México. Diseño temático de jungla compacto para niños de 2 a 7 años. Entrega incluida en toda la ciudad.",
    badge: "Aventura tropical para exploradores",
    cta: "Cotizar Mini Jungla",
    galeria: {
      copy1: "Fotografías reales de la Mini Jungla en acción durante fiestas infantiles y eventos al aire libre en CDMX y Edomex. Los dinosaurios decorativos y las palmeras tropicales crean un escenario de aventura que fascina a los niños exploradores.",
      copy2: "El inflable se adapta a diferentes espacios: jardines amplios, patios residenciales, terrazas techadas e incluso interiores con techo alto. Nuestro equipo garantiza una instalación impecable en solo 15 minutos.",
    },
    precios: {
      copy1: "Un solo precio para tu fiesta safari o de dinosaurios: la Mini Jungla se renta de 4 a 6 horas, la duración típica de un cumpleaños o de una kermés escolar.",
      copy2: "Precios en pesos mexicanos antes de IVA. La renta incluye todo lo necesario para un evento sin complicaciones: instalación, retiro, motor y seguro. Reserva con el 50% de anticipo.",
    },
    relacionados: {
      copy1: "Explora más opciones para tu fiesta: los Gusanitos son perfectos para temática tropical, el Castillo de Princesas para niñas, los Dragones Rojos para aventuras medievales y el Barco Pirata para grupos más grandes.",
      copy2: "Todos los inflables incluyen sanitización certificada y motor silencioso. Cotiza varios modelos sin compromiso por WhatsApp y arma la combinación ideal para tu evento.",
    },
    galleryImages: [
      { src: "/img/inflables/mini-jungla/mini-jungla-dinosaurios-palmeras.avif", alt: "Inflable Mini Jungla con dinosaurios y palmeras tropicales" },
      { src: "/img/inflables/mini-jungla/mini-jungla-exterior-evento.avif", alt: "Mini Jungla inflable instalada en evento al aire libre" },
      { src: "/img/inflables/mini-jungla/mini-jungla-frontal-jardin.avif", alt: "Vista frontal del inflable Mini Jungla en jardín" },
      { src: "/img/inflables/mini-jungla/mini-jungla-lateral-cdmx.avif", alt: "Vista lateral del inflable Mini Jungla en CDMX" },
      { src: "/img/inflables/mini-jungla/mini-jungla-renta-cdmx.avif", alt: "Renta de inflable Mini Jungla en Ciudad de México" },
      { src: "/img/inflables/mini-jungla/mini-jungla-vista-general.avif", alt: "Vista general del inflable Mini Jungla con decoración selvática" },
    ],
    pricingPackages: [
      {
        name: "Renta del Mini Jungla",
        price: "$1,300",
        priceNote: "+ IVA",
        description: "Renta de 4 a 6 horas",
        features: [
          { text: "Inflable Mini Jungla 4.5×4×3.5m", included: true },
          { text: "Renta de 4 a 6 horas", included: true },
          { text: "Entrega a domicilio e instalación profesional", included: true },
          { text: "Motor inflador silencioso con extensión eléctrica", included: true },
          { text: "Recolección al terminar el evento", included: true },
          { text: "Seguro de responsabilidad civil", included: true },
          { text: "Sanitización certificada antes de cada evento", included: true },
        ],
        ctaHref: "/contacto/",
        ctaLabel: "Cotizar Mini Jungla",
      },
    ],
    faqItems: [
      {
        question: "¿El inflable Mini Jungla tiene dinosaurios reales en su diseño?",
        answer: "El inflable Mini Jungla cuenta con figuras decorativas de dinosaurios y palmeras tropicales que crean un ambiente de aventura selvática. Son figuras inflables integradas al diseño, de colores vibrantes y seguros para los niños. La temática es perfecta para fiestas safari, de dinosaurios o de animales.",
      },
      {
        question: "¿A partir de qué edad pueden usar la Mini Jungla?",
        answer: "La Mini Jungla está diseñada para niños de 3 a 10 años de edad. Es uno de los pocos inflables del catálogo que acepta niños desde los 3 años, ya que su diseño compacto y su altura accesible facilitan el uso seguro por parte de los más pequeños bajo supervisión.",
      },
      {
        question: "¿Qué espacio necesita la Mini Jungla?",
        answer: "La Mini Jungla mide 4.5×4×3.5 metros y requiere un espacio exterior de al menos 6×5 metros libres, más una toma de corriente 110V a no más de 15 metros. Por su altura no es un modelo para salones con techo estándar; para interiores el Mini Castillo es la opción indicada.",
      },
      {
        question: "¿Por qué la Mini Jungla se instala más rápido que otros inflables?",
        answer: "La Mini Jungla tiene el tiempo de instalación más rápido del catálogo: solo 15 minutos. Esto se debe a su diseño compacto y optimizado que permite un inflado más eficiente. Es ideal si necesitas que todo esté listo con poco tiempo de anticipación.",
      },
      {
        question: "¿La Mini Jungla es adecuada para fiestas temáticas de dinosaurios?",
        answer: "Es perfecta para fiestas de dinosaurios. Las figuras decorativas de dinosaurios y las palmeras tropicales crean el escenario ideal. Muchos de nuestros clientes la combinan con decoración de Jurassic Park, safari o explorador para crear una experiencia temática completa.",
      },
      {
        question: "¿Qué zonas de entrega cubren para la Mini Jungla?",
        answer: "Entregamos en las 16 alcaldías de CDMX y los principales municipios del Estado de México: Naucalpan, Tlalnepantla, Ecatepec, Coacalco, Huixquilucan, Atizapán, Cuautitlán Izcalli y más. La entrega e instalación están incluidas en la renta, sin costo adicional.",
      },
    ],
    cards: [
      { slug: "gusanitos", name: "Gusanitos", description: "Inflable tropical con gusanitos y colores vibrantes.", price: "$1,350", size: "5×3×2.5m", ages: "4-10 años", category: "Tropical", categoryColor: "jungla", gradient: "#558B2F, #827717", image: "/img/inflables/gusanitos.avif" },
      { slug: "castillo-princesas", name: "Castillo de Princesas", description: "Castillo rosa con torres decorativas y resbaladilla incluida.", price: "$1,200", size: "4×4×3.5m", ages: "4-10 años", category: "Princesas", categoryColor: "princesas", gradient: "#E91E8C, #7C3AED", image: "/img/inflables/castillo-princesas.avif" },
      { slug: "dragones-rojos", name: "Dragones Rojos", description: "El más rentado en CDMX con dragones de 3m y resbaladilla.", price: "$1,200", size: "4×4×3.8m", ages: "4-10 años", category: "Más popular", categoryColor: "castillo", gradient: "#B71C1C, #E53935", image: "/img/inflables/dragones-rojos.avif" },
      { slug: "barco-pirata", name: "Barco Pirata", description: "Barco pirata de gran escala con velas y tobogán gigante.", price: "$1,800", size: "7×5×4.5m", ages: "4+ años", category: "Grande", categoryColor: "pirata", gradient: "#1565C0, #0D47A1", image: "/img/inflables/barco-pirata.avif" },
    ],
  },
};
