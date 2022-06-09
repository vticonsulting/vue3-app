<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Projects',
  },
})
</script>

<template>
  <article>
    <projects-page-heading />
    <main class="flex flex-1 text-sm">
      <aside class="hidden sm:block w-80">
        <section class="px-8 mt-8">
          <h2 class="pb-2 font-bold border-b border-primary-500">
            Projects
          </h2>
        </section>
      </aside>
      <article class="flex-1">
        <!--  -->
      </article>
    </main>
  </article>
</template>
