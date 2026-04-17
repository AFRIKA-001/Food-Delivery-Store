import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), // Note: React Compiler is often enabled via options here if using the latest React 19
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'] // This caches all your core files for offline use
      },
      includeAssets: ['favicon.svg', 'icons.svg', 'image.png'],
      manifest: {
        name: 'JAHA Food Delivery',
        short_name: 'JAHA',
        description: 'Sovereign Food Delivery',
        theme_color: '#000000',
        background_color: 'orange',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'image.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Helps the icon look good on all Android shapes
          }
        ]
      }
    }),
    // If you are using the specific Rolldown Babel plugin for the compiler:
    babel({ 
      plugins: [
        // Ensure you have the actual compiler package installed if using this
        // ['babel-plugin-react-compiler', { target: '18' }] 
      ] 
    })
  ],
})