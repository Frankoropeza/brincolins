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
  /* 301 de la consolidación del blog (auditoría SEO 2026-11-04): 39 posts que
     canibalizaban fichas, /precios/ u otros posts. GitHub Pages no lee
     _redirects, así que Astro genera una página meta-refresh + canonical. */
  redirects: {
    "/blog/consejos-rentar-inflable-primera-vez/": "/blog/como-rentar-inflable-brincolins-proceso-paso-a-paso/",
    "/blog/kermesse-escolar-inflables-edomex-guia/": "/blog/organizar-kermesse-escolar-inflables-cdmx-checklist/",
    "/blog/inflable-elegante-quince-anos-cdmx/": "/blog/decoracion-inflable-xv-anos-cdmx/",
    "/blog/renta-inflables-bodas-xv-anos/": "/blog/inflables-eventos-formales-cdmx/",
    "/blog/renta-castillo-blanco-inflable-bodas-cdmx/": "/inflables/castillo-blanco/",
    "/blog/garden-party-inflable-mesas-picnic-cdmx/": "/blog/fiesta-jardin-exterior-inflable-mobiliario-cdmx/",
    "/blog/fiesta-infantil-jardin-inflable-cdmx/": "/blog/fiesta-jardin-exterior-inflable-mobiliario-cdmx/",
    "/blog/inflables-jardin-exterior-cdmx/": "/blog/fiesta-jardin-exterior-inflable-mobiliario-cdmx/",
    "/blog/inflable-extremo-eventos-corporativos-cdmx/": "/blog/inflables-para-adultos-eventos-corporativos/",
    "/blog/por-que-elegir-brincolins-empresa-inflables-cdmx/": "/nosotros/",
    "/blog/garantia-servicio-brincolins-renta-inflables-cdmx/": "/nosotros/",
    "/blog/compromiso-brincolins-valores-empresa-inflables-cdmx/": "/nosotros/",
    "/blog/experiencia-20-anos-renta-inflables-cdmx/": "/nosotros/",
    "/blog/calidad-servicio-inflables-cdmx-estandares/": "/blog/elegir-empresa-renta-inflables-profesional-cdmx/",
    "/blog/senales-proveedor-inflables-confiable-cdmx/": "/blog/elegir-empresa-renta-inflables-profesional-cdmx/",
    "/blog/renta-inflable-jungla-cdmx/": "/inflables/mini-jungla/",
    "/blog/renta-inflable-gusanitos-cdmx/": "/inflables/gusanitos/",
    "/blog/renta-mini-castillo-inflable-bebes-cdmx/": "/inflables/mini-castillo/",
    "/blog/renta-castillo-princesas-inflable-cdmx/": "/inflables/castillo-princesas/",
    "/blog/renta-barco-pirata-inflable-grande-cdmx/": "/inflables/barco-pirata/",
    "/blog/renta-pista-inflable-obstaculos-cdmx/": "/inflables/extremo/",
    "/blog/inflable-dragones-rojos-cdmx/": "/inflables/dragones-rojos/",
    "/blog/castillo-inflable-cumpleanos-infantil-cdmx/": "/inflables/castillos/",
    "/blog/cuanto-cuesta-rentar-inflable-cdmx/": "/precios/",
    "/blog/brincolines-cdmx-precios-modelos/": "/precios/",
    "/blog/flota-inflables-brincolins-catalogo-modelos-cdmx/": "/inflables/",
    "/blog/inflable-chico-vs-grande-cuantos-invitados-cdmx/": "/blog/como-elegir-inflable-fiesta-infantil/",
    "/blog/paquetes-completos-fiesta-inflable-cdmx/": "/servicios/paquetes-de-fiesta/",
    "/blog/paquete-fiesta-dragones-rojos-o-jungla/": "/servicios/paquetes-de-fiesta/",
    "/blog/iluminacion-tecnologia-inflables-fiesta-cdmx/": "/servicios/iluminacion-eventos/",
    "/blog/inflables-grandes-con-tobogan-cdmx/": "/inflables/toboganes/",
    "/blog/jungla-o-gusanitos-cual-elegir/": "/blog/inflables-de-1600-comparativa-dragones-jungla-gusanitos/",
    "/blog/brincolines-para-ninos-pequenos-cdmx/": "/blog/mejor-inflable-para-ninos-menores-de-3-anos/",
    "/blog/inflable-pequeno-fiestas-interiores-cdmx/": "/inflables/para-interiores/",
    "/blog/inflables-tematicos-infantiles-cdmx/": "/inflables/tematicos/",
    "/blog/inflables-tematicos-ninas-cdmx/": "/blog/fiesta-princesas-ninas-inflable-cdmx/",
    "/blog/decoracion-fiesta-infantil-inflable/": "/blog/decoracion-completa-fiesta-infantil-cdmx-globos-inflable/",
    "/blog/inflables-coloridos-fiestas-infantiles-cdmx/": "/inflables/para-ninos/",
    "/blog/inflables-para-adolescentes-jovenes-cdmx/": "/inflables/para-adultos/",
  },
  vite: {
    // El worktree no puede modificar la caché compartida de node_modules.
    cacheDir: ".astro/vite",
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
