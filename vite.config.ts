import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import VueTypeImports from 'vite-plugin-vue-type-imports';

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VueTypeImports(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },

  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
});
