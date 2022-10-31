import svelte from '@astrojs/svelte';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'https://crux.gotomi.info',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  integrations: [svelte(), sitemap()]
});