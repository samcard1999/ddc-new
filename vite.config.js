import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // expone en la LAN (equivale a --host 0.0.0.0)
    port: 5173,
    strictPort: true,    // si está ocupado, falla en vez de cambiar de puerto
    // (opcional) si el HMR no conecta desde el móvil:
    // hmr: { host: '192.168.1.34', protocol: 'ws', port: 5173 },
  },
})
