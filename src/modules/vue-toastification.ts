import Toast from 'vue-toastification'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(Toast, {
    hideProgressBar: true,
    closeButton: false,
    showCloseButtonOnHover: true,
    icon: false,
  })
}
