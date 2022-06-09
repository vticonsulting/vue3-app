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
    class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-4 border border-transparent rounded-md cursor-pointer whitespace-nowrap text-primary-700 sm:w-auto bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    @click="handleClick"
  >
    <svg
      class="w-5 h-5 mr-2 -ml-1"
      x-description="Heroicon name: solid/check"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <span>Approve Area Schedule</span>
  </button>
</template>
