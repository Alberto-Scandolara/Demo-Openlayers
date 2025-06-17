import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/geojson': {
        target: 'https://gisco-services.ec.europa.eu',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/geojson/, '/distribution/v2/urau')
      }
    }
  }
});
