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
    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    @click="handleClick"
  >
    Edit
  </button>
</template>
