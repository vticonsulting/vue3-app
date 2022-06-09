<template>
  <div class="flexRowStartWrap" style="width:100%;">
    <div v-for="choice in choices" class="choiceContainer">
      <div
        class="eCheckbox boxLabel"
        :class="{ answered: Selected(choice) }"
        @click="$emit('onchanged', SetResponse(choice, response))"
      />
      <span class="choiceText">{{ choice }}</span>
    </div>
  </div>
</template>
