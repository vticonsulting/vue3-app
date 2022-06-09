<template id="auto-scheduler-index-page-template">
  <form v-if="ready">
    <div v-if="!Authorized" class="flex flex-col w-full min-h-screen p-5">
      You are not authorized.
    </div>

    <div v-else class="flex flex-col w-full min-h-screen">
      <app-navbar>
        <template #actions>
          <div class="flex items-center justify-end space-x-4">
            <button
              v-show="!showAvailability"
              type="button"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md shadow-sm border-primary-400 text-primary-50 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
              @click="onAvailabilityClicked"
            >
              <i-heroicons-solid-calendar class="mr-2 -ml-1" />
              <span>Field Tech Availablility</span>
            </button>

            <button
              v-show="showAvailability"
              type="button"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md shadow-sm border-primary-400 text-primary-50 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
              @click="onCloseClicked"
            >
              <i-heroicons-solid-x" class="mr-2 -ml-1">
                </i-heroicons-solid>
                <span>Close</span>
                </i-heroicons-solid0x">
              </i-heroicons-solid-x">
            </button>
          </div>
        </template>
      </app-navbar>

      <page-header class="bg-white shadow">
        Auto Scheduler
      </page-header>

      <main class="flex-1">
        <section v-show="!showAvailability" id="route-filters" class="mt-4 md:px-6">
          <base-box>
            <div id="route-filter" class="items-end justify-between w-full md:flex md:space-x-4">
              <div class="items-end md:flex md:space-x-4">
                <div class="h-field">
                  <label class="block h-label">Service Area</label>
                  <div class="mt-1">
                    <dropdown-component
                      ref="AreaList"
                      :bind-list="bindAreaList"
                      :uri="serviceAreaUri"
                      @onChanged="onAreaChanged($event)"
                    />
                  </div>
                </div>
                <div class="mt-4 h-field md:mt-0 md:ml-2">
                  <label class="block h-label">Service Date</label>
                  <div class="mt-1">
                    <input
                      v-model="selectedInspectionDate"
                      type="date"
                      style="width: 100%; background-color: white; min-width: 320px"
                      class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm h-form-control datePicker sm:text-sm md:w-auto focus:outline-none focus:border-gray-900 focus:ring-gray-900"
                    >
                  </div>
                </div>

                <div
                  class="mt-4 space-x-0 space-y-4 md:flex md:space-y-0 md:space-x-4 md:mt-0 md:ml-2"
                >
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 whitespace-nowrap hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    @click="GenerateSchedule"
                  >
                    Generate Schedule
                  </button>

                  <button
                    v-show="showSchedule && model.Id == 0"
                    type="button"
                    class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer bg-primary-600 whitespace-nowrap md:w-auto hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    @click="ApproveSchedule"
                  >
                    Approve Area Schedule
                  </button>
                </div>
              </div>

              <div>
                <!-- Status Key -->
                <section v-if="showSchedule" class="status-key-section">
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
                          <span class="font-medium text-blue-900">Previously Assigned Inspection</span>
                          <span
                            class="text-xs"
                          >Field Tech was assigned outside of the auto scheduler</span>
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
                          <span
                            class="text-xs"
                          >Original assigned field tech no longer in service area</span>
                        </div>
                      </div>
                      <div class="flex items-center mt-2 leading-none">
                        <i
                          class="flex-shrink-0 w-8 h-8 text-red-900 bg-red-100 border border-red-900 h-status-indicator"
                        />
                        <div class="flex flex-col ml-2">
                          <span class="font-medium text-red-900">Exception</span>
                          <span
                            class="text-xs"
                          >Was not able to schedule inspection due to no available routes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </base-box>

          <span
            v-show="showSchedule && model.Id > 0"
            class="block px-4 py-2 mt-4 text-sm font-semibold bg-yellow-100 border rounded shadow"
          >Approved By {{ model.ApprovedByUser }} On {{ model.ApprovedDate }}</span>
        </section>

        <!-- Loading Indicator -->
        <section v-show="showLoader" class="md:px-6">
          <base-box class="flex items-center justify-center min-h-full mt-4">
            <page-loading-indicator />
          </base-box>
        </section>

        <article
          v-if="hasNoRoutes && !showAvailability"
          class="flex flex-col w-full min-h-screen p-5"
        >
          There are no available Routes for service area {{ selectedServiceArea }} on {{ selectedInspectionDate }}.
          <br>
          <div v-if="model.HasInspections">
            <br>
            There are {{ model.InspectionCount }} unassigned project inspections including the following:
            <div>
              <section v-for="claim in model.Claims">
                {{ claim }}
                <br>
              </section>
            </div>
          </div>
        </article>

        <article
          v-show="!showAvailability && model.HasInspections && model.Result && !hasNoRoutes"
          class="mt-4 md:px-6"
        >
          <div>
            <!-- Area Schedule -->
            <section
              v-if="showSchedule"
              id="area-schedule"
              style="height: 500px"
              class="relative mt-4 overflow-x-auto border rounded border-primary-200"
            >
              <h3
                class="absolute flex items-center w-40 h-10 px-4 font-bold border-b bg-primary-50 border-primary-200 text-primary-500"
              >
                Area Schedule
              </h3>
              <div class="relative ml-40">
                <div
                  v-show="showSchedule"
                  class="z-20 flex text-sm font-medium text-gray-500"
                  style="position: sticky; top: 0"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot1Left}px` }"
                  >
                    <span class="text-sm font-semibold">7:00</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot2Left}px` }"
                  >
                    <span class="text-sm font-semibold">7:30</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot3Left}px` }"
                  >
                    <span class="text-sm font-semibold">8:00</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot4Left}px` }"
                  >
                    <span class="text-sm font-semibold">8:30</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot5Left}px` }"
                  >
                    <span class="text-sm font-semibold">9:00</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot6Left}px` }"
                  >
                    <span class="text-sm font-semibold">9:30</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot7Left}px` }"
                  >
                    <span class="text-sm font-semibold">10:00</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot8Left}px` }"
                  >
                    <span class="text-sm font-semibold">10:30</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot9Left}px` }"
                  >
                    <span class="text-sm font-semibold">11:00</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot10Left}px` }"
                  >
                    <span class="text-sm font-semibold">11:30</span>
                    <span>AM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot11Left}px` }"
                  >
                    <span class="text-sm font-semibold">12:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot12Left}px` }"
                  >
                    <span class="text-sm font-semibold">12:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot13Left}px` }"
                  >
                    <span class="text-sm font-semibold">1:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot14Left}px` }"
                  >
                    <span class="text-sm font-semibold">1:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot15Left}px` }"
                  >
                    <span class="text-sm font-semibold">2:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot16Left}px` }"
                  >
                    <span class="text-sm font-semibold">2:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot17Left}px` }"
                  >
                    <span class="text-sm font-semibold">3:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot18Left}px` }"
                  >
                    <span class="text-sm font-semibold">3:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot19Left}px` }"
                  >
                    <span class="text-sm font-semibold">4:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot20Left}px` }"
                  >
                    <span class="text-sm font-semibold">4:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot21Left}px` }"
                  >
                    <span class="text-sm font-semibold">5:00</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-b border-l select-none bg-primary-50 border-primary-200"
                    :style="{ left: `${slot22Left}px` }"
                  >
                    <span class="text-sm font-semibold">5:30</span>
                    <span class="text-xs text-gray-400">PM</span>
                  </div>
                </div>

                <section v-for="route in model.Routes" class="relative flex w-auto gap-0 mx-auto">
                  <div class="flex">
                    <div
                      v-for="n in 22"
                      :key="`route-track-${n}`"
                      class="flex items-center justify-center w-20 h-20 p-1 text-gray-200 bg-white select-none slot"
                      style="min-width: 80px; height: 80px"
                    >
                      <slot>
                        <div
                          class="flex items-center justify-center w-full h-full bg-white border border-dashed border-primary-200"
                        />
                      </slot>
                    </div>
                  </div>

                  <route-component
                    :autoscheduler-id="model.Id"
                    :route="route"
                    :area="selectedServiceArea"
                    :service-area-technician-uri="serviceAreaTechnicianUri"
                    :position="position"
                  />
                </section>
              </div>
            </section>

            <!-- Secondary Button Group -->
            <base-box v-if="showSchedule" class="mt-4 space-x-4">
              <button
                v-show="model.Id == 0"
                type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                @click="onAddExceptionClicked"
              >
                Add Exception Route
              </button>

              <button
                type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                @click="showMileageLog ? showMileageLog = false : showMileageLog = true"
              >
                <span v-if="!showMileageLog">View Travel Log</span>
                <span v-if="showMileageLog">Close Travel Log</span>
              </button>
            </base-box>

            <base-box v-if="showMileageLog" class="mt-4 bg-white">
              <section class="p-6">
                <h3 class="text-lg font-semibold text-primary-500">
                  Travel Log
                </h3>
                <div class="flex flex-col mt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div class="overflow-hidden border-t border-b border-primary-200">
                        <table class="min-w-full divide-y divide-gray-200">
                          <tbody
                            v-for="mileageViewer in model.MileageViewer"
                            v-if="showMileageLog"
                            class="bg-white divide-y divide-gray-200"
                          >
                            <template v-if="mileageViewer.FieldTechName == 'new'">
                              <tr class="font-normal bg-primary-50">
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  style="width: 40%"
                                >
                                  Field Technician
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  style="width: 20%"
                                >
                                  Previous Inspection
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  style="width: 20%"
                                >
                                  Next Inspection
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                                  style="width: 20%"
                                >
                                  Minutes to Inspection
                                </th>
                              </tr>
                            </template>
                            <template v-if="mileageViewer.FieldTechName != 'new'">
                              <tr>
                                <td
                                  class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  style="width: 40%"
                                >
                                  {{ mileageViewer.FieldTechName }}
                                </td>
                                <td
                                  class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  style="width: 20%"
                                >
                                  {{ mileageViewer.PreviousClaimNumber }}
                                </td>
                                <td
                                  class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  style="width: 20%"
                                >
                                  {{ mileageViewer.NextClaimNumber }}
                                </td>
                                <td
                                  class="px-6 py-4 text-sm font-medium text-center text-gray-900 whitespace-nowrap"
                                  style="width: 20%"
                                >
                                  {{ mileageViewer.MilageToInspection }}
                                </td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </base-box>
          </div>
        </article>

        <article v-show="showAvailability" class="px-6 mt-4">
          <availability-component
            :created-by-user-id="userId"
            :current-service-area-id="parseInt(selectedAreaId)"
            :service-area-technician-uri="serviceAreaTechnicianUri"
            :service-area-uri="serviceAreaUri"
            :searched-user-prop="searchedUserProp"
          />
        </article>
      </main>

      <app-footer class="mt-16" style="margin-top: 176px">
        <span>&copy; Hancock Claims Consultants, LLC. All rights reserved.</span>
      </app-footer>

      <edit-component
        :display-modal="showEditForm"
        :model="editTimeModel"
        :is-insert="false"
        :route="GetUpdateInspectionRoute()"
        :success-callback="UpdateTimeCallback"
        :model-validator="inspectionTimeValidator"
        title="Update Inspection Time"
      >
        <template #form>
          <form class="formContainerStacked">
            <div class="formLabel" style="font-weight:500">
              Please select the inspection time:
            </div>
            <div class="formElement">
              <kendo-dropdownlist
                ref="inspectionTimes"
                v-model="editTimeModel.ScheduleDate"
                style="width:350px"
                data-text-field="text"
                data-value-field="value"
                :data-source="inspectionTimeDataSource"
              />
            </div>

            <div span style="font-weight:500">
              Inspection Details:
            </div>
            <div>
              <span style="font-weight:500">Carrier:</span>
              {{ inspectionToUpdate.CompanyName }}
            </div>
            <div>
              <span style="font-weight:500">Claim Number:</span>
              {{ inspectionToUpdate.ClaimNumber }}
            </div>
            <div>
              <span style="font-weight:500">Inspection Date:</span>
              {{ inspectionToUpdate.InspectionDate }}
            </div>
            <div>
              <span style="font-weight:500">Inspection Address:</span>
              {{ inspectionToUpdate.InspectionAddress }}
            </div>
          </form>
        </template>
      </edit-component>

      <div v-if="settingsModal.open">
        <b-modal
          id="settingsModal"
          v-model="settingsModal.open"
          header-class="card-header"
          :no-close-on-backdrop="settingsModal.noCloseOnBackdrop"
          :no-close-on-esc="settingsModal.noCloseOnEsc"
          size="md"
          @hide="onHide"
        >
          <div slot="modal-title">
            <span>Auto Scheduler Settings</span>
          </div>

          <div v-show="settingsModal.validator" class="modalMessage validation">
            <label class="col-sm-12">{{ settingsModal.validator }}</label>
          </div>

          <div class="f-field">
            <label class="label">Travel Time Buffer (In Minutes)</label>
            <div>
              <input value="10" maxlength="2" size="5">
            </div>
          </div>

          <div>
            <div class="label">
              Auto Schedule Assigned Inspections:
            </div>
            <div>
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              />
            </div>
          </div>

          <div slot="modal-footer">
            <div v-if="settingsModal.showUnsavedChangesWarning">
              <b-alert
                show
                variant="warning"
              >
                You have unsaved changes. Are you sure you want to cancel?
              </b-alert>
            </div>
            <div v-if="settingsModal.showUnsavedChangesWarning">
              <b-button variant="primary" @click.prevent="confirmed">
                Yes
              </b-button>
              <b-button
                variant="secondary"
                @click.prevent="settingsModal.showUnsavedChangesWarning = false"
              >
                No
              </b-button>
            </div>
            <div>
              <b-button variant="primary" @click.prevent="onCancelSettings">
                Cancel
              </b-button>
              <b-button
                variant="primary"
                :disabled="settingsModal.busy"
                @click.prevent="onSaveSettings"
              >
                Save
              </b-button>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </form>
</template>
