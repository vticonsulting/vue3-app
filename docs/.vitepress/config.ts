import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

import {
  contributing,
  font,
  github,
  instagram,
  ogImage,
  ogUrl,
  releases,
  twitter,
  vitestDescription,
  vitestName,
} from './meta'

import { teamMembers } from './contributors'

export default defineConfig({
  title: 'Exemplar Documentation',
  description: 'Documentation.',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${vitestName} contributors` }],
    ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { property: 'og:title', content: vitestName }],
    ['meta', { property: 'og:description', content: vitestDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: vitestName }],
    ['meta', { name: 'twitter:description', content: vitestDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: false,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    nav: [
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
      // },
      {
        text: 'Dev Notes',
        link: 'http://localhost:3000/',
      },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
          {
            text: 'Contributing ',
            link: contributing,
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collapsible: true,
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'CSS', link: '/guide/css' },
          ],
        },
      ],
    },
    editLink: {
      repo: 'vticonsulting/vue3-app',
      branch: 'main',
      dir: 'docs',
      text: 'Suggest changes to this page',
    },
    // localeLinks: {
    //   text: 'English',
    //   items: [
    //     {
    //       text: '简体中文',
    //       link: 'https://cn.vitest.dev',
    //     },
    //   ],
    // },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'instagram', link: instagram },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT Anthony Fu, Matías Capeletto and Vitest contributors',
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },
    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg',
    },
  },
})
