import { ApiDefaultRoute } from '@ExemplarRoutes/ApiDefaultRoute'

export class ServiceManagerRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ServiceManagers/')
  }

  ReturnListOfRegions(serviceManagerId: number): string {
    return `${this.uri}/${serviceManagerId}?CollectionType=1`
  }
}
