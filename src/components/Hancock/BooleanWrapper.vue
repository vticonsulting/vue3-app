<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template #component1>
        <boolean-component
          :current-value="currentValue"
          :choices="choices"
          @onChanged="$emit('onchanged', $event)"
        />
      </template>
    </base-layout-component>
  </div>
</template>
