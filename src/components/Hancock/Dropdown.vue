<template>
  <div class="relative flex items-center w-full">
    <i-heroicons-solid v-if="showLoader" name="refresh" class="absolute z-10 ml-2 animate-spin" />
    <kendo-dropdownlist
      ref="ddList"
      style="width: 100%; min-width: 160px"
      :data-source="dataSource"
      data-text-field="text"
      data-value-field="value"
      @change="$emit('onchanged', $event)"
      @data-bound="onDataBound"
    />
  </div>
</template>
