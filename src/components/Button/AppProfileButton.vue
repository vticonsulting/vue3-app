<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppProfileDropdown extends Vue {
  isOpen = false
}
</script>

<template>
  <div class="relative flex-shrink-0 ml-3">
    <div>
      <button
        id="user-menu-button"
        type="button"
        class="flex text-sm text-white rounded-full bg-primary-600 focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
        aria-expanded="false"
        aria-haspopup="true"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Open user menu</span>
        <base-avatar />
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-black ring-1 ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <a id="user-menu-item-1" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">
        Settings
      </a>
      <a id="user-menu-item-2" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">
        Sign out
      </a>
    </div>
  </div>
</template>
