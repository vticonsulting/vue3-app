<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="p-4 text-white bg-black">
      <h1>{{ t('intro.desc') }}</h1>
    </header>
    <main class="flex-1 px-4 py-10 text-gray-700 dark:text-gray-200">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
