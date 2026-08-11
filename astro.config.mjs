import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

/* lastmod REAL por post (updatedDate > publishDate). Antes se marcaba TODA
   URL con new Date() en cada build: Google detecta lastmod inflado y aprende
   a ignorarlo, así que la señal de frescura se perdía justo donde importa. */
const blogLastmod = {};
try {
  const dir = join(process.cwd(), "src/content/blog");
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    const d = matter(readFileSync(join(dir, f), "utf-8")).data;
    const date = d.updatedDate || d.publishDate;
    if (date) blogLastmod[f.replace(/\.md$/, "")] = new Date(date).toISOString();
  }
} catch { /* sin blog no hay lastmod */ }

/* Los enlaces externos escritos en Markdown salían sin `rel` ni `target`:
   los mismos dominios aliados (mededul.com, pantalla-led.com, mesaspicnic.com)
   sí llevaban rel="noopener noreferrer" cuando se escribían en .astro, así que
   el tratamiento dependía de dónde se hubiera redactado el enlace.
   Plugin propio en vez de rehype-external-links para no añadir dependencia. */
function externalLinks() {
  const isExternal = (h) => /^https?:\/\//i.test(h) && !/^https?:\/\/(www\.)?brincolins\.com/i.test(h);
  return (tree) => {
    const walk = (node) => {
      if (node.type === "element" && node.tagName === "a" && isExternal(node.properties?.href ?? "")) {
        node.properties.rel = ["nofollow", "noopener", "noreferrer"];
        node.properties.target = "_blank";
      }
      (node.children ?? []).forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: "https://brincolins.com",
  markdown: {
    rehypePlugins: [externalLinks],
  },
  /* Sin esto, `page.url.prev/next` de paginate() genera enlaces SIN barra
     final (/blog/2) mientras el resto del sitio y las canónicas SÍ la llevan.
     GitHub Pages responde 301 → /blog/2/, así que cada clic en la paginación
     costaba un viaje de red extra y el enlace interno que rastrea Google no
     era el canónico. Verificado en producción antes del cambio:
       /blog/2 → 301 → https://brincolins.com/blog/2/ */
  trailingSlash: "always",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/cdn-cgi/'),
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [],
      serialize(item) {
        // lastmod solo donde hay fecha real (posts del blog)
        const m = item.url.match(/\/blog\/([^/]+)\/$/);
        if (m && blogLastmod[m[1]]) {
          item.lastmod = blogLastmod[m[1]];
        } else {
          delete item.lastmod;
        }
        // Homepage — máxima prioridad
        if (item.url === 'https://brincolins.com/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Páginas de inflables — alta prioridad
        if (item.url.includes('/inflables/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Páginas de cobertura — alta prioridad SEO local
        if (item.url.includes('/cobertura/')) {
          return { ...item, priority: 0.85, changefreq: 'monthly' };
        }
        // Blog — prioridad media
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // Servicios, contacto, cotizar
        if (item.url.includes('/servicios/') || item.url.includes('/contacto/') || item.url.includes('/cotizar/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
});
