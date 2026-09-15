import { access, readFile } from 'node:fs/promises';

const [component, home, catalog] = await Promise.all([
  readFile('src/components/ResponsiveInflatableImage.astro', 'utf8'),
  readFile('src/pages/index.astro', 'utf8'),
  readFile('src/pages/inflables/index.astro', 'utf8'),
]);
const products = [
  'barco-pirata',
  'castillo-blanco',
  'castillo-princesas',
  'dragones-rojos',
  'extremo',
  'gusanitos',
  'mini-castillo',
  'mini-jungla',
];

for (const expected of [
  'const responsiveWidths = {',
  "'/img/inflables/castillo-blanco.avif': 720,",
  "'/img/inflables/extremo.avif': 900,",
  "'/img/servicios/paquetes-fiesta-completo-cdmx.avif': 800,",
  "'/img/servicios/mobiliario-fiestas-cdmx.avif': 800,",
  "`${src.replace(/\\.avif$/, '-480w.avif')} 480w`",
  "`${src.replace(/\\.avif$/, '-720w.avif')} 720w`",
]) {
  if (!component.includes(expected)) {
    throw new Error('El componente compartido debe declarar las variantes y anchos reales de los inflables.');
  }
}

for (const page of [home, catalog]) {
  if (!page.includes('ResponsiveInflatableImage')) {
    throw new Error('Las tarjetas de categoría deben reutilizar el componente de imagen responsiva.');
  }
}

if (!home.includes('<ResponsiveInflatableImage src={e.image}')) {
  throw new Error('Las tarjetas de eventos deben reutilizar el componente de imagen responsiva.');
}

await Promise.all(products.flatMap((product) => {
  const assets = [
    access(`public/img/inflables/${product}.avif`),
    access(`public/img/inflables/${product}-480w.avif`),
  ];

  if (product !== 'castillo-blanco') {
    assets.push(access(`public/img/inflables/${product}-720w.avif`));
  }

  return assets;
}));

await Promise.all([
  access('public/img/servicios/paquetes-fiesta-completo-cdmx-480w.avif'),
  access('public/img/servicios/paquetes-fiesta-completo-cdmx-720w.avif'),
  access('public/img/servicios/mobiliario-fiestas-cdmx-480w.avif'),
  access('public/img/servicios/mobiliario-fiestas-cdmx-720w.avif'),
]);

console.log('OK: las tarjetas usan variantes AVIF responsivas de 720 px.');
