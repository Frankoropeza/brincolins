/**
 * src/data/mesasDeDulces.ts
 * Fuente única de verdad del servicio de mesas de dulces de BRINCOLINS.
 *
 * El servicio lo opera nuestro aliado MEDEDUL. Precios, rangos de invitados e
 * inclusiones se copian TAL CUAL de su catálogo aprobado
 * (repo MEDEDUL, src/data/catalogo.ts, aprobado por Frank el 2026-11-02, y
 * los niveles de src/pages/candy-bar-eventos/mesa-dulces-*.astro).
 * Si MEDEDUL cambia un precio, se cambia aquí y en ningún otro archivo.
 *
 * Fuera a propósito: líneas de cobertura por sucursal, contadores de eventos
 * y testimonios de MEDEDUL que no se pueden verificar.
 */

export const ALIADO = {
  nombre: "MEDEDUL",
  url: "https://mededul.com/",
} as const;

export const BASE_URL = "/servicios/mesas-de-dulces/";
export const IMG = "/img/servicios/mesas-de-dulces";

export type Nivel = {
  nombre: "Esencial" | "Premium" | "Luxury";
  precio: number;
  invitados: string;
  lema: string;
  incluye: string[];
};

export type Evento = {
  slug: string;
  /** Nombre corto para menús y tarjetas */
  nombre: string;
  /** Keyword principal (Ahrefs MX, nov 2026) */
  keyword: string;
  unidad: "invitados" | "invitadas" | "niños";
  title: string;
  description: string;
  h1: string;
  intro: [string, string];
  /** Paleta y elementos típicos del montaje para este evento */
  estilo: string[];
  niveles: [Nivel, Nivel, Nivel];
  faqs: { question: string; answer: string }[];
  img: { hero: string; detalle: string; alt: string; altDetalle: string };
};

export const fmt = (n: number) => `$${n.toLocaleString("es-MX")}`;

export const EVENTOS: Evento[] = [
  {
    slug: "cumpleanos-infantil",
    nombre: "Cumpleaños infantil",
    keyword: "mesa de dulces para cumpleaños",
    unidad: "niños",
    title: "Mesa de dulces para cumpleaños infantil en CDMX",
    description: "Mesa de dulces temática para cumpleaños infantil en CDMX desde $3,500 (15 a 30 niños). Montaje, bolos y control de alergias. Combínala con tu inflable.",
    h1: "Mesa de dulces para cumpleaños infantil",
    intro: [
      "Una mesa de dulces temática montada junto al inflable: el personaje o la temática que elija tu hijo, dulces seleccionados para niños y bolos sorpresa coordinados con la misma paleta.",
      "La mesa la opera nuestro aliado MEDEDUL y la coordinamos con la entrega del inflable, para que trates con un solo contacto y una sola cotización por WhatsApp.",
    ],
    estilo: ["Dinosaurios", "Unicornios y arcoíris", "Superhéroes", "Princesas", "Safari y jungla", "Autos y carreras"],
    niveles: [
      { nombre: "Esencial", precio: 3500, invitados: "15-30", lema: "Para fiesta íntima en casa", incluye: [
        "Mesa temática base (8 a 10 variedades)",
        "Paleta y atrezzo de la temática elegida",
        "Cristalería y soportes coordinados",
        "Control de alergias",
        "Bolos sorpresa coordinados",
        "Montaje 1 a 2 h antes",
        "Empaque de sobrantes para casa",
      ] },
      { nombre: "Premium", precio: 5800, invitados: "30-60", lema: "El más solicitado", incluye: [
        "Mesa temática completa (12 a 15 variedades)",
        "Backdrop con nombre y edad del cumpleañero",
        "Atrezzo profesional de la temática",
        "Operador disfrazado opcional sin costo",
        "Control de alergias (sin nueces; sin gluten opcional)",
        "Coordinación con animador e inflables",
        "Bolos sorpresa premium personalizados",
        "Reposición continua durante la fiesta",
      ] },
      { nombre: "Luxury", precio: 9500, invitados: "60+", lema: "Experiencia completa", incluye: [
        "Mesa de autor (18+ variedades temáticas)",
        "Backdrop 360° con escenografía",
        "Operador disfrazado y photobooth integrado",
        "Fuente de chocolate o pared de dulces incluida",
        "Pastel temático y mini cupcakes coordinados",
        "Bolos sorpresa premium con sticker book",
        "Coordinación con animadores y planner",
        "Empaque de sobrantes para invitados",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para cumpleaños infantil?", answer: "Desde $3,500 para 15 a 30 niños (Esencial), $5,800 para 30 a 60 niños (Premium) y $9,500 para más de 60 niños (Luxury). El precio final depende de la temática y del número de invitados." },
      { question: "¿Pueden hacer la mesa del mismo personaje que el inflable?", answer: "Sí. Al cotizar nos dices la temática y armamos la mesa con esa paleta. El inflable y la mesa se coordinan para llegar el mismo día." },
      { question: "¿Qué pasa si un niño tiene alergias?", answer: "Todos los niveles incluyen control de alergias. Indícanos las restricciones al cotizar y se eligen dulces sin esos ingredientes; el nivel Premium ofrece opción sin nueces y sin gluten." },
    ],
    img: {
      hero: "cumple-hero", detalle: "cumple-unicornio",
      alt: "Mesa de dulces temática de dinosaurios para cumpleaños infantil en jardín de CDMX",
      altDetalle: "Mesa de dulces de unicornios en tonos pastel para cumpleaños de niña",
    },
  },
  {
    slug: "bautizo",
    nombre: "Bautizo",
    keyword: "mesa de dulces para bautizo",
    unidad: "invitados",
    title: "Mesa de dulces para bautizo en CDMX desde $3,800",
    description: "Mesa de dulces para bautizo en blanco y dorado o blanco y celeste/rosa. Desde $3,800 para 30 a 50 invitados en CDMX. Cruz, etiquetas con el nombre del bebé y bolos.",
    h1: "Mesa de dulces para bautizo",
    intro: [
      "Mesa en paleta clásica blanco y dorado, o blanco con celeste o rosa, con cruz decorativa al centro, etiquetas con el nombre del bebé y bolos sorpresa con rosarios y cruces.",
      "La opera nuestro aliado MEDEDUL; nosotros coordinamos fecha, salón o domicilio y, si lo quieres, el inflable para los niños invitados.",
    ],
    estilo: ["Blanco y dorado", "Blanco y celeste", "Blanco y rosa", "Cruz y paloma", "Ángeles", "Flores blancas"],
    niveles: [
      { nombre: "Esencial", precio: 3800, invitados: "30-50", lema: "Bautizo íntimo familiar", incluye: [
        "Mesa religiosa base (8 a 10 variedades)",
        "Paleta blanco-dorado o blanco-celeste/rosa",
        "Cruz central decorativa",
        "Etiquetas con el nombre del bebé",
        "Bolos sorpresa coordinados (rosarios, cruces)",
        "Montaje 1 a 2 h antes de la celebración",
      ] },
      { nombre: "Premium", precio: 6200, invitados: "50-100", lema: "El más solicitado", incluye: [
        "Mesa religiosa completa (12 a 15 variedades)",
        "Backdrop con monograma del bebé",
        "Símbolos religiosos integrados (paloma, ángeles, cruz)",
        "Macarons con la inicial del bebé",
        "Hostias dulces y rosarios comestibles",
        "Coordinación con parroquia y salón",
        "Operación durante la recepción",
      ] },
      { nombre: "Luxury", precio: 10500, invitados: "100+", lema: "Bautizo de alto nivel", incluye: [
        "Mesa de autor (18+ variedades)",
        "Backdrop floral con cruz iluminada",
        "Stand para pastel de bautizo incluido",
        "Mesa de postres complementaria con dulces tradicionales",
        "Bolos sorpresa premium",
        "Coordinación con parroquia y planner",
        "Foto profesional de la mesa con el bebé",
        "Operación extendida hasta el cierre",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para bautizo?", answer: "Desde $3,800 para 30 a 50 invitados (Esencial), $6,200 para 50 a 100 (Premium) y $10,500 para más de 100 (Luxury)." },
      { question: "¿Qué lleva una mesa de dulces para bautizo?", answer: "Dulces en paleta blanca con dorado, celeste o rosa, una cruz decorativa al centro, etiquetas con el nombre del bebé y bolos sorpresa. Desde el nivel Premium se suman backdrop con monograma, macarons con la inicial y hostias dulces." },
      { question: "¿La montan en el salón o en casa?", answer: "En ambos. El equipo llega 1 a 2 horas antes de la celebración para montar y coordina el acceso con el salón o la parroquia." },
    ],
    img: {
      hero: "bautizo-hero", detalle: "bautizo-detalle",
      alt: "Mesa de dulces para bautizo en blanco y dorado con cruz decorativa",
      altDetalle: "Galletas con forma de cruz y paloma y macarons blancos para bautizo",
    },
  },
  {
    slug: "baby-shower",
    nombre: "Baby shower",
    keyword: "mesa de dulces para baby shower",
    unidad: "invitadas",
    title: "Mesa de dulces para baby shower en CDMX desde $4,500",
    description: "Mesa de dulces para baby shower en CDMX desde $4,500 (20 a 40 invitadas). Paleta del bebé, etiquetas con su nombre, macarons y gender reveal en Premium.",
    h1: "Mesa de dulces para baby shower",
    intro: [
      "Mesa en la paleta que elijas para el bebé, con atrezzo de ositos, lazos y nubes, etiquetas con su nombre y, desde el nivel Premium, mecánica de gender reveal.",
      "La opera nuestro aliado MEDEDUL y la coordinamos desde BRINCOLINS con una sola cotización; si hay niños invitados, puedes sumar un inflable para bebés.",
    ],
    estilo: ["Celeste", "Rosa palo", "Neutro crema", "Ositos", "Nubes", "Gender reveal"],
    niveles: [
      { nombre: "Esencial", precio: 4500, invitados: "20-40", lema: "Baby shower íntimo en casa", incluye: [
        "Mesa baby base (10 a 12 variedades)",
        "Paleta alineada al bebé",
        "Atrezzo tierno (ositos, lazos, mini biberón)",
        "Etiquetas con el nombre del bebé",
        "Opciones aptas para la futura mamá",
        "Bolos sorpresa coordinados",
      ] },
      { nombre: "Premium", precio: 7200, invitados: "40-80", lema: "El más solicitado", incluye: [
        "Mesa baby completa (14 a 18 variedades)",
        "Backdrop con el nombre del bebé",
        "Atrezzo profesional (12 temáticas a elegir)",
        "Macarons con la inicial",
        "Estación separada para la futura mamá",
        "Mecánica de gender reveal (si aplica)",
        "Coordinación con la organizadora",
      ] },
      { nombre: "Luxury", precio: 11800, invitados: "80+", lema: "Baby shower de alto nivel", incluye: [
        "Mesa de autor (20+ variedades temáticas)",
        "Backdrop floral 360° con nombre y temática",
        "Stand para pastel incluido",
        "Mesa de frutas o donas complementaria",
        "Estación premium para la futura mamá con bebidas",
        "Gender reveal premium (humo y globo)",
        "Foto profesional de la mesa",
        "Operación extendida hasta el cierre",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para baby shower?", answer: "Desde $4,500 para 20 a 40 invitadas (Esencial), $7,200 para 40 a 80 (Premium) y $11,800 para más de 80 (Luxury)." },
      { question: "¿Incluyen la revelación de género?", answer: "Sí, desde el nivel Premium se incluye la mecánica de gender reveal; en Luxury es con humo y globo." },
      { question: "¿Qué lleva una mesa de dulces para baby shower?", answer: "Dulces y postres en la paleta del bebé, atrezzo de ositos o nubes, etiquetas con su nombre y bolos sorpresa. Desde Premium suma backdrop, macarons con la inicial y una estación para la futura mamá." },
    ],
    img: {
      hero: "babyshower-hero", detalle: "babyshower-detalle",
      alt: "Mesa de dulces para baby shower en tonos pastel con ositos y arco de globos",
      altDetalle: "Cupcakes, macarons y galletas con forma de osito para baby shower",
    },
  },
  {
    slug: "primera-comunion",
    nombre: "Primera comunión",
    keyword: "mesa de dulces para primera comunión",
    unidad: "invitados",
    title: "Mesa de dulces para primera comunión en CDMX",
    description: "Mesa de dulces para primera comunión en CDMX desde $4,200 (40 a 60 invitados). Cáliz decorativo, etiquetas con el nombre y bolos con medalla.",
    h1: "Mesa de dulces para primera comunión",
    intro: [
      "Mesa en blanco con dorado o azul, con cáliz y hostia decorativos al centro, etiquetas con el nombre de quien hace su comunión y bolos con medalla y galleta en forma de hostia.",
      "La opera nuestro aliado MEDEDUL; desde BRINCOLINS coordinamos la fecha y, para los niños invitados, el inflable.",
    ],
    estilo: ["Blanco y dorado", "Blanco y azul", "Cáliz", "Espigas y uvas", "Paloma", "Monograma IHS"],
    niveles: [
      { nombre: "Esencial", precio: 4200, invitados: "40-60", lema: "Comunión íntima familiar", incluye: [
        "Mesa eucarística base (10 a 12 variedades)",
        "Paleta blanco-dorado o blanco-azul",
        "Cáliz central y hostia decorativa",
        "Etiquetas con el nombre",
        "Bolos sorpresa con medalla y galleta hostia",
        "Montaje 1 a 2 h antes de la celebración",
      ] },
      { nombre: "Premium", precio: 7500, invitados: "60-100", lema: "El más solicitado", incluye: [
        "Mesa eucarística completa (14 a 18 variedades)",
        "Backdrop con monograma IHS o XP",
        "Símbolos integrados (cáliz, hostia, espigas, vid)",
        "Macarons con monograma",
        "Galletas con forma de hostia y cordero",
        "Recuerdos (medalla, rosario y estampa)",
        "Coordinación con catequesis y parroquia",
      ] },
      { nombre: "Luxury", precio: 12800, invitados: "100+", lema: "Comunión de alto nivel", incluye: [
        "Mesa de autor (20+ variedades)",
        "Backdrop floral con cáliz iluminado",
        "Stand para pastel de comunión incluido",
        "Mesa de postres complementaria con dulces tradicionales",
        "Recuerdos completos (medalla, rosario, libro, estampa y mini cáliz)",
        "Coordinación con catequesis y planner",
        "Foto profesional de la mesa",
        "Operación extendida hasta el cierre",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para primera comunión?", answer: "Desde $4,200 para 40 a 60 invitados (Esencial), $7,500 para 60 a 100 (Premium) y $12,800 para más de 100 (Luxury)." },
      { question: "¿Incluyen los recuerdos?", answer: "El nivel Esencial incluye bolos con medalla y galleta hostia. Premium suma recuerdos con medalla, rosario y estampa, y Luxury el juego completo con libro y mini cáliz." },
      { question: "¿Se puede hacer bautizo y comunión el mismo día?", answer: "Sí. Dinos los dos festejos al cotizar y se arma una sola mesa con los símbolos de ambos." },
    ],
    img: {
      hero: "comunion-hero", detalle: "comunion-detalle",
      alt: "Mesa de dulces para primera comunión en blanco y dorado con cáliz y espigas",
      altDetalle: "Galletas tipo hostia y con forma de cáliz para primera comunión",
    },
  },
  {
    slug: "xv-anos",
    nombre: "XV años",
    keyword: "mesa de dulces para 15 años",
    unidad: "invitadas",
    title: "Mesa de dulces para XV años en CDMX desde $7,500",
    description: "Mesa de dulces para XV años en CDMX desde $7,500 (50 a 100 invitados). Diseño en la paleta de la quinceañera, macarons, backdrop floral y fuente en Luxury.",
    h1: "Mesa de dulces para XV años",
    intro: [
      "Mesa glamour en la paleta de la quinceañera: cristalería y soportes dorados, etiquetas con su nombre y, desde Premium, macarons, mini pasteles, backdrop floral e iluminación LED.",
      "La opera nuestro aliado MEDEDUL; BRINCOLINS coordina la cotización y, si hay niños en la fiesta, el inflable o la iluminación.",
    ],
    estilo: ["Rosa palo y dorado", "Blanco y plata", "Azul rey", "Backdrop floral", "Iluminación LED", "Candelabros"],
    niveles: [
      { nombre: "Esencial", precio: 7500, invitados: "50-100", lema: "Para XV íntimo", incluye: [
        "Mesa de dulces glamour (10 a 12 variedades)",
        "Diseño en la paleta de la quinceañera",
        "Cristalería y soportes dorados",
        "Etiquetas con el nombre de la quinceañera",
        "Montaje 2 h antes del evento",
        "Operación durante la recepción",
        "Empaque de sobrantes en cajas decorativas",
      ] },
      { nombre: "Premium", precio: 12500, invitados: "100-200", lema: "El más solicitado", incluye: [
        "Mesa glamour completa (16 a 20 variedades)",
        "Macarons, mini pasteles y repostería fina",
        "Backdrop floral con el nombre de la quinceañera",
        "Iluminación LED y atrezzo coordinado",
        "Coordinación con planner y coreógrafo",
        "Operador dedicado toda la recepción",
        "Propuesta visual con render conceptual",
      ] },
      { nombre: "Luxury", precio: 18500, invitados: "200+", lema: "Experiencia editorial", incluye: [
        "Mesa de autor (22+ variedades exclusivas)",
        "Chocolates importados",
        "Fuente de chocolate o de chamoy incluida",
        "Backdrop floral 360° iluminado",
        "Coordinación con planner, coreógrafo y decorador",
        "Mesa de postres gourmet complementaria",
        "Fotografía profesional de la mesa",
        "Operación extendida hasta el cierre",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para XV años?", answer: "Desde $7,500 para 50 a 100 invitados (Esencial), $12,500 para 100 a 200 (Premium) y $18,500 para más de 200 (Luxury)." },
      { question: "¿Pueden igualar los colores del vestido o la decoración?", answer: "Sí. Todos los niveles se diseñan en la paleta de la quinceañera; desde Premium recibes una propuesta visual con render antes del evento." },
      { question: "¿A qué hora montan?", answer: "El equipo monta 2 horas antes del evento y opera la mesa durante la recepción." },
    ],
    img: {
      hero: "xv-hero", detalle: "xv-detalle",
      alt: "Mesa de dulces glamour para XV años en rosa palo y dorado con backdrop floral",
      altDetalle: "Macarons, mini pasteles y trufas en cake stands dorados para XV años",
    },
  },
  {
    slug: "boda",
    nombre: "Boda",
    keyword: "mesa de dulces para boda",
    unidad: "invitados",
    title: "Mesa de dulces para boda en CDMX desde $8,500",
    description: "Mesa de dulces para boda en CDMX desde $8,500 (50 a 100 invitados). Diseño en la paleta de la boda, cristalería, etiquetas con los nombres y operador en la recepción.",
    h1: "Mesa de dulces para boda",
    intro: [
      "Mesa nupcial en la paleta de la boda, con cristalería pulida, cake stands y etiquetas con los nombres de los novios; desde Premium, backdrop floral con monograma y repostería fina.",
      "La opera nuestro aliado MEDEDUL. Desde BRINCOLINS coordinamos la cotización y, si hay niños invitados, un área de inflables para que la recepción fluya.",
    ],
    estilo: ["Blanco y champagne", "Verde eucalipto", "Dorado", "Backdrop floral", "Monograma", "Luz cálida"],
    niveles: [
      { nombre: "Esencial", precio: 8500, invitados: "50-100", lema: "Boda íntima con todo el detalle", incluye: [
        "Mesa de dulces nupcial (10 a 12 variedades)",
        "Diseño en la paleta de la boda",
        "Cristalería pulida y cake stands",
        "Etiquetas con los nombres de los novios",
        "Montaje 2 h antes del coctel",
        "Operación durante la recepción",
        "Empaque de sobrantes en cajas decorativas",
      ] },
      { nombre: "Premium", precio: 13500, invitados: "100-200", lema: "El más solicitado", incluye: [
        "Mesa nupcial completa (16 a 20 variedades)",
        "Macarons, mini pasteles y repostería fina",
        "Backdrop floral con monograma",
        "Iluminación cálida y atrezzo dorado",
        "Coordinación con wedding planner",
        "Operador dedicado toda la recepción",
        "Propuesta visual con render conceptual",
      ] },
      { nombre: "Luxury", precio: 22000, invitados: "200+", lema: "Experiencia editorial", incluye: [
        "Mesa de autor (22+ variedades exclusivas)",
        "Chocolates importados",
        "Fuente de chocolate o mesa de quesos incluida",
        "Backdrop floral 360° con luces",
        "Coordinación con planner y catering",
        "Mesa de postres gourmet complementaria",
        "Fotografía profesional de la mesa",
        "Operación extendida hasta el cierre del venue",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una mesa de dulces para boda?", answer: "Desde $8,500 para 50 a 100 invitados (Esencial), $13,500 para 100 a 200 (Premium) y $22,000 para más de 200 (Luxury)." },
      { question: "¿Con cuánta anticipación conviene reservar?", answer: "Para bodas en temporada alta, de 3 a 6 meses. Para otras fechas, escríbenos y confirmamos disponibilidad." },
      { question: "¿Se coordinan con el wedding planner?", answer: "Sí, desde el nivel Premium la coordinación con el planner está incluida; en Luxury también con el catering." },
    ],
    img: {
      hero: "boda-hero", detalle: "boda-detalle",
      alt: "Mesa de dulces nupcial en blanco y champagne con backdrop floral en jardín",
      altDetalle: "Almendras confitadas, macarons y mini pasteles en cristalería para boda",
    },
  },
];

/* Estaciones que se suman a cualquier mesa (catálogo MEDEDUL). */
export const ESTACIONES = [
  { nombre: "Fuente de chocolate", img: "hub-fuente-chocolate", alt: "Fuente de chocolate con fresas, malvaviscos y churros",
    niveles: [[3500, "20-40"], [5800, "50-150"], [9500, "150-400+"]] as [number, string][],
    desc: "Chocolate belga con leche, blanco, oscuro o ruby, con fruta, malvaviscos y churros para bañar. Incluye operador. Requiere una toma de corriente de 110V." },
  { nombre: "Fuente de chamoy", img: "hub-fuente-chamoy", alt: "Fuente de chamoy con gomitas, mango y jícama",
    niveles: [[3200, "20-40"], [5500, "50-150"], [8800, "150-400+"]] as [number, string][],
    desc: "Chamoy en cuatro niveles de picor, con gomitas, fruta y mezclas de limón, tajín o tamarindo. Incluye operador." },
];

/* Condiciones comunes que MEDEDUL publica de forma consistente. Lo que su
   sitio publica con versiones distintas (anticipación, cancelación, costo
   de traslado) NO se afirma aquí: se confirma por escrito al cotizar. */
export const FAQS_GENERALES = [
  { question: "¿Cuánto cuesta una mesa de dulces?", answer: "Depende del evento y del número de invitados: desde $3,500 para un cumpleaños infantil de 15 a 30 niños, $3,800 para un bautizo de 30 a 50 invitados y $8,500 para una boda de 50 a 100 invitados. Cada evento tiene tres niveles: Esencial, Premium y Luxury." },
  { question: "¿Qué incluye el servicio de mesa de dulces?", answer: "Diseño en la paleta de tu evento, dulces seleccionados, mesa, mantelería, bases y cristalería, montaje antes de la llegada de los invitados y desmontaje al terminar. Desde el nivel Premium se incluye personal para reponer la mesa durante el evento." },
  { question: "¿Quién opera la mesa de dulces?", answer: "Nuestro aliado MEDEDUL, especialista en mesas de dulces y candy bar en CDMX. BRINCOLINS coordina la cotización, la fecha y la combinación con el inflable para que trates con un solo contacto." },
  { question: "¿Cómo se aparta la fecha?", answer: "Con un anticipo del 50%. Las condiciones de liquidación, cambio de fecha y cancelación de la mesa de dulces se confirman por escrito en la cotización." },
  { question: "¿Los dulces que sobran son para mí?", answer: "Sí. Los dulces que sobran son tuyos: puedes repartirlos entre los invitados o llevártelos." },
  { question: "¿Pueden adaptar la mesa a alergias o dietas?", answer: "Sí. Indica las restricciones al cotizar y se seleccionan dulces que no las contengan." },
  { question: "¿Emiten factura?", answer: "Sí, se emite CFDI. Indica que la necesitas al cotizar para que el precio y los datos fiscales queden confirmados desde el inicio." },
];

/* JSON-LD Service + OfferCatalog para una o varias páginas. */
export function serviceSchema(url: string, nombre: string, eventos: Evento[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nombre,
    serviceType: "Mesa de dulces",
    url,
    areaServed: [{ "@type": "City", name: "Ciudad de México" }, { "@type": "State", name: "Estado de México" }],
    provider: { "@id": "https://brincolins.com/#org" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: nombre,
      itemListElement: eventos.flatMap((e) => e.niveles.map((n) => ({
        "@type": "Offer",
        name: `${e.h1} — ${n.nombre} (${n.invitados} ${e.unidad})`,
        price: n.precio,
        priceCurrency: "MXN",
        url: `https://brincolins.com${BASE_URL}${e.slug}/`,
      }))),
    },
  };
}

/* Nombre del evento dentro de una frase: en minúscula salvo siglas («XV años»). */
export const enFrase = (e: Pick<Evento, "nombre">) => e.nombre.replace(/^(?!XV)\S+/, (w) => w.toLowerCase());
