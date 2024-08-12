import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // The base URL of your backend API
        changeOrigin: true,  // Needed to avoid CORS issues by changing the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, '/api'),  // Ensures the /api prefix is kept
      },
    },
  },
});
