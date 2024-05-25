import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://bravies.ca',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), markdoc(), keystatic(), alpinejs(), sitemap()],
  output: 'hybrid',
  adapter: vercel()
});