import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), 
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    include: ['./tests/**/*.test.{js,ts,jsx,tsx}'],
    coverage: {
      include: ['./app/**/*.{js,jsx,ts,tsx}'],
      provider: 'v8',
    },
  },
})
