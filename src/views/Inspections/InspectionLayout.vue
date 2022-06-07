<template>
  <div class="bg-primary-100 pb-24">
    <admin-property-inspection-form-header v-if="false" />

    <header class="py-4 text-white bg-primary-500">
      <div
        class="px-8 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between"
      >
        <div class="flex-1 min-w-0">
          <router-link
            :to="{ name: 'inspection' }"
            class="mt-2 text-2xl font-bold leading-7 sm:text-xl sm:truncate"
          >
            Property Inspection Form
          </router-link>

          <div class="flex items-center text-sm mt-1 space-x-8">
            <router-link :to="{ name: 'inspection-admin' }">Admin</router-link>
            <router-link :to="{ name: 'inspection-report-overview' }">
              Property Overview
            </router-link>
            <router-link :to="{ name: 'inspection-report-summary' }">
              Inspection Summary
            </router-link>
            <router-link :to="{ name: 'inspection-report-details' }">
              Report Details
            </router-link>
            <router-link :to="{ name: 'inspection-report-scope' }">
              Scope Sheet
            </router-link>
            <router-link :to="{ name: 'inspection-report-photos' }">
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
              />
            </div>
            <button class="space-x-2 h-button inline-flex items-center">
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
