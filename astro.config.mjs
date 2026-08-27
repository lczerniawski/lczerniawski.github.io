// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import mermaid from "astro-mermaid";


// https://astro.build/config
export default defineConfig({
  site: "https://lczerniawski.github.io",
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    syntaxHighlight: 'shiki',
  },
  integrations: [
    mdx(),
    sitemap(),
    mermaid({
      theme: "neutral",
      autoTheme: true,
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    build: {
      minify: "esbuild",
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-mono",
      fallbacks: ["monospace"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-ibm-sans",
      fallbacks: ["sans-serif"],
    },
  ],
});
