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
  base: command === 'build' ? '/Yashashvi/' : '/',
  build: {
    // Enhanced performance optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunks
          vendor: ['react', 'react-dom'],
          // 3D rendering chunks
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Animation chunks
          motion: ['framer-motion'],
          // Lazy loaded sections
          sections: ['./src/sections/About.jsx', './src/sections/Experience.jsx', './src/sections/Work.jsx', './src/sections/Contact.jsx']
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace('.jsx', '') : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        }
      }
    },
    // Performance settings
    cssCodeSplit: true,
    sourcemap: false,
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096
  },
  // Optimize for better caching
  server: {
    hmr: {
      overlay: false
    }
  }
}))
