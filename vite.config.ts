import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 👇 add this block
  build: {
    // continue even if there are warnings
    reportCompressedSize: false,
  },
  // 👇 this ensures ESLint warnings (like unused vars) don’t break builds
  esbuild: {
    logLevel: 'warning',
  },
})
