<template>
  <div style="width:100%">
    <div class="flexRowSpaceBetweenNoWrap test">
      <div v-if="label" class="labelContainer">
        <span>{{ label }}</span>
      </div>

      <span v-if="loading" class="assetCount">
        <img style="width:31px; height:31px" src="/assets/img/imagewait2.gif">
      </span>
      <span
        v-if="!loading && fieldAssets && fieldAssets.length > 0"
        class="assetCount"
        @click="ShowAssets"
      >
        <span>({{ fieldAssets.length }})</span>
      </span>
      <div
        v-if="dontDisable == true ? true : !disable && (currentValue != '' && currentValue != 'NA' && currentValue != null) ? true : false"
        class="icon-container"
      >
        <kendo-upload
          id="file"
          ref="upload"
          name="file"
          :async-save-url="saveUrl"
          :show-file-list="false"
          :async-auto-upload="true"
          localization-select
          :multiple="true"
          :success="onSuccess"
          :error="onError"
          :validation-allowed-extensions="["
          jpg","jpeg","png","pdf","eml","msg","xls","xlsx","dox","docx","ppt","pptx","zip","esx"]"@complete="onComplete"
          @upload="onUpload($event)"
        />
      </div>
      <div v-else>
        <img
          style="height:44px !important; padding: 4px 15px 0px 6px;"
          src="/assets/img/camera-disable.png"
        >
      </div>
    </div>
    <div v-if="UploadValidationModal.open">
      <b-modal
        ref="UploadValidationModal"
        v-model="UploadValidationModal.open"
        :no-close-on-backdrop="UploadValidationModal.noCloseOnBackdrop"
        :no-close-on-esc="UploadValidationModal.noCloseOnEsc"
        header-class="card-header"
      >
        <div slot="modal-header">
          <span>Upload Validation</span>
        </div>
        <p
          v-if="UploadValidationModal"
        >
          The following files did not upload due to file size restriction. Please upload files smaller than 10MB.
        </p>
        <div v-for=" file in UploadValidationModal.data">
          <div>{{ file }}</div>
        </div>
        <div slot="modal-footer">
          <b-button variant="primary" @click.prevent="onClose">
            Close
          </b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>
