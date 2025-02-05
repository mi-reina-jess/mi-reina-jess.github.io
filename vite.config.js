import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // IMPORTANTE: Mantener '/' porque es un User Page
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: undefined,  // 🔥 Esto evita fragmentación rara de archivos
        format: 'es' // 🔥 Asegura que usa formato ES Modules
      }
    }
  }
});
