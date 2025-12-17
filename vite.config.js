import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Additional SCSS options can be added here
        // For example, to import variables globally:
        // additionalData: `@import "./src/styles/_variables.scss";`
      }
    }
  }
})
