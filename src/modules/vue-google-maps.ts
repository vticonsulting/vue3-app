import VueGoogleMaps from '@fawmi/vue-google-maps'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBvOoQe7xFg-XaWj9w_l7ODbMqb4BK0B9E',
    },
  })
}
