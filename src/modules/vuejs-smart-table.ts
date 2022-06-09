import SmartTable from 'vuejs-smart-table'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(SmartTable, {
    sortIconPosition: 'after',
    sortHeaderClass: 'flex items-center w-full',
    hideSortIcons: false,
  })
}
