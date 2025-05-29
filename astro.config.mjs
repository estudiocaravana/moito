// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

// Desactivamos el servidor de Netlify si estamos en producción
// https://jankraus.net/2025/02/25/a-simple-guide-to-using-astro-with-keystatic/
const isBuild = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [vue(), ...(isBuild ? [] : [netlify()])],
  vite: {
    plugins: [tailwindcss()],
  },
});
