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
  size:        string;
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

export const INFLABLES: Inflable[] = [
  {
    slug:        "mini-castillo",
    name:        "Mini Castillo",
    price:       "$800",
    priceNumber: 800,
    size:        "2×2×2m",
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
    size:        "4×4×3m",
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
    size:        "4×4×3m",
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
    price:       "$1,200",
    priceNumber: 1200,
    size:        "4×4×3m",
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
    price:       "$1,200",
    priceNumber: 1200,
    size:        "4×4×3m",
    ages:        "4-10 años",
    capacity:    "5-7 niños",
    installTime: "20 minutos",
    image:       "/img/inflables/gusanitos.avif",
    description: "El inflable Gusanitos combina diversión y color. Con gusanitos decorativos, colores vibrantes y resbaladilla integrada, perfecto para fiestas infantiles al aire libre.",
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
    price:       "$2,500",
    priceNumber: 2500,
    size:        "7×5×4m",
    ages:        "3-12 años",
    capacity:    "10-15 niños",
    installTime: "30 minutos",
    image:       "/img/inflables/barco-pirata.avif",
    description: "El Barco Pirata es nuestro inflable más impresionante en rango medio. Con 7×5×4 metros, resbaladilla de altura, zona de brinco amplia y decoración de barco pirata.",
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
    price:       "$2,800",
    priceNumber: 2800,
    size:        "6×5×4m",
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
    price:       "$3,000",
    priceNumber: 3000,
    size:        "12×4×3m",
    ages:        "6+ años",
    capacity:    "2-4 personas simultáneamente (doble carril)",
    installTime: "30 minutos",
    image:       "/img/inflables/extremo.avif",
    description: "El circuito Extremo es el inflable más grande del catálogo. Con 12 metros de largo, pista de obstáculos, tobogán doble y doble carril para competencias. Ideal para eventos corporativos, kermeses y adolescentes.",
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
