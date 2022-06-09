<template>
  <div v-if="ready">
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label="Elevation Photos:"
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationNorth, `Elevation ${north}`)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationSouth, `Elevation ${south}`)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationEast, `Elevation ${east}`)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationWest, `Elevation ${west}`)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    />

    <boolean-camera-wrapper-component
      id="AllPhotosFront"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FrontRisk)"
      :validate="validate"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FrontRisk)"
      :current-value="model.AllPhotosFront"
      :choices="['Yes', 'No']"
      label="Front Risk Photo Taken?"
      @onChanged="model.AllPhotosFront = $event"
    />

    <checkbox-camera-wrapper-component
      id="LandscapeDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LandscapeDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LandscapeDamaged)"
      :validate="validate"
      :current-value="model.LandscapeDamaged"
      :choices="masterYesNoNa"
      label="Landscape Damage?"
      @onChanged="model.LandscapeDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      id="PatioFurniture"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PatioFurnitureDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PatioFurnitureDamaged)"
      :validate="validate"
      :current-value="model.PatioFurnitureDamaged"
      :choices="masterYesNoNa"
      label="Patio Furniture Damage?"
      @onChanged="model.PatioFurnitureDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      id="RefrigerationCoilsDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RefrigerationCoilsDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RefrigerationCoilsDamaged)"
      :validate="validate"
      :current-value="model.RefrigerationCoilsDamaged"
      :choices="masterYesNoNa"
      label="Refrigeration Coil Damage?"
      @onChanged="model.RefrigerationCoilsDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.RefrigerationCoilsDamaged == 'Yes'"
      label="Coils Damaged (Units):"
      :validate="model.RefrigerationCoilsDamaged == 'Yes'"
      hide-margin
      :current-value="model.RefrigerationCoilUnits"
      @onChanged="model.RefrigerationCoilUnits = $event"
    />

    <checkbox-camera-wrapper-component
      id="DeckDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckDamaged)"
      :validate="validate"
      :current-value="model.DeckDamaged"
      :choices="masterYesNoNa"
      label="Deck Damage?"
      @onChanged="model.DeckDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.DeckDamaged == 'Yes'"
      label="Deck Damage (SQFT):"
      decimal
      :validate="model.DeckDamaged == 'Yes'"
      hide-margin
      :current-value="model.DeckSf"
      @onChanged="model.DeckSf = $event"
    />

    <boolean-wrapper-component
      v-show="model.DeckDamaged == 'Yes'"
      id="DeckPainted"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckPainted"
      :choices="['Yes', 'No']"
      label="Deck Painted?"
      @onChanged="model.DeckPainted = $event"
    />

    <boolean-wrapper-component
      v-show="model.DeckDamaged == 'Yes'"
      id="DeckStained"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckStained"
      :choices="['Yes', 'No']"
      label="Deck Stained?"
      @onChanged="model.DeckStained = $event"
    />

    <checkbox-wrapper-component
      v-show="model.DeckDamaged == 'Yes'"
      id="DeckMaterial"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckMaterial"
      :choices="masterDeckMaterial"
      label="Deck Material:"
      @onChanged="model.DeckMaterial = $event"
    />

    <checkbox-camera-wrapper-component
      id="HandrailDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HandrailDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HandrailDamaged)"
      :validate="validate"
      :current-value="model.HandrailDamaged"
      :choices="masterYesNoNa"
      label="Deck Handrail Damage?"
      @onChanged="model.HandrailDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.HandrailDamaged == 'Yes'"
      label="Handrail Damaged (LF):"
      decimal
      :validate="model.HandrailDamaged == 'Yes'"
      hide-margin
      :current-value="model.HandrailLf"
      @onChanged="model.HandrailLf = $event"
    />

    <boolean-wrapper-component
      v-show="model.HandrailDamaged == 'Yes'"
      id="HandrailPainted"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailPainted"
      :choices="['Yes', 'No']"
      label="Handrail Painted?"
      @onChanged="model.HandrailPainted = $event"
    />

    <boolean-wrapper-component
      v-show="model.HandrailDamaged == 'Yes'"
      id="HandrailStained"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailStained"
      :choices="['Yes', 'No']"
      label="Handrail Stained?"
      @onChanged="model.HandrailStained = $event"
    />

    <checkbox-wrapper-component
      v-show="model.HandrailDamaged == 'Yes'"
      id="HandrailMaterial"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailMaterial"
      :choices="masterHandRailMaterial"
      label="Handrail Material:"
      @onChanged="model.HandrailMaterial = $event"
    />

    <checkbox-camera-wrapper-component
      id="FenceDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FenceDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FenceDamaged)"
      :validate="validate"
      :current-value="model.FenceDamaged"
      :choices="masterYesNoNa"
      label="Fences Damage?"
      @onChanged="model.FenceDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.FenceDamaged == 'Yes'"
      label="Fence Damage (LF):"
      decimal
      :validate="model.FenceDamaged == 'Yes'"
      hide-margin
      :current-value="model.FenceSf"
      @onChanged="model.FenceSf = $event"
    />

    <numeric-wrapper-component
      v-show="model.FenceDamaged == 'Yes'"
      label="Fence Height (LF):"
      decimal
      :validate="model.FenceDamaged == 'Yes'"
      hide-margin
      :current-value="model.FenceHeightLf"
      @onChanged="model.FenceHeightLf = $event"
    />

    <boolean-wrapper-component
      v-show="model.FenceDamaged == 'Yes'"
      id="FencePainted"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      :current-value="model.FencePainted"
      :choices="['Yes', 'No']"
      label="Fences Painted?"
      @onChanged="model.FencePainted = $event"
    />

    <boolean-wrapper-component
      v-show="model.FenceDamaged == 'Yes'"
      id="FenceStained"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      :current-value="model.FenceStained"
      :choices="['Yes', 'No']"
      label="Fences Stained?"
      @onChanged="model.FenceStained = $event"
    />

    <checkbox-wrapper-component
      v-show="model.FenceDamaged == 'Yes'"
      id="FenceMaterial"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      :current-value="model.FenceMaterial"
      :choices="masterFenceMaterial"
      label="Fence Material:"
      @onChanged="model.FenceMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.FenceMaterial == 'Other' && model.FenceDamaged == 'Yes'"
      id="FenceMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.FenceMaterial == 'Other'"
      :current-value="model.FenceMaterialOther"
      label="Fence Material:"
      @onChanged="model.FenceMaterialOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="GarageDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="validate"
      :current-value="model.GarageDamaged"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GarageDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GarageDamaged)"
      :choices="masterYesNoNa"
      label="Garage Damaged:"
      @onChanged="model.GarageDamaged = $event"
    />

    <textbox-wrapper-component
      v-show="model.GarageDamaged == 'Yes'"
      id="GarageDescription"
      text-area
      :max-characters="1500"
      hide-margin
      :validate="model.GarageDamaged == 'Yes'"
      :current-value="model.GarageDescription"
      label="Damage Description:"
      @onChanged="model.GarageDescription = $event"
    />

    <numeric-wrapper-component
      v-show="model.GarageDamaged == 'Yes'"
      label="Damage (SQFT):"
      decimal
      hide-margin
      :validate="model.GarageDamaged == 'Yes'"
      :current-value="model.GarageSf"
      @onChanged="model.GarageSf = $event"
    />

    <checkbox-camera-wrapper-component
      id="WindowsDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowsDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowsDamaged)"
      :validate="validate"
      :current-value="model.WindowsDamaged"
      :choices="masterYesNoNa"
      label="Window Damage?"
      @onChanged="model.WindowsDamaged = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.WindowsDamaged == 'Yes'"
      label="Window Damage (Qty):"
      :validate="model.WindowsDamaged == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.WindowSmallSf"
      :slot-b-value="model.WindowMediumSf"
      :slot-c-value="model.WindowLargeSf"
      :slot-d-value="model.WindowXlargeSf"
      slot-a-label="Small (4-8 SF) Window Damage: "
      slot-b-label="Medium (9-12 SF) Window Damage: "
      slot-c-label="Large (13-19 SF) Window Damage: "
      slot-d-label="X-Large (20-28 SF) Window Damage: "
      @onslotachanged="model.WindowSmallSf = $event"
      @onSlotBChanged="model.WindowMediumSf = $event"
      @onSlotCChanged="model.WindowLargeSf = $event"
      @onSlotDChanged="model.WindowXlargeSf = $event"
    />

    <numeric-wrapper-component
      v-show="model.WindowsDamaged == 'Yes'"
      label="Other Window Damage (Qty):"
      decimal
      :validate="model.WindowsDamaged == 'Yes'"
      large-label
      hide-margin
      :current-value="model.WindowOtherSf"
      @onChanged="model.WindowOtherSf = $event"
    />

    <textbox-wrapper-component
      v-show="model.WindowOtherSf > 0"
      id="WindowOtherDescription"
      text-area
      :max-characters="1500"
      hide-margin
      :validate="model.WindowOtherSf > 0"
      :current-value="model.WindowOtherDescription"
      label="Other Window Damage Description:"
      @onChanged="model.WindowOtherDescription = $event"
    />

    <checkbox-camera-wrapper-component
      id="ScreenDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowScreenDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowScreenDamaged)"
      :validate="validate"
      :current-value="model.WindowScreenDamaged"
      :choices="masterYesNoNa"
      label="Window Screen Damage?"
      @onChanged="model.WindowScreenDamaged = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.WindowScreenDamaged == 'Yes'"
      label="Window Screen Damage (Qty):"
      :validate="model.WindowScreenDamaged == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.WindowScreenSmallSf"
      :slot-b-value="model.WindowScreenMediumSf"
      :slot-c-value="model.WindowScreenLargeSf"
      :slot-d-value="model.WindowScreenXlargeSf"
      slot-a-label="Small (1-9 SF)  Screen Damage: "
      slot-b-label="Medium (10-16 SF)  Screen Damage: "
      slot-c-label="Large (17-25 SF)  Screen Damage: "
      slot-d-label="X-Large (26-32 SF)  Screen Damage: "
      @onslotachanged="model.WindowScreenSmallSf = $event"
      @onSlotBChanged="model.WindowScreenMediumSf = $event"
      @onSlotCChanged="model.WindowScreenLargeSf = $event"
      @onSlotDChanged="model.WindowScreenXlargeSf = $event"
    />

    <checkbox-camera-wrapper-component
      id="WindowWrapDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowWrapDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowWrapDamaged)"
      :validate="validate"
      :current-value="model.WindowWrapDamaged"
      :choices="masterYesNoNa"
      label="Window Wrap Damage?"
      @onChanged="model.WindowWrapDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.WindowWrapDamaged == 'Yes'"
      decimal
      :validate="model.WindowWrapDamaged == 'Yes'"
      hide-margin
      :current-value="model.WindowWrapLf"
      label="Window Wrap Damage (LF):"
      @onChanged="model.WindowWrapLf = $event"
    />

    <boolean-wrapper-component
      v-show="model.WindowWrapDamaged == 'Yes'"
      id="WindowWrapPainted"
      hide-margin
      :validate="model.WindowWrapDamaged == 'Yes'"
      :current-value="model.WindowWrapPainted"
      :choices="['Yes', 'No']"
      label="Window Wrap Painted?"
      @onChanged="model.WindowWrapPainted = $event"
    />

    <checkbox-wrapper-component
      v-show="model.WindowWrapDamaged == 'Yes'"
      id="WindowWrapMaterial"
      hide-margin
      :validate="model.WindowWrapDamaged == 'Yes'"
      :current-value="model.WindowWrapMaterial"
      :choices="masterWindowWrapMaterial"
      label="Window Wrap Material:"
      @onChanged="model.WindowWrapMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.WindowWrapMaterial == 'Other' && model.WindowWrapDamaged == 'Yes'"
      id="FenceMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.WindowWrapMaterial == 'Other'"
      :current-value="model.WindowWrapMaterialOther"
      label="Window Wrap Material:"
      @onChanged="model.WindowWrapMaterialOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="AwningDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.AwningDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.AwningDamaged)"
      :validate="validate"
      :current-value="model.AwningDamaged"
      :choices="masterYesNoNa"
      label="Awnings/Patio Cover Damage?"
      @onChanged="model.AwningDamaged = $event"
    />

    <checkbox-wrapper-component
      v-show="model.AwningDamaged == 'Yes'"
      id="AwningMaterial"
      :validate="model.AwningDamaged == 'Yes'"
      hide-margin
      :current-value="model.AwningMaterial"
      :choices="masterAwningMaterial"
      label="Awning/Patio Material:"
      @onChanged="model.AwningMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.AwningDamaged == 'Yes' && model.AwningMaterial == 'Other'"
      id="AwningMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.AwningDamaged == 'Yes' && model.AwningMaterial == 'Other'"
      :current-value="model.AwningMaterialOther"
      label="Awning/Patio Material:"
      @onChanged="model.AwningMaterialOther = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="isAllState"
      id="NeighborhoodDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="isAllState"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NeighborhoodDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NeighborhoodDamaged)"
      :current-value="model.NeighborhoodDamaged"
      :choices="masterYesNoNa"
      label="Neighborhood Damage?"
      @onChanged="model.NeighborhoodDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      id="SidingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SidingDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SidingDamage)"
      :validate="validate"
      :current-value="model.SidingDamage"
      :choices="masterYesNoNa"
      label="Siding  Damage?"
      @onChanged="model.SidingDamage = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.SidingDamage == 'Yes'"
      label="Siding Damage (SF):"
      :validate="model.SidingDamage == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.SidingNorthQty"
      :slot-b-value="model.SidingEastQty"
      :slot-c-value="model.SidingSouthQty"
      :slot-d-value="model.SidingWestQty"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onSlotAChanged="model.SidingNorthQty = $event"
      @onSlotBChanged="model.SidingEastQty = $event"
      @onSlotCChanged="model.SidingSouthQty = $event"
      @onSlotDChanged="model.SidingWestQty = $event"
    />

    <checkbox-wrapper-component
      v-show="model.SidingDamage == 'Yes'"
      id="SidingMaterial"
      hide-margin
      :validate="model.SidingDamage == 'Yes'"
      :current-value="model.SidingMaterial"
      :choices="masterSidingMaterial"
      label="Siding Material:"
      @onChanged="model.SidingMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.SidingDamage == 'Yes' && model.SidingMaterial == 'Other'"
      id="SidingMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.SidingDamage == 'Yes' && model.SidingMaterial == 'Other'"
      :current-value="model.SidingMaterialOther"
      label="Siding Material Other:"
      @onChanged="model.SidingMaterialOther = $event"
    />

    <textbox-wrapper-component
      v-show="model.SidingDamage == 'Yes'"
      id="SidingNotes"
      :max-characters="8000"
      :validate="model.SidingDamage == 'Yes'"
      hide-margin
      text-area
      :current-value="model.SidingNotes"
      label="Siding Notes:"
      @onChanged="model.SidingNotes = $event"
    />

    <boolean-wrapper-component
      id="DownSpoutsPainted"
      :validate="validate"
      :current-value="model.DownSpoutsPainted"
      :choices="['Yes', 'No']"
      label="Downspout Painted?"
      @onChanged="model.DownSpoutsPainted = $event"
    />

    <checkbox-wrapper-component
      id="DownSpoutsMaterial"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsMaterial"
      :choices="masterDownspoutMaterial"
      label="Downspout Material:"
      @onChanged="model.DownSpoutsMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.DownSpoutsMaterial == 'Other'"
      id="DownSpoutsMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.DownSpoutsMaterial == 'Other'"
      :current-value="model.DownSpoutsMaterialOther"
      label="Downspout Material:"
      @onChanged="model.DownSpoutsMaterialOther = $event"
    />

    <checkbox-wrapper-component
      id="DownSpoutsSize"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsSize == '0' ? 'Other' : String(model.DownSpoutsSize)"
      :choices="masterDownspoutSize"
      label="Downspout Size (inches):"
      @onChanged="model.DownSpoutsSize = $event === 'Other' ? 0 : $event"
    />

    <numeric-wrapper-component
      v-show="model.DownSpoutsSize == 0"
      id="DownSpoutsSizeOther"
      decimal
      hide-margin
      label="Downspout Size (inches):"
      :validate="model.DownSpoutsSize == 0"
      :current-value="model.DownSpoutsSizeOther"
      @onChanged="model.DownSpoutsSizeOther = $event"
    />

    <checkbox-wrapper-component
      id="DownSpoutsDamaged"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsDamaged"
      :choices="masterYesNoNa"
      label="Downspout Damaged?"
      @onChanged="model.DownSpoutsDamaged = $event"
    />

    <textbox-wrapper-component
      v-show="model.DownSpoutsDamaged == 'Yes'"
      id="DownSpoutsDamageDescription"
      text-area
      :max-characters="8000"
      hide-margin
      is-text-area
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :current-value="model.DownSpoutsDamageDescription"
      label="Damage Description:"
      @onChanged="model.DownSpoutsDamageDescription = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.DownSpoutsDamaged == 'Yes'"
      id="DownSpoutsNorthDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsNorthDamaged, `DownSpouts Damaged ${north}`)"
      hide-margin
      :current-value="model.DownSpoutsNorthDamaged"
      :choices="masterYesNo"
      :label="`Downspouts Damaged (${north}):`"
      @onChanged="model.DownSpoutsNorthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.DownSpoutsNorthDamaged == 'Yes'"
      :label="`Downspouts Damaged (${north}) (LF):`"
      decimal
      :validate="model.DownSpoutsNorthDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsNorthLf"
      @onChanged="model.DownSpoutsNorthLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.DownSpoutsDamaged == 'Yes'"
      id="DownSpoutsEastDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsEastDamaged, `DownSpouts Damaged ${east}`)"
      hide-margin
      :current-value="model.DownSpoutsEastDamaged"
      :choices="masterYesNo"
      :label="`Downspouts Damaged (${east}):`"
      @onChanged="model.DownSpoutsEastDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.DownSpoutsEastDamaged == 'Yes'"
      :label="`Downspouts Damaged (${east}) (LF):`"
      decimal
      :validate="model.DownSpoutsEastDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsEastLf"
      @onChanged="model.DownSpoutsEastLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.DownSpoutsDamaged == 'Yes'"
      id="DownSpoutsSouthDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsSouthDamaged, `DownSpouts Damaged ${south}`)"
      hide-margin
      :current-value="model.DownSpoutsSouthDamaged"
      :choices="masterYesNo"
      :label="`Downspouts Damaged (${south}):`"
      @onChanged="model.DownSpoutsSouthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.DownSpoutsSouthDamaged == 'Yes'"
      :label="`Downspouts Damaged (${south}) (LF):`"
      decimal
      :validate="model.DownSpoutsSouthDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsSouthLf"
      @onChanged="model.DownSpoutsSouthLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.DownSpoutsDamaged == 'Yes'"
      id="DownSpoutsWestDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsWestDamaged, `DownSpouts Damaged ${west}`)"
      hide-margin
      :current-value="model.DownSpoutsWestDamaged"
      :choices="masterYesNo"
      :label="`Downspouts Damaged (${west}):`"
      @onChanged="model.DownSpoutsWestDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.DownSpoutsWestDamaged == 'Yes'"
      :label="`Downspouts Damaged (${west}) (LF):`"
      decimal
      :validate="model.DownSpoutsWestDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsWestLf"
      @onChanged="model.DownSpoutsWestLf = $event"
    />

    <checkbox-wrapper-component
      id="FasciaMaterial"
      :validate="validate"
      :current-value="model.FasciaMaterial"
      :choices="masterFasciaMaterials"
      label="Fascia Material:"
      @onChanged="model.FasciaMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.FasciaMaterial == 'Other'"
      id="FasciaMaterialOther"
      hide-margin
      :max-characters="50"
      :validate="model.FasciaMaterial == 'Other'"
      :current-value="model.FasciaMaterialOther"
      label="Fascia Material Other:"
      @onChanged="model.FasciaMaterialOther = $event"
    />

    <checkbox-wrapper-component
      id="FasciaSize"
      hide-margin
      :validate="validate"
      :current-value="model.FasciaSize == '0' ? 'Other' : String(model.FasciaSize)"
      :choices="masterFasciaSize"
      label="Fascia Size (inches):"
      @onChanged="model.FasciaSize = $event === 'Other' ? 0 : $event"
    />

    <numeric-wrapper-component
      v-show="String(model.FasciaSize).length > 0 && model.FasciaSize == 0"
      label="Fascia Size (inches):"
      hide-margin
      decimal
      :validate="String(model.FasciaSize).length > 0 && model.FasciaSize == 0"
      :current-value="model.FasciaSizeOther"
      @onChanged="model.FasciaSizeOther = $event"
    />

    <checkbox-wrapper-component
      id="FasciaDamaged"
      hide-margin
      :validate="validate"
      :current-value="model.FasciaDamaged"
      :choices="masterYesNoNa"
      label="Fascia Damaged?"
      @onChanged="model.FasciaDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.FasciaDamaged == 'Yes'"
      id="FasciaNorthDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaNorthDamaged, `Fascia Damaged ${north}`)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaNorthDamaged"
      :choices="masterYesNo"
      :label="`Fascia Damaged (${north}):`"
      @onChanged="model.FasciaNorthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.FasciaNorthDamaged == 'Yes'"
      :label="`Fascia Damaged (${north}) (LF):`"
      decimal
      :validate="model.FasciaNorthDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaNorthLf"
      @onChanged="model.FasciaNorthLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.FasciaDamaged == 'Yes'"
      id="FasciaEastDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaEastDamaged, `Fascia Damaged ${east}`)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaEastDamaged"
      :choices="masterYesNo"
      :label="`Fascia Damaged (${east}):`"
      @onChanged="model.FasciaEastDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.FasciaEastDamaged == 'Yes'"
      :label="`Fascia Damaged (${east}) (LF):`"
      decimal
      :validate="model.FasciaEastDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaEastLf"
      @onChanged="model.FasciaEastLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.FasciaDamaged == 'Yes'"
      id="FasciaSouthDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaSouthDamaged, `Fascia Damaged ${south}`)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaSouthDamaged"
      :choices="masterYesNo"
      :label="`Fascia Damaged (${south}):`"
      @onChanged="model.FasciaSouthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.FasciaSouthDamaged == 'Yes'"
      :label="`Fascia Damaged (${south}) (LF):`"
      decimal
      :validate="model.FasciaSouthDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaSouthLf"
      @onChanged="model.FasciaSouthLf = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.FasciaDamaged == 'Yes'"
      id="FasciaWestDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaWestDamaged, `Fascia Damaged ${west}`)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaWestDamaged"
      :choices="masterYesNo"
      :label="`Fascia Damaged (${west}):`"
      @onChanged="model.FasciaWestDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.FasciaWestDamaged == 'Yes'"
      :label="`Fascia Damaged (${west}) (LF):`"
      decimal
      :validate="model.FasciaWestDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaWestLf"
      @onChanged="model.FasciaWestLf = $event"
    />
  </div>
</template>
