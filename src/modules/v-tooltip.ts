import VTooltipPlugin from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(VTooltipPlugin)
}
