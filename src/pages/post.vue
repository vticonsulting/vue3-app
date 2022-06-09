<script lang="ts">
export default {
  name: 'Post',
}
</script>

<template>
  <main class="flex-1">
    <article class="max-w-7xl">
      <header>
        <div class="flex justify-between">
          <h1>{{ $route.params.title }}</h1>
        </div>
      </header>

      <section class="px-8 bg-white">
        <div class="border-b border-gray-300" />
        <p>{{ $route.params.description }}</p>
      </section>
    </article>
  </main>
</template>
