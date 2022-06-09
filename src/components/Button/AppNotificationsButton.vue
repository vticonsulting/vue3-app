<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppNotificationsButton extends Vue {
  isOpen = false

  toggle() {
    this.isOpen = !this.isOpen
  }
}
</script>

<template>
  <button type="button" class="flex-shrink-0 p-1 rounded-full bg-primary-600 text-primary-200 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600">
    <span class="sr-only">View notifications</span>
    <i-carbon-notification />
  </button>
</template>
