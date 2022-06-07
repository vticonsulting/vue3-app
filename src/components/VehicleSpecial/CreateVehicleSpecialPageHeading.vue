<template>
  <header class="grid lg:grid-cols-2">
    <div>
      <span class="text-xs tracking-wider uppercase">Specials</span>
      <h1 class="text-xl font-semibold text-gray-900">
        <slot>Create a Vehicle Special</slot>
      </h1>
    </div>

    <div class="grid mt-2 lg:text-right">
      <h2>Step 1 of 3: Select a Design Template</h2>

      <ol class="mt-4 list-decimal list-inside lg:list-none lg:grid lg:grid-cols-3">
        <li class="border current">
          <span class="items-center justify-center hidden step-indicator lg:flex">1</span>
          <span class="font-bold underline lg:sr-only">Select A Design Template</span>
        </li>
        <li class="border">
          <span class="items-center justify-center hidden step-indicator lg:flex">2</span>
          <span class="lg:sr-only">Pricing, Disclaimer & Details</span>
        </li>
        <li class="border">
          <span class="items-center justify-center hidden step-indicator lg:flex">3</span>
          <span class="lg:sr-only">Special Info, Branding & Images</span>
        </li>
      </ol>
    </div>
  </header>
</template>
