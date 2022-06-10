import { plugin as VueTippy } from 'vue-tippy'
import type { UserModule } from '@/types'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

export const install: UserModule = ({ app }) => {
  app.use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
      defaultProps: {
        placement: 'auto-end',
        allowHTML: true,
      }, // => Global default options * see all props
    },
  )
}
