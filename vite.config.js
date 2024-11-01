import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three/examples/jsm': 'three/examples/jsm',
    },
  },
  optimizeDeps: {
    include: ['three'],
    exclude: ['three/webgpu'], // Exclude webgpu if not needed
  },
})

