<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="mx-2 icon-btn" to="/" :title="t('button.home')">
      <div i-carbon-home />
    </RouterLink>
    <RouterLink class="mx-2 icon-btn" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </nav>
</template>
