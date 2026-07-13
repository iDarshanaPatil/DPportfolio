import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-base-transform',
      transformIndexHtml(html) {
        return html.replaceAll('content="/profile.jpg"', `content="${basePath}profile.jpg"`)
      },
    },
  ],
  base: basePath,
})
