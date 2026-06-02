// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://lczerniawski.github.io",
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true
  },
  vite: {
    build: {
      minify: "esbuild"
    }
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Monaspace Neon",
      cssVariable: "--font-mona",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/MonaspaceNeon-Regular.otf"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/MonaspaceNeon-Bold.otf"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
