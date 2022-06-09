import type { ApiDefaultRoute, IEditable } from '.'

export interface IEditForm {
  InitializeForm(model: IEditable): void
  editMode: boolean
  editRoute: ApiDefaultRoute
  isInsert: boolean
  // ShowEditForm(id: number, callback: any): void
  validationPassed: boolean
}
