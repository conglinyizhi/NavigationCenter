import { defineConfig, ProvidePlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import bootstrap from 'bootstrap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  new ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
  })]
})
