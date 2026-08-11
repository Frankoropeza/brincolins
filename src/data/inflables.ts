/**
 * src/data/inflables.ts
 * Catálogo canónico de inflables BRINCOLINS.
 * Fuente única de verdad para precios, specs, imágenes y slugs.
 *
 * Consumir desde:
 *  - src/pages/cotizar/index.astro (selector de formulario)
 *  - src/pages/inflables/*.astro   (product schema, hero specs)
 *  - src/components/ProductCard.astro
 *  - src/components/QuickNav.astro
 */

export interface Inflable {
  slug:        string;
  name:        string;
  price:       string;    // formato "$X,XXX" para display
  priceNumber: number;    // número para schema / ordenamiento
  size:        string;    // medidas del inflable: largo×ancho×alto
  /** Área libre que hay que despejar: medidas + 1 m de margen por lado.
      Es la regla de seguridad que el propio sitio publica. */
  spaceRequired: string;
  /** Altura libre necesaria: alto del inflable + 0.7 m. Determina si cabe bajo techo. */
  heightClearance: string;
  /** true si la altura libre requerida permite instalarlo en interiores
      (salón, terraza techada, departamento con techo estándar de 2.4-3 m). */
  indoor:      boolean;
  ages:        string;
  capacity:    string;
  installTime: string;
  image:       string;    // ruta relativa a /public
  description: string;
  category:    "pequeño" | "mediano" | "grande" | "premium";
  active:      boolean;
  /** Imágenes de galería adicionales (opcionales) */
  gallery?:    string[];
}

/* ──────────────────────────────────────────────────────────────
   Política de precios — UNA sola redacción para todo el sitio
   ──────────────────────────────────────────────────────────────
   Antes había dos fuentes en conflicto: las 8 fichas de producto
   mostraban "+ IVA" mientras las otras 133 páginas prometían
   "el precio final, sin cargos ocultos". Un Castillo de Princesas
   pasaba de $1,200 a $1,392 sin avisar.
   ────────────────────────────────────────────────────────────── */
export const PRICE_NOTE       = "+ IVA si requieres factura";
export const PRICE_NOTE_LONG  = "Los precios son netos. Si necesitas factura, se agrega el 16% de IVA.";

/* Requisitos operativos comunes a todos los modelos. Estaban repetidos
   a mano en ~10 archivos y derivaban entre sí. */
export const REQ_POWER   = "Toma de corriente de 110V a menos de 20 m del área de instalación";
export const REQ_SURFACE = "Superficie plana y despejada, sin vidrio ni objetos punzantes";
export const REQ_ADULT   = "Supervisión de una persona adulta durante todo el evento";

export const INFLABLES: Inflable[] = [
  {
    slug:        "mini-castillo",
    name:        "Mini Castillo",
    price:       "$800",
    priceNumber: 800,
    size:        "2×2×2.5m",
    spaceRequired:   "3×3 m",
    heightClearance: "3.2 m",
    indoor:      true,
    ages:        "1-4 años",
    capacity:    "3-4 niños",
    installTime: "15 minutos",
    image:       "/img/inflables/mini-castillo.avif",
    description: "El Mini Castillo es el inflable ideal para los más pequeños. Tamaño compacto perfecto para interiores, terrazas y espacios reducidos. Diseñado para bebés y niños de 1 a 4 años.",
    category:    "pequeño",
    active:      true,
    gallery: [
      "/img/inflables/mini-castillo-primer-cumpleanos-bebe.avif",
      "/img/inflables/mini-castillo-interior-departamento-cdmx.avif",
      "/img/inflables/mini-castillo-salon-bebe-renta.avif",
      "/img/inflables/mini-castillo-fiesta-interior-pequeno.avif",
    ],
  },
  {
    slug:        "dragones-rojos",
    name:        "Dragones Rojos",
    price:       "$1,200",
    priceNumber: 1200,
    size:        "4×4×3.8m",
    spaceRequired:   "6×6 m",
    heightClearance: "4.5 m",
    indoor:      false,
    ages:        "4-10 años",
    capacity:    "5-7 niños",
    installTime: "20 minutos",
    image:       "/img/inflables/dragones-rojos.avif",
    description: "El inflable Dragones Rojos es el más rentado en CDMX. Con dos impresionantes dragones de 3 metros de altura, resbaladilla integrada y mallas de seguridad laterales.",
    category:    "mediano",
    active:      true,
  },
  {
    slug:        "castillo-princesas",
    name:        "Castillo de Princesas",
    price:       "$1,200",
    priceNumber: 1200,
    size:        "4×4×3.5m",
    spaceRequired:   "6×6 m",
    heightClearance: "4.2 m",
    indoor:      false,
    ages:        "4-10 años",
    capacity:    "5-7 niños",
    installTime: "20 minutos",
    image:       "/img/inflables/castillo-princesas.avif",
    description: "El Castillo de Princesas es el inflable favorito para fiestas temáticas. Diseño en rosa y morado con torres decorativas, resbaladilla y mallas de seguridad.",
    category:    "mediano",
    active:      true,
    gallery: [
      "/img/inflables/castillo-princesas-cumpleanos-nina-cdmx.avif",
      "/img/inflables/castillo-princesas-fiesta-tematica-rosa.avif",
      "/img/inflables/castillo-princesas-jardin-exterior-fiesta.avif",
      "/img/inflables/castillo-princesas-salon-cumpleanos.avif",
    ],
  },
  {
    slug:        "mini-jungla",
    name:        "Mini Jungla",
    price:       "$1,300",
    priceNumber: 1300,
    size:        "4.5×4×3.5m",
    spaceRequired:   "6.5×6 m",
    heightClearance: "4.2 m",
    indoor:      false,
    ages:        "3-10 años",
    capacity:    "5-7 niños",
    installTime: "15 minutos",
    image:       "/img/inflables/mini-jungla.avif",
    description: "El inflable Mini Jungla transporta a los niños a una aventura tropical. Con dinosaurios, palmeras y colores vibrantes de la selva, ideal para fiestas de animales y naturaleza.",
    category:    "mediano",
    active:      true,
    gallery: [
      "/img/inflables/mini-jungla-cumpleanos-aventura-cdmx.avif",
      "/img/inflables/mini-jungla-fiesta-tematica-selva.avif",
      "/img/inflables/mini-jungla-instalacion-jardin-cdmx.avif",
      "/img/inflables/mini-jungla-vista-frontal-cdmx.avif",
    ],
  },
  {
    slug:        "gusanitos",
    name:        "Gusanitos",
    price:       "$1,350",
    priceNumber: 1350,
    size:        "5×3×2.5m",
    spaceRequired:   "7×5 m",
    heightClearance: "3.2 m",
    indoor:      true,
    ages:        "4-10 años",
    capacity:    "5-7 niños",
    installTime: "20 minutos",
    image:       "/img/inflables/gusanitos.avif",
    description: "El inflable Gusanitos es más un circuito que un brincolín: túneles de colores conectados con varias entradas y salidas. Con 5 metros de largo es el de mayor alcance del catálogo mediano y funciona muy bien con grupos de edades mezcladas.",
    category:    "mediano",
    active:      true,
    gallery: [
      "/img/inflables/gusanitos-cumpleanos-infantil-cdmx.avif",
      "/img/inflables/gusanitos-colores-vibrantes-fiesta.avif",
      "/img/inflables/gusanitos-instalacion-jardin-cdmx.avif",
      "/img/inflables/gusanitos-kermess-escolar-cdmx.avif",
    ],
  },
  {
    slug:        "barco-pirata",
    name:        "Barco Pirata",
    price:       "$1,800",
    priceNumber: 1800,
    size:        "7×5×4.5m",
    spaceRequired:   "9×7 m",
    heightClearance: "5.2 m",
    indoor:      false,
    ages:        "4+ años",
    capacity:    "8-10 niños",
    installTime: "30 minutos",
    image:       "/img/inflables/barco-pirata.avif",
    description: "El Barco Pirata es el inflable más grande del catálogo. Con 7×5×4.5 metros, mástil, velas y un tobogán de alta velocidad por la popa, es el modelo que más impacto genera a la entrada de la fiesta.",
    category:    "grande",
    active:      true,
    gallery: [
      "/img/inflables/barco-pirata-inflable-vista-frontal-cdmx.avif",
      "/img/inflables/barco-pirata-fiesta-tematica-pirata.avif",
      "/img/inflables/barco-pirata-instalacion-exterior-cdmx.avif",
      "/img/inflables/barco-pirata-tobogan-altura-fiesta-cdmx.avif",
    ],
  },
  {
    slug:        "castillo-blanco",
    name:        "Castillo Blanco",
    price:       "$1,700",
    priceNumber: 1700,
    size:        "6×5×4m",
    spaceRequired:   "8×7 m",
    heightClearance: "4.7 m",
    indoor:      false,
    ages:        "3+ años",
    capacity:    "8-10 personas",
    installTime: "30 minutos",
    image:       "/img/inflables/castillo-blanco.avif",
    description: "El Castillo Blanco es nuestro inflable premium para bodas, bautizos y XV años. Diseño blanco puro que se integra perfectamente con la decoración de eventos formales.",
    category:    "premium",
    active:      true,
    gallery: [
      "/img/inflables/castillo-blanco-boda-terraza-cdmx.avif",
      "/img/inflables/castillo-blanco-decoracion-elegante-cdmx.avif",
      "/img/inflables/castillo-blanco-instalacion-jardin-boda.avif",
      "/img/inflables/castillo-blanco-xv-anos-inflable-cdmx.avif",
    ],
  },
  {
    slug:        "extremo",
    name:        "Extremo",
    price:       "$1,900",
    priceNumber: 1900,
    size:        "7×4×3.8m",
    spaceRequired:   "9×6 m",
    heightClearance: "4.5 m",
    indoor:      false,
    ages:        "6+ años",
    capacity:    "6-10 niños por turno",
    installTime: "30 minutos",
    image:       "/img/inflables/extremo.avif",
    description: "El circuito Extremo es el inflable de carreras del catálogo. Con 7 metros de largo, pista de obstáculos, tobogán doble y doble carril para competencias. Ideal para eventos corporativos, kermeses y adolescentes.",
    category:    "grande",
    active:      true,
    gallery: [
      "/img/inflables/extremo-circuito-completo-aereo.avif",
      "/img/inflables/extremo-carrera-doble-carril-cdmx.avif",
      "/img/inflables/extremo-instalacion-campo-grande.avif",
      "/img/inflables/extremo-kermess-escolar-cdmx.avif",
    ],
  },
];

/** Solo inflables activos, ordenados por precio ascendente */
export const INFLABLES_ACTIVOS = INFLABLES
  .filter(i => i.active)
  .sort((a, b) => a.priceNumber - b.priceNumber);

/** Opciones para select de formulario */
export const INFLABLES_SELECT_OPTIONS = [
  ...INFLABLES_ACTIVOS.map(i => ({
    value: i.name,
    label: `${i.name} — ${i.price}`,
  })),
  { value: "No estoy seguro", label: "No estoy seguro / Quiero asesoría" },
];

/** Encuentra un inflable por slug */
export function getInflableBySlug(slug: string): Inflable | undefined {
  return INFLABLES.find(i => i.slug === slug);
}

/** Modelos que caben bajo techo (altura libre ≤ 3.2 m). */
export const INFLABLES_INTERIOR = INFLABLES_ACTIVOS.filter(i => i.indoor);

/** Número real de modelos activos. Había 3 cifras circulando por el sitio:
    "8 modelos", "más de 8 modelos" y "14 modelos". */
export const MODELOS_COUNT = INFLABLES_ACTIVOS.length;

/** Rango de precios para schema y copy: "$800 - $1,900". */
export const PRICE_RANGE =
  `${INFLABLES_ACTIVOS[0].price} - ${INFLABLES_ACTIVOS[INFLABLES_ACTIVOS.length - 1].price}`;

/** Etiqueta y color de badge por modelo — los mismos que usa /inflables/,
    para que la tarjeta se vea igual en cualquier página que la consuma. */
export const BADGE: Record<string, { label: string; color: string }> = {
  "dragones-rojos":     { label: "Más rentado",  color: "castillo"  },
  "castillo-princesas": { label: "Princesas",    color: "princesas" },
  "mini-jungla":        { label: "Aventura",     color: "jungla"    },
  "gusanitos":          { label: "Tropical",     color: "jungla"    },
  "mini-castillo":      { label: "Para bebés",   color: "castillo"  },
  "barco-pirata":       { label: "El más grande", color: "pirata"   },
  "extremo":            { label: "Obstáculos",   color: "extremo"   },
  "castillo-blanco":    { label: "Bodas y XV",   color: "bodas"     },
};

/** Ficha de specs lista para renderizar, en el mismo orden en todas las páginas. */
export function getSpecRows(i: Inflable) {
  return [
    { label: "Medidas",          value: i.size },
    { label: "Espacio libre",    value: i.spaceRequired },
    { label: "Altura libre",     value: i.heightClearance },
    { label: "Edades",           value: i.ages },
    { label: "Capacidad",        value: i.capacity },
    { label: "Instalación",      value: i.installTime },
    { label: "Apto interiores",  value: i.indoor ? "Sí" : "No — sólo exteriores" },
  ];
}
