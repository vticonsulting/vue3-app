<script lang="ts">
/* eslint-disable no-console */
import { defineComponent, ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import QrcodeVue from 'qrcode.vue'
import { useSound } from '@vueuse/sound'
import { useMachine } from '@xstate/vue'
import { createMachine } from 'xstate'
import store from '@/gstore'
import { supabase } from '@/supabase'
import Button from '@/assets/sound/fanfare.mp3'

// createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_SECRET_KEY,
// )

createClient(
  'https://uwrqrpkjndpqvexiyojs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM',
)

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
})

export default defineComponent({
  name: 'Dashboard',
  metaInfo: {
    title: 'Hancock Claims',
    // override the parent template and just use the above title only
    titleTemplate: null,
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true },
      { src: '/assets/js/waypoints/lib/noframework.waypoints.min.js', async: true, defer: true },
    ],
    // path/to/noframework.waypoints.min.js
  },
  components: {
    QrcodeVue,
  },
  setup() {
    const { play, stop } = useSound(Button)
    const { state, send } = useMachine(toggleMachine)

    // Create data / vars
    const appReady = ref(null)
    // Check to see if user is already logged in
    const user = supabase.auth.user()
    // If user does not exist, need to make app ready
    if (!user)
      appReady.value = true

    // Runs when there is a auth state change
    // if user is logged in, this will fire
    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session)
      appReady.value = true
    })

    interface Data {
      name: string
      type: 'numeric' | 'nominal'
      values: any[]
    }[]

    const filteringOptions = {
      data: [
        {
          name: 'First Name',
          type: 'nominal',
          values: [],
        },
        {
          name: 'Last Name',
          type: 'nominal',
          values: [],
        },
        {
          name: 'Grade',
          type: 'numeric',
          values: [],
        },
      ],
      methods: {
        numeric: { '=': () => {}, '>': () => {}, '<': () => {} },
        nominal: { contains: () => {}, startsWith: () => {}, endsWith: () => {} },
      },
    }

    return {
      appReady,
      play,
      stop,
      state,
      send,
    }
  },
  data() {
    return {
      selectedDate: null,
      markers: [],
      value: 'https://example.com',
      size: 200,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
      },
    }
  },

  async mounted() {
    console.log(supabase)
    // await this.$gmapApiPromiseLazy()

    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({lat: 1.38, lng: 103.80})
    // })

    // this.markers = [
    //   {
    //     location: new google.maps.LatLng({ lat: 3, lng: 101 }),
    //     weight: 100,
    //   },
    //   {
    //     location: new google.maps.LatLng({ lat: 5, lng: 99 }),
    //     weight: 50,
    //   },
    //   {
    //     location: new google.maps.LatLng({ lat: 6, lng: 97 }),
    //     weight: 80,
    //   }
    // ];

    // const waypoint = new Waypoint({
    //   element: document.getElementById('waypoint'),
    //   handler: function(direction) {
    //     console.log('Scrolled to waypoint!')
    //   }
    // })

    // const printButton = document.querySelector('#print-button')

    // printButton.addEventListener('click', () => {
    //   window.print()
    // })

    // window.userToken = null

    // document.addEventListener('DOMContentLoaded', function (event) {
    //   var signUpForm = document.querySelector('#sign-up')
    //   signUpForm.onsubmit = signUpSubmitted.bind(signUpForm)

    //   var logInForm = document.querySelector('#log-in')
    //   logInForm.onsubmit = logInSubmitted.bind(logInForm)

    //   var userDetailsButton = document.querySelector('#user-button')
    //   userDetailsButton.onclick = fetchUserDetails.bind(userDetailsButton)

    //   var logoutButton = document.querySelector('#logout-button')
    //   logoutButton.onclick = logoutSubmitted.bind(logoutButton)
    // })

    // const signUpSubmitted = (event) => {
    //   event.preventDefault()
    //   const email = event.target[0].value
    //   const password = event.target[1].value

    //   supabase.auth
    //     .signUp({ email, password })
    //     .then((response) => {
    //       response.error ? alert(response.error.message) : setToken(response)
    //     })
    //     .catch((err) => {
    //       alert(err)
    //     })
    // }

    // const logInSubmitted = (event) => {
    //   event.preventDefault()
    //   const email = event.target[0].value
    //   const password = event.target[1].value

    //   supabase.auth
    //     .signIn({ email, password })
    //     .then((response) => {
    //       response.error ? alert(response.error.message) : setToken(response)
    //     })
    //     .catch((err) => {
    //       alert(err.response.text)
    //     })
    // }

    // const fetchUserDetails = () => {
    //   alert(JSON.stringify(supabase.auth.user()))
    // }

    // const logoutSubmitted = (event) => {
    //   event.preventDefault()

    //   supabase.auth
    //     .signOut()
    //     .then((_response) => {
    //       document.querySelector('#access-token').value = ''
    //       document.querySelector('#refresh-token').value = ''
    //       alert('Logout successful')
    //     })
    //     .catch((err) => {
    //       alert(err.response.text)
    //     })
    // }

    // function setToken(response) {
    //   if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    //     alert('Confirmation Email Sent')
    //   } else {
    //     document.querySelector('#access-token').value = response.session.access_token
    //     document.querySelector('#refresh-token').value = response.session.refresh_token
    //     alert('Logged in as ' + response.user.email)
    //   }
    // }
  },
  methods: {
    test(dataUrl, id) {
      console.log(dataUrl, id)
    },
    onWaypoint({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN)
        console.log('waypoint going in!')

      if (direction === this.$waypointMap.DIRECTION_TOP)
        console.log('waypoint going top!')
    },
  },
})
</script>

<template>
  <main class="flex-1 pb-24">
    <hero-component>
      <button label="Trumpet" @click="play" @mouseleave="stop">
        Dashboard
      </button>
    </hero-component>

    <!-- Form Elements -->
    <!-- <section class="px-8 mt-8 antialiased text-gray-900">
      <div class="max-w-xl md:max-w-4xl">
        <h1 class="text-2xl font-semibold text-primary-900">
          Form Elements
        </h1>

        <p class="mt-2 text-lg text-gray-500">
          These are form elements this plugin styles by default.
        </p>

        <div class="grid items-start grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <div class="grid grid-cols-1 gap-6 ">
            <label class="block font-mono">
              <span class="text-gray-700">Input (text)</span>
              <input type="text" placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (email)</span>
              <input type="email" placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (email, multiple)</span>
              <input type="email" multiple placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (password)</span>
              <input type="password" placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (date)</span>
              <input type="date">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (datetime-local)</span>
              <input type="datetime-local">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (month)</span>
              <input type="month">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (number)</span>
              <input type="number">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (search)</span>
              <input type="search">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (time)</span>
              <input type="time">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (week)</span>
              <input type="week">
            </label>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Input (tel)</span>
              <input type="tel" multiple placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (url)</span>
              <input type="url" multiple placeholder="john@example.com">
            </label>
            <label class="block">
              <span class="text-gray-700">Select</span>
              <select>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Select (multiple)</span>
              <select multiple>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Textarea</span>
              <textarea rows="3" placeholder="Enter some long form content." />
            </label>
            <fieldset class="block">
              <legend class="text-gray-700">
                Checkboxes
              </legend>
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" checked>
                    <span class="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox">
                    <span class="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox">
                    <span class="ml-2">Option 3</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset class="block">
              <legend class="text-gray-700">
                Radio Buttons
              </legend>
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input type="radio" checked name="radio-direct" value="1">
                    <span class="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="radio" name="radio-direct" value="2">
                    <span class="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="radio" name="radio-direct" value="3">
                    <span class="ml-2">Option 3</span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="max-w-4xl py-12">
        <h2 class="text-lg font-bold">
          Untouched
        </h2>

        <p class="mt-2 text-lg text-gray-500">
          These are form elements we don't handle (yet?), but we use this to make sure we haven't
          accidentally styled them by mistake.
        </p>

        <div class="grid items-start grid-cols-2 gap-6 mt-8">
          <div class="grid grid-cols-1 gap-6">
            <label class="block ">
              <span class="text-gray-700">Input (range)</span>
              <input type="range" class="block w-full h-2 mt-1 appearance-none bg-primary-300">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (color)</span>
              <input type="color" class="block w-full mt-1">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (file)</span>
              <input type="file" class="block w-full mt-1">
            </label>
            <label class="block">
              <span class="text-gray-700">Input (file, multiple)</span>
              <input type="file" multiple class="block w-full mt-1">
            </label>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="px-8 mt-8">
      <GmapMap
        :center="{lat: 10, lng: 10 }"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker
          ref="mapRef"
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
    </section> -->

    <section v-if="false" class="p-2 mt-8 border rounded shadow border-primary-500">
      <div class="p-2">
        <base-editor class="border border-primary-500" msg="Milkdown x Vue2" />
      </div>
    </section>

    <page-loading-indicator />

    <!-- <vue-visual-filter
      :filtering-options="filteringOptions"
      @filter-update="captureFilterUpdate"
    ></vue-visual-filter> -->

    <!-- NOTE: XState Example -->
    <section class="px-8 mt-8">
      <button @click="send('TOGGLE')">
        {{
          state.value === 'inactive'
            ? 'Click to activate'
            : 'Active! Click to deactivate'
        }}
      </button>
    </section>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
      disabled=""
    >
      <svg
        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Processing...
    </button>
    <!-- VCalendar -->
    <section v-if="false" class="px-8 mt-8">
      <v-calendar v-if="false" />
      <v-date-picker v-model="selectedDate" />
    </section>

    <!-- Playing Card Symbols -->
    <section v-if="false" class="px-8 mt-8">
      <i-mdi-cards-heart class="text-red-500" />
      <i-mdi-cards-diamond class="text-red-500" />
      <i-mdi-cards-club />
      <i-mdi-cards-spade />
    </section>

    <!--  -->
    <section v-if="true" class="px-8 mt-8 bg-white">
      <div class="flex flex-row flex-wrap">
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Jan</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Feb</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Mar</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Apr</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>May</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Jun</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Jul</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Aug</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Sep</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Oct</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Nov</span>
        </button>
        <button
          class="flex items-center justify-center px-8 border rounded shadow basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/12"
        >
          <span>Dec</span>
        </button>
      </div>
    </section>

    <!-- Number Pad -->
    <section v-if="true" class="px-8 mt-8">
      <div class="grid w-64 h-64 grid-cols-3 text-4xl justify-items-center">
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-0 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-1 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-2 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-3 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-4 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-5 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-6 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-7 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-8 />
        </button>
        <button class="flex items-center justify-center p-8 rounded shadow">
          <i-carbon-number-9 />
        </button>
      </div>
    </section>

    <section class="px-8 mt-8 bg-white">
      <ul v-if="true" class="grid gap-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 xl:grid-cols-24">
        <li
          v-for="n in 24" v-if="false"
          class="flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-yellow-200 border rounded-full"
        >
          <span>{{ n }}</span>
        </li>
        <li
          v-for="n in 24"
          class="flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border rounded-full"
        >
          <span>{{ n }}</span>
        </li>
      </ul>
    </section>

    <section v-if="true" class="px-8 mt-8">
      <div class="w-full grid-cols-12 gap-8 border-2 lg:grid border-red-50">
        <div class="col-span-6 p-8 bg-white rounded-lg">
          <h2 class="text-sm font-medium">
            Prepared For:
          </h2>
          <h3 class="underline">
            Victor Tolbert
          </h3>
          <pre>
1547 Boulder Walk Drive
Atlanta, GA 30316
(678) 123-4567
vtolbert@example.com
          </pre>
        </div>
        <div class="col-span-6 p-8 mt-8 bg-white rounded-lg lg:mt-0">
          <h2 class="text-sm font-medium">
            Prepared by:
          </h2>
          <h3 class="underline">
            Hancock Claims
          </h3>
          <pre>
Anthony Chatman
118 N. Avondale Road
Avondale Estates, GA 30003
(404) 888-8888
achatman@allstate.com
          </pre>
        </div>
      </div>
    </section>

    <section v-if="true" class="px-8 mt-8">
      <QrcodeVue :value="value" :size="size" render-as="svg" level="H" />
    </section>

    <!--  -->
    <section v-if="true" class="px-8 mt-8">
      <div class="flex items-center space-x-3">
        <!-- {prefix}-{collection}-{icon} -->
        <!-- <i-carbon-accessibility/> -->
        <i-carbon-send />
      </div>
      <!-- <i-mdi-account-box style="font-size: 2em; color: red"/> -->
    </section>

    <!-- Font Family Section -->
    <section v-if="true" class="px-8 mt-8">
      <button class="inline-flex items-center space-x-1">
        <i-carbon-chemistry />
        <span>Lab</span>
      </button>

      <h2>Setting the Font Family</h2>

      <p>You can control the typeface of text using the font family utilities.</p>

      <ul class="flex flex-col mt-4 space-y-1">
        <li class="font-sans">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="font-serif">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="font-display">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="font-mockup">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="font-mono">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="font-proto">
          The quick brown fox jumps over the lazy dog.
        </li>
      </ul>
    </section>

    <!--  -->
    <section v-if="true" class="px-8 mt-8">
      <table class="w-full table-fixed">
        <thead>
          <tr class="text-sm font-normal uppercase border-2 border-primary-500 bg-primary-300">
            <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
              Make Check Payable To
            </th>
          </tr>
        </thead>
      </table>
    </section>

    <!--  -->

    <!--  -->
    <section v-if="true" class="px-8 mt-8">
      <table class="w-full table-fixed">
        <thead>
          <tr class="text-sm font-normal uppercase border-2 border-primary-500 bg-primary-300">
            <th class="w-1/3 px-4 py-1 text-left border-2 border-primary-500">
              Account Number
            </th>
            <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
              Statement Date
            </th>
            <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-1 text-left border-2 border-primary-500">
              411147
            </td>
            <td class="px-4 py-1 text-center border-2 border-primary-500">
              3/8/2022
            </td>
            <td class="px-4 py-1 text-center border-2 border-primary-500">
              $290.00
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!--  -->
    <div class="grid grid-cols-2 gap-8">
      <section v-if="true" class="px-8 mt-8">
        <table class="w-full table-fixed">
          <thead>
            <tr class="text-sm font-normal uppercase border-2 border-primary-500 bg-primary-300">
              <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
                Addressee
              </th>
            </tr>
          </thead>
        </table>
      </section>
      <section v-if="true" class="px-8 mt-8">
        <table class="w-full table-fixed">
          <thead>
            <tr class="text-sm font-normal uppercase border-2 border-primary-500 bg-primary-300">
              <th class="w-1/3 px-4 py-1 text-left border-2 border-primary-500">
                Account Number
              </th>
              <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
                Statement Date
              </th>
              <th class="w-1/3 px-4 py-1 text-center border-2 border-primary-500">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-1 text-left">
                411147
              </td>
              <td class="px-4 py-1 text-center">
                3/8/2022
              </td>
              <td class="px-4 py-1 text-center">
                $290.00
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- Font Weight Section -->
    <section v-if="true" class="px-8 mt-8">
      <h2>Font Weight</h2>

      <p>Utilities for controlling the font weight of an element.</p>

      <ul class="flex flex-col mt-4 space-y-1">
        <li class="font-black">
          font-black
        </li>
        <li class="font-extrabold">
          font-extrabold
        </li>
        <li class="font-bold">
          font-bold
        </li>
        <li class="font-semibold">
          font-semibold
        </li>
        <li class="font-medium">
          font-medium
        </li>
        <li class="font-normal">
          font-normal
        </li>
        <li class="font-light">
          font-light
        </li>
        <li class="font-extralight">
          font-extralight
        </li>
        <li class="font-thin">
          font-thin
        </li>
      </ul>
    </section>

    <!-- Font Size Section -->
    <section v-if="true" class="px-8 mt-8">
      <h2>Font Size</h2>

      <p>Utilities for controlling the font size of an element.</p>

      <div class="mt-4">
        <table class="table-fixed">
          <thead>
            <tr>
              <th>Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text-xs</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 0.75rem; /* 12px */</span>
                  <span>line-height: 1rem; /* 16px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-sm</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 0.875rem; /* 14px */</span>
                  <span>line-height: 1.25rem; /* 20px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-base</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 1rem; /* 16px */</span>
                  <span>line-height: 1.5rem; /* 24px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-lg</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 1.125rem; /* 18px */</span>
                  <span>line-height: 1.75rem; /* 28px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 1.25rem; /* 20px */</span>
                  <span>line-height: 1.75rem; /* 28px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-2xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 1.5rem; /* 24px */</span>
                  <span>line-height: 2rem; /* 32px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-3xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 1.875rem; /* 30px */</span>
                  <span>line-height: 2.25rem; /* 36px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-4xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 2.25rem; /* 36px */</span>
                  <span>line-height: 2.5rem; /* 40px */</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-5xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 3rem; /* 48px */</span>
                  <span>line-height: 1;</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-6xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 3.75rem; /* 60px */</span>
                  <span>line-height: 1;</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-7xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 4.5rem; /* 72px */</span>
                  <span>line-height: 1;</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-8xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 6rem; /* 96px */</span>
                  <span>line-height: 1;</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>text-9xl</td>
              <td>
                <div class="flex flex-col">
                  <span>font-size: 8rem; /* 128px */</span>
                  <span>line-height: 1;</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="flex flex-col pl-8 mt-8 space-y-1">
        <li class="text-9xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-8xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-7xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-6xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-5xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-4xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-3xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-2xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-xl">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-lg">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-base">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-sm">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li class="text-xs">
          The quick brown fox jumps over the lazy dog.
        </li>
      </ul>
    </section>

    <section v-if="true" class="px-8 mt-8">
      <h2>Available Reports</h2>

      <div>
        <div class="ModalReportContainer">
          <div>
            Ladder Assist - Other <span> (LA Other)</span> <br> <span> Used by all carriers except Allstate for Ladder
              Assist Inspection.</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection - Shingles <span>(DI Shingles)</span> <br> <span> Direct Inspect for shingled roof.</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection – No Repairability Assessment <span>(DI No BT)</span> <br> <span>
              Direct Inspection Report with no repairability assessment performed.
              <br>
              (STFRM, AMFAM,AUTO,ESUR,FARM,GRANGE,HMSTE,<br>UPC,WEST,ASI,STATEAUTO,NATWD,FEDNAT)
            </span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection – Asphalt Roof <span>(DI EPDM)</span> <br> <span>Direct Inspection Report performed on an
              EPDM roof (typically flat roof).</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection - Tile <span>(DI Tile)</span> <br> <span>Direct Inspection Report performed on a tile
              roof.</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            DI - Bituminous Membranes <span>(DI Bituminous Membranes)</span> <br> <span> Another type of asphalt Direct
              Inspection on Mod Bit roofing (typically flat roof).</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection - Metal <span>(DI Metal)</span> <br> <span>Direct Inspection Report performed on a metal
              roof.</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection - Wood <span>(DI Wood)</span> <br> <span> Direct Inspection on wood roof (typically wood
              shake roof).</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            DI - CA State Auto Association <span>(DI CSAA PA-MD-NJ)</span> <br> <span>Direct Inspect for AAA Insurance
              for states of PA-MD-NJ only.</span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
        <div class="ModalReportContainer">
          <div>
            Direct Inspection No Test Squares <span>(DI RPT NO Test Squares)</span> <br> <span>
              Direct Inspection with no test squares. This is for carriers Tennessee
              <br>Farm Bureau, Mississippi Farm Bureau and Erie Insurance.
            </span>
          </div>
          <div class="ModalReportButtonContainer">
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Preview
            </button>&nbsp;&nbsp;
            <button type="button" class="btn btn-warning btn-sm">
              <i class="fas fa-plus-circle" /> Create
            </button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="true" class="mt-8 prose">
      <h2>Addition of Questions</h2>

      <h3>Roof</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Shingle Width</li>
        <li>Shingle Exposure</li>
        <li>HVAC (Other)</li>
        <li>Free Form Field</li>
        <li>Gutter Questions <em>Added/Removed (Added to Roof)?</em> </li>
      </ul>

      <h3>Roof Damaged Items</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Off-Ridge Vent Material</li>
        <li>Dryer Exhaust Present?</li>
        <li>Swamp Cooler Present?</li>
        <li>Solar Panel Present?</li>
        <li>Flat Roof Scupper Drain Present?</li>
      </ul>

      <h2>Moving of Questions (will have to move properties between the models of sections)</h2>

      <h3>to <code>roof</code> but resides in <code>main</code> until</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Shingle Gauge Photo Taken? </li>
        <li>Pitch Gauge Photo Taken? </li>
      </ul>

      <h3>to <code>roof</code> but resides in <code>elevation</code> until</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Fascia </li>
      </ul>

      <h3>to <code>roof</code> but resides in roof damaged items until</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Drip Edge Eaves Present?</li>
        <li>Drip Edge Rake Present?</li>
        <li>Valley Metal Present?</li>
      </ul>

      <h3>to main but reside in <code>roof</code> - additional items until</h3>

      <ul class="pl-8 list-disc list-inside">
        <li>Questions between Was a copy of EagleView Provided? and Tarp Install / Remove & Reset (SF): </li>
      </ul>

      <h2>Removal of Questions</h2>

      <ul class="pl-8 list-disc list-inside">
        <li>Fascia N,S,E,W Damaged (needs to be removed in the migrations)</li>
      </ul>
    </section>

    <section v-if="true" class="px-8 mt-8">
      <div class="section">
        <form id="sign-up">
          <h3>Sign Up</h3>
          <label>Email</label><input type="email" name="email">
          <label>Password</label><input type="password" name="password">
          <input type="submit">
        </form>
      </div>
      <div class="section">
        <form id="log-in">
          <h3>Log In</h3>
          <label>Email</label><input type="email" name="email">
          <label>Password</label><input type="password" name="password">
          <input type="submit">
        </form>
      </div>
      <div class="section">
        <form id="validate">
          <h3>Access Token</h3>
          <input id="access-token" readonly="readonly" type="text"> <small>Default expiry is 60 minutes</small>
          <h3>Refresh Token</h3>
          <input id="refresh-token" readonly="readonly" type="text"> <small>Supabase-js will use this to automatically
            fetch a new accessToken for you every 60 mins whilst the client is running</small>
        </form>
      </div>
      <div class="section">
        <h3>Fetch User Details</h3>
        <button id="user-button">
          Fetch
        </button>
      </div>
      <div class="section">
        <h3>Logout</h3>
        <button id="logout-button">
          Logout
        </button>
      </div>
    </section>
  </main>
</template>

<style type="postcss">
/* h2 {
  @apply text-2xl font-bold;
} */

/* th {
  text-align: left;
} */
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

em.specs {
  font-size: 0.2em;
  line-height: 1;
  position: absolute;
  color: #bbb;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
