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
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn'], // Remove specific console methods
        passes: 2 // Multiple optimization passes
      },
      mangle: {
        safari10: true // Better Safari support
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunks - smaller
          vendor: ['react', 'react-dom'],
          // 3D rendering chunks - separate for lazy loading
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Animation chunks - separate
          motion: ['framer-motion'],
          // Each section as separate chunk for better loading
          about: ['./src/sections/About.jsx'],
          resume: ['./src/sections/Resume.jsx'],
          experience: ['./src/sections/Experience.jsx'],
          work: ['./src/sections/Work.jsx'],
          contact: ['./src/sections/Contact.jsx']
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
    // Optimize chunk sizes for mobile
    chunkSizeWarningLimit: 800,
    // Inline smaller assets
    assetsInlineLimit: 2048, // Reduced for faster parsing
    // Target modern browsers for smaller bundles
    target: ['es2020', 'chrome80', 'firefox78', 'safari14']
  },
  // Optimize for better caching
  server: {
    hmr: {
      overlay: false
    }
  }
}))
