// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/website-template/', // Update base URL to match homepage URL
  plugins: [react()],
});
