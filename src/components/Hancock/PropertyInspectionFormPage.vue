<template id="property-inspections-form-page-index">
  <pifa-header-component :exemplar-api-url="exemplarApiUrl" />
  <project-details-component v-if="projectDetails" :model="projectDetails" />
  <asset-grid-menu-component :img-path="imgPath" :img-token="imgToken" />
  <asset-grid-component :img-path="imgPath" :img-token="imgToken" />
  <button type="button" class="btn btn-light" @click="onSaveClicked">
    <i class="fas fa-save" /> Save
  </button>
  <button type="button" class="btn btn-light" @click="onReportsClicked">
    <i class="fas fa-file-alt" /> Reports
  </button>
  <button type="button" class="btn btn-light" @click="onReturnClicked">
    <i class="fas fa-layer-group" /> PIFA
  </button>
  <main-section-component
    v-if="propertyInspectionFormId > 0"
    :company-id="projectDetails.CompanyId"
    :project-id="projectDetails.ProjectId"
    :location="location"
    :property-inspection-form-id="propertyInspectionFormId"
    :field-assets="fieldAssets"
    :api-client="exemplarApiUrl"
  />
</template>
