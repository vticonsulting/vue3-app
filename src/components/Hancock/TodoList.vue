<script setup lang="ts">
const items = ref([
  { id: 1 },
])
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      <slot :item="item" :index="index" />
    </li>
  </ul>
</template>
