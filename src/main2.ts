import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defaultConfig, plugin } from '@formkit/vue'

import App from './App2.vue'
import router from './router'
import './assets/main.css'
import { worker } from './mocks'

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
})

const app = createApp(App)

app.use(plugin, defaultConfig)
app.use(createPinia())
app.use(router)

app.mount('#app')
