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
  nombre: string;
  precio: number;
  invitados: string;
  lema: string;
  incluye: string[];
};

export type Grupo = "evento" | "tipo" | "estacion";

export type Evento = {
  /** evento (por defecto) · tipo de mesa · estación */
  grupo?: Grupo;
  /** Cómo se nombra el servicio dentro de una frase: «una mesa de frutas» */
  frase?: string;
  /** Título y texto de la sección de la lista (estilos, qué lleva…) */
  lista?: { titulo: string; texto: string };
  slug: string;
  /** Nombre corto para menús y tarjetas */
  nombre: string;
  /** Keyword principal (Ahrefs MX, nov 2026) */
  keyword: string;
  unidad: "invitados" | "invitadas" | "niños" | "personas";
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
      { question: "¿Cuánto cuesta una mesa de dulces para cumpleaños infantil?", answer: "Desde $3,500 para 15 a 30 niños (Esencial), $5,800 para 30 a 60 niños (Premium) y $9,500 para más de 60 niños (Luxury). El precio final depende de la temática y del número de invitados. Precios más IVA." },
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
      { question: "¿Cuánto cuesta una mesa de dulces para bautizo?", answer: "Desde $3,800 para 30 a 50 invitados (Esencial), $6,200 para 50 a 100 (Premium) y $10,500 para más de 100 (Luxury). Precios más IVA." },
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
      { question: "¿Cuánto cuesta una mesa de dulces para baby shower?", answer: "Desde $4,500 para 20 a 40 invitadas (Esencial), $7,200 para 40 a 80 (Premium) y $11,800 para más de 80 (Luxury). Precios más IVA." },
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
      { question: "¿Cuánto cuesta una mesa de dulces para primera comunión?", answer: "Desde $4,200 para 40 a 60 invitados (Esencial), $7,500 para 60 a 100 (Premium) y $12,800 para más de 100 (Luxury). Precios más IVA." },
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
      { question: "¿Cuánto cuesta una mesa de dulces para XV años?", answer: "Desde $7,500 para 50 a 100 invitados (Esencial), $12,500 para 100 a 200 (Premium) y $18,500 para más de 200 (Luxury). Precios más IVA." },
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
      { question: "¿Cuánto cuesta una mesa de dulces para boda?", answer: "Desde $8,500 para 50 a 100 invitados (Esencial), $13,500 para 100 a 200 (Premium) y $22,000 para más de 200 (Luxury). Precios más IVA." },
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

/* ══════════════════════════════════════════════════════════════════
   ESTACIONES (página propia). Precios: catalogo.ts de MEDEDUL.
   Inclusiones: src/pages/estaciones-interactivas/*.astro de MEDEDUL,
   sin líneas de cobertura por sucursal ni contadores.
   ══════════════════════════════════════════════════════════════════ */
const FAQ_RESERVA_ESTACION = { question: "¿Con cuánta anticipación conviene reservar?", answer: "Para fechas normales, de 2 a 3 semanas. En temporada alta (mayo-junio y octubre-diciembre), de 4 a 6 semanas. La fecha se aparta con 50% de anticipo." };

export const ESTACIONES_PAG: Evento[] = [
  {
    grupo: "estacion", slug: "fuente-de-chocolate", nombre: "Fuente de chocolate", frase: "una fuente de chocolate",
    keyword: "renta de fuente de chocolate", unidad: "invitados",
    title: "Renta de fuente de chocolate en CDMX desde $3,500",
    description: "Renta de fuente de chocolate con operador en CDMX desde $3,500 (20 a 40 invitados). Chocolate belga con leche, blanco, oscuro o ruby y hasta 8 productos para bañar.",
    h1: "Renta de fuente de chocolate",
    intro: [
      "Fuente profesional de acero inoxidable de 5, 15, 30 o 50 kg con chocolate belga, productos para bañar y un operador que sirve y repone durante el evento.",
      "La opera nuestro aliado MEDEDUL y se coordina desde BRINCOLINS junto con la mesa de dulces o el inflable, en una sola cotización.",
    ],
    lista: { titulo: "¿Qué chocolate y qué productos para bañar lleva?", texto: "Eliges el tipo de chocolate al cotizar. Los productos para bañar van de 3-4 en Esencial a los 8 en Luxury. La fuente necesita una toma de corriente de 110V cerca." },
    estilo: ["Belga con leche", "Belga blanco", "Oscuro 70%", "Ruby", "Mixto (dos fuentes)", "Fresas", "Fruta de temporada", "Malvaviscos", "Pretzels", "Mini donas", "Churros mini", "Galletas de mantequilla"],
    niveles: [
      { nombre: "Esencial", precio: 3500, invitados: "20-40", lema: "Fuente íntima con productos clásicos", incluye: [
        "Fuente de 5 kg con chocolate belga con leche",
        "3 a 4 productos para bañar (fresas, malvaviscos, plátano, brochetas)",
        "Operador 2 horas",
        "Montaje 1 h antes",
        "Mantel decorativo",
        "Brochetas y servilletas incluidas",
      ] },
      { nombre: "Premium", precio: 5800, invitados: "50-150", lema: "El más solicitado", incluye: [
        "Fuente de 15 kg con chocolate belga (leche, blanco u oscuro)",
        "5 a 6 productos para bañar (incluye churros)",
        "Operador 4 horas",
        "Montaje y decoración con flores",
        "Iluminación LED opcional",
        "Reposición continua",
      ] },
      { nombre: "Luxury", precio: 9500, invitados: "150-400+", lema: "Estación de gran escala", incluye: [
        "Fuente de 30 a 50 kg con chocolate belga",
        "8 productos para bañar",
        "Operador 6 horas y ayudante",
        "Backdrop iluminado con LED",
        "Mantel y cristalería premium",
        "Estación de brochetas pre-armadas",
        "Reposición continua extendida",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta rentar una fuente de chocolate?", answer: "Desde $3,500 para 20 a 40 invitados (Esencial, 5 kg), $5,800 para 50 a 150 (Premium, 15 kg) y $9,500 para 150 a más de 400 (Luxury, 30 a 50 kg). Precios más IVA." },
      { question: "¿Qué tipos de chocolate manejan?", answer: "Chocolate belga con leche, blanco, oscuro al 70% y ruby. También hay opción mixta: dos fuentes al mismo tiempo, por ejemplo leche para niños y oscuro para adultos." },
      { question: "¿Qué necesita la fuente para funcionar?", answer: "Una toma de corriente de 110V cerca de la mesa. Si la fuente va en jardín o la toma queda lejos, se lleva extensión con protección. El equipo llega 1 a 2 horas antes para montar y calentar el chocolate." },
      FAQ_RESERVA_ESTACION,
    ],
    img: { hero: "hub-fuente-chocolate", detalle: "choco-detalle",
      alt: "Fuente de chocolate en funcionamiento con fresas, malvaviscos y churros",
      altDetalle: "Cascada de chocolate con leche y brocheta de fresa" },
  },
  {
    grupo: "estacion", slug: "fuente-de-chamoy", nombre: "Fuente de chamoy", frase: "una fuente de chamoy",
    keyword: "fuente de chamoy", unidad: "invitados",
    title: "Renta de fuente de chamoy en CDMX desde $3,200",
    description: "Renta de fuente de chamoy con operador en CDMX desde $3,200 (20 a 40 invitados). Cuatro niveles de picor, gomitas, fruta y mezclas con limón, tajín o tamarindo.",
    h1: "Renta de fuente de chamoy",
    intro: [
      "Fuente de acero inoxidable de 5, 15 o 30 kg con chamoy artesanal en el nivel de picor que elijas, productos para bañar y un operador durante el evento.",
      "La opera nuestro aliado MEDEDUL; desde BRINCOLINS la coordinamos con la mesa de dulces o el inflable en la misma cotización.",
    ],
    lista: { titulo: "¿Qué niveles de picor y qué productos lleva?", texto: "El nivel Suave es apto para niños desde 6 años; para menores conviene la fuente de chocolate. La fuente va en un área ventilada y necesita toma de 110V." },
    estilo: ["Suave", "Tradicional", "Picoso", "Extra picoso", "Gomitas", "Mango", "Sandía", "Jícama y pepino", "Palomitas dulces", "Helado de vainilla", "Limón y tajín", "Tamarindo"],
    niveles: [
      { nombre: "Esencial", precio: 3200, invitados: "20-40", lema: "Fuente íntima con productos clásicos", incluye: [
        "Fuente de 5 kg con chamoy artesanal (suave o tradicional)",
        "3 a 4 productos para bañar (gomitas, mango, pepino, jícama)",
        "Operador 2 horas",
        "Mantel mexicano tradicional",
        "Tajín y limón incluidos",
        "Servilletas y palillos",
      ] },
      { nombre: "Premium", precio: 5500, invitados: "50-150", lema: "El más solicitado", incluye: [
        "Fuente de 15 kg con chamoy artesanal (4 niveles a elegir)",
        "5 a 6 productos para bañar",
        "3 mezclas adicionales (limón, tajín, miel)",
        "Operador 4 horas",
        "Backdrop con motivos mexicanos",
        "Reposición continua",
      ] },
      { nombre: "Luxury", precio: 8800, invitados: "150-400+", lema: "Estación mexicana de gran escala", incluye: [
        "Fuente de 30 kg con chamoy artesanal",
        "8 productos y 5 mezclas",
        "Operador 6 horas y ayudante",
        "Backdrop temático con papel picado",
        "Estación de helado de vainilla con chamoy",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta rentar una fuente de chamoy?", answer: "Desde $3,200 para 20 a 40 invitados (Esencial, 5 kg), $5,500 para 50 a 150 (Premium, 15 kg) y $8,800 para 150 a más de 400 (Luxury, 30 kg). Precios más IVA." },
      { question: "¿La fuente de chamoy es apta para niños?", answer: "Sí, en nivel Suave: muy poco chile y sabor dulce y frutal, apto desde 6 años. Para niños más pequeños se recomienda la fuente de chocolate." },
      { question: "¿Qué niveles de picor hay?", answer: "Suave, Tradicional (el más pedido), Picoso y Extra picoso. Se elige al cotizar." },
      FAQ_RESERVA_ESTACION,
    ],
    img: { hero: "hub-fuente-chamoy", detalle: "chamoy-detalle",
      alt: "Fuente de chamoy con gomitas, mango, piña y jícama en jardín",
      altDetalle: "Vasos con mango, piña, jícama y gomitas con chamoy y chile" },
  },
  {
    grupo: "estacion", slug: "pared-de-dulces", nombre: "Pared de dulces", frase: "una pared de dulces",
    keyword: "pared de dulces", unidad: "invitados",
    title: "Renta de pared de dulces (candy wall) en CDMX",
    description: "Pared de dulces con dispensadores para autoservicio en CDMX desde $4,500 (40 a 80 invitados). De 2×2 m con 50 dispensadores hasta 6×3 m con más de 200.",
    h1: "Renta de pared de dulces",
    intro: [
      "Estructura modular con dispensadores de acrílico llenos de dulces para que los invitados se sirvan en bolsitas. Funciona como mesa de dulces y como fondo para fotos.",
      "La opera nuestro aliado MEDEDUL; BRINCOLINS la coordina junto con el inflable y el resto de la fiesta en una sola cotización.",
    ],
    lista: { titulo: "¿Qué diseños y qué dulces lleva?", texto: "Hay seis diseños de pared; los de neón, branding o temática personalizada requieren de 4 a 6 semanas de anticipación por la producción. Los dulces van de 4 tipos en Esencial a 8 en Luxury." },
    estilo: ["Floral", "Neón con frase", "Geométrica", "Vintage", "Branding corporativo", "Temática personalizada", "Gomitas", "Chocolates", "Caramelos", "Cacahuates", "Palomitas de colores", "Mini paletas"],
    niveles: [
      { nombre: "Esencial", precio: 4500, invitados: "40-80", lema: "Pared íntima para fotos", incluye: [
        "Pared de 2×2 m con 50 dispensadores de acrílico",
        "4 tipos de dulces (gomitas, chocolates, caramelos, paletas)",
        "Diseño floral o vintage",
        "Bolsitas para autoservicio",
        "Operador 3 horas",
        "Montaje 2 h antes",
      ] },
      { nombre: "Premium", precio: 7800, invitados: "100-200", lema: "El más solicitado", incluye: [
        "Pared de 3×2.5 m con 100 dispensadores",
        "6 tipos de dulces (suma palomitas y cacahuates)",
        "6 diseños a elegir, incluido neón",
        "Iluminación LED integrada",
        "Bolsitas y cucharitas para autoservicio",
        "Operador 5 horas con reposición",
      ] },
      { nombre: "Luxury", precio: 13500, invitados: "250-600+", lema: "La pieza central del evento", incluye: [
        "Pared de 4×3 m a 6×3 m con 150 a 200+ dispensadores",
        "8 tipos de dulces",
        "Diseño temático con moodboard previo",
        "Iluminación LED y neón con frase",
        "Operador 7 horas y ayudante con reposición",
        "Branding corporativo disponible",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta rentar una pared de dulces?", answer: "Desde $4,500 para 40 a 80 invitados (Esencial, 2×2 m), $7,800 para 100 a 200 (Premium, 3×2.5 m) y $13,500 para 250 a más de 600 (Luxury, hasta 6×3 m). Precios más IVA." },
      { question: "¿Qué espacio necesita la pared?", answer: "Una pared o fondo firme donde apoyar la estructura y el ancho del modelo elegido: de 2 m en Esencial a 6 m en el Luxury más grande. Llega desarmada y su instalación toma de 2 a 3 horas." },
      { question: "¿Es segura con niños?", answer: "Sí. Los dispensadores son de acrílico y la estructura es metálica; si habrá muchos niños, se puede delimitar con un cordón y el operador cuida el autoservicio." },
      FAQ_RESERVA_ESTACION,
    ],
    img: { hero: "pared-hero", detalle: "pared-detalle",
      alt: "Pared de dulces con dispensadores de acrílico e iluminación LED en salón",
      altDetalle: "Dispensadores de dulces de acrílico con gomitas y chocolates" },
  },
  {
    grupo: "estacion", slug: "stand-para-pastel", nombre: "Stand para pastel", frase: "un stand para pastel",
    keyword: "stand para pastel", unidad: "invitados",
    title: "Renta de stand para pastel en CDMX desde $2,800",
    description: "Renta de stand para pastel con marco decorativo en CDMX desde $2,800. Soporte para pasteles de 2 a 5+ pisos, flores, globos o neón. Coordinación con tu pastelero.",
    h1: "Renta de stand para pastel",
    intro: [
      "Marco decorativo y soporte reforzado para lucir el pastel en el momento del corte, con decoración coordinada con la mesa de dulces.",
      "El stand lo opera nuestro aliado MEDEDUL. El pastel no está incluido: lo hace tu pastelero, y el equipo coordina con él la entrega y la recepción en el lugar.",
    ],
    lista: { titulo: "¿Qué diseños de stand y qué tamaños de pastel soporta?", texto: "Seis diseños de marco y soportes para pasteles de 1 a 5 o más pisos. Neón, LED programable o temática personalizada piden de 4 a 6 semanas de anticipación." },
    estilo: ["Clásico", "Arco de globos", "Floral natural", "Neón", "LED programable", "Temático", "1-2 pisos", "3 pisos", "4 pisos", "5+ pisos"],
    niveles: [
      { nombre: "Esencial", precio: 2800, invitados: "15-50", lema: "Stand íntimo y elegante", incluye: [
        "Marco clásico o floral sencillo",
        "Soporte para pastel de hasta 2 pisos",
        "Mantel decorativo",
        "Decoración base (flores artificiales o globos)",
        "Montaje 1 h antes del corte",
        "Coordinación con el pastelero",
      ] },
      { nombre: "Premium", precio: 4800, invitados: "50-150", lema: "El más solicitado", incluye: [
        "6 diseños a elegir, incluido arco de globos",
        "Soporte reforzado para pastel de hasta 3 pisos",
        "Iluminación LED opcional",
        "Decoración con flores frescas",
        "Backdrop coordinado al evento",
        "Montaje y coordinación con el fotógrafo",
      ] },
      { nombre: "Luxury", precio: 8500, invitados: "150-400+", lema: "La pieza central del corte", incluye: [
        "Diseño temático con moodboard previo",
        "Soporte para pastel de 4 a 5+ pisos",
        "Iluminación LED programable y neón con frase",
        "Backdrop floral 360°",
        "Foto profesional del corte de pastel",
        "Coordinación con pastelero, fotógrafo y planner",
        "Operación hasta el corte",
      ] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta rentar un stand para pastel?", answer: "Desde $2,800 para 15 a 50 invitados (Esencial), $4,800 para 50 a 150 (Premium) y $8,500 para 150 a más de 400 (Luxury). Precios más IVA." },
      { question: "¿El pastel está incluido?", answer: "No. El servicio es solo el stand: marco, soporte, decoración e iluminación. El pastel lo hace tu pastelero y el equipo coordina con él tamaño, hora de entrega y recepción en el lugar." },
      { question: "¿Qué tamaño de pastel soporta?", answer: "De 1 piso (6 a 15 personas) a 5 o más pisos (200 a más de 400 personas). El de 3 pisos, para 40 a 100 personas, es el más pedido." },
      FAQ_RESERVA_ESTACION,
    ],
    img: { hero: "stand-hero", detalle: "stand-detalle",
      alt: "Stand para pastel dorado con arco floral y pastel blanco de tres pisos",
      altDetalle: "Stand de cristal y dorado con pastel blanco de dos pisos" },
  },
];

/* Fuentes que se ofrecen como complemento en las demás páginas. */
export const ESTACIONES = ESTACIONES_PAG.filter((e) => e.slug.startsWith("fuente-")).map((e) => ({
  nombre: e.nombre,
  slug: e.slug,
  img: e.img.hero,
  alt: e.img.alt,
  niveles: e.niveles.map((n) => [n.precio, n.invitados]) as [number, string][],
  desc: e.intro[0],
}));

/* ══════════════════════════════════════════════════════════════════
   TIPOS DE MESA. Precios: catalogo.ts. Inclusiones: tipos-de-mesas-de-
   dulces/*.astro de MEDEDUL (nombres de nivel tal como los publica).
   Fuera: mesa de snacks (duplica la de botanas en el sitio de origen).
   ══════════════════════════════════════════════════════════════════ */
const tipo = (
  slug: string, nombre: string, frase: string, keyword: string,
  precios: [number, number, number], medio: string,
  rest: Pick<Evento, "description" | "intro" | "lista" | "estilo" | "faqs" | "img"> & { lemas: [string, string, string]; incluye: [string[], string[], string[]] },
): Evento => ({
  grupo: "tipo", slug, nombre, frase, keyword, unidad: "personas",
  title: `${nombre} para eventos en CDMX desde ${fmt(precios[0])}`,
  h1: `${nombre} para eventos`,
  niveles: [
    { nombre: "Esencial", precio: precios[0], invitados: "30-50", lema: rest.lemas[0], incluye: rest.incluye[0] },
    { nombre: medio,      precio: precios[1], invitados: "50-100", lema: rest.lemas[1], incluye: rest.incluye[1] },
    { nombre: "Luxury",   precio: precios[2], invitados: "100+",  lema: rest.lemas[2], incluye: rest.incluye[2] },
  ],
  description: rest.description, intro: rest.intro, lista: rest.lista, estilo: rest.estilo, faqs: rest.faqs, img: rest.img,
});

const precioFaq = (frase: string, p: [number, number, number]) => ({
  question: `¿Cuánto cuesta ${frase}?`,
  answer: `Desde ${fmt(p[0])} para 30 a 50 personas, ${fmt(p[1])} para 50 a 100 y ${fmt(p[2])} para más de 100. Precios más IVA.`,
});

export const TIPOS: Evento[] = [
  tipo("mesa-de-frutas", "Mesa de frutas", "una mesa de frutas", "mesa de frutas", [4200, 7400, 11900], "Favorito", {
    description: "Mesa de frutas para fiestas y eventos en CDMX desde $4,200 (30 a 50 personas). Fruta fresca cortada el mismo día, brochetas, bandejas multinivel y toppings.",
    intro: [
      "Sandía, mango, kiwi, piña, fresas y fruta de temporada, cortadas el mismo día y montadas en bandejas y torres, con brochetas y toppings como chamoy, chile y limón.",
      "La opera nuestro aliado MEDEDUL; desde BRINCOLINS la coordinamos junto con el inflable o la mesa de dulces.",
    ],
    lista: { titulo: "¿Qué frutas y toppings lleva?", texto: "De 6 a más de 15 variedades según el nivel. La fruta se prepara y se monta el mismo día para que llegue en su punto." },
    estilo: ["Sandía", "Mango", "Kiwi", "Piña", "Fresa", "Uva", "Melón", "Naranja", "Chamoy", "Chile en polvo", "Limón", "Chocolate fundido"],
    lemas: ["Para fiestas íntimas y cumpleaños", "La opción más solicitada", "Para celebraciones grandes"],
    incluye: [
      ["Bandeja de frutas con sandía, mango y kiwi", "Arreglo decorativo con pinchos", "Centro de mesa", "Desmontaje al finalizar"],
      ["Buffet amplio con piña, naranja y fresas", "Decoración temática personalizada", "Bandejas multinivel de exhibición", "Montaje y coordinación en sitio", "Asesoría de diseño previa"],
      ["Buffet de frutas tropicales completo", "Dirección estética y decoración", "Arreglos múltiples como centros de mesa", "Configuración para celebraciones grandes", "Acompañamiento operativo"],
    ],
    faqs: [
      precioFaq("una mesa de frutas", [4200, 7400, 11900]),
      { question: "¿La fruta se prepara el mismo día?", answer: "Sí. La preparación y el montaje se hacen el mismo día para conservar frescura, color y textura." },
      { question: "¿Se pueden agregar chamoy y toppings?", answer: "Sí: chamoy, chile en polvo, limón, miel, granola, yogur y, en los niveles altos, chocolate fundido." },
    ],
    img: { hero: "tipo-frutas-hero", detalle: "tipo-frutas-detalle",
      alt: "Mesa de frutas con sandía, mango, piña y fresas en jardín de CDMX",
      altDetalle: "Brochetas de fruta fresca en charola de cristal" },
  }),
  tipo("mesa-de-postres", "Mesa de postres", "una mesa de postres", "mesa de postres", [4500, 7900, 12500], "Favorito", {
    description: "Mesa de postres para fiestas, bodas y XV años en CDMX desde $4,500 (30 a 50 personas). Tartas, brownies, cupcakes, macarons, cheesecakes y petit fours.",
    intro: [
      "Barra de repostería con tartas, brownies, mini pasteles, cheesecakes, cupcakes, macarons y petit fours, montada en bases doradas y cake stands.",
      "La opera nuestro aliado MEDEDUL; BRINCOLINS la coordina con el inflable o la mesa de dulces en una sola cotización.",
    ],
    lista: { titulo: "¿Qué postres lleva una mesa de postres?", texto: "La mesa de postres se enfoca en repostería; la de dulces, en golosinas. Se pueden combinar. Hay opciones sin gluten, sin lactosa y veganas si lo pides al cotizar." },
    estilo: ["Tartas", "Brownies", "Mini pasteles", "Cheesecakes", "Cupcakes", "Macarons", "Petit fours", "Postres mexicanos", "Carrito vintage"],
    lemas: ["Para fiestas y cumpleaños", "La opción más solicitada", "Para bodas y XV años"],
    incluye: [
      ["Barra de postres con tartas y brownies", "Cupcakes y macarons", "Decoración con bases doradas", "Mobiliario y carrito disponible", "Desmontaje al finalizar"],
      ["Buffet amplio con chocolate y frutos", "Diseño temático personalizado", "Petit fours y postres mexicanos", "Instalación y coordinación en sitio", "Asesoría de decoración previa"],
      ["Surtido de alto volumen", "Dirección estética y decoración", "Repostería fina", "Operación en sitio extendida", "Configuración para grandes celebraciones"],
    ],
    faqs: [
      precioFaq("una mesa de postres", [4500, 7900, 12500]),
      { question: "¿Qué diferencia hay entre mesa de postres y mesa de dulces?", answer: "La mesa de postres es repostería (tartas, macarons, petit fours); la mesa de dulces, golosinas y botanas dulces. Se pueden combinar en un mismo montaje." },
      { question: "¿Rentan carrito de postres?", answer: "Sí, hay carrito vintage y buffet móvil disponibles para montar la mesa de postres." },
    ],
    img: { hero: "tipo-postres-hero", detalle: "tipo-postres-detalle",
      alt: "Mesa de postres con tartaletas, brownies, macarons y cupcakes en salón",
      altDetalle: "Mini cheesecakes, tartaletas y macarons en charola dorada" },
  }),
  tipo("mesa-de-quesos-y-embutidos", "Mesa de quesos y embutidos", "una mesa de quesos y embutidos", "mesa de quesos", [5200, 8900, 13900], "Favorito", {
    description: "Mesa de quesos y embutidos para eventos en CDMX desde $5,200 (30 a 50 personas). Manchego, brie, cabra, jamón serrano, salami, pan, fruta y maridaje.",
    intro: [
      "Tablas con quesos nacionales e importados, jamón serrano, chorizo y salami, acompañados de pan, galletas, fruta, frutos secos y mermeladas.",
      "La opera nuestro aliado MEDEDUL; BRINCOLINS la coordina con el resto de tu evento. No es la opción recomendada para fiestas solo de niños.",
    ],
    lista: { titulo: "¿Qué quesos y embutidos lleva?", texto: "La selección crece con el nivel. Si hay invitados con restricciones, se proponen acompañamientos sin gluten o una selección vegetariana al cotizar." },
    estilo: ["Manchego", "Brie", "Queso de cabra", "Chihuahua", "Monterrey", "Jamón serrano", "Chorizo de Pamplona", "Salami", "Baguette", "Higos", "Frutos secos", "Maridaje con vino"],
    lemas: ["Para reuniones íntimas", "La opción más solicitada", "Para bodas y celebraciones"],
    incluye: [
      ["Tabla con manchego, brie y queso de cabra", "Jamón serrano y salami", "Pan baguette, galletas y fruta", "Desmontaje al finalizar"],
      ["Tabla amplia con chihuahua y monterrey", "Chorizo de Pamplona y carnes frías", "Fresas, higos y acompañamientos de temporada", "Instalación y coordinación en sitio", "Asesoría de maridaje con vinos"],
      ["Selección ampliada", "Quesos de España y Francia", "Jamón serrano y chorizo artesanal", "Operación en sitio extendida", "Configuración para grandes reuniones"],
    ],
    faqs: [
      precioFaq("una mesa de quesos y embutidos", [5200, 8900, 13900]),
      { question: "¿Qué acompañamientos incluye?", answer: "Baguette, galletas, fresas, higos, frutos secos y mermeladas de temporada." },
      { question: "¿Asesoran el maridaje?", answer: "Sí, desde el nivel Favorito: vino tinto para manchego y queso de cabra, y blanco para brie y quesos cremosos." },
    ],
    img: { hero: "tipo-quesos-hero", detalle: "tipo-quesos-detalle",
      alt: "Mesa de quesos y embutidos con tablas de madera y mármol",
      altDetalle: "Tabla con brie, manchego, salami, jamón serrano, uvas e higos" },
  }),
  tipo("mesa-de-botanas", "Mesa de botanas", "una mesa de botanas", "mesa de botanas", [3800, 6500, 10200], "Favorito", {
    description: "Mesa de botanas para fiestas en CDMX desde $3,800 (30 a 50 personas). Cacahuates japoneses y garapiñados, palomitas, frutos secos y snacks mexicanos con chamoy.",
    intro: [
      "Botanas saladas y mexicanas en bandejas decoradas: cacahuates japoneses, garapiñados y con chamoy, palomitas, frutos secos, quesos y bocadillos.",
      "La opera nuestro aliado MEDEDUL; desde BRINCOLINS la coordinamos con el inflable para fiestas infantiles y familiares.",
    ],
    lista: { titulo: "¿Qué botanas lleva?", texto: "En el nivel Favorito se suman sabores mexicanos con chamoy; en Luxury, opciones de chocolate y reposición continua." },
    estilo: ["Cacahuate japonés", "Cacahuate garapiñado", "Cacahuate con chamoy", "Palomitas", "Frutos secos", "Quesos", "Bocadillos salados", "Snacks mexicanos"],
    lemas: ["Para fiestas y cumpleaños", "La opción más solicitada", "Para fiestas grandes"],
    incluye: [
      ["Buffet de botanas con quesos y cacahuates", "Palomitas y bocadillos salados", "Bandejas decorativas", "Desmontaje al finalizar"],
      ["Variedad amplia de botanas", "Sabores mexicanos con chamoy", "Decoración temática", "Instalación y coordinación en sitio", "Asesoría de diseño previa"],
      ["Surtido de alto volumen", "Dirección estética y decoración", "Snacks, frutos y opciones de chocolate", "Configuración para grandes fiestas", "Reposición continua de bandejas"],
    ],
    faqs: [
      precioFaq("una mesa de botanas", [3800, 6500, 10200]),
      { question: "¿Qué botanas incluye?", answer: "Quesos, cacahuates (japonés, garapiñado y con chamoy), palomitas, frutos secos, bocadillos salados y snacks mexicanos, con chocolate como complemento en el nivel alto." },
    ],
    img: { hero: "tipo-botanas-hero", detalle: "tipo-botanas-detalle",
      alt: "Mesa de botanas mexicanas con cacahuates, palomitas y frituras en jardín",
      altDetalle: "Tazones de barro con cacahuates japoneses y garapiñados" },
  }),
  tipo("mesa-de-dulces-tradicionales", "Mesa de dulces tradicionales", "una mesa de dulces tradicionales mexicanos", "mesa de dulces mexicanos", [4300, 7200, 11500], "Favorito", {
    description: "Mesa de dulces tradicionales mexicanos en CDMX desde $4,300 (30 a 50 personas). Cocadas, jamoncillos, glorias, mazapán, obleas, tamarindos y alegrías con papel picado.",
    intro: [
      "Dulces típicos mexicanos —cocadas, jamoncillos, glorias, mazapán, obleas, tamarindos, palanquetas y alegrías— con papel picado y decoración tradicional.",
      "La opera nuestro aliado MEDEDUL; ideal para fiestas patrias, posadas, bautizos y fiestas con temática mexicana, coordinada desde BRINCOLINS con el inflable.",
    ],
    lista: { titulo: "¿Qué dulces mexicanos lleva?", texto: "En Esencial van los clásicos; desde Favorito se suman dulces regionales. En temporada se agregan calaveritas de azúcar." },
    estilo: ["Cocadas", "Jamoncillos", "Glorias", "Mazapán", "Obleas", "Tamarindos", "Palanquetas", "Alegrías", "Borrachitos", "Dulces cristalizados", "Papel picado", "Talavera"],
    lemas: ["Para fiestas familiares", "La opción más solicitada", "Para bodas y fiestas grandes"],
    incluye: [
      ["Cocadas, jamoncillos y glorias", "Mazapán, obleas y tamarindos", "Centro de mesa tradicional", "Decoración con papel picado", "Desmontaje al finalizar"],
      ["Dulces regionales de México", "Palanquetas, alegrías y borrachitos", "Temática mexicana personalizada", "Instalación y coordinación en sitio", "Asesoría de diseño previa"],
      ["Surtido de alto volumen", "Dulces típicos de cada región", "Dirección estética tradicional", "Configuración para grandes fiestas", "Golosinas artesanales"],
    ],
    faqs: [
      precioFaq("una mesa de dulces tradicionales", [4300, 7200, 11500]),
      { question: "¿Sirve para fiestas patrias y posadas?", answer: "Sí. Es la opción para fiestas patrias, posadas y Día de Muertos; en temporada se incluyen calaveritas de azúcar y decoración acorde." },
    ],
    img: { hero: "tipo-tradicionales-hero", detalle: "tipo-tradicionales-detalle",
      alt: "Mesa de dulces tradicionales mexicanos con papel picado y canastas",
      altDetalle: "Cocadas, alegrías, palanquetas y obleas en charola de barro" },
  }),
  tipo("mesa-de-donas-y-cupcakes", "Mesa de donas y cupcakes", "una mesa de donas y cupcakes", "mesa de donas", [4200, 7300, 11800], "Destacado", {
    description: "Mesa de donas y cupcakes para fiestas en CDMX desde $4,200 (30 a 50 personas). Donas glaseadas y rellenas, mini donas, pared de donas y cupcakes decorados.",
    intro: [
      "Donas glaseadas y rellenas, mini donas y cupcakes con buttercream o fondant, presentados en pared de donas, buffet escalonado o centro de mesa.",
      "La opera nuestro aliado MEDEDUL; desde BRINCOLINS la coordinamos con el inflable para cumpleaños, baby showers y fiestas infantiles.",
    ],
    lista: { titulo: "¿Qué donas y cupcakes lleva?", texto: "El formato se elige según el espacio: pared de donas, buffet escalonado con vitrinas o centro de mesa." },
    estilo: ["Donas glaseadas", "Donas rellenas", "Mini donas", "Cupcakes buttercream", "Cupcakes fondant", "Pared de donas", "Buffet escalonado"],
    lemas: ["Para celebraciones pequeñas", "La opción más solicitada", "Para reuniones grandes"],
    incluye: [
      ["Surtido base de donas y cupcakes", "Presentación con decoración básica", "Mobiliario incluido", "Recogida al finalizar"],
      ["Variedad ampliada con mini donas", "Diseño adaptado a tu ocasión", "Presentación destacada con decoración", "Instalación y coordinación en sitio", "Asesoría previa"],
      ["Surtido de alto volumen", "Dirección estética completa", "Operación en sitio extendida", "Configuración para reuniones grandes", "Mayor variedad y personalización"],
    ],
    faqs: [
      precioFaq("una mesa de donas y cupcakes", [4200, 7300, 11800]),
      { question: "¿Qué formatos de presentación hay?", answer: "Pared de donas, buffet escalonado con vitrinas de cristal o centro de mesa, según el espacio disponible." },
    ],
    img: { hero: "tipo-donas-hero", detalle: "tipo-donas-detalle",
      alt: "Mesa de donas y cupcakes con pared de donas glaseadas",
      altDetalle: "Donas glaseadas con chispas y cupcakes pastel" },
  }),
];

/* Todas las páginas de detalle bajo /servicios/mesas-de-dulces/<slug>/ */
export const PAGINAS: Evento[] = [...EVENTOS, ...TIPOS, ...ESTACIONES_PAG];

/* Condiciones comunes que MEDEDUL publica de forma consistente. Lo que su
   sitio publica con versiones distintas (anticipación, cancelación, costo
   de traslado) NO se afirma aquí: se confirma por escrito al cotizar. */
export const FAQS_GENERALES = [
  { question: "¿Cuánto cuesta una mesa de dulces?", answer: "Depende del evento y del número de invitados: desde $3,500 para un cumpleaños infantil de 15 a 30 niños, $3,800 para un bautizo de 30 a 50 invitados y $8,500 para una boda de 50 a 100 invitados. Cada evento tiene tres niveles: Esencial, Premium y Luxury. Los precios son más IVA." },
  { question: "¿Qué incluye el servicio de mesa de dulces?", answer: "Diseño en la paleta de tu evento, dulces seleccionados, mesa, mantelería, bases y cristalería, montaje antes de la llegada de los invitados y desmontaje al terminar. Desde el nivel Premium se incluye personal para reponer la mesa durante el evento." },
  { question: "¿Quién opera la mesa de dulces?", answer: "Nuestro aliado MEDEDUL, especialista en mesas de dulces y candy bar en CDMX. BRINCOLINS coordina la cotización, la fecha y la combinación con el inflable para que trates con un solo contacto." },
  { question: "¿Cómo se aparta la fecha?", answer: "Con un anticipo del 50%. Las condiciones de liquidación, cambio de fecha y cancelación de la mesa de dulces se confirman por escrito en la cotización." },
  { question: "¿Los dulces que sobran son para mí?", answer: "Sí. Los dulces que sobran son tuyos: puedes repartirlos entre los invitados o llevártelos." },
  { question: "¿Pueden adaptar la mesa a alergias o dietas?", answer: "Sí. Indica las restricciones al cotizar y se seleccionan dulces que no las contengan." },
  { question: "¿Los precios de la mesa de dulces incluyen IVA?", answer: "No. Los precios publicados son más IVA (16%) y se emite CFDI. Comparte tus datos fiscales al cotizar para que la factura salga correcta desde el inicio." },
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
        priceSpecification: { "@type": "PriceSpecification", price: n.precio, priceCurrency: "MXN", valueAddedTaxIncluded: false },
        url: `https://brincolins.com${BASE_URL}${e.slug}/`,
      }))),
    },
  };
}

/* Nombre del evento dentro de una frase: en minúscula salvo siglas («XV años»). */
export const enFrase = (e: Pick<Evento, "nombre">) => e.nombre.replace(/^(?!XV)\S+/, (w) => w.toLowerCase());

/* Inflables recomendados para acompañar cada servicio (slugs de inflables.ts).
   Por edad y tono del evento: bebés → Castillo Baby; formales → Castillo Blanco. */
export const COMBO: Record<string, string[]> = {
  "cumpleanos-infantil": ["dragones-rojos", "castillo-princesas", "mini-jungla"],
  "bautizo":             ["mini-castillo", "castillo-blanco", "gusanitos"],
  "baby-shower":         ["mini-castillo", "castillo-princesas", "gusanitos"],
  "primera-comunion":    ["castillo-blanco", "dragones-rojos", "barco-pirata"],
  "xv-anos":             ["castillo-blanco", "extremo", "barco-pirata"],
  "boda":                ["castillo-blanco", "extremo", "mini-castillo"],
};
