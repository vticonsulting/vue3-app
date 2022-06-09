<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

interface OurModelType {
  foo: string
}

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object as PropType<OurModelType>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const theModel = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value),
    })

    return { theModel }
  },
})
</script>
