import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  base: './',
  server: {
    port: 3000,
  },
  esbuild: {
    legalComments: 'none',
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          vueVendor: ['vue', 'vue-router'],
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
} satisfies UserConfig);
