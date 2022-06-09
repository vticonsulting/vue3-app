<script setup>
const editModel = reactive(
  {
    Id: 37,
    Name: 'Ladder Assist',
    ShortName: 'LA',
    CustomerDescription: 'Adjuster and Technician meet on site at specified time to perform inspection.',
    IsActive: true,
    OnExternalForm: true,
    CreatedBy: '1',
    CreatedByName: 'SYSTEM USER',
    CreatedOn: '2013-07-19T13:07:34',
    Duration: 90,
    HasDescription: false,
    HasQuantity: false,
    RequiresDate: true,
    RequiresPhone: false,
    ShowCalendar: true,
  },
)
</script>

<template>
  <div class="edit-form">
    <div class="p-8">
      <div
        class="max-w-screen-md p-8 bg-white border rounded-lg shadow-lg dark:border-primary-600 dark:bg-primary-700"
        style="max-width: 768px"
      >
        <header class="border-b">
          <h2 class="text-2xl font-bold">
            Available Service Type Details
          </h2>
        </header>

        <div class="flex">
          <div class="mt-4">
            <label class="h-label">Service Type Name</label>
            <textbox-component
              :current-value="editModel.Name"
              :text-area="false"
              :max-characters="50"
              :min-characters="1"
              hide-margin
              @onChanged="editModel.Name = $event"
            />
          </div>
          <div class="mt-4">
            <label class="h-label">Short Name</label>
            <textbox-component
              :current-value="editModel.ShortName"
              :text-area="false"
              :max-characters="10"
              :min-characters="0"
              hide-margin
              @onChanged="editModel.ShortName = $event"
            />
          </div>
          <div class="mt-4">
            <label class="h-label">Duration (seconds)</label>
            <numeric-component
              :current-value="editModel.Duration"
              :max-characters="3"
              :min-characters="0"
              hide-margin
              @onChanged="editModel.Duration = $event"
            />
          </div>
        </div>
        <div>
          <div class="mt-4">
            <label class="h-label">Customer Description</label>
            <textbox-component
              :current-value="editModel.CustomerDescription"
              :text-area="true"
              :max-characters="200"
              :min-characters="0"
              hide-margin
              @onChanged="editModel.CustomerDescription = $event"
            />
          </div>
        </div>

        <div class="max-w-screen-lg" style="max-width: 480px">
          <div class="flex justify-between mt-8">
            <div>
              <label class="h-label">Is Active</label>
              <boolean-component
                :current-value="editModel.IsActive"
                :choices="['Yes', 'No']"
                @onChanged="editModel.IsActive = $event"
              />
            </div>
            <div>
              <label class="h-label">Has Quantity</label>
              <boolean-component
                :current-value="editModel.HasQuantity"
                :choices="['Yes', 'No']"
                @onChanged="editModel.HasQuantity = $event"
              />
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <div class="mt-4">
              <label class="h-label">Show Calendar</label>
              <boolean-component
                :current-value="editModel.ShowCalendar"
                :choices="['Yes', 'No']"
                @onChanged="editModel.ShowCalendar = $event"
              />
            </div>
            <div class="mt-4">
              <label class="h-label">On External Form</label>
              <boolean-component
                :current-value="editModel.OnExternalForm"
                :choices="['Yes', 'No']"
                @onChanged="editModel.OnExternalForm = $event"
              />
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <div class="mt-4">
              <label class="h-label">Requires Phone</label>
              <boolean-component
                :current-value="editModel.RequiresPhone"
                :choices="['Yes', 'No']"
                @onChanged="editModel.RequiresPhone = $event"
              />
            </div>
            <div class="mt-4">
              <label class="h-label">Has Description</label>
              <boolean-component
                :current-value="editModel.HasDescription"
                :choices="['Yes', 'No']"
                @onChanged="editModel.HasDescription = $event"
              />
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <div class="mt-4">
              <label class="h-label">Requires Date</label>
              <boolean-component
                :current-value="editModel.RequiresDate"
                :choices="['Yes', 'No']"
                @onChanged="editModel.RequiresDate = $event"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
