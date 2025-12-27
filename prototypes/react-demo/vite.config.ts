import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@framework': path.resolve(__dirname, '../../tech-stacks/react')
    }
  }
})
