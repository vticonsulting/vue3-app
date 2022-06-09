<script lang="ts">
/* eslint-disable no-console */
import { defineComponent, ref } from 'vue'
// import Tagify from '@yaireo/tagify'
// import VuejsDatepicker from 'vuejs-datepicker'
import { normalizeArray, randomHex } from '@/utilities'
import { sassArchitectureMenu } from '@/config/menus'
// https://yaireo.github.io/tagify/
// import TextContent from '@/components/TextContent'

export default defineComponent({
  name: 'HomeView',
  metaInfo: {
    title: 'Home',
  },
  components: {
    // VuejsDatepicker,
    // TextContent,
  },
  setup() {
    const names = ref(['name1', 'name2'])
    const isImageModalActive = false
    const isCardModalActive = false
    const test = normalizeArray(
      [
        {
          id: 'abfq-f39f',
          name: 'Test',
        },
      ],
      'name',
    )
    console.log({
      isCardModalActive,
      isImageModalActive,
    })

    const values = ref([
      { type: 'h1', content: 'Hello world' },
      { type: 'p', content: 'The quick brown fox jumps over the lazy dog.' },
    ])

    return {
      isCardModalActive,
      isImageModalActive,
      test,
      names,
      testString: 'test',
      randomHex,
      sassArchitectureMenu,
      values,
      user: {
        firstName: 'Victor',
        lastName: 'Tolbert',
      },
      carousels: [
        { text: 'Slide 1', color: '#445e00' },
        { text: 'Slide 2', color: '#006724' },
        { text: 'Slide 3', color: '#b60000' },
        { text: 'Slide 4', color: '#f4c300' },
        { text: 'Slide 5', color: '#005c98' },
      ],
    }
  },
  data() {
    return {
      // tagify: null,x
      // mcuHeros: ["ironman", "antman", "captain america", "thor", "spiderman"], ******* either use this format or the below
      // for white-listing
      mcuHeros: [
        { value: 'ironman', code: 'im' },
        { value: 'antman', code: 'am' },
        { value: 'captain america', code: 'ca' },
        { value: 'thor', code: 'th' },
        { value: 'spiderman', code: 'sm' },
      ],
    }
  },
  mounted() {
    // const tagify = new Tagify(document.querySelector('.js-tagify'));
    // tagify.addTags([
    //   {
    //     id: 'abfq-f39f',
    //     name: 'Test',
    //   },
    // ]);
    // //
    // var input = document.getElementById('onlyMarvel')
    // var tagify = new Tagify(input, {
    //   whitelist: this.mcuHeros,
    //   //  whitelist: ["ironman", "antman", "captain america", "thor", "spiderman"],
    //   enforceWhitelist: true,
    // })
    // tagify.on('add', function (e) {
    //   console.log(e.detail.data)
    // })
  },
})
</script>

<template>
  <main class="flex-1 pb-24">
    <!-- <welcome-component />
    <example-component version="1" /> -->

    <!-- <example-sidebar /> -->
    <!-- <loading-component v-if="false" /> -->
    <!--  -->
    <!-- <o-carousel v-if="false">
      <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="ex-slide" :style="{ 'background-color': carousel.color }">
          <h1>{{ carousel.text }}</h1>
        </section>
      </o-carousel-item>
    </o-carousel> -->

    <!-- <file-upload-form /> -->
    <!-- <file-upload-component /> -->

    <!-- Example Autocomplete -->
    <!-- <section v-if="false" class="px-8 mt-8">
      <movie-search />
    </section> -->

    <!-- Example Toasts -->
    <!-- <section v-if="false" class="px-8 mt-8">
      <example-toasts />
    </section> -->

    <!-- Carousel Component -->
    <!-- <section v-if="false" class="px-8 mt-8">
      <carousel-component v-if="true" />
    </section> -->

    <section class="px-8 mt-8">
      <component :is="type" v-if="false" />

      <!-- Example Custom Marker -->
      <ul v-if="false" role="list" class="pl-5 space-y-1 list-disc text-slate-500">
        <li class="marker:text-red-500">
          Positive
        </li>
        <li class="marker:text-green-500">
          Negative
        </li>
      </ul>

      <!-- Example Feature List -->
      <div v-if="false" class="mt-8">
        <h2 class="text-xl font-light">
          Cannabis laws vary by state. Here area a few general tips
        </h2>

        <ul class="grid gap-4 mt-4">
          <li class="flex items-start space-x-2">
            <i-carbon-checkmark-outline class="flex-shrink-0 text-green-500" />
            <span>Typically, you must be 21 or over.</span>
          </li>
          <li class="flex items-start space-x-2">
            <i-carbon-checkmark-outline class="flex-shrink-0 text-green-500" />
            <span>
              Be sure you're in a location where cannabis is medically or recreationally
              legal.
            </span>
          </li>
          <li class="flex items-start space-x-2">
            <i-carbon-misuse-outline class="flex-shrink-0 text-red-500" />
            <span>
              Public consumption of cannabis is typically not allowed. It is best to
              consume cannabis at home or in a private place.
            </span>
          </li>
          <li class="flex items-start space-x-2">
            <i-carbon-misuse-outline class="flex-shrink-0 text-red-500" />
            <span>
              Make sure not to bring cannabis to the airport or transport across state
              lines.
            </span>
          </li>
          <li class="flex items-start space-x-2">
            <i-carbon-misuse-outline class="flex-shrink-0 text-red-500" />
            <span>Never provide cannabis to children or pets.</span>
          </li>
          <li class="flex items-start space-x-2">
            <i-carbon-misuse-outline class="flex-shrink-0 text-red-500" />
            <span>Never drive under the influence of cannabis.</span>
          </li>
        </ul>
      </div>

      <!-- <class-component v-if="false" :user="user" />

      <section class="px-8 mt-8">
        <div class="flex items-center space-x-2">
          <notifications-button class="text-red-500">
            Notifications
          </notifications-button>
          <delete-account-button>Delete Account</delete-account-button>
        </div>
      </section> -->

      <!-- Service Area Select -->
      <!-- <section v-if="false" class="px-8 mt-8">
        <div class="grid gap-4">
          <service-area-select />
          <service-area-select-input />
        </div>
      </section> -->

      <!-- Example Multi-step Form -->
      <!-- <section v-if="false" class="px-8 mt-16">
        <oruga-form class="max-w-screen-sm" />
      </section> -->

      <!-- Ring Chart Example -->
      <!-- <section v-if="false" class="mt-8">
        <ring-chart class="w-20 h-20" />
      </section> -->

      <!-- <TextContent
        v-for="{ type, content } in values"
        :key="content"
        :type="type"
        :content="content"
      /> -->
    </section>

    <!-- Well Container -->
    <well-container v-if="false" />

    <!-- Inspection Layout -->
    <inspection-layout v-if="false" class="mt-8" />
    <!-- <inspection-admin-layout /> -->
    <!-- <inspection-photos-layout /> -->
    <!-- <inspections-layout /> -->

    <!-- Details -->
    <section v-if="false" class="max-w-lg px-8 mt-8">
      <details
        class="p-6 rounded-lg open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg"
        open
      >
        <summary
          class="text-sm font-semibold leading-6 select-none text-slate-900 dark:text-white"
        >
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </section>

    <!-- Print -->
    <section v-if="false" class="px-8 mt-8">
      <div>
        <article class="print:hidden">
          <h1>My Secret Pizza Recipe</h1>
          <p>This recipe is a secret, and must not be shared with anyone</p>
          <!-- ... -->
        </article>
        <div class="hidden print:block">
          Are you seriously trying to print this? It's secret!
        </div>
      </div>
    </section>

    <!-- reduce motion -->
    <section v-if="false" class="px-8 mt-8">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 space-x-1 text-white border-2 border-transparent hover:scale-x-105 active:scale-100 hover:border-primary-500 bg-accent-500"
        disabled
      >
        <i-carbon-renew class="motion-reduce:hidden animate-spin" />
        <span>Processing...</span>
      </button>
    </section>

    <!-- Tagify -->
    <section v-if="false" class="px-8 mt-8">
      <input id="onlyMarvel" type="text" name="mcu" autocomplete>
    </section>

    <!-- Custom placeholder text -->
    <section v-if="false" class="px-8 mt-8">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <i-carbon-search class="w-5 h-5 text-gray-400" />
        </span>
        <input
          class="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        >
      </label>
    </section>

    <!-- File input -->
    <section v-if="false" class="px-8 mt-8">
      <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="object-cover w-16 h-16 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          >
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <!-- <input type="file" class="file:border file:border-solid ..." /> -->
          <input
            type="file"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
          >
        </label>
      </form>
    </section>

    <!-- List Marker -->
    <section v-if="false" class="px-8 mt-8">
      <ul
        role="list"
        class="pl-5 space-y-3 list-disc marker:text-accent-400 text-primary-500"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
    </section>

    <!-- Text Selection -->
    <section v-if="false" class="px-8 mt-8">
      <div class="selection:bg-accent-300 selection:text-accent-900">
        <p>
          So I started to walk into the water. I won't lie to you boys, I was terrified.
          But I pressed on, and as I made my way past the breakers a strange calm came
          over me. I don't know if it was divine intervention or the kinship of all living
          things but I tell you Jerry at that moment, I
          <em>was</em>
          a marine biologist.
        </p>
      </div>
    </section>

    <!-- First Line / Letter -->
    <section v-if="false" class="px-8 mt-8">
      <p
        class="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
      >
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that
        says "New York Public Library"? Well that may not mean anything to you, but that
        means a lot to me. One whole hell of a lot.
      </p>
    </section>

    <!-- Before/After -->
    <section v-if="false" class="px-8 mt-8">
      <blockquote class="text-2xl italic font-semibold text-center text-slate-900">
        When you look
        <span
          class="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500"
        >
          <span class="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>
    </section>

    <!-- Datepicker -->
    <section v-if="false" class="px-8 mt-8">
      <VuejsDatepicker />
    </section>

    <!-- After -->
    <section v-if="false" class="px-8 mt-8">
      <label class="block">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Email
        </span>
        <input
          type="email"
          name="email"
          class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-primary-500 sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        >
      </label>
    </section>

    <!-- Group Hover -->
    <section v-if="false" class="px-8 mt-8">
      <a
        href="#"
        class="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-primary-500 hover:ring-primary-500"
      >
        <div class="flex items-center space-x-3">
          <i-carbon-folder class="w-6 h-6 stroke-primary-500 group-hover:stroke-white" />
          <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">
            New project
          </h3>
        </div>
        <p class="text-sm text-slate-500 group-hover:text-white">
          Create a new project from a variety of starting templates.
        </p>
      </a>
    </section>

    <!-- Logos -->
    <!-- <section v-if="false" class="px-8 mt-8">
      <div class="flex items-center py-4 bg-primary-500">
        <hancock-logo-mark v-if="false" class="h-8" />
        <hancock-claims-wide-logo v-if="false" class="h-16" />
        <hancock-claims-logo v-if="false" class="h-20" />
        <hancock-claims-text v-if="false" class="h-20" />
      </div>
    </section> -->

    <!-- Dark Mode -->
    <section v-if="false" class="px-8 mt-8">
      <div
        class="px-6 py-8 bg-white rounded-lg shadow-xl dark:bg-slate-900 ring-1 ring-slate-900/5"
      >
        <div>
          <span
            class="inline-flex items-center justify-center p-2 rounded-md shadow-lg bg-primary-500"
          >
            <i-carbon-edit class="w-6 h-6 text-white" />
          </span>
        </div>
        <h3
          class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white"
        >
          Writes Upside-Down
        </h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation, including
          upside-down. It even works in outer space.
        </p>
      </div>
    </section>

    <!-- Payment Form -->
    <!-- <section v-if="false" class="px-8 mt-8">
      <make-payment-form />
    </section> -->

    <!-- CSS Architecture -->
    <section v-if="false" class="px-8 mt-8">
      <h2 class="text-lg font-bold">
        CSS Architecture
      </h2>

      <div
        class="max-w-screen-sm p-4 mt-1 overflow-y-scroll bg-white border-8 rounded h-96 border-primary-300"
      >
        <ul>
          <li v-for="category in sassArchitectureMenu" :key="category.title">
            <h2 class="font-semibold">
              {{ category.title }}
            </h2>
            <ul v-if="category.child" class="list-disc list-inside">
              <li v-for="subCategory in category.child" :key="subCategory.title">
                <router-link
                  :key="subCategory.title"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                  :to="{ name: 'scratch' }"
                  custom
                >
                  <a
                    :href="href"
                    class="text-sm font-medium hover:underline hover:bg-opacity-75 text-primary-300 hover:text-primary-600"
                    :class="[
                      isExactActive ? '' : '',
                    ]" :area-current="isActive ? 'page' : undefined"
                    @click="navigate"
                  >
                    {{ subCategory.title }}
                  </a>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        v-if="false"
        class="h-40 max-w-screen-sm p-2 overflow-y-scroll bg-white border border-black rounded"
      >
        <ul>
          <li>
            <h2 class="font-semibold">
              Abstracts
            </h2>
            <ul>
              <li>Variables</li>
              <li>Functions</li>
              <li>Mixins</li>
              <li>Placeholders</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Base
            </h2>
            <ul>
              <li>Reset</li>
              <li>Typography</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Components
            </h2>
            <ul>
              <li>Button</li>
              <li>Carousel</li>
              <li>Cover</li>
              <li>Dropdown</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Layout
            </h2>
            <ul>
              <li>Navigation</li>
              <li>Grid</li>
              <li>Header</li>
              <li>Footer</li>
              <li>Sidebar</li>
              <li>Forms</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Pages
            </h2>
            <ul>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Themes
            </h2>
            <ul>
              <li>Default</li>
              <li>Admin</li>
            </ul>
          </li>
          <li>
            <h2 class="font-semibold">
              Vendors
            </h2>
            <ul>
              <li>Bootstrap</li>
              <li>Kendo</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- Modal -->
    <section v-if="false" class="px-8 mt-8">
      <div class="buttons">
        <o-button size="medium" variant="primary" @click="isImageModalActive = true">
          Open modal
        </o-button>
        <o-button size="medium" variant="primary" @click="isCardModalActive = true">
          Open modal (clip scroll)
        </o-button>
      </div>

      <o-modal v-model:active="isImageModalActive">
        <p style="text-align: center">
          <img src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4">
        </p>
      </o-modal>

      <o-modal v-model:active="isCardModalActive" :width="640" scroll="clip">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales leo nec
          convallis rutrum. Vivamus pharetra molestie arcu at dictum. Nulla faucibus leo
          eget enim egestas, in tempus justo venenatis. Duis dictum suscipit erat, a
          dapibus eros lobortis ac. Praesent tempor rhoncus convallis. Nullam in ipsum
          convallis, rutrum elit eget, dictum ipsum. Nunc sagittis aliquet massa. Etiam
          lacus sapien, eleifend non eros quis, finibus ornare nisl. Ut laoreet sit amet
          lacus non dignissim. Sed convallis mattis enim, sed interdum risus molestie ut.
          Praesent vel ex hendrerit, cursus lectus a, blandit felis. Nam luctus orci nec
          varius commodo.
        </p>
        <p>
          Sed vulputate metus purus, ut egestas erat congue et. Donec tellus orci,
          malesuada eget dolor sed, pellentesque bibendum nunc. In eu egestas diam.
          Integer sed congue massa. Sed a urna quam. Morbi vulputate dolor eleifend ligula
          lobortis venenatis. Aenean pellentesque risus sit amet faucibus molestie.
          Aliquam eu lorem aliquet, aliquam nulla in, vestibulum lorem. Donec mollis mi at
          sollicitudin tristique. Nullam id nibh pulvinar, dignissim nisl id, gravida
          risus. Nulla arcu elit, scelerisque in sollicitudin et, laoreet et metus. Aenean
          placerat turpis nec tincidunt tempus.
        </p>
      </o-modal>
    </section>

    <!--  -->
    <section v-if="false" class="p-8">
      <div class="flex flex-col-reverse gap-4">
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 10mm; height: 10mm"
        >
          01
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 20mm; height: 10mm"
        >
          02
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 30mm; height: 10mm"
        >
          03
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 40mm; height: 10mm"
        >
          04
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 50mm; height: 10mm"
        >
          05
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 60mm; height: 10mm"
        >
          06
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 70mm; height: 10mm"
        >
          07
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 80mm; height: 10mm"
        >
          08
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 90mm; height: 10mm"
        >
          09
        </div>
        <div
          class="flex items-center px-2 font-bold text-white border-transparent bg-primary-800"
          style="width: 100mm; height: 10mm"
        >
          10
        </div>
      </div>
    </section>

    <!--
        TODO: Add Timestamp
        Now
        Quote
      -->

    <!-- #about-view -->
    <!-- #auth-login-view -->
    <!-- #auto-scheduler-view -->
    <!-- #calendar-view -->
    <!-- #dashboard-view -->
    <!-- #portal-view -->
    <!-- #post-view -->
    <!-- #posts-view -->
    <!-- #projects-view -->
    <!-- #recipes-view -->
    <!-- #reports-view -->
    <!-- - #page / #view -->
    <!-- - #layout -->
    <!-- - #template -->
    <!-- - #pattern -->
    <!-- - #element -->
    <!-- #component -->
    <!-- #token -->

    <!--
      ########################################################
      Layouts
      ########################################################
    -->

    <!-- <billing-layout /> -->
    <!-- <create-service-type-layout /> -->
    <!-- <create-user-layout /> -->
    <!-- <design-templates-layout /> -->
    <!-- <pricing-disclaimer-details-layout /> -->
    <!-- <create-vehicle-special-layout /> -->
    <!-- <customers-layout /> -->
    <!-- <projects-layout /> -->
    <!-- <reports-layout /> -->
    <!-- <service-territories-layout /> -->
    <!-- <service-types-layout>Testing</service-types-layout> -->
    <!-- <users-layout /> -->
    <!-- <vehicle-special-layout /> -->

    <!--
      ########################################################
      Components - Templates, Patterns, Elements
      ########################################################
    -->

    <!-- <welcome-component /> -->
    <!-- <playground-component /> -->
    <!-- <sandbox-component /> -->
    <!-- <idea-component /> -->
    <!-- <the-welcome /> -->
    <!-- <hero-layout-component /> -->
    <!-- <users-layout-component /> -->
    <!-- <property-inspection-steps-component /> -->

    <!--
      ########################################################
      Layout Templates
      ########################################################
    -->

    <!-- <billing-invoice-layout /> -->
    <!-- <users-layout /> -->
    <!-- <customers-layout /> -->
    <!-- <reports-layout /> -->

    <!--
      ########################################################
      Dashboards
      ########################################################
    -->

    <!-- <admin-dashboard /> -->
    <!-- <parent-dashboard /> -->

    <!--
      ########################################################
      Page Headings
      ########################################################
    -->
    <!--
    <section v-if="false" class="px-8 mt-8 space-y-4">
      <auto-scheduler-page-heading />
      <projects-page-heading />
      <property-inspection-page-heading />
      <users-page-heading />
    </section> -->

    <!--
      ########################################################
      Headers
      ########################################################
    -->

    <!-- <card-header /> -->
    <!-- <what-component /> -->

    <section v-if="false" class="px-8 mt-8">
      <!-- <service-type-card-component />
      <service-type-grid-component />
      <service-select-fields />
      <insurance-company-services-list /> -->

      <!-- Dividers -->
      <!-- <div v-if="false" class="p-8 bg-white">
        <continue-divider />
        <title-divider />
        <left-title-divider />
        <right-button-divider />
        <button-group-divider />
      </div>

      <billing-invoice-placeholder v-if="false" /> -->
    </section>

    <section class="px-8 mt-8">
      <div class="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
    </section>
  </main>
</template>
