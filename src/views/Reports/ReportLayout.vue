<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Report',
  },
})
</script>

<template>
  <main class="flex-1 pb-24">
    <article>
      <h1>Report</h1>
      <nav class="flex items-center space-x-4">
        <router-link :to="{ name: 'report-overview', params: { id: 'inspection' } }">
          Property Overview
        </router-link>
        <router-link :to="{ name: 'report-summary', params: { id: 'inspection' } }">
          Inspection Summary
        </router-link>
        <router-link :to="{ name: 'report-details', params: { id: 'inspection' } }">
          Report Details
        </router-link>
        <router-link :to="{ name: 'report-scope', params: { id: 'inspection' } }">
          Scope Sheet
        </router-link>
        <router-link :to="{ name: 'report-photos', params: { id: 'inspection' } }">
          Photo Set
        </router-link>
      </nav>

      <router-view />
    </article>
  </main>
</template>
