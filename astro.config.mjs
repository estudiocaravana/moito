// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [vue(), netlify()],
  vite: {
    plugins: [tailwindcss()],
  },
});
