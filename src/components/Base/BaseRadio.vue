<script>
import useUniqueID from '@/composables/useUniqueID'
import useForm from '@/composables/useForm'

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const uuid = useUniqueID().getID()
    const { updateValue } = useForm(props, context)
    return {
      updateValue,
      uuid,
    }
  },
}
</script>

<template>
  <input
    v-bind="{ ...$attrs, onChange: updateValue }"
    :id="uuid"
    type="radio"
    :checked="modelValue === value"
    class="w-4 h-4 border-gray-300 focus:ring-primary-500 text-primary-600"
  >
  <label v-if="label" class="ml-2" :for="uuid">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>
