<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="SendBase()"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template #component1>
        <numeric-component
          :decimal="decimal"
          :label="slotALabel"
          :current-value="slotAValue"
          @on-changed="$emit('onslotachanged', $event)"
        />
      </template>
      <template #component2>
        <numeric-component
          :decimal="decimal"
          :label="slotBLabel"
          :current-value="slotBValue"
          @on-changed="$emit('onslotbchanged', $event)"
        />
      </template>
      <template #component3>
        <numeric-component
          :decimal="decimal"
          :label="slotCLabel"
          :current-value="slotCValue"
          @on-changed="$emit('onslotcchanged', $event)"
        />
      </template>
      <template #component4>
        <numeric-component
          :decimal="decimal"
          :label="slotDLabel"
          :current-value="slotDValue"
          @on-changed="$emit('onslotdchanged', $event)"
        />
      </template>
    </base-layout-component>
  </div>
</template>
