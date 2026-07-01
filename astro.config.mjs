import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brincolins.com",
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
