import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/subham-portfolio/' : '/',
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          if (id.includes('node_modules/@react-three/fiber') ||
              id.includes('node_modules/@react-three/drei') ||
              id.includes('node_modules/@react-three/postprocessing')) {
            return 'vendor-react-three';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap')) {
            return 'vendor-gsap';
          }
        },
      },
    },
  },
})