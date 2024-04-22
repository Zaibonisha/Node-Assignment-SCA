import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'public',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public', 'output.html'), // Absolute path to output.html
      },
    },
  },
});
