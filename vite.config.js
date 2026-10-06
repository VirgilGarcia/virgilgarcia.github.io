import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // `npm run deploy` publie ce dossier sur la branche gh-pages
    outDir: 'build',
    // évite le mélange avec public/assets
    assetsDir: 'static',
  },
});
