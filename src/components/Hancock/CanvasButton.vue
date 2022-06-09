<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template #component1>
        <canvas
          id="signature"
          class="signature-pad"
          width="200"
          height="70"
          prefix="my-canvas"
          style="left: 0; top: 0; border: 1px solid #007bff;"
          @onChanged="$emit('onchanged', $event)"
        />
      </template>
      <template #component2>
        <div style="margin:6px">
          <b-button
            variant="primary"
            :disabled="processing"
            @click.prevent="onSaveClick"
          >
            Save
          </b-button>
          <b-button variant="primary" @click.prevent="onClearClick">
            Clear
          </b-button>
        </div>
      </template>
    </base-layout-component>
  </div>
</template>
