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
    <HelloWorld msg="Testing" />

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

    <div class="bg-[image:linear-gradient(to_right,theme(colors.red.500)_75%,theme(colors.red.500/25%))]">
      Testing
    </div>

    Mouse position is at: {{ x }}, {{ y }}

    <button type="button" class="bg-indigo-500 hover:enabled:bg-indigo-400 disabled:opacity-75" disabled>
      Processing...
    </button>

    <table class="border-separate border-spacing-2">
      <thead>
        <tr>
          <th class="border border-slate-300">
            State
          </th>
          <th class="border border-slate-300">
            City
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300">
            Indiana
          </td>
          <td class="border border-slate-300">
            Indianapolis
          </td>
        </tr>
      </tbody>
    </table>

    <div class="[&:nth-child(3)]:py-0">
      <!-- ... -->
    </div>

    <form>
      <div>
        <label for="email">Email</label>
        <div>
          <input id="email" type="text" required class="peer">
          <div class="peer-optional:hidden">
            Required
          </div>
        </div>
      </div>
      <div>
        <label for="name">Name</label>
        <div>
          <input id="name" type="text" class="peer">
          <div class="peer-optional:hidden">
            Required
          </div>
        </div>
      </div>
    </form>

    <table class="border-separate border-spacing-0">
      <thead class="bg-gray-50">
        <tr>
          <th class="sticky top-0 z-10 border-b border-gray-300">
            Name
          </th>
          <th class="sticky top-0 z-10 border-b border-gray-300">
            Email
          </th>
          <th class="sticky top-0 z-10 border-b border-gray-300">
            Role
          </th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="border-b border-gray-200">
            Courtney Henry
          </td>
          <td class="border-b border-gray-200">
            courtney.henry@example.com
          </td>
          <td class="border-b border-gray-200">
            Admin
          </td>
        </tr>
      </tbody>
    </table>

    <dialog class="backdrop:bg-slate-900/50">
      <form method="dialog">
        <!-- ... -->
        <button value="cancel">
          Cancel
        </button>
        <button>Submit</button>
      </form>
    </dialog>

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
