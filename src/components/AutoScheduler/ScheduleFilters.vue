<template>
  <div id="route-filter" class="items-end justify-between w-full md:flex md:space-x-4">
    <div class="items-end md:flex md:space-x-4">
      <div class="h-field">
        <label class="block h-label">Service Region</label>
        <div class="mt-1">
          <!-- Dropdown -->
        </div>
      </div>
      <div class="mt-4 h-field md:mt-0 md:ml-2">
        <label class="block h-label">Service Date</label>
        <div class="mt-1">
          <input
            v-model="selectedInspectionDate"
            type="date"
            style="width: 100%; background-color: white; min-width: 320px"
          >
        </div>
      </div>

      <div
        class="mt-4 space-x-0 space-y-4 md:flex md:space-y-0 md:space-x-4 md:mt-0 md:ml-2"
      >
        <button
          type="button"
          :disabled="isGenerating"
          class="inline-flex items-center px-4 py-3 leading-none text-sm font-bold border-2 border-primary-300 rounded select-none bg-primary-100 text-primary-700 whitespace-nowrap hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          @click="GenerateSchedule"
        >
          Generate Schedule
        </button>
      </div>
    </div>

    <div>
      <!-- Status Key -->
      <section class="status-key-section">
        <h4 class="text-sm font-bold uppercase h-section-label text-primary-500">
          Status
        </h4>

        <div class="flex items-end space-x-4 space-y-2 text-sm">
          <div>
            <div class="flex items-center leading-none">
              <i
                class="flex-shrink-0 w-8 h-8 text-green-900 bg-green-100 border border-green-900 h-status-indicator"
              />
              <div class="flex flex-col ml-2">
                <span class="font-medium text-green-900">Assigned by Auto Scheduler</span>
              </div>
            </div>
            <div class="flex items-center mt-2 leading-none">
              <i
                class="flex-shrink-0 w-8 h-8 text-blue-900 bg-blue-100 border border-blue-900 h-status-indicator"
              />
              <div class="flex flex-col ml-2">
                <span class="font-medium text-blue-900">
                  Previously Assigned Inspection
                </span>
                <span class="text-xs">
                  Field Tech was assigned outside of the auto scheduler
                </span>
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-center leading-none">
              <i
                class="flex-shrink-0 w-8 h-8 text-purple-900 bg-purple-100 border border-purple-900 h-status-indicator"
              />
              <div class="flex flex-col ml-2">
                <span class="font-medium text-purple-900">Removed Route</span>
                <span class="text-xs">
                  Original assigned field tech no longer in service area
                </span>
              </div>
            </div>
            <div class="flex items-center mt-2 leading-none">
              <i
                class="flex-shrink-0 w-8 h-8 text-red-900 bg-red-100 border border-red-900 h-status-indicator"
              />
              <div class="flex flex-col ml-2">
                <span class="font-medium text-red-900">Exception</span>
                <span class="text-xs">
                  Was not able to schedule inspection due to no available routes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
