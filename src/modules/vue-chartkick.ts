import VueChartkick from 'vue-chartkick'

import type { UserModule } from '@/types'

VueChartkick.options = {
  colors: ['#314B6F', '#ee7d1e'],
}
VueChartkick.configure({ language: 'en', mapsApiKey: 'AIzaSyBvOoQe7xFg-XaWj9w_l7ODbMqb4BK0B9E' })

export const install: UserModule = ({ app }) => {
  app.use(VueChartkick)
}
