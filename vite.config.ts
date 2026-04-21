import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Dr.M.Venkat_Ratnam/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
