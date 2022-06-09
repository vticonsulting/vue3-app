<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo() {
    return {
      title: 'AutoScheduler',
    }
  },
})
</script>

<template>
  <main>
    <!-- <auto-scheduler-header /> -->
    <!-- <auto-scheduler-header-actions /> -->
    <!-- <auto-scheduler-page-header-actions /> -->
    <div class="px-8 mt-8">
      <schedule-filters />
      <page-loading-indicator />
    </div>
    <!-- <inspection-route-track /> -->
  </main>
</template>
