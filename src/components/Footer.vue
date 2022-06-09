<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="mt-6 text-xl">
    <button class="mx-2 outline-none icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
      <i-carbon-sun />
    </button>
  </nav>
</template>
