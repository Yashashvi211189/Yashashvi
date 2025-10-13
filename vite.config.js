import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(), 
    tailwindcss(),
    // Enable gzip compression for production builds
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  base: command === 'build' ? '/star-wars-portfolio/' : '/',
  build: {
    // Enable compression and chunking
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion']
        }
      }
    },
    // Enable gzip compression
    cssCodeSplit: true,
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Optimize for better caching
  server: {
    hmr: {
      overlay: false
    }
  }
}))
