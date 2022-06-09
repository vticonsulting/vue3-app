export interface InspectionInterior {
  Id: number
  PropertyInspectionFormId: number

  // Boolean
  HasCovid: boolean

  // DateTime
  CreatedOn: Date
  LastModifiedOn: Date

  // Double
  AdditionalFiveSf: number
  AdditionalFourSf: number
  AdditionalOneSf: number
  AdditionalThreeSf: number
  AdditionalTwoSf: number
  AtticSf: number
  BasementSf: number
  BathroomThreeSf: number
  BathroomTwoSf: number
  BedroomFourClosetSf: number
  BedroomFourSf: number
  BedroomThreeClosetSf: number
  BedroomThreeSf: number
  BedroomTwoClosetSf: number
  BedroomTwoSf: number
  BreakfastAreaSf: number
  CrawlSpaceSf: number
  DiningRoomSf: number
  FamilyRoomSf: number
  FoyerSf: number
  GameRoomSf: number
  HallClosetSf: number
  HallSf: number
  KitchenSf: number
  LivingRoomSf: number
  MasterBathroomSf: number
  MasterBedroomSf: number
  MasterClosetSf: number
  OfficeSf: number
  PantrySf: number
  UtilitySf: number

  //
  AdditionalFiveArea: string
  AdditionalFiveDamaged: string
  AdditionalFiveDescription: string
  AdditionalFourArea: string
  AdditionalFourDamaged: string
  AdditionalFourDescription: string
  AdditionalOneArea: string
  AdditionalOneDamaged: string
  AdditionalOneDescription: string
  AdditionalThreeArea: string
  AdditionalThreeDamaged: string
  AdditionalThreeDescription: string
  AdditionalTwoArea: string
  AdditionalTwoDamaged: string
  AdditionalTwoDescription: string
  AtticDamaged: string
  AtticDescription: string
  BasementDamaged: string
  BasementDescription: string
  BathroomThreeDamaged: string
  BathroomThreeDescription: string
  BathroomTwoDamaged: string
  BathroomTwoDescription: string
  BedroomFourClosetDamaged: string
  BedroomFourClosetDescription: string
  BedroomFourDamaged: string
  BedroomFourDescription: string
  BedroomThreeClosetDamaged: string
  BedroomThreeClosetDescription: string
  BedroomThreeDamaged: string
  BedroomThreeDescription: string
  BedroomTwoClosetDamaged: string
  BedroomTwoClosetDescription: string
  BedroomTwoDamaged: string
  BedroomTwoDescription: string
  BreakfastAreaDamaged: string
  BreakfastAreaDescription: string
  ContentsDamaged: string
  ContentsDescription: string
  CrawlSpaceDamaged: string
  CrawlSpaceDescription: string
  DiningRoomDamaged: string
  DiningRoomDescription: string
  FamilyRoomDamaged: string
  FamilyRoomDescription: string
  FoyerDamaged: string
  FoyerDescription: string
  GameRoomDamaged: string
  GameRoomDescription: string
  HallClosetDamaged: string
  HallClosetDescription: string
  HallDamaged: string
  HallDescription: string
  KitchenDamaged: string
  KitchenDescription: string
  LivingRoomDamaged: string
  LivingRoomDescription: string
  MasterBathroomDamaged: string
  MasterBathroomDescription: string
  MasterBedroomDamaged: string
  MasterBedroomDescription: string
  MasterClosetDamaged: string
  MasterClosetDescription: string
  OfficeDamaged: string
  OfficeDescription: string
  PantryDamaged: string
  PantryDescription: string
  UtilityDamaged: string
  UtilityDescription: string
}
