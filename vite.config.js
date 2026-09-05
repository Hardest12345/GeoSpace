import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // ← Tambahkan ini
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // ← HARUS ADA untuk React/JSX
    tailwindcss()
  ],
  // Opsional: tambahkan base path untuk production
  base: './',
<<<<<<< HEAD
})
=======
})
>>>>>>> d78d614b96abd962ec4be9b622deabda809503b7
