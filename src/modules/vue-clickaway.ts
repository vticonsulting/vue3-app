import VueClickAway from 'vue3-click-away'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(VueClickAway) // Makes 'v-click-away' directive usable in every component
}
