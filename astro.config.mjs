import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brincolins.com",
  integrations: [
    sitemap({
      filter: (page) => page !== undefined,
    }),
  ],
});
