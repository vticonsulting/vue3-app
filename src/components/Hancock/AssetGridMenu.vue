<template>
  <div class="pifAssetContainer">
    <div v-if="ready && noRecords" class="noForms">
      <div>No Property Inspection Forms have been created yet.</div>
      <div class="pifIconMenu pifFormIconsActive cursor" @click="onNewFormClicked">
        <i class="fas fa-copy" />
        <span>New Form</span>
      </div>
    </div>
    <div v-if="!noRecords && ready" id="FormHeaderContainer" class="pifFormHeaderContainer">
      <div id="FormDropdown" style="padding:5px;">
        <div>
          <span class="pifFormName">Select PIF {{ pifCount }} :</span>
          <kendo-dropdownlist
            ref="dropdownlist"
            :data-source="formsDropdownDataSource"
            data-text-field="text"
            data-value-field="value"
            @change="onFormsChange"
            @dataBound="onDataBound"
          />
        </div>
      </div>

      <div id="FormLinks">
        <div v-if="!showUnDeleteButton" :class="iconClass" @click="onEditFormClicked">
          <i class="fas fa-edit" />
          <span>Edit PIF</span>
        </div>

        <div class="pifIconMenu pifFormIconsActive cursor" @click="onNewFormClicked">
          <i class="fas fa-copy" />
          <span>New PIF</span>
        </div>

        <div
          v-if="!showUnDeleteButton"
          :class="iconClass"
          @click.prevent="ConfirmDelete(propertyInspectionForm, apiClient, DeleteSuccessCallback)"
        >
          <i class="fas fa-trash" />
          <span>Delete PIF</span>
        </div>

        <div
          v-if="showUnDeleteButton"
          :class="iconClass"
          @click.prevent="onUndeleteClicked"
        >
          <i class="fas fa-trash-restore" />
          <span>UnDelete PIF</span>
        </div>
      </div>
    </div>
    <div v-if="!noRecords && ready" id="PifStatus" class="pifFormStatusContainer">
      Created On: {{ propertyInspectionForm.CreatedOn }}
      <br>
      Last Updated On: {{ propertyInspectionForm.LastModifiedOn }}
    </div>
    <div
      v-if="showUnDeleteButton && ready"
      style="background-color:red; color:white; padding:10px; width:100%"
    >
      This form is deleted. To undelete it, click the UnDelete Form button above.
    </div>

    <div v-if="deleteService.open">
      <b-modal
        ref="deleteModal"
        v-model="deleteService.open"
        :no-close-on-backdrop="deleteService.noCloseOnBackdrop"
        :no-close-on-esc="deleteService.noCloseOnEsc"
        title="Confirm Delete"
        ok-title="Yes"
        cancel-title="Cancel"
        header-class="card-header"
        @hide="onHide"
        @ok.prevent="DeleteConfirmed"
      >
        <p v-if="deleteService">
          {{ deleteService.promptText }}
        </p>
      </b-modal>
    </div>

    <div v-if="editModal.open">
      <b-modal
        id="formModal"
        v-model="editModal.open"
        header-class="card-header"
        :no-close-on-backdrop="editModal.noCloseOnBackdrop"
        :no-close-on-esc="editModal.noCloseOnEsc"
        size="md"
        @hide="onHide"
      >
        <div slot="modal-title">
          <span v-if="!editModal.isEdit">New Property Inspection Form</span>
          <span v-else>Edit Property Inspection Form</span>
        </div>

        <div v-show="editModal.validator" class="modalMessage validation">
          <label class="col-sm-12">{{ editModal.validator }}</label>
        </div>
        <div>
          <div class="form-group">
            <label class="formLabel">Please Enter a Form Name</label>
            <input v-model="editModal.data.FormName" maxlength="50" class="form-control">
          </div>
        </div>
        <div v-if="editModal.FormName != ''" slot="modal-footer">
          <div v-if="editModal.showUnsavedChangesWarning">
            <b-alert
              show
              variant="warning"
            >
              You have unsaved changes. Are you sure you want to cancel?
            </b-alert>
          </div>
          <div v-if="editModal.showUnsavedChangesWarning" class="text-right">
            <b-button variant="primary" @click.prevent="editModal.open = false">
              Yes
            </b-button>
            <b-button
              variant="primary"
              @click.prevent="editModal.showUnsavedChangesWarning = false"
            >
              No
            </b-button>
          </div>
          <div v-else>
            <b-button
              v-if="!editModal.isEdit"
              variant="primary"
              :disabled="editModal.busy"
              @click.prevent="onSaveFormClicked"
            >
              Save
            </b-button>
            <b-button variant="primary" @click.prevent="onCancelFormClicked">
              Cancel
            </b-button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>
