import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brincolins.com",
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
        // lastmod en cada build para señal de frescura
        item.lastmod = new Date().toISOString();
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
