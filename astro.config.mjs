import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://stvncz.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
