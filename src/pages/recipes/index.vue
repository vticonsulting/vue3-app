<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RecipesView',
  metaInfo: {
    title: 'Recipes',
  },
})
</script>

<template>
  <article class="">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-6">
        <h1>Recipes</h1>
        <recipes-finder />
      </div>

      <div class="col-span-6">
        <h1 class="sm:px-8 sm:pt-6">
          Add your recipe
        </h1>
        <recipes-uploader />
      </div>
    </div>
  </article>
</template>
