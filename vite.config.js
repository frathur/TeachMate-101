import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(woff2|woff|ttf)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
})
