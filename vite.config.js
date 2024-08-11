import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Certificate/', // Adjust this to match your GitHub Pages path
  server: {
    proxy: {
      '/api': 'http://localhost:8083',
    },
  },
  plugins: [react()],
});
