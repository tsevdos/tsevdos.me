import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tsevdos.me",
  compressHTML: true,
  integrations: [react(), sitemap(), mdx({ optimize: true })],
  vite: {
    plugins: [tailwindcss()],
  },
});
