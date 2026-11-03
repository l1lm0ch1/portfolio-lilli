import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|webp)$/i,
      png: { quality: 90 },
      jpeg: { quality: 82, mozjpeg: true },
      jpg: { quality: 82, mozjpeg: true },
      webp: { quality: 82 },
    }),
  ],
})