import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/timeline-horizontal",
  plugins: [react()],
  server: {
    open: true,
  }
})
