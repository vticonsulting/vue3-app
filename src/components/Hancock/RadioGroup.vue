<script>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const mem = ref(memoryOptions[2])

    return {
      memoryOptions,
      mem,
    }
  },
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-medium text-gray-900">
        RAM
      </h2>
      <a href="#" class="text-sm font-medium text-primary-600 hover:text-primary-500">See performance specs</a>
    </div>

    <RadioGroup v-model="mem" class="mt-2">
      <RadioGroupLabel class="sr-only">
        Choose a memory option
      </RadioGroupLabel>
      <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
        <RadioGroupOption v-for="option in memoryOptions" :key="option.name" v-slot="{ active, checked }" as="template" :value="option" :disabled="!option.inStock">
          <div class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1" :class="[option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', checked ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50']">
            <RadioGroupLabel as="p">
              {{ option.name }}
            </RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>
