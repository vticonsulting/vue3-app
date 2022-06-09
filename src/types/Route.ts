import type { ProjectInspectionDetails } from '.'

export class Route {
  public Id = 0
  public FieldTechId = 0
  public FieldTechName = ''
  public Miles = 0
  public IsException = false
  public ProjectInspectionDetails: ProjectInspectionDetails[] = []
}
