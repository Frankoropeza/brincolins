/**
 * scripts/validate-assets.mjs
 * Valida que las imágenes referenciadas en .md y .astro existan en /public.
 * Uso: node scripts/validate-assets.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const PUBLIC    = join(ROOT, 'public');

// ── Recolectar archivos fuente ────────────────────────────────────────────────
function walkDir(dir, exts = ['.md', '.astro'], files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
      walkDir(fullPath, exts, files);
    } else if (entry.isFile() && exts.includes(extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

// ── Extraer referencias de imagen ─────────────────────────────────────────────
const IMG_PATTERNS = [
  /(?:heroImage|image|src|ogImage)\s*[=:]\s*["'`]?(\/img\/[^\s"'`)\]]+)/g,
  /\(\/img\/([^)]+)\)/g,
  /src=["'](\/img\/[^"']+)["']/g,
];

function extractImageRefs(content) {
  const refs = new Set();
  for (const pattern of IMG_PATTERNS) {
    let m;
    const re = new RegExp(pattern.source, pattern.flags);
    while ((m = re.exec(content)) !== null) {
      const ref = m[1].startsWith('/img/') ? m[1] : '/img/' + m[1];
      // Limpiar sufijos como .tmp, parámetros de query, etc.
      refs.add(ref.split('?')[0].split('#')[0]);
    }
  }
  return refs;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const srcFiles = [
  ...walkDir(join(ROOT, 'src')),
];

const missing = [];
const checked = new Set();

for (const file of srcFiles) {
  const content = readFileSync(file, 'utf-8');
  const refs    = extractImageRefs(content);

  for (const ref of refs) {
    if (checked.has(ref)) continue;
    checked.add(ref);

    const absPath = join(PUBLIC, ref);
    if (!existsSync(absPath)) {
      missing.push({ ref, file: file.replace(ROOT + '/', '') });
    }
  }
}

console.log(`\n🔍  validate-assets — revisando ${srcFiles.length} archivos fuente\n`);

if (missing.length === 0) {
  console.log('✅  Todas las imágenes referenciadas existen en /public.\n');
  process.exit(0);
} else {
  console.error(`❌  ${missing.length} imagen(es) referenciada(s) pero no encontrada(s):\n`);
  for (const { ref, file } of missing) {
    console.error(`   • ${ref}`);
    console.error(`     └─ referenciada en: ${file}`);
  }
  console.error('');
  process.exit(1);
}
