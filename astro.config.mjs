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
      filter: (page) => page !== undefined,
    }),
  ],
});
