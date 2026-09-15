import { access, readFile } from 'node:fs/promises';

const component = await readFile('src/components/ProductCard.astro', 'utf8');
const products = [
  'barco-pirata',
  'castillo-princesas',
  'dragones-rojos',
  'extremo',
  'gusanitos',
  'mini-castillo',
  'mini-jungla',
];

if (!component.includes("const image720 = image && image !== '/img/inflables/castillo-blanco.avif'")) {
  throw new Error('ProductCard debe derivar la variante de 720 px de cada imagen AVIF.');
}

if (!component.includes("const imageWidth = image === '/img/inflables/extremo.avif' ? 900 : 1200;")) {
  throw new Error('ProductCard debe conservar el ancho real de los originales en srcset.');
}

if (!component.includes('srcset={image720 ? `${image720} 720w, ${image} ${imageWidth}w` : undefined}')) {
  throw new Error('ProductCard debe declarar srcset para que el navegador elija la imagen apropiada.');
}

await Promise.all(products.flatMap((product) => [
  access(`public/img/inflables/${product}.avif`),
  access(`public/img/inflables/${product}-720w.avif`),
]));

console.log('OK: las tarjetas usan variantes AVIF responsivas de 720 px.');
