import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    minify: false,
    sourcemap: false,
    target: 'es2020',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true
      }
    }
  },
  esbuild: {
    target: 'es2020',
    tsconfigRaw: {
      compilerOptions: {
        target: 'es2020'
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'global': 'globalThis',
  }
});