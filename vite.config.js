import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const sourceName = assetInfo.names?.[0] || assetInfo.name || '';
          return sourceName.endsWith('.css') ? 'assets/app-[hash].css' : 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
