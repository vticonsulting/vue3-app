<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Scope Sheet',
  },
})
</script>

<template>
  <article id="scope-sheet" class="max-w-screen-md px-8">
    <h1 class="mt-8 text-2xl font-bold text-primary-500">
      Scope Sheet
    </h1>
    <!--
      Roof Diagram
      Make this Roof Diagram instead of Exterior and then have separate Elevations Diagram or Siding Diagram when applicable
    -->

    <!--
      Interior Diagram - Living Room
      (Hover Interior Product)
    -->
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
  </article>
</template>
