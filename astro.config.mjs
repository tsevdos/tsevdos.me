import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tsevdos.me",
  compressHTML: true,
  integrations: [
    react(),
    sitemap(),
    expressiveCode({
      styleOverrides: {
        codeFontSize: "1.2rem",
      },
    }),
    mdx({
      optimize: true,
      syntaxHighlight: "shiki",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
