import VuePlyr from 'vue-plyr'
import type { UserModule } from '@/types'
import 'vue-plyr/dist/vue-plyr.css'

export const install: UserModule = ({ app }) => {
  app.use(VuePlyr, {
    plyr: {},
  })
}
