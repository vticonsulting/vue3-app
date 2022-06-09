<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="container">
    <h1>User {{ route.params.id }}</h1>
  </div>
</template>
