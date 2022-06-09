<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import type { AssetUploadModel, FieldAsset } from '@/types'

export default class TextboxCameraWrapperComponent extends Vue {
  @Prop({ required: true, type: String })
    label: string

  @Prop({ required: true, type: String })
    currentValue: string

  @Prop({ required: false, type: Number, default: 500 })
    maxCharacters: number

  @Prop({ required: false, type: Number, default: 500 })
    minCharacters: number

  @Prop({ required: false, type: Boolean })
    textArea: boolean

  @Prop({ required: false, type: Boolean })
    hideMargin!: boolean

  @Prop({ required: false, type: Boolean, default: false })
    disabled!: boolean

  @Prop({ required: false, type: Boolean, default: true })
    validate: boolean

  @Prop({ required: true, type: Array })
    fieldAssets!: Array<FieldAsset> | null

  @Prop({ required: true, type: Object })
    assetUploadModel!: AssetUploadModel

  @Prop({ required: true, type: Boolean, default: false })
    disableCamera: boolean

  constructor() {
    super()
  }
}
</script>

<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template #component1>
        <textbox-component
          :current-value="currentValue"
          :text-area="textArea"
          :max-characters="maxCharacters"
          :min-characters="minCharacters"
          :disabled="disabled"
          :hide-margin="hideMargin"
          @onChanged="$emit('onchanged', $event)"
        />
      </template>

      <template #component2>
        <camera-component
          :disable="disableCamera"
          :current-value="currentValue != null ? String(currentValue) : ''"
          :field-assets="fieldAssets"
          :asset-upload-model="assetUploadModel"
        />
      </template>
    </base-layout-component>
  </div>
</template>
