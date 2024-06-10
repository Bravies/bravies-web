import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://bravies.ca',
  integrations: [sentry({
    dsn: "https://835eeb41edf622fbc720d48da63cdcff@o4507405439401984.ingest.us.sentry.io/4507405442547712",
    sourceMapsUploadOptions: {
      project: "web",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  }),tailwind({
    applyBaseStyles: false
  }), react(), markdoc(), keystatic(), alpinejs(), sitemap(), sentry()],
  output: 'hybrid',
  adapter: vercel()
});
