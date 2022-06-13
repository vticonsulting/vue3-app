import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

const app = createApp(App)

// setup up pages with layouts
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
app.use(router)

Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.({ app, router, routes }))

app.mount('#app')
