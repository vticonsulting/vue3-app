import { ApiDefaultRoute } from '.'

export class ServiceRegionRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ServiceRegions/')
  }

  GetAll(serviceRegionId = '', showInactive = false, mappingType = 0): string {
    return `${this.uri}?serviceRegionIds=${serviceRegionId}&showInactive=${showInactive}&mappingType=${mappingType}`
  }
}
