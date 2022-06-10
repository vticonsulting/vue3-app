<script setup lang="ts">
/* eslint-disable no-console */
import { computed } from 'vue'
import { Sortable } from 'sortablejs-vue3'
import type { SortableOptions } from 'sortablejs'
import { useMyMouse } from '@/use'

// const myVar = import.meta.env.SUPABASE_URL
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log({ supabaseUrl, supabaseKey })
console.log(supabaseUrl, supabaseKey)

const { x, y } = useMyMouse()

const elements = computed(() => {
  return [
    {
      id: '1',
      text: 'One',
      children: [
        {
          id: '1-1',
          text: 'One-One',
          children: [
            {
              id: '1-1-1',
              text: 'One-One-One',
            },
            {
              id: '1-1-2',
              text: 'One-One-Two',
            },
          ],
        },
        {
          id: '1-2',
          text: 'One-Two',
        },
      ],
    },
    {
      id: '2',
      text: 'Two',
    },
    {
      id: '3',
      text: 'Three',
    },
  ]
})

const logEvent = (evt: Event, evt2?: Event) => {
  if (evt2)
    console.log(evt, evt2)

  else
    console.log(evt)
}

const options = computed(() => {
  return {
    draggable: '.draggable',
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'drag',
  } as SortableOptions
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <main>
    <Sortable
      :list="elements" item-key="id" :options="options" @change="logEvent" @choose="logEvent"
      @unchoose="logEvent" @start="logEvent" @end="logEvent" @add="logEvent" @update="logEvent" @sort="logEvent"
      @remove="logEvent" @filter="logEvent" @move="logEvent" @clone="logEvent"
    >
      <template #item="{ element, index }">
        <div :key="element.id" class="draggable">
          {{ element.text }}
          <Sortable
            v-if="element.children" :list="element.children" item-key="id" :options="options" @change="logEvent"
            @choose="logEvent" @unchoose="logEvent" @start="logEvent" @end="logEvent" @add="logEvent" @update="logEvent"
            @sort="logEvent" @remove="logEvent" @filter="logEvent" @move="logEvent" @clone="logEvent"
          >
            <template #item="{ element, index }">
              <div :key="element.id" class="draggable">
                {{ element.text }}
              </div>
            </template>
          </Sortable>
        </div>
      </template>
    </Sortable>

    Mouse position is at: {{ x }}, {{ y }}

    <div action="" class="space-y-4">
      <div>
        <input
          id="input" v-model="name" :placeholder="t('intro.whats-your-name')"
          :aria-label="t('intro.whats-your-name')" type="text" autocomplete="false" @keydown.enter="go"
        >
        <label class="hidden" for="input">
          {{ t('intro.whats-your-name') }}
        </label>
      </div>
      <div>
        <button class="btn" :disabled="!name" @click="go">
          {{ t('button.go') }}
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  max-width: 800px;
  margin: 0 auto;
}

.draggable {
  background: #fff;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  cursor: move;
}

.ghost {
  opacity: 0.5;
  background: #fff;
  border: 1px dashed #ccc;
}

.drag {
  background: #f5f5f5;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
