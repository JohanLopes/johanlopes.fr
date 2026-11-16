import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// Variables et mixins disponibles dans tous les fichiers SCSS et blocs <style>
const scssPrelude = `
  @import 'bootstrap/scss/functions';
  @import '@/assets/scss/_variables.scss';
  @import '@/assets/scss/_mixins.scss';
  @import 'bootstrap/scss/variables';
  @import 'bootstrap/scss/variables-dark';
  @import 'bootstrap/scss/maps';
  @import 'bootstrap/scss/mixins';
  @import 'bootstrap/scss/utilities';
`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), ViteYaml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import'],
        additionalData: scssPrelude,
      },
    },
  },
})
