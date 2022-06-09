<template>
  <div class="flexColumnStartWrap asSectionContainer">
    <b-modal
      id="editModal"
      v-model="editModal.open"
      header-class="card-header"
      :no-close-on-backdrop="editModal.noCloseOnBackdrop"
      :no-close-on-esc="editModal.noCloseOnEsc"
      size="md"
      @hide="onHide"
    >
      <div slot="modal-header" class="flex items-center justify-between w-full">
        <span class="text-lg font-semibold">{{ title }}</span>
        <button @click.prevent="editModal.open = false">
          <i-heroicons-solid-x />
        </button>
      </div>

      <div v-show="editModal.validator" class="modalMessage validation">
        <label class="col-sm-12">{{ editModal.validator }}</label>
      </div>

      <div>
        <slot name="form" />
      </div>

      <div slot="modal-footer">
        <div v-if="editModal.showUnsavedChangesWarning">
          <b-alert show variant="warning">
            You have unsaved changes. Are you sure you want to cancel?
          </b-alert>
        </div>
        <div v-if="editModal.showUnsavedChangesWarning" class="text-right">
          <b-button variant="primary" @click.prevent="confirmed">
            Yes
          </b-button>
          <b-button
            variant="outline-primary"
            @click.prevent="showUnsavedChangesWarning = false"
          >
            No
          </b-button>
        </div>
        <div>
          <b-button variant="outline-primary" @click.prevent="cancel">
            Cancel
          </b-button>
          <b-button
            variant="primary"
            :disabled="editModal.busy"
            @click.prevent="Save"
          >
            Save
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
