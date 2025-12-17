import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 🔥 Abre el navegador automáticamente
    port: 5173 // (opcional) asegura el puerto
  }
})
