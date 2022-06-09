<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template #component1>
        <checkbox-component
          :current-value="currentValue"
          :choices="choices"
          @onChanged="$emit('onchanged', $event)"
        />
      </template>
      <template #component2>
        <camera-component
          :disable="disableCamera"
          :current-value="currentValue"
          :field-assets="fieldAssets"
          :asset-upload-model="assetUploadModel"
        />
      </template>
    </base-layout-component>
  </div>
</template>
