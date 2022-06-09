import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import './assets/main.css'
import 'animate.css'
import 'prismjs'
import 'prismjs/themes/prism.css'

import App from './App.vue'

import { worker } from './mocks'

import generatedRoutes from '~pages'
// import store from '@/store'

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
    // ctx.app.use(store)

    // if (import.meta.env.SSR)
    //   ctx.initialState.store = store.state
    // else
    //   store.replaceState(ctx.initialState.store)

    // ctx.router.beforeEach((to, from, next) => {
    //   // perform the (user-implemented) store action to fill the store's state
    //   if (!store.getters.ready)
    //     store.dispatch('initialize')

    //   next()
    // })

    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
