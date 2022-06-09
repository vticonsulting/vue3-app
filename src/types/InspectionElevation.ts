export interface InspectionElevation {
  // Keys
  Id: number
  PropertyInspectionFormId: number

  // DateTime
  CreatedOn: string
  LastModifiedOn: string

  AllPhotosFront: boolean
  DeckPainted: boolean
  DeckStained: boolean
  DownSpoutsPainted: boolean
  FencePainted: boolean
  FenceStained: boolean
  HandrailPainted: boolean
  HandrailStained: boolean
  WindowWrapPainted: boolean

  // Double
  DeckSf: number
  DownSpoutsEastLf: number
  DownSpoutsNorthLf: number
  DownSpoutsSouthLf: number
  DownSpoutsWestLf: number
  FenceHeightLf: number
  FenceSf: number
  GarageSf: number
  HandrailLf: number
  SidingEastQty: number
  SidingNorthQty: number
  SidingSouthQty: number
  SidingWestQty: number
  WindowLargeSf: number
  WindowMediumSf: number
  WindowOtherSf: number
  WindowScreenLargeSf: number
  WindowScreenMediumSf: number
  WindowScreenSmallSf: number
  WindowScreenXlargeSf: number
  WindowSmallSf: number
  WindowWrapLf: number
  WindowXlargeSf: number
  // PropertyInspectionForm PropertyInspectionForm { get; set; }

  // short
  DownSpoutsSize: number
  DownSpoutsSizeOther: number
  FasciaSize: number
  FasciaSizeOther: number
  RefrigerationCoilUnits: number

  AwningDamaged: string
  AwningMaterial: string
  AwningMaterialOther: string
  DeckDamaged: string
  DeckMaterial: string
  DownSpoutsDamaged: string
  DownSpoutsDamageDescription: string
  DownSpoutsEastDamaged: string
  DownSpoutsMaterial: string
  DownSpoutsMaterialOther: string
  DownSpoutsNorthDamaged: string
  DownSpoutsSouthDamaged: string
  DownSpoutsWestDamaged: string
  FasciaDamaged: string
  FasciaMaterial: string
  FasciaMaterialOther: string
  FenceDamaged: string
  FenceDescription: string
  FenceMaterial: string
  FenceMaterialOther: string
  GarageDamaged: string
  GarageDescription: string
  HandrailDamaged: string
  HandrailMaterial: string
  LandscapeDamaged: string
  NeighborhoodDamaged: string
  PatioFurnitureDamaged: string
  RefrigerationCoilsDamaged: string
  SidingDamage: string
  SidingMaterial: string
  SidingMaterialOther: string
  SidingNotes: string
  WindowOtherDescription: string
  WindowScreenDamaged: string
  WindowsDamaged: string
  WindowWrapDamaged: string
  WindowWrapMaterial: string
  WindowWrapMaterialOther: string
}
