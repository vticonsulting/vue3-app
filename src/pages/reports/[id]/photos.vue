<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Photo Set',
  },
})
</script>

<template>
  <article id="photo-set" class="max-w-screen-md px-8">
    <h1 class="mt-8 text-2xl font-bold text-primary-500">
      Inspection Photos
    </h1>

    <h2>1. Front of Risk</h2>

    <div class="mx-auto mt-8">
      <svg
        class="w-full h-64 text-gray-200 bg-white border-2 border-gray-300 border-dashed"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          d="M0 0l200 200M0 200L200 0"
        />
      </svg>
    </div>

    <p>
      Have all pertinent info show in photo Have option to add additional description to
      all photos if needed and populate onto photo set labeling as well such as size and
      material when applicable. Also have freeform narrative boxes from PIF populate under
      photo labeling for each corresponding area
    </p>

    <h2>2. Address</h2>
  </article>
</template>
