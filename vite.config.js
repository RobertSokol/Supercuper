import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          const sourceName = assetInfo.names?.[0] || assetInfo.name || '';
          return sourceName.endsWith('.css') ? 'assets/app.css' : 'assets/[name][extname]';
        },
      },
    },
  },
});
