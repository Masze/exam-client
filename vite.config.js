import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js',
    '@components': path.resolve(__dirname, './src/components'),
    '@api': path.resolve(__dirname, './src/api'),
  },

})
