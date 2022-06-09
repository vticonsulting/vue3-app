<template>
  <b-modal
    ref="deleteSectionModal"
    v-model="deleteSectionModal.open"
    :no-close-on-backdrop="deleteSectionModal.noCloseOnBackdrop"
    :no-close-on-esc="deleteSectionModal.noCloseOnEsc"
    title="Confirm Delete"
    ok-title="Yes"
    cancel-title="Cancel"
    header-class="card-header"
    @hide="SectionChangeHide"
  >
    <p v-if="deleteSectionModal">
      {{ deleteSectionModal.promptText }}
    </p>
    <div slot="modal-footer">
      <b-button variant="primary" @click.prevent="SectionChangeCancelled">
        Cancel
      </b-button>
      <b-button variant="primary" @click.prevent="SectionChangeConfirmed">
        Yes
      </b-button>
    </div>
  </b-modal>
</template>
