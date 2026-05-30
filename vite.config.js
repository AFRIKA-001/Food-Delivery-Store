import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [
    tailwindcss(),

    react(),

    VitePWA({
      registerType: "autoUpdate",

      injectRegister: "auto",

      includeAssets: [
        "favicon.svg",
        "icons.svg",
        "jaha.png",
        "offline.html",
      ],

      manifest: {
        name: "JAHA Food Delivery Store",

        short_name: "JAHA",

        description:
          "Order delicious meals and have them delivered quickly to your doorstep.",

        theme_color: "#f97316",

        background_color: "#fff7ed",

        display: "standalone",

        orientation: "portrait",

        scope: "/",

        start_url: "/",

        categories: ["food", "shopping", "lifestyle"],

        shortcuts: [
          {
            name: "Browse Meals",
            short_name: "Meals",
            url: "/meals",
          },

          {
            name: "View Cart",
            short_name: "Cart",
            url: "/cart",
          },
        ],

        screenshots: [
          {
            src: "image.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },

          {
            src: "image.png",
            sizes: "540x720",
            type: "image/png",
          },
        ],

        icons: [
          {
            src: "jaha.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "jaha.png",
            sizes: "512x512",
            type: "image/png",
          },

          {
            src: "jaha.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,json,webmanifest}",
        ],

        navigateFallback: "/offline.html",

        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

        runtimeCaching: [
          {
            urlPattern:
              /^https:\/\/.*supabase\.co\/storage\/v1\/object\/public\//,

            handler: "CacheFirst",

            options: {
              cacheName: "meal-images",

              expiration: {
                maxEntries: 200,

                maxAgeSeconds: 60 * 60 * 24 * 30,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern: ({ request }) =>
              request.destination === "image",

            handler: "StaleWhileRevalidate",

            options: {
              cacheName: "general-images",
            },
          },
        ],
      },
    }),

    babel({
      plugins: [
        // ["babel-plugin-react-compiler", { target: "19" }]
      ],
    }),
  ],
});