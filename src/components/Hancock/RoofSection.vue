<template>
  <div v-if="ready">
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label="Roof Overview Photos:"
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.RoofNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofNorth, `Roof Overviews ${north}`)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.RoofSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofSouth, `Roof Overviews ${south}`)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.RoofEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofEast, `Roof Overviews ${east}`)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.RoofWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofWest, `Roof Overviews ${west}`)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    />

    <checkbox-wrapper-component
      id="RoofType"
      :max-characters="50"
      :validate="validate"
      :current-value="model.RoofType"
      :choices="masterRoofType"
      label="Roof Type:"
      @onChanged="model.RoofType = $event"
    />

    <textbox-wrapper-component
      v-show="model.RoofType == 'Other'"
      id="RoofTypeOther"
      :max-characters="100"
      hide-margin
      :validate="model.RoofType == 'Other'"
      :current-value="model.RoofTypeOther"
      label="Other Roof Type:"
      @onChanged="model.RoofTypeOther = $event"
    />

    <checkbox-wrapper-component
      id="RoofAgeYears"
      :validate="validate"
      :current-value="model.RoofAgeYears"
      :choices="masterRoofAge"
      label="Roof Age (Years):"
      @onChanged="model.RoofAgeYears = $event"
    />

    <checkbox-camera-wrapper-component
      id="RoofMaterial"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofMaterial)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofMaterial)"
      :validate="validate"
      :current-value="model.RoofMaterial"
      :choices="MasterRoofMaterial()"
      label="Roof Material:"
      @onChanged="model.RoofMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.RoofMaterial == 'Other'"
      id="RoofMaterialOther"
      :max-characters="100"
      hide-margin
      :validate="model.RoofMaterial == 'Other'"
      :current-value="model.RoofMaterialOther"
      label="Other Roof Material:"
      @onChanged="model.RoofMaterialOther = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="isAllState"
      id="ShingleType"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ShingleType)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ShingleType)"
      :validate="isAllState"
      :current-value="model.ShingleType"
      :choices="masterShingleType"
      label="Shingle Type:"
      @onChanged="model.ShingleType = $event"
    />

    <boolean-camera-wrapper-component
      id="IceWaterShield"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.IceWaterShield)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.IceWaterShield)"
      :validate="validate"
      :current-value="model.IceWaterShield"
      :choices="['Yes', 'No']"
      label="Ice & Water Shield?"
      @onChanged="model.IceWaterShield = $event"
    />

    <numeric-wrapper-component
      v-show="model.IceWaterShield"
      label="Ice & Water Shield Length (LF):"
      decimal
      medium-label
      hide-margin
      :validate="model.IceWaterShield"
      :current-value="model.IceWaterShieldLf"
      @onChanged="model.IceWaterShieldLf = $event"
    />

    <numeric-camera-wrapper-component
      label="Soffit Depth (Inches):"
      decimal
      medium-label
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SoffitDepthIn)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SoffitDepthIn)"
      :validate="validate"
      :current-value="model.SoffitDepthLf"
      @onChanged="model.SoffitDepthLf = $event"
    />

    <checkbox-wrapper-component
      id="Stories"
      :validate="validate"
      :current-value="model.Stories == '0' ? 'Other' : String(model.Stories)"
      :choices="masterStories"
      label="Number of Stories:"
      @onChanged="model.Stories = $event == 'Other' ? 0 : $event"
    />

    <numeric-wrapper-component
      v-show="String(model.Stories).length > 0 && model.Stories == 0"
      id="StoriesOther"
      hide-margin
      text-area
      :validate="String(model.Stories).length > 0 && model.Stories == 0"
      :current-value="model.StoriesOther"
      label="Stories:"
      @onChanged="model.StoriesOther = Number($event)"
    />

    <checkbox-camera-wrapper-component
      id="PitchNorth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchNorth, `Predominant Pitch ${north}`)"
      :validate="validate"
      :current-value="model.PitchNorth"
      :choices="masterRoofPitch"
      :label="`Predominant Pitch (${north})?`"
      @onChanged="model.PitchNorth = $event"
    />

    <textbox-wrapper-component
      v-show="model.PitchNorth == 'Other'"
      id="PitchNorthOther"
      hide-margin
      medium-label
      :max-characters="10"
      :validate="model.PitchNorth == 'Other'"
      :current-value="model.PitchNorthOther"
      label="Pitch North Other:"
      @onChanged="model.PitchNorthOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="PitchEast"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchEast, `Predominant Pitch ${east}`)"
      :validate="validate"
      :current-value="model.PitchEast"
      :choices="masterRoofPitch"
      :label="`Predominant Pitch (${east})?`"
      @onChanged="model.PitchEast = $event"
    />

    <textbox-wrapper-component
      v-show="model.PitchEast == 'Other'"
      id="PitchEastOther"
      hide-margin
      medium-label
      :max-characters="10"
      :validate="model.PitchEast == 'Other'"
      :current-value="model.PitchEastOther"
      label="Pitch East Other:"
      @onChanged="model.PitchEastOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="PitchSouth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchSouth, `Predominant Pitch ${south}`)"
      :validate="validate"
      :current-value="model.PitchSouth"
      :choices="masterRoofPitch"
      :label="`Predominant Pitch (${south})?`"
      @onChanged="model.PitchSouth = $event"
    />

    <textbox-wrapper-component
      v-show="model.PitchSouth == 'Other'"
      id="PitchSouthOther"
      hide-margin
      medium-label
      :max-characters="10"
      :validate="model.PitchSouth == 'Other'"
      :current-value="model.PitchSouthOther"
      label="Pitch South Other:"
      @onChanged="model.PitchSouthOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="PitchWest"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchWest, `Predominant Pitch ${west}`)"
      :validate="validate"
      :current-value="model.PitchWest"
      :choices="masterRoofPitch"
      :label="`Predominant Pitch (${west})?`"
      @onChanged="model.PitchWest = $event"
    />

    <textbox-wrapper-component
      v-show="model.PitchWest == 'Other'"
      id="PitchWestOther"
      hide-margin
      medium-label
      :max-characters="10"
      :validate="model.PitchWest == 'Other'"
      :current-value="model.PitchWestOther"
      label="Pitch West Other:"
      @onChanged="model.PitchWestOther = $event"
    />

    <boolean-camera-wrapper-component
      id="Felt"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.Felt)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.Felt)"
      :validate="validate"
      :current-value="model.Felt"
      :choices="['Yes', 'No']"
      label="Felt?"
      @onChanged="model.Felt = $event"
    />

    <checkbox-wrapper-component
      v-show="model.Felt"
      id="FeltDescription"
      hide-margin
      :validate="model.Felt"
      :current-value="model.FeltDescription"
      :choices="masterFeltMaterial"
      label="Felt Type:"
      @onChanged="model.FeltDescription = $event"
    />

    <checkbox-wrapper-component
      id="LayerType"
      :validate="validate"
      :current-value="model.LayerType"
      :choices="masterLayerType"
      label="Layer Type:"
      @onChanged="model.LayerType = $event"
    />

    <textbox-wrapper-component
      v-show="model.LayerType == 'Other'"
      id="LayerTypeOther"
      :max-characters="100"
      hide-margin
      :validate="model.LayerType == 'Other'"
      :current-value="model.LayerTypeOther"
      label="Other Layer Type:"
      @onChanged="model.LayerTypeOther = $event"
    />

    <checkbox-camera-wrapper-component
      id="LayerQty"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LayerQty)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LayerQty)"
      :validate="validate"
      :current-value="String(model.LayerQty)"
      :choices="masterLayerNumber"
      label="Number of Layers:"
      @onChanged="model.LayerQty = $event"
    />

    <checkbox-camera-wrapper-component
      id="ValleyType"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ValleyType)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ValleyType)"
      :validate="validate"
      :current-value="model.ValleyType"
      :choices="masterValleyType"
      label="Valley Type:"
      @onChanged="model.ValleyType = $event"
    />

    <boolean-camera-wrapper-component
      id="RakeStarter"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RakeStarter)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RakeStarter)"
      :validate="validate"
      :current-value="model.RakeStarter"
      :choices="['Yes', 'No']"
      label="Rake Starter?"
      @onChanged="model.RakeStarter = $event"
    />

    <boolean-camera-wrapper-component
      id="EaveStarter"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.EaveStarter)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.EaveStarter)"
      :validate="validate"
      :current-value="model.EaveStarter"
      :choices="['Yes', 'No']"
      label="Eave Starter?"
      @onChanged="model.EaveStarter = $event"
    />

    <boolean-wrapper-component
      id="GutterPresent"
      :validate="validate"
      :current-value="model.GutterPresent"
      :choices="['Yes', 'No']"
      label="Gutters Present?"
      @onChanged="model.GutterPresent = $event"
    />

    <boolean-wrapper-component
      v-show="model.GutterPresent"
      id="GutterPainted"
      hide-margin
      :validate="model.GutterPresent"
      :current-value="model.GutterPainted"
      :choices="['Yes', 'No']"
      label="Gutters Painted?"
      @onChanged="model.GutterPainted = $event"
    />

    <checkbox-wrapper-component
      v-show="model.GutterPresent"
      id="GutterMaterial"
      hide-margin
      :validate="model.GutterPresent"
      :current-value="model.GutterMaterial"
      :choices="masterGutterMaterial"
      label="Gutter Material:"
      @onChanged="model.GutterMaterial = $event"
    />

    <textbox-wrapper-component
      v-show="model.GutterPresent && model.GutterMaterial == 'Other'"
      id="GutterMaterialOther"
      hide-margin
      :max-characters="100"
      :validate="model.GutterPresent && model.GutterMaterial == 'Other'"
      :current-value="model.GutterMaterialOther"
      label="Gutter Material Other:"
      @onChanged="model.GutterMaterialOther = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent"
      id="GutterSize"
      hide-margin
      :validate="model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterSize)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterSize)"
      :current-value="model.GutterSize"
      :choices="masterGutterSize"
      label="Gutter Size:"
      @onChanged="model.GutterSize = $event"
    />

    <textbox-wrapper-component
      v-show="model.GutterPresent && model.GutterSize == 'Other'"
      id="GutterSizeOther"
      :max-characters="50"
      hide-margin
      :validate="model.GutterSize == 'Other'"
      :current-value="model.GutterSizeOther"
      label="Gutter Size Other:"
      @onChanged="model.GutterSizeOther = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent"
      id="GuttersDamage"
      hide-margin
      :validate="model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterDamaged)"
      :current-value="model.GuttersDamage"
      :choices="masterYesNo"
      label="Gutters Damaged?"
      @onChanged="model.GuttersDamage = $event"
    />

    <textbox-wrapper-component
      v-show="model.GutterPresent"
      id="GutterDescription"
      :max-characters="8000"
      text-area
      hide-margin
      :validate="false"
      :current-value="model.GutterDescription"
      label="Gutter Description:"
      @onChanged="model.GutterDescription = $event"
    />

    <boolean-camera-wrapper-component
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      id="GutterNorthDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterNorthDamaged, `Gutter Damage  ${north}`)"
      :current-value="model.GutterNorthDamaged"
      :choices="['Yes', 'No']"
      label="Gutter North Damage?"
      @onChanged="model.GutterNorthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.GutterNorthDamaged"
      id="GutterNorthLf"
      decimal
      medium-label
      hide-margin
      :validate="model.GutterNorthDamaged"
      :current-value="model.GutterNorthLf"
      label="Gutters North Damage LF:"
      @onChanged="model.GutterNorthLf = $event"
    />

    <boolean-camera-wrapper-component
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      id="GutterSouthDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterSouthDamaged, `Gutter Damage  ${south}`)"
      :current-value="model.GutterSouthDamaged"
      :choices="['Yes', 'No']"
      label="Gutter South Damage?"
      @onChanged="model.GutterSouthDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.GutterSouthDamaged"
      id="GutterSouthLf"
      decimal
      medium-label
      hide-margin
      :validate="model.GutterSouthDamaged"
      :current-value="model.GutterSouthLf"
      label="Gutters South Damage LF:"
      @onChanged="model.GutterSouthLf = $event"
    />

    <boolean-camera-wrapper-component
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      id="GutterEastDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterEastDamaged, `Gutter Damage  ${east}`)"
      :current-value="model.GutterEastDamaged"
      :choices="['Yes', 'No']"
      label="Gutter East Damage?"
      @onChanged="model.GutterEastDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.GutterEastDamaged"
      id="GutterEastLf"
      decimal
      medium-label
      hide-margin
      :validate="model.GutterEastDamaged"
      :current-value="model.GutterEastLf"
      label="Gutters East Damage LF:"
      @onChanged="model.GutterEastLf = $event"
    />

    <boolean-camera-wrapper-component
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      id="GutterWestDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterWestDamaged, `Gutter Damage  ${west}`)"
      :current-value="model.GutterWestDamaged"
      :choices="['Yes', 'No']"
      label="Gutter West Damage?"
      @onChanged="model.GutterWestDamaged = $event"
    />

    <numeric-wrapper-component
      v-show="model.GutterWestDamaged"
      id="GutterWestLf"
      decimal
      medium-label
      hide-margin
      :validate="model.GutterWestDamaged"
      :current-value="model.GutterWestLf"
      label="Gutters West Damage LF:"
      @onChanged="model.GutterWestLf = $event"
    />

    <checkbox-wrapper-component
      id="PriorRepairs"
      :validate="validate"
      :current-value="model.PriorRepairs"
      :choices="masterYesNoNa"
      label="Prior Repairs ?"
      @onChanged="model.PriorRepairs = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.PriorRepairs == 'Yes'"
      id="PriorRepairsNorth"
      hide-margin
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsNorth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsNorth, `Prior Repairs ${north}`)"
      :choices="masterYesNoNa"
      :label="`Prior Repairs (${north})?`"
      @onChanged="model.PriorRepairsNorth = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.PriorRepairs == 'Yes'"
      id="PriorRepairsSouth"
      hide-margin
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsSouth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsSouth, `Prior Repairs ${south}`)"
      :choices="masterYesNoNa"
      :label="`Prior Repairs (${south})?`"
      @onChanged="model.PriorRepairsSouth = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.PriorRepairs == 'Yes'"
      id="PriorRepairsEast"
      hide-margin
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsEast"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsEast, `Prior Repairs ${east}`)"
      :choices="masterYesNoNa"
      :label="`Prior Repairs (${east})?`"
      @onChanged="model.PriorRepairsEast = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.PriorRepairs == 'Yes'"
      id="PriorRepairsWest"
      hide-margin
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsWest"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsWest, `Prior Repairs ${west}`)"
      :choices="masterYesNoNa"
      :label="`Prior Repairs (${west})?`"
      @onChanged="model.PriorRepairsWest = $event"
    />

    <boolean-wrapper-component
      id=" Damage"
      :validate="validate"
      :current-value="model.StormDamage"
      :choices="['Yes', 'No']"
      label="Storm Damage Present?"
      @onChanged="model.StormDamage = $event"
    />

    <checkbox-wrapper-component
      v-show="model.StormDamage"
      id="StormDirection"
      hide-margin
      :validate="model.StormDamage"
      :current-value="model.StormDirection"
      :choices="['North', 'South', 'West', 'East', 'NA']"
      label="Storm Direction:"
      @onChanged="model.StormDirection = $event"
    />

    <checkbox-wrapper-component
      v-show="model.StormDamage"
      id="StormDamageType"
      allow-multiple
      hide-margin
      medium-label
      :validate="model.StormDamage"
      :current-value="model.StormDamageType"
      :choices="masterStormDamage"
      label="What type of damage is present:"
      @onChanged="model.StormDamageType = $event"
    />

    <textbox-wrapper-component
      v-show="model.StormDamageType.includes('Other')"
      id="StormDamageTypeOther"
      :max-characters="50"
      hide-margin
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.StormDamageTypeOther"
      label="Other Storm Damage Type:"
      @onChanged="model.StormDamageTypeOther = $event"
    />

    <numeric-camera-wrapper-component
      v-show="model.StormDamageType.includes('Other')"
      id="OtherDamageNorth"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageNorth, `Other Damage${north}`)"
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageNorth"
      :label="`Other Damage ${north}:`"
      @onChanged="model.OtherDamageNorth = $event"
    />

    <numeric-camera-wrapper-component
      v-show="model.StormDamageType.includes('Other')"
      id="OtherDamageSouth"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageSouth, `Other Damage${south}`)"
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageSouth"
      :label="`Other Damage ${south}:`"
      @onChanged="model.OtherDamageSouth = $event"
    />

    <numeric-camera-wrapper-component
      v-show="model.StormDamageType.includes('Other')"
      id="OtherDamageEast"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageEast, `Other Damage${east}`)"
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageEast"
      :label="`Other Damage ${east}:`"
      @onChanged="model.OtherDamageEast = $event"
    />

    <numeric-camera-wrapper-component
      v-show="model.StormDamageType.includes('Other')"
      id="OtherDamageWest"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageWest, `Other Damage${west}`)"
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageWest"
      :label="`Other Damage ${west}:`"
      @onChanged="model.OtherDamageWest = $event"
    />

    <checkbox-camera-wrapper-component
      id="HailSize"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HailSize)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HailSize)"
      :validate="validate"
      :current-value="model.HailSize"
      :choices="masterHailSize"
      label="Hail Size:"
      @onChanged="model.HailSize = $event"
    />

    <directional-numeric-wrapper-component
      label="Hail Test Size (SF):"
      :validate="validate"
      decimal
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.HailTestSizeNorth"
      :slot-b-value="model.HailTestSizeEast"
      :slot-c-value="model.HailTestSizeWest"
      :slot-d-value="model.HailTestSizeSouth"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onslotachanged="model.HailTestSizeNorth = $event"
      @onSlotBChanged="model.HailTestSizeEast = $event"
      @onSlotCChanged="model.HailTestSizeWest = $event"
      @onSlotDChanged="model.HailTestSizeSouth = $event"
    />

    <numeric-camera-wrapper-component
      id="HailDamageNorthSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareNorth, `Test Square ${north}`)"
      :validate="validate"
      :current-value="model.HailDamageNorthSf"
      :label="`Test Square ${north}:`"
      @onChanged="model.HailDamageNorthSf = $event"
    />
    <numeric-camera-wrapper-component
      id="HailDamageSouthSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareSouth, `Test Square ${south}`)"
      :validate="validate"
      :current-value="model.HailDamageSouthSf"
      :label="`Test Square ${south}:`"
      @onChanged="model.HailDamageSouthSf = $event"
    />
    <numeric-camera-wrapper-component
      id="HailDamageEastSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareEast, `Test Square ${east}`)"
      :validate="validate"
      :current-value="model.HailDamageEastSf"
      :label="`Test Square ${east}:`"
      @onChanged="model.HailDamageEastSf = $event"
    />
    <numeric-camera-wrapper-component
      id="HailDamageWestSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareWest, `Test Square ${west}`)"
      :validate="validate"
      :current-value="model.HailDamageWestSf"
      :label="`Test Square ${west}:`"
      @onChanged="model.HailDamageWestSf = $event"
    />

    <boolean-wrapper-component
      id="HancockDisagreesHailDamage"
      hide-margin
      :validate="validate"
      :current-value="model.HancockDisagreesHailDamage"
      :choices="['Yes', 'No']"
      label="Does Hancock disagrees with contractor hail damage?"
      @onChanged="model.HancockDisagreesHailDamage = $event"
    />
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesNorth, `Hancock Disagrees ${north}`)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesSouth, `Hancock Disagrees ${south}`)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesEast, `Hancock Disagrees ${east}`)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesWest, `Hancock Disagrees ${west}`)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    />

    <directional-camera-wrapper-component
      v-show="model.StormDamageType.includes('Wind') && fieldAssets.length < 100"
      label="Wind Damage Photos:"
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      hide-margin
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageNorth, `Wind Damage ${north}`)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageSouth, `Wind Damage ${south}`)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageEast, `Wind Damage ${east}`)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageWest, `Wind Damage ${west}`)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    />
    <directional-numeric-wrapper-component
      v-show="model.StormDamageType.includes('Wind')"
      label="Wind Damage Facet 1:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthOneSqft"
      :slot-b-value="model.WindDamageEastOneSqft"
      :slot-c-value="model.WindDamageSouthOneSqft"
      :slot-d-value="model.WindDamageWestOneSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthOneSqft = $event"
      @onSlotBChanged="model.WindDamageEastOneSqft = $event"
      @onSlotCChanged="model.WindDamageSouthOneSqft = $event"
      @onSlotDChanged="model.WindDamageWestOneSqft = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.StormDamageType.includes('Wind')"
      label="Wind Damage Facet 2:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthTwoSqft"
      :slot-b-value="model.WindDamageEastTwoSqft"
      :slot-c-value="model.WindDamageSouthTwoSqft"
      :slot-d-value="model.WindDamageWestTwoSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthTwoSqft = $event"
      @onSlotBChanged="model.WindDamageEastTwoSqft = $event"
      @onSlotCChanged="model.WindDamageSouthTwoSqft = $event"
      @onSlotDChanged="model.WindDamageWestTwoSqft = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.StormDamageType.includes('Wind')"
      label="Wind Damage Facet 3:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthThreeSqft"
      :slot-b-value="model.WindDamageEastThreeSqft"
      :slot-c-value="model.WindDamageSouthThreeSqft"
      :slot-d-value="model.WindDamageWestThreeSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthThreeSqft = $event"
      @onSlotBChanged="model.WindDamageEastThreeSqft = $event"
      @onSlotCChanged="model.WindDamageSouthThreeSqft = $event"
      @onSlotDChanged="model.WindDamageWestThreeSqft = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.StormDamageType.includes('Wind')"
      label="Wind Damage Facet 4:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthFourSqft"
      :slot-b-value="model.WindDamageEastFourSqft"
      :slot-c-value="model.WindDamageSouthFourSqft"
      :slot-d-value="model.WindDamageWestFourSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthFourSqft = $event"
      @onSlotBChanged="model.WindDamageEastFourSqft = $event"
      @onSlotCChanged="model.WindDamageSouthFourSqft = $event"
      @onSlotDChanged="model.WindDamageWestFourSqft = $event"
    />

    <directional-numeric-wrapper-component
      v-show="model.StormDamageType.includes('Wind')"
      label="Wind Damage Facet 5:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthFiveSqft"
      :slot-b-value="model.WindDamageEastFiveSqft"
      :slot-c-value="model.WindDamageSouthFiveSqft"
      :slot-d-value="model.WindDamageWestFiveSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onslotachanged="model.WindDamageNorthFiveSqft = $event"
      @onSlotBChanged="model.WindDamageEastFiveSqft = $event"
      @onSlotCChanged="model.WindDamageSouthFiveSqft = $event"
      @onSlotDChanged="model.WindDamageWestFiveSqft = $event"
    />

    <boolean-wrapper-component
      id="BrittlenessTestRequested"
      :validate="validate"
      :current-value="model.BrittlenessTestRequested"
      :choices="['Yes', 'No']"
      label="Was a Brittleness Test Requested?"
      @onChanged="model.BrittlenessTestRequested = $event"
    />

    <boolean-wrapper-component
      id="BrittlenessTestConducted"
      :validate="validate"
      :current-value="model.BrittlenessTestConducted"
      :choices="['Yes', 'No']"
      label="Was a Brittleness Test Performed?"
      @onChanged="model.BrittlenessTestConducted = $event"
    />

    <boolean-camera-wrapper-component
      v-show="isBrittlenessTestVisible('BrittlenessTestNorth')"
      id="BrittlenessTestNorth"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestNorthPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestNorthPerformed, `Brittleness Test Performed ${north}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestNorth')"
      :current-value="model.BrittlenessTestNorth"
      :choices="['Yes', 'No']"
      :label="`Brittleness Test (${north})?`"
      @onChanged="model.BrittlenessTestNorth = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestNorth"
      id="BrittlenessTestNorthPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestNorthResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestNorthResult, `Brittleness Test Result ${north}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestNorth') && model.BrittlenessTestNorth"
      :current-value="model.BrittlenessTestNorthPass"
      :choices="['Pass', 'Fail', 'NA']"
      :label="`Brittleness Test Result (${north})?`"
      @onChanged="model.BrittlenessTestNorthPass = $event"
    />

    <boolean-camera-wrapper-component
      v-show="isBrittlenessTestVisible('BrittlenessTestSouth')"
      id="BrittlenessTestSouth"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestSouthPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestSouthPerformed, `Brittleness Test Performed ${south}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestSouth')"
      :current-value="model.BrittlenessTestSouth"
      :choices="['Yes', 'No']"
      :label="`Brittleness Test (${south})?`"
      @onChanged="model.BrittlenessTestSouth = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestSouth"
      id="BrittlenessTestSouthPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestSouthResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestSouthResult, `Brittleness Test Result ${south}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestSouth') && model.BrittlenessTestSouth"
      :current-value="model.BrittlenessTestSouthPass"
      :choices="['Pass', 'Fail', 'NA']"
      :label="`Brittleness Test Result (${south})?`"
      @onChanged="model.BrittlenessTestSouthPass = $event"
    />

    <boolean-camera-wrapper-component
      v-show="isBrittlenessTestVisible('BrittlenessTestEast')"
      id="BrittlenessTestEast"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestEastPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestEastPerformed, `Brittleness Test Performed ${east}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestEast')"
      :current-value="model.BrittlenessTestEast"
      :choices="['Yes', 'No']"
      :label="`Brittleness Test (${east})?`"
      @onChanged="model.BrittlenessTestEast = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestEast"
      id="BrittlenessTestEastPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestEastResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestEastResult, `Brittleness Test Result ${east}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestEast') && model.BrittlenessTestEast"
      :current-value="model.BrittlenessTestEastPass"
      :choices="['Pass', 'Fail', 'NA']"
      :label="`Brittleness Test Result (${east})?`"
      @onChanged="model.BrittlenessTestEastPass = $event"
    />

    <boolean-camera-wrapper-component
      v-show="isBrittlenessTestVisible('BrittlenessTestWest')"
      id="BrittlenessTestWest"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestWestPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestWestPerformed, `Brittleness Test Performed ${west}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestWest')"
      :current-value="model.BrittlenessTestWest"
      :choices="['Yes', 'No']"
      :label="`Brittleness Test (${west})?`"
      @onChanged="model.BrittlenessTestWest = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestWest"
      id="BrittlenessTestWestPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestWestResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestWestResult, `Brittleness Test Result ${west}`)"
      :validate="isBrittlenessTestVisible('BrittlenessTestWest') && model.BrittlenessTestWest"
      :current-value="model.BrittlenessTestWestPass"
      :choices="['Pass', 'Fail', 'NA']"
      :label="`Brittleness Test Result (${west})?`"
      @onChanged="model.BrittlenessTestWestPass = $event"
    />

    <roof-damaged-items-section-component
      :is-all-state="model.AllStateInspection"
      :company-id="companyId"
      :project-id="projectId"
      :property-inspection-form-id="propertyInspectionFormId"
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="fieldAssets"
    />

    <span class="sectionHeader">Indicate other Non Wind/Hail related conditions that exist on roof</span>

    <boolean-wrapper-component
      id="BlisterDamage"
      :validate="validate"
      :current-value="model.BlisterDamage"
      :choices="['Yes', 'No']"
      label="Blistering Damaged?"
      @onChanged="model.BlisterDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.BlisterDamage"
      id="BlistersNorth"
      hide-margin
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersNorth, `Blisters  ${north}`)"
      :current-value="model.BlistersNorth"
      :choices="['Yes', 'No']"
      :label="`Blisters (${north})?`"
      @onChanged="model.BlistersNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.BlisterDamage"
      id="BlistersEast"
      hide-margin
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersEast, `Blisters  ${east}`)"
      :current-value="model.BlistersEast"
      :choices="['Yes', 'No']"
      :label="`Blisters (${east})?`"
      @onChanged="model.BlistersEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.BlisterDamage"
      id="BlistersSouth"
      hide-margin
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersSouth, `Blisters  ${south}`)"
      :current-value="model.BlistersSouth"
      :choices="['Yes', 'No']"
      :label="`Blisters (${south})?`"
      @onChanged="model.BlistersSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.BlisterDamage"
      id="BlistersWest"
      hide-margin
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersWest, `Blisters  ${west}`)"
      :current-value="model.BlistersWest"
      :choices="['Yes', 'No']"
      :label="`Blisters (${west})?`"
      @onChanged="model.BlistersWest = $event"
    />

    <boolean-wrapper-component
      v-show="model.GutterPresent"
      id="CloggedGutterDamage"
      :validate="model.GutterPresent"
      :current-value="model.CloggedGutterDamage"
      :choices="['Yes', 'No']"
      label="Clogged Gutters?"
      @onChanged="model.CloggedGutterDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      id="CloggedGuttersNorth"
      hide-margin
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersNorth, `Clogged Gutters  ${north}`)"
      :current-value="model.CloggedGuttersNorth"
      :choices="['Yes', 'No']"
      :label="`Clogged Gutters (${north})?`"
      @onChanged="model.CloggedGuttersNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      id="CloggedGuttersEast"
      hide-margin
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersEast, `Clogged Gutters  ${east}`)"
      :current-value="model.CloggedGuttersEast"
      :choices="['Yes', 'No']"
      :label="`Clogged Gutters (${east})?`"
      @onChanged="model.CloggedGuttersEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      id="CloggedGuttersSouth"
      hide-margin
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersSouth, `Clogged Gutters  ${south}`)"
      :current-value="model.CloggedGuttersSouth"
      :choices="['Yes', 'No']"
      :label="`Clogged Gutters (${south})?`"
      @onChanged="model.CloggedGuttersSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      id="CloggedGuttersWest"
      hide-margin
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersWest, `Clogged Gutters  ${west}`)"
      :current-value="model.CloggedGuttersWest"
      :choices="['Yes', 'No']"
      :label="`Clogged Gutters (${west})?`"
      @onChanged="model.CloggedGuttersWest = $event"
    />

    <boolean-wrapper-component
      id="CuppedDamage"
      :validate="validate"
      :current-value="model.CuppedDamage"
      :choices="['Yes', 'No']"
      label="Cupped/Curled Shingles?"
      @onChanged="model.CuppedDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.CuppedDamage"
      id="CuppedNorth"
      hide-margin
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedNorth, `Cupped  ${north}`)"
      :current-value="model.CuppedNorth"
      :choices="['Yes', 'No']"
      :label="`Cupped/Curled (${north})?`"
      @onChanged="model.CuppedNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.CuppedDamage"
      id="CuppedEast"
      hide-margin
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedEast, `Cupped  ${east}`)"
      :current-value="model.CuppedEast"
      :choices="['Yes', 'No']"
      :label="`Cupped/Curled (${east})?`"
      @onChanged="model.CuppedEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.CuppedDamage"
      id="CuppedSouth"
      hide-margin
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedSouth, `Cupped  ${south}`)"
      :current-value="model.CuppedSouth"
      :choices="['Yes', 'No']"
      :label="`Cupped/Curled (${south})?`"
      @onChanged="model.CuppedSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.CuppedDamage"
      id="CuppedWest"
      hide-margin
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedWest, `Cupped  ${west}`)"
      :current-value="model.CuppedWest"
      :choices="['Yes', 'No']"
      :label="`Cupped/Curled (${west})?`"
      @onChanged="model.CuppedWest = $event"
    />

    <boolean-wrapper-component
      id="DeckingRottedDamage"
      :validate="validate"
      :current-value="model.DeckingRottedDamage"
      :choices="['Yes', 'No']"
      label="Decking Rotting/Rotted?"
      @onChanged="model.DeckingRottedDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.DeckingRottedDamage"
      id="DeckingRottedNorth"
      hide-margin
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedNorth, `Decking Rotted  ${north}`)"
      :current-value="model.DeckingRottedNorth"
      :choices="['Yes', 'No']"
      :label="`Decking Rotted (${north})?`"
      @onChanged="model.DeckingRottedNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.DeckingRottedDamage"
      id="DeckingRottedEast"
      hide-margin
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedEast, `Decking Rotted  ${east}`)"
      :current-value="model.DeckingRottedEast"
      :choices="['Yes', 'No']"
      :label="`Decking Rotted (${east})?`"
      @onChanged="model.DeckingRottedEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.DeckingRottedDamage"
      id="DeckingRottedSouth"
      hide-margin
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedSouth, `Decking Rotted  ${south}`)"
      :current-value="model.DeckingRottedSouth"
      :choices="['Yes', 'No']"
      :label="`Decking Rotted (${south})?`"
      @onChanged="model.DeckingRottedSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.DeckingRottedDamage"
      id="DeckingRottedWest"
      hide-margin
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedWest, `Decking Rotted  ${west}`)"
      :current-value="model.DeckingRottedWest"
      :choices="['Yes', 'No']"
      :label="`Decking Rotted (${west})?`"
      @onChanged="model.DeckingRottedWest = $event"
    />

    <boolean-wrapper-component
      id="FlashingNotSealedDamage"
      :validate="validate"
      :current-value="model.FlashingNotSealedDamage"
      :choices="['Yes', 'No']"
      label="Flashing Not Sealed?"
      @onChanged="model.FlashingNotSealedDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.FlashingNotSealedDamage"
      id="FlashingNotSealedNorth"
      hide-margin
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedNorth, `Flashing Not Sealed  ${north}`)"
      :current-value="model.FlashingNotSealedNorth"
      :choices="['Yes', 'No']"
      :label="`Flashing Not Sealed (${north})?`"
      @onChanged="model.FlashingNotSealedNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.FlashingNotSealedDamage"
      id="FlashingNotSealedEast"
      hide-margin
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedEast, `Flashing Not Sealed  ${east}`)"
      :current-value="model.FlashingNotSealedEast"
      :choices="['Yes', 'No']"
      :label="`Flashing Not Sealed (${east})?`"
      @onChanged="model.FlashingNotSealedEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.FlashingNotSealedDamage"
      id="FlashingNotSealedSouth"
      hide-margin
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedSouth, `Flashing Not Sealed  ${south}`)"
      :current-value="model.FlashingNotSealedSouth"
      :choices="['Yes', 'No']"
      :label="`Flashing Not Sealed (${south})?`"
      @onChanged="model.FlashingNotSealedSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.FlashingNotSealedDamage"
      id="FlashingNotSealedWest"
      hide-margin
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedWest, `Flashing Not Sealed  ${west}`)"
      :current-value="model.FlashingNotSealedWest"
      :choices="['Yes', 'No']"
      :label="`Flashing Not Sealed (${west})?`"
      @onChanged="model.FlashingNotSealedWest = $event"
    />
    <textbox-wrapper-component
      v-show="model.FlashingNotSealedDamage"
      id="FlashingNotSealedNotes"
      :max-characters="8000"
      text-area
      hide-margin
      :validate="model.FlashingNotSealedDamage"
      :current-value="model.FlashingNotSealedNotes"
      label="Flashing Notes:"
      @onChanged="model.FlashingNotSealedNotes = $event"
    />

    <boolean-wrapper-component
      id="GranuleLossDamage"
      :validate="validate"
      :current-value="model.GranuleLossDamage"
      :choices="['Yes', 'No']"
      label="Granule Loss?"
      @onChanged="model.GranuleLossDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.GranuleLossDamage"
      id="GranuleLossNorth"
      hide-margin
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossNorth, `Granule Loss  ${north}`)"
      :current-value="model.GranuleLossNorth"
      :choices="['Yes', 'No']"
      :label="`Granule Loss (${north})?`"
      @onChanged="model.GranuleLossNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GranuleLossDamage"
      id="GranuleLossEast"
      hide-margin
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossEast, `Granule Loss  ${east}`)"
      :current-value="model.GranuleLossEast"
      :choices="['Yes', 'No']"
      :label="`Granule Loss (${east})?`"
      @onChanged="model.GranuleLossEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GranuleLossDamage"
      id="GranuleLossSouth"
      hide-margin
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossSouth, `Granule Loss  ${south}`)"
      :current-value="model.GranuleLossSouth"
      :choices="['Yes', 'No']"
      :label="`Granule Loss (${south})?`"
      @onChanged="model.GranuleLossSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.GranuleLossDamage"
      id="GranuleLossWest"
      hide-margin
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossWest, `Granule Loss  ${west}`)"
      :current-value="model.GranuleLossWest"
      :choices="['Yes', 'No']"
      :label="`Granule Loss (${west})?`"
      @onChanged="model.GranuleLossWest = $event"
    />

    <boolean-camera-wrapper-component
      id="ManufacturedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedDamage)"
      :validate="validate"
      :current-value="model.ManufacturedDamage"
      :choices="['Yes', 'No']"
      label="Manufactured Damage:"
      @onChanged="model.ManufacturedDamage = $event"
    />

    <boolean-wrapper-component
      id="ManufacturedMarkDamage"
      :validate="validate"
      :current-value="model.ManufacturedMarkDamage"
      :choices="['Yes', 'No']"
      label="Manufactured Marks?"
      @onChanged="model.ManufacturedMarkDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.ManufacturedMarkDamage"
      id="ManufacturedMarksNorth"
      hide-margin
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksNorth, `Manufactured Marks  ${north}`)"
      :current-value="model.ManufacturedMarksNorth"
      :choices="['Yes', 'No']"
      :label="`Manufactured Marks (${north})?`"
      @onChanged="model.ManufacturedMarksNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ManufacturedMarkDamage"
      id="ManufacturedMarksEast"
      hide-margin
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksEast, `Manufactured Marks  ${east}`)"
      :current-value="model.ManufacturedMarksEast"
      :choices="['Yes', 'No']"
      :label="`Manufactured Marks (${east})?`"
      @onChanged="model.ManufacturedMarksEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ManufacturedMarkDamage"
      id="ManufacturedMarksSouth"
      hide-margin
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksSouth, `Manufactured Marks  ${south}`)"
      :current-value="model.ManufacturedMarksSouth"
      :choices="['Yes', 'No']"
      :label="`Manufactured Marks (${south})?`"
      @onChanged="model.ManufacturedMarksSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ManufacturedMarkDamage"
      id="ManufacturedMarksWest"
      hide-margin
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksWest, `Manufactured Marks  ${west}`)"
      :current-value="model.ManufacturedMarksWest"
      :choices="['Yes', 'No']"
      :label="`Manufactured Marks (${west})?`"
      @onChanged="model.ManufacturedMarksWest = $event"
    />

    <boolean-camera-wrapper-component
      id="MechanicalDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalDamage)"
      :validate="validate"
      :current-value="model.MechanicalDamage"
      :choices="['Yes', 'No']"
      label="Mechanical Damage:"
      @onChanged="model.MechanicalDamage = $event"
    />

    <boolean-wrapper-component
      id="MechanicalMarkDamage"
      :validate="validate"
      :current-value="model.MechanicalMarkDamage"
      :choices="['Yes', 'No']"
      label="Mechanical Marks?"
      @onChanged="model.MechanicalMarkDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.MechanicalMarkDamage"
      id="MechanicalMarksNorth"
      hide-margin
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksNorth, `Mechanical Marks  ${north}`)"
      :current-value="model.MechanicalMarksNorth"
      :choices="['Yes', 'No']"
      :label="`Mechanical Marks (${north})?`"
      @onChanged="model.MechanicalMarksNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.MechanicalMarkDamage"
      id="MechanicalMarksEast"
      hide-margin
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksEast, `Mechanical Marks  ${east}`)"
      :current-value="model.MechanicalMarksEast"
      :choices="['Yes', 'No']"
      :label="`Mechanical Marks (${east})?`"
      @onChanged="model.MechanicalMarksEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.MechanicalMarkDamage"
      id="MechanicalMarksSouth"
      hide-margin
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksSouth, `Mechanical Marks  ${south}`)"
      :current-value="model.MechanicalMarksSouth"
      :choices="['Yes', 'No']"
      :label="`Mechanical Marks (${south})?`"
      @onChanged="model.MechanicalMarksSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.MechanicalMarkDamage"
      id="MechanicalMarksWest"
      hide-margin
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksWest, `Mechanical Marks  ${west}`)"
      :current-value="model.MechanicalMarksWest"
      :choices="['Yes', 'No']"
      :label="`Mechanical Marks (${west})?`"
      @onChanged="model.MechanicalMarksWest = $event"
    />

    <boolean-wrapper-component
      id="NailPopDamaged"
      :validate="validate"
      :current-value="model.NailPopDamaged"
      :choices="['Yes', 'No']"
      label="Nail Pops ?"
      @onChanged="model.NailPopDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.NailPopDamaged"
      id="NailPopsNorth"
      hide-margin
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsNorth, `Nail Pops  ${north}`)"
      :current-value="model.NailPopsNorth"
      :choices="['Yes', 'No']"
      :label="`Nail Pops (${north})?`"
      @onChanged="model.NailPopsNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.NailPopDamaged"
      id="NailPopsEast"
      hide-margin
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsEast, `Nail Pops  ${east}`)"
      :current-value="model.NailPopsEast"
      :choices="['Yes', 'No']"
      :label="`Nail Pops (${east})?`"
      @onChanged="model.NailPopsEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.NailPopDamaged"
      id="NailPopsSouth"
      hide-margin
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsSouth, `Nail Pops  ${south}`)"
      :current-value="model.NailPopsSouth"
      :choices="['Yes', 'No']"
      :label="`Nail Pops (${south})?`"
      @onChanged="model.NailPopsSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.NailPopDamaged"
      id="NailPopsWest"
      hide-margin
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsWest, `Nail Pops  ${west}`)"
      :current-value="model.NailPopsWest"
      :choices="['Yes', 'No']"
      :label="`Nail Pops (${west})?`"
      @onChanged="model.NailPopsWest = $event"
    />

    <boolean-wrapper-component
      id="RoofDebrisDamaged"
      :validate="validate"
      :current-value="model.RoofDebrisDamaged"
      :choices="['Yes', 'No']"
      label="Roof Debris?"
      @onChanged="model.RoofDebrisDamaged = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.RoofDebrisDamaged"
      id="RoofDebrisNorth"
      hide-margin
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisNorth, `Roof Debris  ${north}`)"
      :current-value="model.RoofDebrisNorth"
      :choices="['Yes', 'No']"
      :label="`Roof Debris (${north})?`"
      @onChanged="model.RoofDebrisNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.RoofDebrisDamaged"
      id="RoofDebrisEast"
      hide-margin
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisEast, `Roof Debris  ${east}`)"
      :current-value="model.RoofDebrisEast"
      :choices="['Yes', 'No']"
      :label="`Roof Debris (${east})?`"
      @onChanged="model.RoofDebrisEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.RoofDebrisDamaged"
      id="RoofDebrisSouth"
      hide-margin
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisSouth, `Roof Debris  ${south}`)"
      :current-value="model.RoofDebrisSouth"
      :choices="['Yes', 'No']"
      :label="`Roof Debris (${south})?`"
      @onChanged="model.RoofDebrisSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.RoofDebrisDamaged"
      id="RoofDebrisWest"
      hide-margin
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisWest, `Roof Debris  ${west}`)"
      :current-value="model.RoofDebrisWest"
      :choices="['Yes', 'No']"
      :label="`Roof Debris (${west})?`"
      @onChanged="model.RoofDebrisWest = $event"
    />

    <boolean-wrapper-component
      id="ThermalCrackingDamage"
      :validate="validate"
      :current-value="model.ThermalCrackingDamage"
      :choices="['Yes', 'No']"
      label="Thermal Cracking?"
      @onChanged="model.ThermalCrackingDamage = $event"
    />

    <checkbox-camera-wrapper-component
      v-show="model.ThermalCrackingDamage"
      id="ThermalCrackingNorth"
      hide-margin
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingNorth, `Thermal Cracking  ${north}`)"
      :current-value="model.ThermalCrackingNorth"
      :choices="['Yes', 'No']"
      :label="`Thermal Cracking (${north})?`"
      @onChanged="model.ThermalCrackingNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ThermalCrackingDamage"
      id="ThermalCrackingEast"
      hide-margin
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingEast, `Thermal Cracking  ${east}`)"
      :current-value="model.ThermalCrackingEast"
      :choices="['Yes', 'No']"
      :label="`Thermal Cracking (${east})?`"
      @onChanged="model.ThermalCrackingEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ThermalCrackingDamage"
      id="ThermalCrackingSouth"
      hide-margin
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingSouth, `Thermal Cracking  ${south}`)"
      :current-value="model.ThermalCrackingSouth"
      :choices="['Yes', 'No']"
      :label="`Thermal Cracking (${south})?`"
      @onChanged="model.ThermalCrackingSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.ThermalCrackingDamage"
      id="ThermalCrackingWest"
      hide-margin
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingWest, `Thermal Cracking  ${west}`)"
      :current-value="model.ThermalCrackingWest"
      :choices="['Yes', 'No']"
      :label="`Thermal Cracking (${west})?`"
      @onChanged="model.ThermalCrackingWest = $event"
    />

    <boolean-camera-wrapper-component
      id="ExcessiveWeathering"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ExcessiveWeathering)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ExcessiveWeathering)"
      :validate="validate"
      :current-value="model.ExcessiveWeathering"
      :choices="['Yes', 'No']"
      label="Excessive Weathering:"
      @onChanged="model.ExcessiveWeathering = $event"
    />

    <boolean-camera-wrapper-component
      id="RodentDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RodentDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RodentDamage)"
      :validate="validate"
      :current-value="model.RodentDamage"
      :choices="['Yes', 'No']"
      label="Insect/Rodent Damage:"
      @onChanged="model.RodentDamage = $event"
    />

    <boolean-camera-wrapper-component
      id="ExposedFasteners"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ExposedFasteners)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ExposedFasteners)"
      :validate="validate"
      :current-value="model.ExposedFasteners"
      :choices="['Yes', 'No']"
      label="Exposed Fasteners:"
      @onChanged="model.ExposedFasteners = $event"
    />

    <boolean-camera-wrapper-component
      id="SpatterMarks"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SpatterMarks)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SpatterMarks)"
      :validate="validate"
      :current-value="model.SpatterMarks"
      :choices="['Yes', 'No']"
      label="Spatter Marks:"
      @onChanged="model.SpatterMarks = $event"
    />

    <boolean-camera-wrapper-component
      id="InstallationError"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.InstallationError)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.InstallationError)"
      :validate="validate"
      :current-value="model.InstallationError"
      :choices="['Yes', 'No']"
      label="Installation Error?"
      @onChanged="model.InstallationError = $event"
    />

    <checkbox-wrapper-component
      v-show="model.InstallationError"
      id="InstallationErrorDescription"
      allow-multiple
      hide-margin
      :validate="model.InstallationError"
      :current-value="model.InstallationErrorDescription"
      :choices="masterInstallationIssues"
      label="Installation Error Description"
      @onChanged="model.InstallationErrorDescription = $event"
    />

    <textbox-wrapper-component
      v-show="model.InstallationError && model.InstallationErrorDescription == 'Other'"
      id="InstallationErrorDescriptionOther"
      :max-characters="8000"
      text-area
      hide-margin
      :validate="model.InstallationError && model.InstallationErrorDescription == 'Other'"
      :current-value="model.InstallationErrorDescriptionOther"
      label="Other Installation Error:"
      @onChanged="model.InstallationErrorDescriptionOther = $event"
    />

    <boolean-wrapper-component
      id="OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :validate="validate"
      :current-value="model.OtherConditions"
      :choices="['Yes', 'No']"
      label="Other Conditions:"
      @onChanged="model.OtherConditions = $event"
    />
    <textbox-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsName"
      hide-margin
      :max-characters="50"
      :validate="model.OtherConditions"
      :current-value="model.OtherConditionsName"
      label="Other Conditions Name:"
      @onChanged="model.OtherConditionsName = $event"
    />
    <textbox-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsDescription"
      hide-margin
      :max-characters="8000"
      text-area
      :validate="model.OtherConditions"
      :current-value="model.OtherConditionsDescription"
      label="Other Conditions Description:"
      @onChanged="model.OtherConditionsDescription = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsNorth"
      hide-margin
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsNorth, `Other Conditions  ${north}`)"
      :current-value="model.OtherConditionsNorth"
      :choices="['Yes', 'No']"
      :label="`Other Conditions (${north})?`"
      @onChanged="model.OtherConditionsNorth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsEast"
      hide-margin
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsEast, `Other Conditions  ${east}`)"
      :current-value="model.OtherConditionsEast"
      :choices="['Yes', 'No']"
      :label="`Other Conditions (${east})?`"
      @onChanged="model.OtherConditionsEast = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsSouth"
      hide-margin
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsSouth, `Other Conditions  ${south}`)"
      :current-value="model.OtherConditionsSouth"
      :choices="['Yes', 'No']"
      :label="`Other Conditions (${south})?`"
      @onChanged="model.OtherConditionsSouth = $event"
    />
    <checkbox-camera-wrapper-component
      v-show="model.OtherConditions"
      id="OtherConditionsWest"
      hide-margin
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsWest, `Other Conditions  ${west}`)"
      :current-value="model.OtherConditionsWest"
      :choices="['Yes', 'No']"
      :label="`Other Conditions (${west})?`"
      @onChanged="model.OtherConditionsWest = $event"
    />

    <span class="sectionHeader">Additional Information</span>

    <boolean-wrapper-component
      id="RoofMeasured"
      :validate="validate"
      :current-value="model.RoofMeasured"
      :choices="['Yes', 'No']"
      label="Did You Measure The Roof?"
      @onChanged="model.RoofMeasured = $event"
    />

    <numeric-wrapper-component
      v-show="model.RoofMeasured"
      id="RoofPitchZeroSqft"
      decimal
      label="Roof Pitch (0-6) Square Feet:"
      hide-margin
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchZeroSqft"
      @onChanged="model.RoofPitchZeroSqft = $event"
    />

    <numeric-wrapper-component
      v-show="model.RoofMeasured"
      id="RoofPitchSevenSqft"
      decimal
      label="Roof Pitch (7-9) Square Feet:"
      hide-margin
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchSevenSqft"
      @onChanged="model.RoofPitchSevenSqft = $event"
    />

    <numeric-wrapper-component
      v-show="model.RoofMeasured"
      id="RoofPitchTenSqft"
      decimal
      label="Roof Pitch (10-12) Square Feet:"
      hide-margin
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchTenSqft"
      @onChanged="model.RoofPitchTenSqft = $event"
    />

    <numeric-wrapper-component
      v-show="model.RoofMeasured"
      id="RoofStoryOneSqft"
      decimal
      label="First Story Square Feet:"
      hide-margin
      :validate="model.RoofMeasured"
      :current-value="model.RoofStoryOneSqft"
      @onChanged="model.RoofStoryOneSqft = $event"
    />

    <numeric-wrapper-component
      v-show="model.RoofMeasured"
      id="RoofStoryTwoSqft"
      decimal
      label="Second Story Square Feet:"
      hide-margin
      :validate="model.RoofMeasured"
      :current-value="model.RoofStoryTwoSqft"
      @onChanged="model.RoofStoryTwoSqft = $event"
    />

    <boolean-camera-wrapper-component
      id="RoofDiagramed"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDiagramed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDiagramed)"
      :validate="validate"
      :current-value="model.RoofDiagramed"
      :choices="['Yes', 'No']"
      label="Did You Diagram The Roof?"
      @onChanged="model.RoofDiagramed = $event"
    />

    <textbox-camera-wrapper-component
      id="AdditionalSummary"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalSummary)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalSummary)"
      :max-characters="8000"
      text-area
      :validate="validate"
      :current-value="model.AdditionalSummary"
      label="Additional Summary:"
      @onChanged="model.AdditionalSummary = $event"
    />

    <boolean-camera-wrapper-component
      id="OutBuildingDmg"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OutBuildingDmg)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OutBuildingDmg)"
      :validate="validate"
      :current-value="model.OutBuildingDamage"
      :choices="['Yes', 'No']"
      label="Out Building Damage?"
      @onChanged="model.OutBuildingDamage = $event"
    />

    <textbox-wrapper-component
      v-show="model.OutBuildingDamage"
      id="OutBuildingNotes"
      :max-characters="8000"
      text-area
      hide-margin
      :validate="model.OutBuildingDamage"
      :current-value="model.OutBuildingNotes"
      label="Out Building Notes:"
      @onChanged="model.OutBuildingNotes = $event"
    />

    <boolean-camera-wrapper-component
      id="RopeHarness"
      :custom-validator="model.RopeHarness ? 'Photo Required' : ''"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RopeHarness)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RopeHarness)"
      :validate="validate"
      :current-value="model.RopeHarness"
      :choices="['Yes', 'No']"
      label="Rope & Harness Used?"
      @onChanged="model.RopeHarness = $event"
    />

    <boolean-camera-wrapper-component
      id="TarpInstall"
      :custom-validator="model.TarpInstall ? '8 Photos Required' : ''"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TarpInstall)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TarpInstall)"
      :validate="validate"
      :current-value="model.TarpInstall"
      :choices="['Yes', 'No']"
      label="Tarp Install?"
      @onChanged="model.TarpInstall = $event"
    />

    <numeric-wrapper-component
      v-show="model.TarpInstall"
      id="TarpInstallSizeSf"
      decimal
      hide-margin
      :validate="model.TarpInstall"
      :current-value="model.TarpInstallSizeSf"
      label="Tarp Install Size (SF):"
      @onChanged="model.TarpInstallSizeSf = $event"
    />

    <numeric-wrapper-component
      v-show="model.TarpInstall"
      id="TarpResetSizeSf"
      decimal
      hide-margin
      :validate="model.TarpInstall"
      :current-value="model.TarpResetSizeSf"
      label="Tarp Install / Remove & Reset (SF):"
      @onChanged="model.TarpResetSizeSf = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState"
      id="EagleViewProvided"
      :validate="isAllState"
      :current-value="model.EagleViewProvided"
      :choices="['Yes', 'No']"
      label="Was a copy of Eagleview Provided?"
      @onChanged="model.EagleViewProvided = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState"
      id="RoleExplained"
      :validate="isAllState"
      :current-value="model.RoleExplained"
      :choices="['Yes', 'No']"
      label="Was Ladder Assist introduced & Role Explained?"
      @onChanged="model.RoleExplained = $event"
    />

    <boolean-wrapper-component
      id="OutsideAdjusterPresent"
      :validate="validate"
      :current-value="model.OutsideAdjusterPresent"
      :choices="['Yes', 'No']"
      label="Outside Adjuster Present During Inspection?"
      @onChanged="model.OutsideAdjusterPresent = $event"
    />

    <boolean-wrapper-component
      v-show="model.OutsideAdjusterPresent"
      id="OutsideAdjusterPresentOnRoof"
      hide-margin
      :validate="model.OutsideAdjusterPresent"
      :current-value="model.OutsideAdjusterPresentOnRoof"
      :choices="['Yes', 'No']"
      label="Outside Adjuster On Roof During Inspection?"
      @onChanged="model.OutsideAdjusterPresentOnRoof = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      id="OutsideAdjusterOnEdge"
      hide-margin
      :validate="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      :current-value="model.OutsideAdjusterOnEdge"
      :choices="['Yes', 'No']"
      label="Outside Adjuster On Edge of Roof?"
      @onChanged="model.OutsideAdjusterOnEdge = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      id="OutsideAdjusterOnLadder"
      hide-margin
      :validate="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      :current-value="model.OutsideAdjusterOnLadder"
      :choices="['Yes', 'No']"
      label="Outside Adjuster On Ladder During Inspection?"
      @onChanged="model.OutsideAdjusterOnLadder = $event"
    />

    <boolean-wrapper-component
      id="PublicAdjusterPresent"
      :validate="validate"
      :current-value="model.PublicAdjusterPresent"
      :choices="['Yes', 'No']"
      label="Public Adjuster Present During Inspection?"
      @onChanged="model.PublicAdjusterPresent = $event"
    />

    <boolean-wrapper-component
      v-show="model.PublicAdjusterPresent"
      id="RoofPublicAdjusterOnRoof"
      hide-margin
      :validate="model.PublicAdjusterPresent"
      :current-value="model.PublicAdjusterPresentOnRoof"
      :choices="['Yes', 'No']"
      label="Public  Adjuster On Roof During Inspection?"
      @onChanged="model.PublicAdjusterPresentOnRoof = $event"
    />

    <boolean-wrapper-component
      id="InsuredPresent"
      :validate="validate"
      :current-value="model.InsuredPresent"
      :choices="['Yes', 'No']"
      label="Insured Present?"
      @onChanged="model.InsuredPresent = $event"
    />

    <boolean-wrapper-component
      id="ContractorPresent"
      :validate="validate"
      :current-value="model.ContractorPresent"
      :choices="['Yes', 'No']"
      label="Contractor Present During Inspection?"
      @onChanged="model.ContractorPresent = $event"
    />

    <boolean-wrapper-component
      v-show="model.ContractorPresent"
      id="ContractorPresentOnRoof"
      hide-margin
      :validate="model.ContractorPresent"
      :current-value="model.ContractorPresentOnRoof"
      :choices="['Yes', 'No']"
      label="Contractor On Roof During Inspection?"
      @onChanged="model.ContractorPresentOnRoof = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState"
      id="LaAccompanied"
      :validate="isAllState"
      :current-value="model.LaAccompanied"
      :choices="['Yes', 'No']"
      label="Did LA Accompanied OA on walk around - collateral inspection?"
      @onChanged="model.LaAccompanied = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState"
      id="LaOnTime"
      :validate="isAllState"
      :current-value="model.LaOnTime"
      :choices="['Yes', 'No']"
      label="Did LA arrive on time to inspection?"
      @onChanged="model.LaOnTime = $event"
    />

    <boolean-wrapper-component
      v-show="isAllState"
      id="OaReview"
      :validate="isAllState"
      :current-value="model.OaReview"
      :choices="['Yes', 'No']"
      label="Did OA review RAF?"
      @onChanged="model.OaReview = $event"
    />

    <boolean-camera-wrapper-component
      v-show="isAllState"
      id="OaInitialsRequired"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OaSignature)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OaSignature)"
      :validate="isAllState"
      :disable-camera="true"
      :current-value="model.OaInitialsRequired"
      :choices="['Yes', 'No']"
      label="OA Initials Required?"
      @onChanged="model.OaInitialsRequired = $event"
    />

    <canvas-button-component
      v-show="model.OaInitialsRequired && model.OaInitialsCaptured == null"
      id="OaInitials"
      hide-margin
      :validate="isAllState && model.OaInitialsRequired"
      :company-id="companyId"
      :project-id="projectId"
      :property-inspection-form-id="propertyInspectionFormId"
      :current-value="model.OaInitialsCaptured"
      label="Please sign your initials in the box to the right:"
      @onChanged="model.OaInitialsCaptured = $event"
    />
  </div>
</template>

