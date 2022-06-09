export interface IDeleteService<T> {
  route: string
  prompt: string
  title: string
  model: any
  successCallback(): void
  successMessage: string
  errorCallback(): void
  init(model: T, successCallback: void, errorCallback: void | null, ExemplarApiUrl: string): void
}
