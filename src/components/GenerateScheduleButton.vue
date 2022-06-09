<script>
export default {
  name: 'GenerateScheduleButton',
  // props: {
  //   isLoading: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    handleClick() {
      this.isLoading = true
      setTimeout(() => (this.isLoading = false), 3000)
    },
  },
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer bg-primary-600 sm:w-auto whitespace-nowrap hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    @click="handleClick"
  >
    <!-- <loading-indicator v-if="isLoading" class="mr-2 -ml-1 text-white animate-spin" /> -->
    <!-- <icon-check-solid v-if="!isLoading" class="mr-2 -ml-1 text-gray-400" /> -->
    <!-- <icon-beaker-solid v-if="false" class="mr-2 -ml-1 text-gray-400" /> -->
    <span>Generate Schedule</span>
  </button>
</template>
