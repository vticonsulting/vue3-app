/// <reference types="vitest" />
import { URL, fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Inspect from 'vite-plugin-inspect'
// import optimizationPersist from 'vite-plugin-optimize-persist'
// import pkgConfig from 'vite-plugin-package-config'
import RemoteAssets from 'vite-plugin-remote-assets'
// import viteCompression from 'vite-plugin-compression'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx#readme
    VueJsx(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/hannoeru/vite-plugin-pages#readme
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-md#readme
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vue 3 App',
        short_name: 'VueApp',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/unplugin-auto-import#readme
    AutoImport({
      // imports: ['vitest'],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
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

    // https://github.com/antfu/unplugin-vue-components#readme
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver({
          prefix: 'i',
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons#readme
    Icons({
      // compiler: null, // 'vue2', 'vue3', 'jsx'
      compiler: 'vue3',
      scale: 1.2, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
      jsx: 'react', // 'react' or 'preact'
      autoInstall: true, // experimental
    }),

    // https://github.com/antfu/vite-plugin-remote-assets#readme
    RemoteAssets(),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),

    // pkgConfig(),

    // optimizationPersist(),

    // https://github.com/vbenjs/vite-plugin-compression#readme
    // viteCompression(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },

  // // Configure Vitest (https://vitest.dev/config)
  // test: {
  //   globals: true,
  //   // environment: "happy-dom",
  //   environment: 'jsdom',
  //   setupFiles: ['test/setup.ts'],
  // },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },

  // // https://vitejs.dev/config/#server-options
  // server: {
  //   port: 8080,
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.victortolbert.com',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  //   fs: {
  //     strict: false,
  //   },
  // },
})
