<template>
  <div class="cbContainer">
    <div
      class="eCheckbox boxLabel"
      :class="{ answered: (currentValue != null) && response && response != null }"
      @click="$emit('onchanged', SetResponse(true))"
    />
    <span class="choiceText">{{ choices[0] }}</span>
    &nbsp;&nbsp;
    <div
      class="eCheckbox boxLabel"
      :class="{ answered: (currentValue != null) && !response && response != null }"
      @click="$emit('onchanged', SetResponse(false))"
    />
    <span class="choiceText">{{ choices[1] }}</span>
  </div>
</template>
