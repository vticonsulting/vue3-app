<template>
  <div class="pb-24 bg-primary-100">
    <admin-property-inspection-form-header v-if="false" />

    <header class="py-4 text-white bg-primary-500">
      <div
        class="px-8 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between"
      >
        <div class="flex-1 min-w-0">
          <router-link
            :to="{ name: 'inspections-id' }"
            class="mt-2 text-2xl font-bold leading-7 sm:text-xl sm:truncate"
          >
            Property Inspection Form
          </router-link>

          <div class="flex items-center mt-1 space-x-8 text-sm">
            <router-link :to="{ name: 'inspections-id-admin' }">
              Admin
            </router-link>
            <router-link :to="{ name: 'inspections-id-report-overview' }">
              Property Overview
            </router-link>
            <router-link :to="{ name: 'inspections-id-report-summary' }">
              Inspection Summary
            </router-link>
            <router-link :to="{ name: 'inspections-id-report-details' }">
              Report Details
            </router-link>
            <router-link :to="{ name: 'inspections-id-report-scope' }">
              Scope Sheet
            </router-link>
            <router-link :to="{ name: 'inspections-id-report-photos' }">
              Photo Set
            </router-link>
          </div>
        </div>

        <div v-if="true" class="flex mt-5 xl:mt-0 xl:ml-4">
          <div v-if="true" class="flex items-center space-x-2">
            <div>
              <label v-if="false" for="project-search">Search</label>
              <input
                id="project-search"
                type="search"
                placeholder="Project Number"
                class="bg-white border rounded-lg shadow-lg border-primary-400"
              >
            </div>
            <button class="inline-flex items-center space-x-2 h-button">
              <i-carbon-help class="w-6 h-6" />
              <span class="font-bold">Help</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>
