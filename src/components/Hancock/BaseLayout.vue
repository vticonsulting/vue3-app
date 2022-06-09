<template>
  <div class="baseContainer" :class="{ noMargin: hideMargin }">
    <div
      class="labelContainer"
      :class="{ failedValidation: validating && !validationPassed }"
    >
      {{ label }}
      <span style="color:red;">{{ customValidator }}</span>
      <span style="color:white;font-size:2pt">{{ baseValue }}</span>
    </div>
    <div class="slotContainer">
      <div class="slotRow">
        <div id="slot1">
          <slot name="component1" />
        </div>
        <div id="slot2">
          <slot name="component2" />
        </div>
      </div>
      <div class="slotRow">
        <div id="slot3">
          <slot name="component3" />
        </div>
        <div id="slot4">
          <slot name="component4" />
        </div>
      </div>
    </div>
  </div>
</template>
