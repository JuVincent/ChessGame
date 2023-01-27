import path from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },
})
