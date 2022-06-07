// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import { defaultConfig, plugin } from '@formkit/vue'

// import App from './App.vue'
// import router from './router'
// import './assets/main.css'
// import { worker } from './mocks'

// // Start a mock API server to handle auth requests
// worker.start({
//   onUnhandledRequest: 'bypass',
// })

// const app = createApp(App)

// app.use(plugin, defaultConfig)
// app.use(createPinia())
// app.use(router)

// app.mount('#app')

import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'uno.css'

import App from './App.vue'
import { worker } from './mocks'

import generatedRoutes from '~pages'

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
})

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
