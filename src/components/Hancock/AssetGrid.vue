<template>
  <div v-if="ready && showAssets" style="width:100%">
    <div id="AssetGrid" class="assetGridContainer">
      <div>
        <div class="pifAssetButtons">
          <div class="assetButton">
            <button
              type="button"
              :disabled="showDeletedAssets"
              class="assetButtonWidth btn btn-sm btn-warning"
              @click="onSelectAllClicked"
            >
              <i class="fas fa-plus-square" /> Select All
            </button>
          </div>

          <div class="assetButton">
            <b-dropdown
              class="assetButtonWidth createAsset"
              style="height:30.67px !important; padding-top: -15px !important"
              variant="warning"
            >
              <template #button-content>
                <i class="fas fa-plus-circle" /> Upload Asset
              </template>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.Diagram, 'manual')"
              >
                &nbsp;&nbsp;Upload Diagram
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.Diagram, 'auto')"
              >
                &nbsp;&nbsp;Upload Diagram - Auto Create Asset
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.HoverEsx)"
              >
                &nbsp;&nbsp;Upload Hover ESX
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.HoverXml)"
              >
                &nbsp;&nbsp;Upload Hover XML
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.HoverInvoice)"
              >
                &nbsp;&nbsp;Upload Hover Invoice
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.HoverMeasurements)"
              >
                &nbsp;&nbsp;Upload Hover Measurements
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onUploadAssetClicked(assetTypeEnum.UserAsset)"
              >
                &nbsp;&nbsp;Upload User Asset
              </b-dropdown-item-button>
            </b-dropdown>
          </div>

          <div class="assetButton">
            <button
              type="button"
              class="assetButtonWidth btn btn-sm btn-warning"
              @click="onEmailAssetClicked()"
            >
              <i class="fas fa-envelope" /> Email Asset
            </button>
          </div>
          <div class="break" />

          <div class="assetButton">
            <b-dropdown
              class="assetButtonWidth createAsset"
              :disabled="!showFieldAssets"
              style="height:30.67px !important; padding-top: -15px !important"
              variant="warning"
            >
              <template #button-content>
                <i class="fas fa-plus-circle" /> Create Asset
              </template>
              <b-dropdown-item-button
                @click="onCreatePhotoFormClicked('auto')"
              >
                &nbsp;&nbsp;Auto Create Photo Form
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onCreatePhotoFormClicked('manual')"
              >
                &nbsp;&nbsp;Manually Create Photo Form
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="onCreateDiagramClicked()"
              >
                &nbsp;&nbsp;Create Diagram
              </b-dropdown-item-button>
            </b-dropdown>
          </div>

          <div class="assetButton">
            <button
              type="button"
              class="assetButtonWidth btn btn-sm btn-warning"
              @click="onDeleteAssetsClicked()"
            >
              <i class="fas fa-trash" /> Delete Asset(s)
            </button>
          </div>
          <div class="assetButton">
            <button
              id="btnDownloadAsset"
              type="button"
              class="assetButtonWidth btn btn-sm btn-warning"
              @click="onDownLoadClicked()"
            >
              <i class="fas fa-file-download" /> Zip File
            </button>
          </div>
        </div>
      </div>

      <div class="assetHeader">
        <span class="grow">{{ assetCount }}</span>

        <span style="padding-left:15px">
          Show Deleted Assets: &nbsp;
          <kendo-switch
            :checked="showDeletedAssets"
            name="switch"
            @change="LoadDeletedAssets(showDeletedAssets = !showDeletedAssets)"
          />
        </span>
        <span style="padding-left:15px">
          Show Field/User Assets: &nbsp;
          <kendo-switch :checked="showFieldAssets" name="switch" @change="LoadFieldAssets()" />
        </span>
      </div>
      <div v-for="asset in displayAssets">
        <div v-if="asset.IsDeleted == showDeletedAssets" class="assetRow">
          <div v-if="!asset.IsDeleted" @click="asset.IsSelected = !asset.IsSelected">
            <div
              style="width:100%"
              class="eCheckbox"
              :class="{ answered: asset.IsSelected }"
            >
&nbsp;
            </div>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn btn-sm btn-warning"
              @click="onRecoverClicked(asset)"
            >
              <i class="fas fa-trash" /> Recover
            </button>&nbsp;
          </div>

          <div style="padding-left:20px">
            <div
              v-if="asset.AssetTypeId == assetTypeEnum.EagleViewDiagram"
              class="pifAssetIconContainer"
            >
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/eagle.jpg"
              >
              <span class="assetType">EagleView Diagram</span>
            </div>

            <div
              v-if="asset.AssetTypeId == assetTypeEnum.EagleViewFull"
              class="pifAssetIconContainer"
            >
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/eagleFull.jpg"
              >
              <span class="assetType">EagleView Full Diagram</span>
            </div>

            <div v-if="asset.AssetTypeId == assetTypeEnum.Email" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/email.jpg"
              >
              <span class="assetType">Email</span>
            </div>
            <div
              v-if="asset.AssetTypeId == assetTypeEnum.HoverMeasurements"
              class="pifAssetIconContainer"
            >
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/HoverMeasure.png"
              >
              <span class="assetType">Hover Measurements</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.HoverEsx" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/hoverEsx.png"
              >
              <span class="assetType">Hover Esx</span>
            </div>
            <div
              v-if="asset.AssetTypeId == assetTypeEnum.HoverInvoice"
              class="pifAssetIconContainer"
            >
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/HoverInvoice.png"
              >
              <span class="assetType">Hover Invoice</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.HoverXml" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/HoverXml.png"
              >
              <span class="assetType">Hover Xml</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.FieldAsset" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                :src="urlBuilder(asset.FullPath)"
              >
              <span class="assetType">Field Asset</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.Unknown" class="pifAssetIconContainer">
              <div v-if="asset.FileName.toUpperCase().indexOf('PDF') > -1">
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  style="width:75px !important"
                  src="/assets/img/pdf.png"
                >
              </div>
              <div
                v-if="asset.FileName.toUpperCase().indexOf('JPG') > -1 || asset.FileName.toUpperCase().indexOf('JPEG') > -1 || asset.FileName.toUpperCase().indexOf('PNG') > -1"
              >
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  style="width:75px !important"
                  :src="urlBuilder(asset.FullPath)"
                >
              </div>
              <span class="assetType">Unknown Type</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.UserAsset" class="pifAssetIconContainer">
              <div
                v-if="asset.FileName.toUpperCase().indexOf('PDF') > -1"
                class="pifAssetIconContainer"
              >
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  style="width:75px !important"
                  src="/assets/img/pdf.png"
                >
                <span class="assetType">User Asset</span>
              </div>
              <div
                v-if="asset.FileName.toUpperCase().indexOf('JPG') > -1 || asset.FileName.toUpperCase().indexOf('JPEG') > -1 || asset.FileName.toUpperCase().indexOf('PNG') > -1"
                class="pifAssetIconContainer"
              >
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  style="width:75px !important"
                  :src="urlBuilder(asset.FullPath)"
                >
                <span class="assetType">User Asset</span>
              </div>

              <div
                v-if="asset.FileName.toUpperCase().indexOf('EML') > -1 || asset.FileName.toUpperCase().indexOf('MSG') > -1"
                class="pifAssetIconContainer"
              >
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  style="width:75px !important"
                  src="/assets/img/email.jpg"
                >
                <span class="assetType">Email</span>
              </div>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.Invoice" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/invoice.png"
              >
              <span class="assetType">Invoice</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.PhotoForm" class="pifAssetIconContainer">
              <img
                v-if="asset.AssetTypeId == assetTypeEnum.PhotoForm"
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/photoForm.png"
              >
              <span class="assetType">Photo Form</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.Report" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/report.png"
              >
              <span class="assetType">Report</span>
            </div>
            <div v-if="asset.AssetTypeId == assetTypeEnum.Diagram" class="pifAssetIconContainer">
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/diagram.jpg"
              >
              <span class="assetType">Diagram</span>
            </div>
            <div
              v-if="asset.AssetTypeId == assetTypeEnum.GeomniEssentialsReport"
              class="pifAssetIconContainer"
            >
              <img
                class="pifAssetImage img-responsive img-thumbnail"
                style="width:75px !important"
                src="/assets/img/diagram.jpg"
              >
              <span class="assetType">Geomni Report</span>
            </div>
          </div>
          <div class="assetDetails grow">
            <div class="assetRowPadding">
              <span class="assetLabel">Name:</span>
              <span class="assetText">{{ asset.AssetName }}</span>
            </div>
            <div
              v-if="(asset.AssetTypeId == assetTypeEnum.PhotoForm || asset.AssetTypeId == assetTypeEnum.Report || asset.AssetTypeId == assetTypeEnum.Unknown || asset.AssetTypeId == assetTypeEnum.UserAsset || asset.AssetTypeId == assetTypeEnum.Diagram) && asset.Description.length > 0"
              class="assetRowPadding"
            >
              <span class="assetLabel">Description:</span>
              <span class="assetText">{{ asset.Description }}</span>
            </div>
            <div v-if="asset.CreatedByUser" class="assetRowPadding">
              <span class="assetLabel">Created By:</span>
              <span class="assetText">{{ asset.CreatedByUser }}</span>
            </div>
            <div class="assetRowPadding">
              <span class="assetLabel">Created On:</span>
              <span class="assetText">{{ asset.CreatedOn }}</span>
            </div>
            <div v-show="asset.HasMetaData && asset.Make.length > 0" class="assetRowPadding">
              <span class="assetLabel">Device:</span>
              <span class="assetText">{{ asset.Make }} - {{ asset.Model }}</span>
            </div>
            <div v-show="asset.HasMetaData" class="assetRowPadding">
              <span v-show="asset.OriginalFileTypeExtension.length > 0">
                <span class="assetLabel">Original File Type:</span>
                <span class="assetText">{{ asset.OriginalFileTypeExtension }}</span>
              </span>
              <span v-show="asset.Xresolution.length > 0">
                <span class="assetLabel">Resolution:</span>
                <span class="assetText">X:{{ asset.Xresolution }} Y:{{ asset.Yresolution }}</span>
              </span>
            </div>
            <div
              v-if="asset.AssetTypeId == assetTypeEnum.FieldAsset"
              class="assetRowPadding"
              style="padding-top:9px"
            >
              <span
                v-if="asset.HasMetaData != null && !asset.HasMetaData"
                class="noMetadata"
              >Missing Metadata! Will not be included in Emails or Photo Forms.</span>
            </div>
          </div>
          <div>
            <button
              v-if="!asset.IsDeleted && asset.AssetTypeId != assetTypeEnum.FieldAsset"
              type="button"
              class="btn btn-sm btn-warning"
              @click="editModal.showModal(asset, true)"
            >
              <i class="fas fa-file-download" /> Edit
            </button>&nbsp;
            <button
              v-if="!asset.IsDeleted"
              type="button"
              class="btn btn-sm btn-warning"
              @click="onDownloadOpenAssetClicked(asset)"
            >
              <i class="fas fa-file-download" /> Download
            </button>&nbsp;
          </div>
        </div>
      </div>
    </div>

    <asset-upload-component
      show-description
      :allow-multiples="allowMultiples"
      :asset-type="uploadAssetType"
      :open="openAssetModal"
    />

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

    <div v-if="sendAssetModal.open">
      <b-modal
        id="sendAssetModal"
        v-model="sendAssetModal.open"
        header-class="card-header"
        :no-close-on-backdrop="sendAssetModal.noCloseOnBackdrop"
        :no-close-on-esc="sendAssetModal.noCloseOnEsc"
        size="md"
        @hide="sendAssetModal.open = false"
      >
        <div slot="modal-title">
          <span class="project">Claim Deliverables</span>
        </div>

        <div style="color:Black; padding:10px;margin:10px;">
          Recipients:
          <textarea
            v-model="sendAssetModal.data"
            rows="2"
            class="form-control formValue tb"
          />
          <br>If sending multiple emails, separate Email addresses with commas without spaces.
          <br>Example: msmith@example.com,jdoe@example.com
        </div>

        <div class="validatorSmall">
          {{ sendAssetModal.validator }}
        </div>
        <div slot="modal-footer">
          <b-button variant="primary" @click.prevent="onSendAssetCancelClicked">
            Cancel
          </b-button>
          <b-button variant="primary" @click.prevent="onSendAssetClicked">
            Send
          </b-button>
        </div>
      </b-modal>
    </div>
    <div v-if="RecoverAssetModal.open">
      <b-modal
        ref="RecoverAssetModal"
        v-model="RecoverAssetModal.open"
        :no-close-on-backdrop="RecoverAssetModal.noCloseOnBackdrop"
        :no-close-on-esc="RecoverAssetModal.noCloseOnEsc"
        header-class="card-header"
      >
        <div slot="modal-header">
          <span>Recover Asset</span>
        </div>
        <p v-if="RecoverAssetModal">
          {{ RecoverAssetModal.promptText }}
        </p>

        <div slot="modal-footer">
          <button
            type="button"
            class="btn btn-primary btn-s"
            @click.prevent="OnRecoverAssetContinueClicked()"
          >
            Continue
          </button>
          <b-button variant="primary" @click.prevent="RecoverAssetModal.open = false">
            Cancel
          </b-button>
        </div>
      </b-modal>
    </div>

    <div v-if="editModal.open">
      <b-modal
        ref="editModal"
        v-model="editModal.open"
        header-class="card-header"
        :no-close-on-backdrop="editModal.noCloseOnBackdrop"
        :no-close-on-esc="editModal.noCloseOnEsc"
        size="md"
        @hide="hideEditAssetModal"
      >
        <div slot="modal-title">
          Edit Asset
        </div>

        <div v-show="editModal.validator" class="modalMessage validation">
          <label class="col-sm-12">{{ editModal.validator }}</label>
        </div>

        <div class="form-group">
          <label class="col-sm-12">Asset Name:</label>
          <div class="col-sm-12">
            <input
              v-model="editModal.data.AssetName"
              maxlength="30"
              class="form-control"
              @change="editModal.validateAssetName()"
            >
            <label
              style="font-size:12px"
            >Note: Do not include the following characters - \ / : * ? " < > |</label>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-12">Description:</label>
          <div class="col-sm-12">
            <textarea v-model="editModal.data.Description" class="form-control" rows="5" />
          </div>
        </div>

        <div slot="modal-footer">
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
              variant="primary"
              :disabled="editModal.busy"
              @click.prevent="onSaveEditClicked"
            >
              Save
            </b-button>
            <b-button variant="primary" @click.prevent="onCancelEditClicked">
              Close
            </b-button>
          </div>
        </div>
      </b-modal>
    </div>
    <div v-if="CreateAssetModal.open">
      <b-modal
        ref="CreateAssetModal"
        v-model="CreateAssetModal.open"
        :no-close-on-backdrop="CreateAssetModal.noCloseOnBackdrop"
        :no-close-on-esc="CreateAssetModal.noCloseOnEsc"
        header-class="card-header"
      >
        <div slot="modal-header">
          <span>{{ CreateAssetModal.title }}</span>
        </div>
        <p v-if="CreateAssetModal">
          {{ CreateAssetModal.promptText }}
        </p>

        <div slot="modal-footer">
          <button
            type="button"
            class="btn btn-primary btn-s"
            @click.prevent="onCreateAssetContinueClicked()"
          >
            Continue
          </button>
          <b-button variant="primary" @click.prevent="CreateAssetModal.open = false">
            Cancel
          </b-button>
        </div>
      </b-modal>
    </div>

    <div v-if="DeleteAssetModal.open">
      <b-modal
        ref="DeleteAssetModal"
        v-model="DeleteAssetModal.open"
        :no-close-on-backdrop="DeleteAssetModal.noCloseOnBackdrop"
        :no-close-on-esc="DeleteAssetModal.noCloseOnEsc"
        header-class="card-header"
      >
        <div slot="modal-header">
          <span>{{ DeleteAssetModal.title }}</span>
        </div>
        <p v-if="DeleteAssetModal">
          {{ DeleteAssetModal.promptText }}
        </p>

        <div slot="modal-footer">
          <button
            type="button"
            class="btn btn-primary btn-s"
            @click.prevent="OnDeleteAssetContinueClicked()"
          >
            Continue
          </button>
          <b-button variant="primary" @click.prevent="DeselectAssets">
            Cancel
          </b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>
