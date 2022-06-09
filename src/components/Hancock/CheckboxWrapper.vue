<template id="checkbox-wrapper-template">
  <base-layout-component
    :validate="validate"
    :base-value="String(currentValue)"
    :label="label"
    :hide-margin="hideMargin"
  >
    <template #component1>
      <checkbox-component
        :current-value="currentValue"
        :allow-multiple="allowMultiple"
        :choices="choices"
        @onChanged="$emit('onchanged', $event)"
      />
    </template>
  </base-layout-component>
</template>
