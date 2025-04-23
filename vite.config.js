import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/E-commerce/', // 👈 This is what tells Vite to use the correct path
  plugins: [react()],
})
