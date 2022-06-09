import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}

library.add(fas)
library.add(fab)
library.add(far)
library.add(fal)
library.add(fad)

dom.watch()
