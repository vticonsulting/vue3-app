<template>
  <textbox-camera-wrapper-component
    id="LossLocation"
    text-area
    disabled
    :max-characters="100"
    :validate="false"
    :disable-camera="fieldAssets.length >= 100 ? true : false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.Address)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.Address)"
    :current-value="location"
    label="Loss Location:"
  />
  <checkbox-wrapper-component
    id="DirectionNorth"
    :current-value="model.DirectionNorth"
    :choices="masterDirection"
    label="Directionality North:"
    @onChanged="model.DirectionNorth = $event"
  />
  <numeric-wrapper-component
    id="OutsideTemp"
    decimal
    :current-value="model.OutsideTemp"
    label="Outside Temperature (F):"
    @onChanged="model.OutsideTemp = $event"
  />
  <boolean-wrapper-component
    id="AllStateInspection"
    :current-value="model.AllStateInspection"
    :choices="['Yes', 'No']"
    label="Allstate Inspection?"
    @onChanged="model.AllStateInspection = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AllStateInspection"
    id="CollaborationSuccessfull"
    hide-margin
    :validate="model.AllStateInspection"
    :current-value="model.CollaborationSuccessfull"
    :choices="masterYesNoNa"
    label="Was the virtual collaboration successful?"
    @onChanged="model.CollaborationSuccessfull = $event"
  />
  <boolean-wrapper-component
    v-show="model.AllStateInspection"
    id="AllPhotos"
    :validate="model.AllStateInspection"
    :current-value="model.AllPhotos"
    hide-margin
    :choices="['Yes', 'No']"
    label="Have All Photos Been Taken?"
    @onChanged="model.AllPhotos = $event"
  />
  <boolean-wrapper-component
    v-show="model.AllStateInspection"
    id="AllPhotosElevation"
    :validate="model.AllStateInspection"
    :current-value="model.AllPhotosElevation"
    :choices="['Yes', 'No']"
    hide-margin
    label="Damaged Elevation(s)?"
    @onChanged="model.AllPhotosElevation = $event"
  />
  <boolean-wrapper-component
    v-show="model.AllStateInspection"
    id="AllPhotosAssessment"
    :validate="model.AllStateInspection"
    :current-value="model.AllPhotosAssessment"
    :choices="['Yes', 'No']"
    hide-margin
    label="Repairability Assessment?"
    @onChanged="model.AllPhotosAssessment = $event"
  />
  <boolean-wrapper-component
    v-show="model.AllStateInspection"
    id="AllPhotosAppearance"
    :validate="model.AllStateInspection"
    :current-value="model.AllPhotosAppearance"
    :choices="['Yes', 'No']"
    hide-margin
    label="Appearance Test?"
    @onChanged="model.AllPhotosAppearance = $event"
  />
  <boolean-camera-wrapper-component
    id="AllPhotosShingle"
    :disable-camera="fieldAssets.length >= 100"
    :current-value="model.AllPhotosShingle"
    :field-assets="ReturnFieldAssets(assetFieldEnum.ShingleGauge)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.ShingleGauge)"
    :choices="['Yes', 'No']"
    label="Shingle Gauge Photo Taken?"
    @onChanged="model.AllPhotosShingle = $event"
  />
  <boolean-camera-wrapper-component
    id="AllPhotosPitch"
    :disable-camera="fieldAssets.length >= 100"
    :current-value="model.AllPhotosPitch"
    :field-assets="ReturnFieldAssets(assetFieldEnum.PitchGauge)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchGauge)"
    :choices="['Yes', 'No']"
    label="Pitch Gauge Photo Taken?"
    @onChanged="model.AllPhotosPitch = $event"
  />
  <boolean-wrapper-component
    id="ElevationInspected"
    :validate="true"
    :current-value="model.ElevationInspected"
    :choices="['Yes', 'No']"
    label="Was the Elevation Inspected?"
    @onChanged="onSectionInspectedChange('Elevation', $event)"
  />
  <boolean-wrapper-component
    id="InteriorInspected"
    :validate="true"
    :current-value="model.InteriorInspected"
    :choices="['Yes', 'No']"
    label="Was the Interior Inspected?"
    @onChanged="onSectionInspectedChange('Interior', $event)"
  />
  <boolean-wrapper-component
    id="RoofInspected"
    :validate="true"
    :current-value="model.RoofInspected"
    :choices="['Yes', 'No']"
    label="Was the Roof Inspected?"
    @onChanged="onSectionInspectedChange('Roof', $event)"
  />
  <elevation-section-component
    v-show="model.ElevationInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :property-inspection-form-id="propertyInspectionFormId"
    :validate="model.ElevationInspected == null ? false : model.ElevationInspected"
    :field-assets="fieldAssets"
    :north="north"
    :south="south"
    :east="east"
    :west="west"
  />
  <interior-section-component
    v-show="model.InteriorInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :property-inspection-form-id="propertyInspectionFormId"
    :validate="model.InteriorInspected == null ? false : model.InteriorInspected"
    :field-assets="fieldAssets"
  />
  <roof-section-component
    v-show="model.RoofInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :north="north"
    :south="south"
    :east="east"
    :west="west"
    :validate="model.RoofInspected == null ? false : model.RoofInspected"
    :property-inspection-form-id="propertyInspectionFormId"
    :field-assets="fieldAssets"
  />
  <asset-viewer-component />
</template>
