<template>
  <div style="width:100%">
    <base-layout-component :validate="validate" base-value :label="label" :hide-margin="hideMargin">
      <template #component1>
        <camera-component
          :disable="disableCamera"
          :field-assets="northFieldAssets"
          :label="slotALabel"
          :asset-upload-model="northAssetUploadModel"
          :dont-disable="true"
        />
      </template>
      <template #component2>
        <camera-component
          :disable="disableCamera"
          :field-assets="eastFieldAssets"
          :label="slotBLabel"
          :asset-upload-model="eastAssetUploadModel"
          :dont-disable="true"
        />
      </template>
      <template #component3>
        <camera-component
          :disable="disableCamera"
          :field-assets="southFieldAssets"
          :label="slotCLabel"
          :asset-upload-model="southAssetUploadModel"
          :dont-disable="true"
        />
      </template>
      <template #component4>
        <camera-component
          :disable="disableCamera"
          :field-assets="westFieldAssets"
          :label="slotDLabel"
          :asset-upload-model="westAssetUploadModel"
          :dont-disable="true"
        />
      </template>
    </base-layout-component>
  </div>
</template>
