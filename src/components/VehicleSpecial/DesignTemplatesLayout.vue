<template>
  <article class="p-16">
    <create-vehicle-special-page-heading />

    <main class="p-4 py-2 mt-4 border-2 border-primary-500">
      <section class="mt-4 border-primary-500">
        <design-templates-header />
        <design-templates-gallery />
      </section>
    </main>

    <!--  -->
    <div class="grid gap-8 mt-4 sm:grid-cols-5">
      <button class="py-2 font-bold border-2 border-primary-500">
        Preview
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Save & Publish Later
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Cancel
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Previous
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Next
      </button>
    </div>
  </article>
</template>
