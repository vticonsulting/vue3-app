<script lang="ts">
import { Options, Vue } from 'vue-property-decorator'

@Options({
  metaInfo: {
    title: 'Portal',
  },
})
export default class Portal extends Vue {
  mapMode = false
  loading = false
  fixedHeader = false
  selectedDate = ''
}
</script>

<template>
  <div class="flex flex-col h-screen bg-primary-100">
    <!-- PortalPageHeadingComponent -->
    <header v-if="true" class="w-full text-white bg-primary-500" :class="[fixedHeader ? '' : '']">
      <div class="flex justify-between px-8 py-2">
        <div class="flex flex-col">
          <div class="flex items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M25.1074 6C20.9532 7.42373 12.5157 10.3119 12 10.4746V18L25.1074 14.339L38 18V10.4746L25.1074 6Z" fill="currentColor" stroke="currentColor" />
              <path d="M20.1653 20L12 22.2373V42H20.1653V34.5424H29.8347V42H38V22.2373L29.8347 20V27.2712H20.1653V20Z" fill="currentColor" stroke="currentColor" />
            </svg>
            <div class="leading-none">
              <h1 class="text-xl font-extrabold whitespace-nowrap">
                Hancock Portal
              </h1>
              <span class="text-sm text-primary-200">
                today
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button
            type="button"
            class="items-center hidden px-4 py-2 space-x-2 text-sm font-medium leading-4 text-white border border-transparent rounded shadow-sm whitespace-nowrap sm:inline-flex bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <i-carbon-edit class="w-5 h-5" />
            <span>New Claim</span>
          </button>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <i-carbon-identification class="w-5 h-5" />
            <span>My Profile</span>
          </button>
        </div>
      </div>
    </header>
    <div v-if="true" class="flex flex-col items-center justify-center px-4 mt-4 space-y-2 sm:hidden" :class="[fixedHeader ? '' : '']">
      <button
        type="button"
        class="flex items-center w-full px-4 py-2 space-x-2 text-sm font-medium leading-4 text-white border border-transparent rounded shadow-sm whitespace-nowrap bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <i-carbon-edit class="w-5 h-5" />
        <span>New Claim</span>
      </button>
    </div>

    <!-- PortalLayout -->
    <main v-if="true" class="flex-1 mt-4 sm:px-8" :class="[fixedHeader ? 'sm:mt-20' : '']">
      <!-- PageTitleComponent -->
      <header v-if="true" class="flex justify-between w-full px-4 py-2 bg-white border border-gray-300 ">
        <div class="flex items-center justify-between space-x-8">
          <h2 class="text-xl font-medium text-primary-500 whitespace-nowrap">
            Hancock Claims
          </h2>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-4 text-sm">
            <button
              :class="`hover:underline whitespace-nowrap flex focus:outline-none space-x-2 items-center ${mapMode ? 'text-primary-600 font-bold' : 'text-primary-400'}`"
              @click="mapMode = true"
            >
              <i-carbon-map class="text-gray-500" />
              <span class="hidden sm:inline-block">Map Mode</span>
            </button>

            <button
              :class="`hover:underline whitespace-nowrap flex focus:outline-none space-x-2 items-center ${mapMode ? 'text-primary-400' : 'text-primary-600 font-bold'}`"
              @click="mapMode = false"
            >
              <i-carbon-calendar class="text-gray-500" />
              <span class="hidden sm:inline-block">Schedule Mode</span>
            </button>
          </div>
        </div>
      </header>

      <!-- AdjusterClaimsLayout -->
      <article id="adjuster-claims" class="mt-2">
        <!-- AdjusterInfoCardsComponent -->
        <section v-if="true" id="adjuster-info-card" class="lg:hidden">
          <div class="grid gap-4 card-view-container">
            <!-- AdjusterInfoCardComponent -->
            <div v-for="n in 8" class="flex flex-col h-full bg-white border-gray-200 rounded shadow" style="height: 28rem">
              <header class="py-4 h-card-header">
                <div class="flex items-center justify-between px-6">
                  <h3 class="flex items-center space-x-2 text-xl font-medium leading-5">
                    <span>Claim: 2022-GA-0001</span>
                  </h3>
                  <button type="button">
                    <i-carbon-edit />
                  </button>
                </div>
              </header>

              <!-- Main -->
              <div class="flex-1 px-6 overflow-y-auto text-gray-500 border-t card-body">
                <div class="flex justify-between mt-4 text-gray-500 item-start">
                  <div class="w-1/2">
                    <div class="grid h-card-field">
                      <label class="text-xs font-bold tracking-wider uppercase h-card-label whitespace-nowrap">Inspection Date</label>
                      <span class="whitespace-nowrap">2022-FEB-02 02:22 PM</span>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between mt-4 text-gray-500 item-start">
                  <div class="w-1/2">
                    <div class="grid h-card-field">
                      <label class="text-xs font-bold tracking-wider uppercase h-card-label">Address</label>
                      <span>1547 Boulder Walk Drive, Atlanta, GA 30316</span>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between mt-4 text-gray-500 item-start">
                  <div class="w-1/2">
                    <div class="grid h-card-field">
                      <label class="text-xs font-bold tracking-wider uppercase h-card-label whitespace-nowrap">Service Types</label>
                      <span>Ladder Assist, Hover Diagrams</span>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between mt-4 text-gray-500 item-start">
                  <div class="w-1/2">
                    <div class="grid h-card-field">
                      <label class="text-xs font-bold tracking-wider uppercase h-card-label">Technician(s)</label>
                      <span>Jeff Hall, Richard Smith</span>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="flex items-center justify-center py-4 bg-primary-50 h-card-footer">
                <span id="is-active" class="inline-block px-4 py-1 text-sm font-bold text-green-800 bg-green-100 border rounded-full" :class="[{ 'bg-red-100 text-red-800': !true }]">
                  Claim Status: Active
                </span>
              </footer>
            </div>
          </div>
        </section>

        <!-- AdjusterDataTableComponent -->
        <section v-if="true" id="adjuster-data-table" class="hidden p-8 bg-white border border-gray-300 lg:block ">
          Grid View
        </section>
      </article>

      <!-- <AdjusterScheduleMapLayout /> -->
      <article class="grid grid-cols-12 gap-2 mt-2 mb-8 place-items-stretch">
        <!-- AdjusterClaimsSnapshotComponent -->
        <section id="adjuster-claims-snapshot" class="bg-white border border-gray-300 col-span-full lg:col-span-2">
          <!-- PageLoadingIndicator -->
          <page-loading-indicator v-if="loading" />
          <!-- /End PageLoadingIndicator -->

          <!-- ClaimSnapshot -->
          <div v-else>
            <h3 class="flex items-center space-x-1 font-medium whitespace-nowrap">
              <i-carbon-binoculars class="flex-shrink-0 hidden w-6 h-6 text-gray-500" />
              <span>Claims By Status</span>
            </h3>
          </div>
          <!-- End ClaimSnapshot -->
        </section>

        <!-- AdjusterDatePickerComponent -->
        <section id="adjuster-date-picker" class="w-full col-span-full lg:col-span-10">
          <div class="flex items-start w-full space-x-2">
            <v-date-picker v-model="selectedDate" />
            <div class="grid flex-1">
              <!-- AdjusterMapComponent -->
              <section v-show="mapMode" id="adjuster-map" class="w-full border-gray-300 col-span-full lg:col-span-7">
                Map
              </section>

              <!-- AdjusterScheduleComponent -->
              <section v-show="!mapMode" id="adjuster-schedule" class="w-full border-gray-300 col-span-full lg:col-span-7">
                Schedule
              </section>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>
