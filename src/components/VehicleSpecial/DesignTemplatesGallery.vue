<template>
  <section class="mt-4 border-t-2 print:border-t-0 border-primary-500">
    <!-- Design Templates Thumbnail Gallery -->
    <ul
      role="list"
      class="grid grid-cols-2 pt-8 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <li v-for="n in 16" :key="`template-${n}`" class="relative">
        <p>Template Name</p>
        <div
          class="block w-full overflow-hidden bg-gray-100 group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
        >
          <img
            src="/assets/img/vehicles/nikola_badger1.jpg"
            alt=""
            class="object-cover pointer-events-none group-hover:opacity-75"
          >
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 dark:focus:bg-primary-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="country-option-1"
            aria-describedby="country-option-1"
            value="USA"
          >
          <label
            for="country-option-1"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select this design
          </label>
        </div>
      </li>
    </ul>
  </section>
</template>
