<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppSettingsButton extends Vue {
  isOpen = false

  toggle() {
    this.isOpen = !this.isOpen
  }
}
</script>

<template>
  <button
    class="inline-flex items-center px-4 py-2 rounded cursor-pointer whitespace-nowrap hover:bg-primary-800"
    @click="toggle"
  >
    <i-carbon-settings class="mr-2 -ml-1 text-gray-400" />
    <span>Settings</span>
  </button>
</template>
