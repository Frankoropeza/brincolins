/**
 * scripts/validate-content.mjs
 * Valida frontmatter del blog: title, description, longitudes y heroImage.
 * Uso: node scripts/validate-content.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const BLOG_DIR  = join(ROOT, 'src', 'content', 'blog');
const PUBLIC    = join(ROOT, 'public');

const TITLE_MAX   = 65;
const DESC_MIN    = 120;
const DESC_MAX    = 165;

// ── Parser de frontmatter mínimo (sin dependencias externas) ──────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const raw = match[1];
  const fm  = {};

  // Solo parsea campos escalares simples (string/boolean) — suficiente para este script
  for (const line of raw.split('\n')) {
    const kv = line.match(/^(\w+):\s*["']?([^"'\n]*)["']?\s*$/);
    if (kv) {
      const key = kv[1].trim();
      const val = kv[2].trim();
      fm[key] = val === 'true' ? true : val === 'false' ? false : val;
    }
  }
  return fm;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const files = readdirSync(BLOG_DIR)
  .filter(f => extname(f) === '.md')
  .map(f => ({ name: f, path: join(BLOG_DIR, f) }));

const issues = [];

for (const { name, path } of files) {
  const content = readFileSync(path, 'utf-8');
  const fm      = parseFrontmatter(content);
  const fileIssues = [];

  // title
  if (!fm.title) {
    fileIssues.push('❌  title ausente');
  } else if (fm.title.length > TITLE_MAX) {
    fileIssues.push(`⚠️   title demasiado largo (${fm.title.length} chars, máx ${TITLE_MAX})`);
  }

  // description
  if (!fm.description) {
    fileIssues.push('❌  description ausente');
  } else {
    if (fm.description.length < DESC_MIN) {
      fileIssues.push(`⚠️   description corta (${fm.description.length} chars, mín ${DESC_MIN})`);
    }
    if (fm.description.length > DESC_MAX) {
      fileIssues.push(`⚠️   description larga (${fm.description.length} chars, máx ${DESC_MAX})`);
    }
  }

  // heroImage existe en /public
  if (fm.heroImage) {
    const imgPath = join(PUBLIC, fm.heroImage);
    if (!existsSync(imgPath)) {
      fileIssues.push(`❌  heroImage no existe en /public: ${fm.heroImage}`);
    }
    // heroImageAlt
    if (!fm.heroImageAlt) {
      fileIssues.push('⚠️   heroImage declarado pero heroImageAlt ausente');
    }
  }

  // draft en producción
  if (fm.draft === true) {
    fileIssues.push('ℹ️   draft: true — no se publicará');
  }

  if (fileIssues.length > 0) {
    issues.push({ name, fileIssues });
  }
}

console.log(`\n🔍  validate-content — revisando ${files.length} artículos del blog\n`);

if (issues.length === 0) {
  console.log('✅  Todo el contenido del blog pasa las validaciones.\n');
  process.exit(0);
} else {
  const errors   = issues.filter(i => i.fileIssues.some(m => m.startsWith('❌')));
  const warnings = issues.filter(i => !i.fileIssues.some(m => m.startsWith('❌')) && i.fileIssues.length > 0);

  console.log(`📋  ${issues.length} archivo(s) con issues (${errors.length} errores, ${warnings.length} advertencias):\n`);

  for (const { name, fileIssues } of issues) {
    console.log(`  📄  ${name}`);
    for (const msg of fileIssues) {
      console.log(`       ${msg}`);
    }
    console.log('');
  }

  if (errors.length > 0) {
    console.error(`❌  Hay ${errors.length} error(es) críticos. Corrige antes de publicar.\n`);
    process.exit(1);
  } else {
    console.warn(`⚠️   Solo advertencias. El build puede continuar, pero revisa los issues.\n`);
    process.exit(0);
  }
}
