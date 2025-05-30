// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NK/', // 👈 EXACT repo name!
  plugins: [react()],
})
