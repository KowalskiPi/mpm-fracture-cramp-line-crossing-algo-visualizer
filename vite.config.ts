import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are linked relatively, making it work on any GitHub Pages subpath
  build: {
    outDir: 'dist',
  }
});