import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Импорт

export default defineConfig({
  base: '/singapore-f1/',

  plugins: [
    react(),
    tailwindcss(), // 2. Подключение
  ],
})
