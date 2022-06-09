<script>
export default {
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
    class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer sm:w-auto whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    @click="handleClick"
  >
    <!-- <icon-document-text-solid class="w-5 h-5 mr-2 -ml-1 text-gray-400" /> -->
    <span class="whitespace-nowrap">View Mileage Log</span>
  </button>
</template>
