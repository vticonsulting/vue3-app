<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DesignView',
  metaInfo: {
    title: 'Design',
    // override the parent template and just use the above title only
    titleTemplate: null,
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true },
      { src: '/assets/js/waypoints/lib/noframework.waypoints.min.js', async: true, defer: true },
    ],
    // path/to/noframework.waypoints.min.js
  },
})
</script>

<template>
  <main class="flex-1">
    <!-- UI Kit / Design System Icons  -->
    <!-- TODO: - Create Style Tile example  -->
    <section v-if="true" class="px-8 mt-8">
      <h2 class="flex items-center space-x-2 text-3xl">
        <img class="w-auto h-12 " src="/assets/img/design-system/ui-kit.svg">
        <span>UI Kit</span>
      </h2>

      <div class="grid gap-8 p-8 mt-4 border rounded shadow md:grid-cols-2 lg:grid-cols-3 whitespace-nowrap">
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Token</span>
          <img class="w-auto h-16" src="/assets/img/design-system/token.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Component</span>
          <img class="w-auto h-16" src="/assets/img/design-system/component.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Reference Site</span>
          <img class="w-auto h-16" src="/assets/img/design-system/reference-site.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Design System</span>
          <img class="w-auto h-16" src="/assets/img/design-system/design-system.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Library</span>
          <img class="w-auto h-16" src="/assets/img/design-system/component-library.svg">
        </div>

        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Governance</span>
          <img class="w-auto h-16" src="/assets/img/design-system/governance.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Guidelines</span>
          <img class="w-auto h-16" src="/assets/img/design-system/guidelines.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Patterns</span>
          <img class="w-auto h-16" src="/assets/img/design-system/pattern.svg">
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <span>Pilot</span>
          <img class="w-auto h-16" src="/assets/img/design-system/pilot.svg">
        </div>
      </div>
    </section>

    <!-- Page Headers -->
    <section class="px-8 mt-8">
      <h2 class="text-lg font-bold">
        Page Headers
      </h2>

      <div class="mt-4">
        <header
          class="w-full p-8 bg-white bg-repeat"
          style="background-image: url('/assets/img/backgrounds/graph-paper.svg'); background-position: -4px -4px;height: 102px;"
        >
          <p class="text-5xl font-light">
            Dashboard
          </p>
        </header>
      </div>
    </section>

    <!-- Buttons -->
    <section class="px-8 mt-8">
      <h2 class="text-lg font-bold">
        Buttons
      </h2>
      <div class="gap-1 mt-4 space-y-1 sm:space-y-0 sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
        <div class="col-span-2">
          <button id="home-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-home class="text-gray-400" />
            <span>Home</span>
          </button>
        </div>
        <div class="col-span-2">
          <button id="grid-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-grid class="text-gray-400" />
            <span>Grid</span>
          </button>
        </div>
        <div class="col-span-2">
          <button id="table-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-table class="text-gray-400" />
            <span>Table</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="dashboard-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-dashboard class="text-gray-400" />
            <span>Dashboard</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="projects-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-folder class="text-gray-400" />
            <span>Projects</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="reports-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-report class="text-gray-400" />
            <span>Reports</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="calendar-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-calendar class="text-gray-400" />
            <span>Calendar</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="share-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-share class="text-gray-400" />
            <span>Share</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="edit-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-edit class="text-gray-400" />
            <span>Edit</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="save-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-save class="text-gray-400" />
            <span>Save</span>
          </button>
        </div>
        <div class="col-span-2">
          <button id="confirm-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-save class="text-gray-400" />
            <span>Confirm</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="print-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-printer class="text-gray-400" />
            <span>Print</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="delete-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-delete class="text-gray-400" />
            <span>Delete</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="close-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-close class="text-gray-400" />
            <span>Close</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="play-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-play class="text-gray-400" />
            <span>Play</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="pause-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-play class="text-gray-400" />
            <span>Pause</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="stop-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-play class="text-gray-400" />
            <span>Stop</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="login-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-login class="text-gray-400" />
            <span>Login</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="back-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-arrow-left class="text-gray-400" />
            <span>Back</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="back-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-draggable class="text-gray-400" />
            <span>Move</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="previous-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-arrow-left class="text-gray-400" />
            <span>Previous</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="next-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <span>Next</span>
            <i-carbon-arrow-right class="text-gray-400" />
          </button>
        </div>

        <div class="col-span-2">
          <button id="cta-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <span>Get Started</span>
            <i-carbon-arrow-right class="text-gray-400" />
          </button>
        </div>

        <div class="col-span-2">
          <button id="help-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-help class="text-gray-400" />
            <span>Help</span>
          </button>
        </div>

        <div class="col-span-2">
          <button id="send-button" class="flex items-center justify-center w-full py-2 space-x-2 font-medium bg-white border-2 shadow text-primary-400 hover:border-primary-500 whitespace-nowrap hover:bg-primary-200 hover:text-primary-700">
            <i-carbon-send class="text-gray-400" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Logos -->
    <section class="px-8 mt-8">
      <h2 class="text-lg font-bold">
        Logos
      </h2>

      <ul class="grid grid-cols-6 gap-8 mt-4">
        <li class="flex items-center justify-center px-8 py-4 border border-gray-400 rounded shadow">
          <img src="/assets/img/eagleview_logo-color.svg" alt="EagleView">
        </li>
        <li class="flex items-center justify-center px-8 py-4 border border-gray-400 rounded shadow">
          <img src="/assets/img/corelogic-icon.svg" alt="Corelogic">
        </li>
        <li class="flex items-center justify-center px-8 py-4 border border-gray-400 rounded shadow">
          <img src="/assets/img/hover.svg" alt="Hover">
        </li>
        <li class="flex items-center justify-center px-8 py-4 border border-gray-400 rounded shadow">
          <img src="/assets/img/verisk.svg" alt="Verisk">
        </li>
        <li class="flex items-center justify-center px-8 py-4 border border-gray-400 rounded shadow">
          <img src="/assets/img/vip-software.png" alt="VIP Software">
        </li>
      </ul>
    </section>

    <!-- Icons -->
    <section class="px-8 mt-8">
      <h2 class="text-lg font-bold">
        Icons
      </h2>

      <div class="grid grid-cols-12 gap-8 p-8">
        <i-carbon-message-queue />
        <i-carbon-asterisk />
        <i-carbon-chemistry />
        <i-carbon-debug />
        <i-carbon-bookmark />
        <i-carbon-bookmark-filled />
        <i-carbon-schematics />
        <i-carbon-rss />
        <i-carbon-star />
        <i-carbon-renew class="animate-spin" />
        <i-carbon-star-filled />
        <i-carbon-dot-mark />
        <i-carbon-box />
        <i-carbon-star-half />
        <i-carbon-book />
        <i-carbon-notebook />
        <i-carbon-apps />
        <i-carbon-template />
        <i-carbon-app-switcher />
        <i-carbon-menu />
        <i-carbon-apple />
        <i-carbon-idea />
        <i-carbon-password />
        <i-carbon-language />
        <i-carbon-security />
        <i-carbon-number-0 />
        <i-carbon-number-1 />
        <i-carbon-number-2 />
        <i-carbon-number-3 />
        <i-carbon-number-4 />
        <i-carbon-number-5 />
        <i-carbon-number-6 />
        <i-carbon-number-7 />
        <i-carbon-number-8 />
        <i-carbon-number-9 />
        <i-carbon-number-small-0 />
        <i-carbon-number-small-1 />
        <i-carbon-number-small-2 />
        <i-carbon-number-small-3 />
        <i-carbon-number-small-4 />
        <i-carbon-number-small-5 />
        <i-carbon-number-small-6 />
        <i-carbon-number-small-7 />
        <i-carbon-number-small-8 />
        <i-carbon-number-small-9 />
        <i-carbon-launch />
        <i-carbon-text-bold />
        <i-carbon-text-color />
        <i-carbon-text-italic />
        <i-carbon-folder />
        <i-carbon-locked />
        <i-carbon-unlocked />
        <i-carbon-arrow-right />
        <i-carbon-arrow-left />
        <i-carbon-cloud />
        <i-carbon-download />
        <i-carbon-upload />
        <i-carbon-cloud-download />
        <i-carbon-cloud-upload />
        <i-carbon-building />
        <!-- <i-carbon-datacenter /> -->
        <i-carbon-thumbnail-2 />
        <i-carbon-hashtag />
        <i-carbon-keyboard />
        <i-carbon-container-software />
        <i-carbon-education />
        <i-carbon-scales />
        <i-carbon-development />
        <i-carbon-sprout />
        <i-carbon-drone />
        <i-carbon-drop-photo />
        <i-carbon-drop-photo-filled />
        <i-carbon-video />
        <i-carbon-code />
        <i-carbon-media-library />
        <i-carbon-overflow-menu-horizontal />
        <i-carbon-overflow-menu-vertical />
        <i-carbon-music />
        <i-carbon-attachment />
        <i-carbon-link />
        <i-carbon-activity />
        <i-carbon-copy />
        <i-carbon-play-filled />
        <i-carbon-play-outline />
        <i-carbon-play-outline-filled />
        <i-carbon-trophy />
        <i-carbon-badge />
        <i-carbon-trophy-filled />
        <i-carbon-play />
        <i-carbon-shuffle />
        <i-carbon-pause />
        <i-carbon-stop />
        <i-carbon-screen />
        <i-carbon-laptop />
        <i-carbon-mobile />
        <i-carbon-cube />
        <i-carbon-dashboard />
        <i-carbon-workspace />
        <i-carbon-blog />
        <i-carbon-settings />
        <i-carbon-calibrate />
        <i-carbon-settings-adjust />
        <i-carbon-shopping-cart />
        <i-carbon-recently-viewed />
        <i-carbon-rotate-360 />
        <i-carbon-rotate-180 />
        <i-carbon-temperature />
        <i-carbon-umbrella />
        <i-carbon-view />
        <i-carbon-view-filled />
        <i-carbon-grid />
        <i-carbon-table />
        <i-carbon-table-of-contents />
        <i-carbon-progress-bar-round />
        <i-carbon-in-progress />
        <i-carbon-mac-shift />
        <i-carbon-arrow-shift-down />
        <i-carbon-growth />
        <i-carbon-next-filled />
        <i-carbon-next-outline />
        <i-carbon-previous-filled />
        <i-carbon-previous-outline />
        <i-carbon-help />
        <i-carbon-help-filled />
        <i-carbon-model />
        <i-carbon-model-alt />
        <i-carbon-health-cross />
        <i-carbon-up-to-top />
        <i-carbon-omega />
        <i-carbon-logo-linkedin />
        <i-carbon-logo-facebook />
        <i-carbon-logo-github />
        <i-carbon-logo-twitter />
        <i-carbon-logo-instagram />
        <i-carbon-login />
        <i-carbon-logout />
        <i-carbon-warning />
        <i-carbon-information />
        <i-carbon-error />
        <i-carbon-service-desk />
        <i-carbon-send />
        <i-carbon-phone />
        <i-carbon-share />
        <i-carbon-reply />
        <i-carbon-add />
        <i-carbon-add-filled />
        <i-carbon-subtract />
        <i-carbon-currency-dollar />
        <i-carbon-export />
        <i-carbon-portfolio />
        <i-carbon-receipt />
        <i-carbon-printer />
        <i-carbon-draggable />
        <i-carbon-calendar />
        <i-carbon-calendar-settings />
        <i-carbon-event-schedule />
        <i-carbon-reminder />
        <i-carbon-clean />
        <i-carbon-delete />
        <i-carbon-close />
        <i-carbon-close-filled />
        <i-carbon-close-outline />
        <i-carbon-checkmark />
        <i-carbon-checkmark-outline />
        <i-carbon-checkmark-filled />
        <i-carbon-caret-sort-down />
        <i-carbon-caret-sort />
        <i-carbon-caret-sort-up />
        <i-carbon-chevron-sort-down />
        <i-carbon-chevron-sort />
        <i-carbon-chevron-sort-up />
        <i-carbon-caret-up />
        <i-carbon-caret-right />
        <i-carbon-caret-down />
        <i-carbon-caret-left />
        <i-carbon-chevron-up />
        <i-carbon-chevron-right />
        <i-carbon-chevron-down />
        <i-carbon-chevron-left />
        <i-carbon-bullhorn />
        <i-carbon-earthquake />
        <i-carbon-notification />
        <i-carbon-notification-filled />
        <i-carbon-notification-new />
        <i-carbon-notification-off />
        <i-carbon-notification-off-filled />
        <i-carbon-restart />
        <i-carbon-renew />
        <i-carbon-aperture />
        <i-carbon-camera />
        <i-carbon-calculator />
        <i-carbon-recommend />
        <i-carbon-tag />
        <i-carbon-search />
        <i-carbon-filter />
        <i-carbon-awake />
        <i-carbon-asleep />
        <i-carbon-home />
        <i-carbon-tornado />
        <i-carbon-identification />
        <i-carbon-user />
        <i-carbon-group />
        <i-carbon-bot />
        <i-carbon-user-avatar />
        <i-carbon-report />
        <i-carbon-document />
        <i-carbon-document-blank />
        <i-carbon-pen />
        <i-carbon-edit />
        <i-carbon-save />
        <i-carbon-branch />
        <i-carbon-document-download />
        <i-carbon-document-export />
        <i-carbon-document-import />
        <i-carbon-pdf />
        <i-carbon-generate-pdf />
        <i-carbon-html />
        <i-carbon-thumbs-up />
        <i-carbon-thumbs-down />
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
