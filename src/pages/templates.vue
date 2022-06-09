<script lang="ts">
import { defineComponent } from 'vue'

import IconCalendar from '~icons/carbon/calendar'
import IconDashboard from '~icons/carbon/dashboard'
import IconProjects from '~icons/carbon/folder'
import IconRecipes from '~icons/carbon/notebook'
import IconReports from '~icons/carbon/report'
import IconResources from '~icons/carbon/box'
import IconTeam from '~icons/carbon/group'
import IconTemplates from '~icons/carbon/template'

const menu = [
  {
    slug: 'dashboard',
    name: 'Dashboard',
    href: '/',
    icon: 'dashboard',
    current: false,
  },
  {
    slug: 'projects',
    name: 'Projects',
    href: '/projects',
    icon: 'folder',
    current: false,
  },
  {
    slug: 'resources',
    name: 'Resources',
    href: '/resources',
    icon: 'box',
    current: false,
  },
  {
    slug: 'calendar',
    name: 'Calendar',
    href: '/calendar',
    icon: 'calendar',
    current: false,
  },
  // { slug: 'recipes', name: 'Recipes', href: '/recipes', icon: 'notebook', current: true },
  // { slug: 'reports', name: 'Reports', href: '/reports', icon: 'report', current: true },
  { slug: 'team', name: 'Team', href: '/team', icon: 'group', current: true },
  { slug: 'templates', name: 'Templates', href: '/templates', current: true },
  // { slug: 'portal', name: "Portal", href: "/portal", current: true },
  // { slug: 'posts', name: "Posts", href: "/posts", current: true },
]

export default defineComponent({
  components: {
    IconCalendar,
    IconDashboard,
    IconProjects,
    IconRecipes,
    IconReports,
    IconResources,
    IconTeam,
    IconTemplates,
  },
  setup() {
    return {
      app: {
        title: 'Titan',
      },
      page: {
        title: 'Templates',
      },
    }
  },
  data: () => ({
    menu,
    showMobileMenu: false,
    showProfileDropdown: false,
  }),
  computed: {
    showTitle() {
      return this.$route.name === 'posts-list'
    },
  },
  metaInfo() {
    return {
      title: this.page.title,
    }
  },
})
</script>

<template>
  <div>
    <div
      class="px-8 py-2 font-medium tracking-wider text-right uppercase bg-red-100 text-2xs"
    >
      Error
    </div>
    <div
      class="px-8 py-2 font-medium tracking-wider text-right uppercase bg-yellow-100 text-2xs"
    >
      Warning
    </div>
    <div
      class="px-8 py-2 font-medium tracking-wider text-right uppercase bg-green-100 text-2xs"
    >
      Success
    </div>
    <div
      class="px-8 py-2 font-medium tracking-wider text-right uppercase bg-blue-100 text-2xs"
    >
      Info
    </div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-opacity-75 bg-primary-600" aria-hidden="true" />

      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative flex flex-col flex-1 w-full max-w-xs bg-primary-800">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-0 right-0 pt-2 -mr-12">
          <button
            type="button"
            class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Close sidebar</span>
            <i-carbon-close class="w-6 h-6 text-white" />
          </button>
        </div>

        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <router-link
            :to="{ name: 'home' }"
            class="flex items-center flex-shrink-0 px-4 text-lg text-white font-display"
          >
            <app-logo class="w-auto h-8 rotate-180" />
            <span class="inline-block mt-2 -mr-px">{{ app.title }}</span>
          </router-link>

          <nav class="px-2 mt-5 space-y-1">
            <router-link
              v-for="(item, i) in menu"
              v-slot="{ href, navigate, isExactActive }"
              :key="item.name"
              custom
              :to="{
                name: item.slug,
              }"
            >
              <a
                :href="href"
                class="flex items-center px-2 py-2 text-sm font-medium rounded-md group"
                :class="[
                  isExactActive
                    ? 'bg-primary-900 text-white'
                    : 'text-primary-300 hover:bg-primary-700 hover:text-white',
                ]" @click="navigate"
              >
                <component
                  :is="`Icon${item.name}`"
                  class="flex-shrink-0 w-6 h-6 mr-3 " :class="[
                    isExactActive
                      ? 'text-primary-300'
                      : 'text-primary-400 group-hover:text-primary-300',
                  ]"
                />
                {{ item.name }}
              </a>
            </router-link>
          </nav>
        </div>

        <div class="flex flex-shrink-0 p-4 bg-primary-700">
          <!-- <router-link
            :to="{ name: 'user-profile', params: { id: 1 } }"
            href="#"
            class="flex-shrink-0 block group"
          >
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block w-10 h-10 rounded-full grayscale"
                  src="/assets/img/users/victor.jpg"
                  alt="Avatar of Victor"
                >
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-white">
                  Victor Tolbert
                </p>
                <p
                  class="font-medium tracking-wider uppercase text-2xs text-primary-400 group-hover:text-primary-300"
                >
                  View profile
                </p>
              </div>
            </div>
          </router-link> -->
        </div>
      </div>

      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-1 min-h-0 bg-primary-800">
        <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <router-link
            :to="{ name: 'home' }"
            class="flex items-center flex-shrink-0 px-4 text-lg text-white font-display"
          >
            <app-logo class="w-auto h-8" />
            <!-- <base-logo name="titan" class="w-auto h-8 mt-2 -ml-2 text-white rotate-180" /> -->
            <span class="inline-block mt-2 -mr-px">{{ app.title }}</span>
          </router-link>

          <nav class="flex-1 px-2 mt-5 space-y-1">
            <router-link
              v-for="(item, i) in menu"
              v-slot="{ href, navigate, isExactActive }"
              :key="item.name"
              custom
              :to="{
                name: item.slug,
              }"
            >
              <a
                :href="href"
                class="flex items-center px-2 py-2 text-sm font-medium rounded-md group"
                :class="[
                  isExactActive
                    ? 'bg-primary-900 text-white'
                    : 'text-primary-300 hover:bg-primary-700 hover:text-white',
                ]" @click="navigate"
              >
                <component
                  :is="`Icon${item.name}`"
                  class="flex-shrink-0 w-6 h-6 mr-3 " :class="[
                    isExactActive
                      ? 'text-primary-300'
                      : 'text-primary-400 group-hover:text-primary-300',
                  ]"
                />
                {{ item.name }}
              </a>
            </router-link>
          </nav>
        </div>

        <div class="flex flex-shrink-0 p-4 bg-primary-700">
          <!-- <router-link
            :to="{ name: 'user-profile', params: { id: 1 } }"
            class="flex-shrink-0 block w-full group"
          >
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block rounded-full h-9 w-9 grayscale"
                  src="/assets/img/users/victor.jpg"
                  alt="Avatar of Victor"
                >
              </div>
              <div class="ml-3">
                <p class="font-medium tracking-wider text-white uppercase text-2xs">
                  Victor Tolbert
                </p>
                <p
                  class="text-xs font-medium text-primary-300 group-hover:text-primary-200"
                >
                  View profile
                </p>
              </div>
            </div>
          </router-link> -->
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 md:pl-64">
      <div class="sticky top-0 z-10 pt-1 pl-1 bg-primary-100 md:hidden sm:pl-3 sm:pt-3">
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-primary-500 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open sidebar</span>
          <i-carbon-menu class="w-6 h-6" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-primary-900">
              Templates
            </h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div
                class="border-4 border-dashed rounded-lg border-primary-200 h-96"
              />
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
