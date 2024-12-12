import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio", /* When deploying a Vite React app to GitHub Pages, absolute paths break because GitHub Pages hosts your app under a subdirectory (e.g., https://raazdura.github.io/portfolio/) rather than the root domain. */
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "https://0.0.0.0:3000",
  },
})
