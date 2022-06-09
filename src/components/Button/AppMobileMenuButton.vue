<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppMobileMenuButton extends Vue {
  isOpen = false

  toggleMenu() {
    this.isOpen = !this.isOpen
  }
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md bg-primary-600 text-primary-200 hover:bg-primary-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
    aria-controls="mobile-menu"
    aria-expanded="false"
    @click="toggleMenu"
  >
    <span class="sr-only">Open main menu</span>
    <i-carbon-menu :class="isOpen ? 'hidden' : 'block'" />
    <i-carbon-close :class="isOpen ? 'block' : 'hidden'" />
  </button>
</template>
