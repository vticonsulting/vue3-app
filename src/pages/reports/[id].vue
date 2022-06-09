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
        <router-link :to="{ name: 'reports-id-overview', params: { id: 1 } }">
          Property Overview
        </router-link>
        <router-link :to="{ name: 'reports-id-summary', params: { id: 1 } }">
          Inspection Summary
        </router-link>
        <router-link :to="{ name: 'reports-id-details', params: { id: 1 } }">
          Report Details
        </router-link>
        <router-link :to="{ name: 'reports-id-scope', params: { id: 1 } }">
          Scope Sheet
        </router-link>
        <router-link :to="{ name: 'reports-id-photos', params: { id: 1 } }">
          Photo Set
        </router-link>
      </nav>

      <router-view />
    </article>
  </main>
</template>
