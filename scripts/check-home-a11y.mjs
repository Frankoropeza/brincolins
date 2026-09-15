import { readFile } from 'node:fs/promises';

const [home, card, global] = await Promise.all([
  readFile('src/pages/index.astro', 'utf8'),
  readFile('src/components/ProductCard.astro', 'utf8'),
  readFile('src/styles/global.css', 'utf8'),
]);

if (!card.includes('aria-label={`Ver detalles de ${name}`}')) {
  throw new Error('Cada enlace de ficha debe anunciar el nombre del inflable.');
}

for (const expected of [
  '.pilar-foot strong { color: var(--c-primary-text);',
  'color: var(--c-primary-text);\n    text-decoration: none;',
  'background: var(--c-primary-deep);\n    color: #fff;',
]) {
  if (!home.includes(expected)) {
    throw new Error('Los elementos destacados de la portada deben usar los tokens de contraste AA.');
  }
}

if (!global.includes('.btn-white {\n  background: #fff;\n  color: var(--c-primary-text);')) {
  throw new Error('El CTA blanco debe usar el token de texto naranja con contraste AA.');
}

console.log('OK: la portada conserva contraste AA y enlaces con propósito explícito.');
