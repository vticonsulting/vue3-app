<template>
  <div id="RoofQuestions">
    <span class="sectionContainer">Damaged Items List</span>

    <boolean-camera-wrapper-component
      id="BoxVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BoxVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BoxVentsPresent)"
      :validate="validate"
      :current-value="model.BoxVentsPresent"
      :choices="['Yes', 'No']"
      label="Box Vent Present?"
      @onChanged="model.BoxVentsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.BoxVentsPresent"
      id="BoxVentsPainted"
      hide-margin
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.BoxVentsPainted = $event"
    />
    <checkbox-wrapper-component
      v-show="model.BoxVentsPresent"
      id="BoxVentsMaterial"
      :max-characters="25"
      hide-margin
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsMaterial"
      :choices="masterBoxVent"
      label="Box Vent Material:"
      @onChanged="model.BoxVentsMaterial = $event"
    />
    <numeric-wrapper-component
      v-show="model.BoxVentsPresent"
      label="Qty:"
      hide-margin
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsQty"
      @onChanged="ValidateQty($event, 'BoxVentsQty', 'BoxVentsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.BoxVentsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.BoxVentsPresent && model.BoxVentsQty > 0"
      :current-value="model.BoxVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'BoxVentsQty', 'BoxVentsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="CanVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CanVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CanVentsPresent)"
      :validate="validate"
      :current-value="model.CanVentsPresent"
      :choices="['Yes', 'No']"
      label="Can Vent Present?"
      @onChanged="model.CanVentsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.CanVentsPresent"
      id="CanVentsPainted"
      hide-margin
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.CanVentsPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.CanVentsPresent"
      label="Qty:"
      hide-margin
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsQty"
      @onChanged="ValidateQty($event, 'CanVentsQty', 'CanVentsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.CanVentsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'CanVentsQty', 'CanVentsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="ChimneyCapSmallPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapSmallPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapSmallPresent)"
      :validate="validate"
      :current-value="model.ChimneyCapSmallPresent"
      :choices="['Yes', 'No']"
      label="Small Chimney Cap Present?"
      @onChanged="model.ChimneyCapSmallPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.ChimneyCapSmallPresent"
      id="ChimneyCapSmallPainted"
      hide-margin
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.ChimneyCapSmallPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapSmallPresent"
      label="Qty:"
      hide-margin
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallQty"
      @onChanged="ValidateQty($event, 'ChimneyCapSmallQty', 'ChimneyCapSmallQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapSmallPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapSmallQty', 'ChimneyCapSmallQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="ChimneyCapMediumPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapMediumPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapMediumPresent)"
      :validate="validate"
      :current-value="model.ChimneyCapMediumPresent"
      :choices="['Yes', 'No']"
      label="Medium Chimney Cap Present?"
      @onChanged="model.ChimneyCapMediumPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.ChimneyCapMediumPresent"
      id="ChimneyCapMediumPainted"
      hide-margin
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.ChimneyCapMediumPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapMediumPresent"
      label="Qty:"
      hide-margin
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumQty"
      @onChanged="ValidateQty($event, 'ChimneyCapMediumQty', 'ChimneyCapMediumQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapMediumPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapMediumQty', 'ChimneyCapMediumQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="ChimneyCapLargePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapLargePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapLargePresent)"
      :validate="validate"
      :current-value="model.ChimneyCapLargePresent"
      :choices="['Yes', 'No']"
      label="Large Chimney Cap Present?"
      @onChanged="model.ChimneyCapLargePresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.ChimneyCapLargePresent"
      id="ChimneyCapLargePainted"
      hide-margin
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargePainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.ChimneyCapLargePainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapLargePresent"
      label="Qty:"
      hide-margin
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargeQty"
      @onChanged="ValidateQty($event, 'ChimneyCapLargeQty', 'ChimneyCapLargeQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.ChimneyCapLargePresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargeQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapLargeQty', 'ChimneyCapLargeQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="DripEdgePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeEavePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeEavePresent)"
      :validate="validate"
      :current-value="model.DripEdgeEavePresent"
      :choices="['Yes', 'No']"
      label="Drip Edge Eaves Present?"
      @onChanged="model.DripEdgeEavePresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.DripEdgeEavePresent"
      id="DripEdgeEavePainted"
      hide-margin
      :validate="model.DripEdgeEavePresent"
      :current-value="model.DripEdgeEavePainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.DripEdgeEavePainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.DripEdgeEavePresent"
      label="Qty:"
      hide-margin
      :validate="model.DripEdgeEavePresent"
      :current-value="model.DripEdgeEaveQty"
      @onChanged="ValidateQty($event, 'DripEdgeEaveQty', 'DripEdgeEaveQtyDamaged')"
    />
    <numeric-camera-wrapper-component
      v-show="model.DripEdgeEavePresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.DripEdgeEavePresent"
      :disable-camera="fieldAssets.length >= 100"
      :current-value="model.DripEdgeEaveQtyDamaged"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeEaveQtyDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeEaveQtyDamaged)"
      @onChanged="ValidateQtyDamaged($event, 'DripEdgeEaveQty', 'DripEdgeEaveQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="DripEdgeRakePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeRakePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeRakePresent)"
      :validate="validate"
      :current-value="model.DripEdgeRakePresent"
      :choices="['Yes', 'No']"
      label="Drip Edge Rake Present?"
      @onChanged="model.DripEdgeRakePresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.DripEdgeRakePresent"
      id="DripEdgeRakePainted"
      hide-margin
      :validate="model.DripEdgeRakePresent"
      :current-value="model.DripEdgeRakePainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.DripEdgeRakePainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.DripEdgeRakePresent"
      id="DripEdgeRakeQty"
      label="Qty:"
      hide-margin
      :validate="model.DripEdgeRakePresent"
      :current-value="model.DripEdgeRakeQty"
      @onChanged="ValidateQty($event, 'DripEdgeRakeQty', 'DripEdgeRakeQtyDamaged')"
    />
    <numeric-camera-wrapper-component
      v-show="model.DripEdgeRakePresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.DripEdgeRakePresent"
      :disable-camera="fieldAssets.length >= 100"
      :current-value="model.DripEdgeRakeQtyDamaged"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeRakeQtyDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeRakeQtyDamaged)"
      @onChanged="ValidateQtyDamaged($event, 'DripEdgeRakeQty', 'DripEdgeRakeQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="FlashingPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingPresent)"
      :validate="validate"
      :current-value="model.FlashingPresent"
      :choices="['Yes', 'No']"
      label="Flashing Present?"
      @onChanged="model.FlashingPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.FlashingPresent"
      id="FlashingPainted"
      hide-margin
      :validate="model.FlashingPresent"
      :current-value="model.FlashingPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.FlashingPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.FlashingPresent"
      label="Qty:"
      hide-margin
      :validate="model.FlashingPresent"
      :current-value="model.FlashingQty"
      @onChanged="ValidateQty($event, 'FlashingQty', 'FlashingQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.FlashingPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.FlashingPresent"
      :current-value="model.FlashingQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'FlashingQty', 'FlashingQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="GableVentPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GableVentPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GableVentPresent)"
      :validate="validate"
      :current-value="model.GableVentPresent"
      :choices="['Yes', 'No']"
      label="Gable Vent Present?"
      @onChanged="model.GableVentPresent = $event"
    />
    <numeric-wrapper-component
      v-show="model.GableVentPresent"
      label="Qty:"
      hide-margin
      :validate="model.GableVentPresent"
      :current-value="model.GableVentQty"
      @onChanged="ValidateQty($event, 'GableVentQty', 'GableVentQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.GableVentPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.GableVentPresent"
      :current-value="model.GableVentQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'GableVentQty', 'GableVentQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="HvacFourPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacFourPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacFourPresent)"
      :validate="validate"
      :current-value="model.HvacFourPresent"
      :choices="['Yes', 'No']"
      label="4 inch Hvac Vent Present?"
      @onChanged="model.HvacFourPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.HvacFourPresent"
      id="HvacFourPainted"
      hide-margin
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.HvacFourPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.HvacFourPresent"
      label="Qty:"
      hide-margin
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourQty"
      @onChanged="ValidateQty($event, 'HvacFourQty', 'HvacFourQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.HvacFourPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacFourQty', 'HvacFourQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="HvacSixPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacSixPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacSixPresent)"
      :validate="validate"
      :current-value="model.HvacSixPresent"
      :choices="['Yes', 'No']"
      label="6 inch Hvac Vent Present?"
      @onChanged="model.HvacSixPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.HvacSixPresent"
      id="HvacSixPainted"
      hide-margin
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.HvacSixPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.HvacSixPresent"
      label="Qty:"
      hide-margin
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixQty"
      @onChanged="ValidateQty($event, 'HvacSixQty', 'HvacSixQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.HvacSixPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacSixQty', 'HvacSixQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="HvacEightPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacEightPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacEightPresent)"
      :validate="validate"
      :current-value="model.HvacEightPresent"
      :choices="['Yes', 'No']"
      label="8 inch Hvac Vent Present?"
      @onChanged="model.HvacEightPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.HvacEightPresent"
      id="HvacEightPainted"
      hide-margin
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.HvacEightPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.HvacEightPresent"
      label="Qty:"
      hide-margin
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightQty"
      @onChanged="ValidateQty($event, 'HvacEightQty', 'HvacEightQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.HvacEightPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacEightQty', 'HvacEightQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="MastheadPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MastheadPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MastheadPresent)"
      :validate="validate"
      :current-value="model.MastheadPresent"
      :choices="['Yes', 'No']"
      label="Masthead Present?"
      @onChanged="model.MastheadPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.MastheadPresent"
      id="MastheadPainted"
      hide-margin
      :validate="model.MastheadPresent"
      :current-value="model.MastheadPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.MastheadPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.MastheadPresent"
      label="Qty:"
      hide-margin
      :validate="model.MastheadPresent"
      :current-value="model.MastheadQty"
      @onChanged="ValidateQty($event, 'MastheadQty', 'MastheadQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.MastheadPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.MastheadPresent"
      :current-value="model.MastheadQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'MastheadQty', 'MastheadQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="PlasticPipebootPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PlasticPipebootPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PlasticPipebootPresent)"
      :validate="validate"
      :current-value="model.PlasticPipebootPresent"
      :choices="['Yes', 'No']"
      label="Plastic Pipeboot Present?"
      @onChanged="model.PlasticPipebootPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.PlasticPipebootPresent"
      id="PlasticPipebootPainted"
      hide-margin
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.PlasticPipebootPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.PlasticPipebootPresent"
      id="PlasticPipebootQty"
      label="Qty:"
      hide-margin
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootQty"
      @onChanged="ValidateQty($event, 'PlasticPipebootQty', 'PlasticPipebootQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.PlasticPipebootPresent"
      id="PlasticPipebootQtyDamaged"
      label="Qty Damaged:"
      hide-margin
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PlasticPipebootQty', 'PlasticPipebootQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="LeadPipebootPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LeadPipebootPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LeadPipebootPresent)"
      :validate="validate"
      :current-value="model.LeadPipebootPresent"
      :choices="['Yes', 'No']"
      label="Lead Pipeboot Present?"
      @onChanged="model.LeadPipebootPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.LeadPipebootPresent"
      id="LeadPipebootPainted"
      hide-margin
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.LeadPipebootPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.LeadPipebootPresent"
      id="LeadPipebootQty"
      label="Qty:"
      hide-margin
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootQty"
      @onChanged="ValidateQty($event, 'LeadPipebootQty', 'LeadPipebootQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.LeadPipebootPresent"
      id="LeadPipebootQtyDamaged"
      label="Qty Damaged:"
      hide-margin
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'LeadPipebootQty', 'LeadPipebootQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="PowerVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PowerVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PowerVentsPresent)"
      :validate="validate"
      :current-value="model.PowerVentsPresent"
      :choices="['Yes', 'No']"
      label="Power Vents Present?"
      @onChanged="model.PowerVentsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.PowerVentsPresent"
      id="PowerVentsPainted"
      hide-margin
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.PowerVentsPainted = $event"
    />
    <checkbox-wrapper-component
      v-show="model.PowerVentsPresent"
      id="PowerVentsMaterial"
      :max-characters="25"
      hide-margin
      :validate="model.PowerVentsPresent"
      :current-value="String(model.PowerVentsMaterial)"
      :choices="masterPowerVentMaterial"
      label="Power Vent Material:"
      @onChanged="model.PowerVentsMaterial = $event"
    />
    <numeric-wrapper-component
      v-show="model.PowerVentsPresent"
      label="Qty:"
      hide-margin
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsQty"
      @onChanged="ValidateQty($event, 'PowerVentsQty', 'PowerVentsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.PowerVentsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PowerVentsQty', 'PowerVentsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="PowerVentCoversPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PowerVentCoversPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PowerVentCoversPresent)"
      :validate="validate"
      :current-value="model.PowerVentCoversPresent"
      :choices="['Yes', 'No']"
      label="Power Vent Covers Present?"
      @onChanged="model.PowerVentCoversPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.PowerVentCoversPresent"
      id="PowerVentCoversPainted"
      hide-margin
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.PowerVentCoversPainted = $event"
    />
    <checkbox-wrapper-component
      v-show="model.PowerVentCoversPresent"
      id="PowerVentCoversMaterial"
      :max-characters="25"
      hide-margin
      :validate="model.PowerVentCoversPresent"
      :current-value="String(model.PowerVentCoversMaterial)"
      :choices="masterPowerVentMaterial"
      label="Power Vent Material:"
      @onChanged="model.PowerVentCoversMaterial = $event"
    />
    <numeric-wrapper-component
      v-show="model.PowerVentCoversPresent"
      label="Qty:"
      hide-margin
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversQty"
      @onChanged="ValidateQty($event, 'PowerVentCoversQty', 'PowerVentCoversQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.PowerVentCoversPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PowerVentCoversQty', 'PowerVentCoversQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="RainDivertersPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RainDivertersPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RainDivertersPresent)"
      :validate="validate"
      :current-value="model.RainDivertersPresent"
      :choices="['Yes', 'No']"
      label="Rain Diverter Present?"
      @onChanged="model.RainDivertersPresent = $event"
    />
    <numeric-wrapper-component
      v-show="model.RainDivertersPresent"
      label="Qty:"
      hide-margin
      :validate="model.RainDivertersPresent"
      :current-value="model.RainDivertersQty"
      @onChanged="ValidateQty($event, 'RainDivertersQty', 'RainDivertersQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.RainDivertersPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.RainDivertersPresent"
      :current-value="model.RainDivertersQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'RainDivertersQty', 'RainDivertersQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="RidgeVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RidgeVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RidgeVentsPresent)"
      :validate="validate"
      :current-value="model.RidgeVentsPresent"
      :choices="['Yes', 'No']"
      label="Ridge Vents Present?"
      @onChanged="model.RidgeVentsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.RidgeVentsPresent"
      id="RidgeVentsPainted"
      hide-margin
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.RidgeVentsPainted = $event"
    />
    <checkbox-wrapper-component
      v-show="model.RidgeVentsPresent"
      id="RidgeVentsMaterial"
      :max-characters="25"
      hide-margin
      :validate="model.RidgeVentsPresent"
      :current-value="String(model.RidgeVentsMaterial)"
      :choices="masterRidgeVentMaterial"
      label="Ridge Vent Material:"
      @onChanged="model.RidgeVentsMaterial = $event"
    />
    <numeric-wrapper-component
      v-show="model.RidgeVentsPresent"
      label="Qty:"
      hide-margin
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsQty"
      @onChanged="ValidateQty($event, 'RidgeVentsQty', 'RidgeVentsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.RidgeVentsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'RidgeVentsQty', 'RidgeVentsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="SatelliteDishPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SatelliteDishPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SatelliteDishPresent)"
      :validate="validate"
      :current-value="model.SatelliteDishPresent"
      :choices="['Yes', 'No']"
      label="Satellite Dish Present?"
      @onChanged="model.SatelliteDishPresent = $event"
    />
    <numeric-wrapper-component
      v-show="model.SatelliteDishPresent"
      label="Qty:"
      hide-margin
      :validate="model.SatelliteDishPresent"
      :current-value="model.SatelliteDishQty"
      @onChanged="ValidateQty($event, 'SatelliteDishQty', 'SatelliteDishQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.SatelliteDishPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.SatelliteDishPresent"
      :current-value="model.SatelliteDishQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SatelliteDishQty', 'SatelliteDishQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="SkylightsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SkylightsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SkylightsPresent)"
      :validate="validate"
      :current-value="model.SkylightsPresent"
      :choices="['Yes', 'No']"
      label="Skylight Present?"
      @onChanged="model.SkylightsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.SkylightsPresent"
      id="SkylightsPainted"
      hide-margin
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.SkylightsPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.SkylightsPresent"
      label="Qty:"
      hide-margin
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsQty"
      @onChanged="ValidateQty($event, 'SkylightsQty', 'SkylightsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.SkylightsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SkylightsQty', 'SkylightsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="SoffitVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SoffitVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SoffitVentsPresent)"
      :validate="validate"
      :current-value="model.SoffitVentsPresent"
      :choices="['Yes', 'No']"
      label="Soffit Vent Present?"
      @onChanged="model.SoffitVentsPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.SoffitVentsPresent"
      id="SoffitVentsPainted"
      hide-margin
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.SoffitVentsPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.SoffitVentsPresent"
      label="Qty:"
      hide-margin
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsQty"
      @onChanged="ValidateQty($event, 'SoffitVentsQty', 'SoffitVentsQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.SoffitVentsPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SoffitVentsQty', 'SoffitVentsQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="TurbinesPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TurbinesPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TurbinesPresent)"
      :validate="validate"
      :current-value="model.TurbinesPresent"
      :choices="['Yes', 'No']"
      label="Turbine Present?"
      @onChanged="model.TurbinesPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.TurbinesPresent"
      id="TurbinesPainted"
      hide-margin
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.TurbinesPainted = $event"
    />
    <numeric-wrapper-component
      v-show="model.TurbinesPresent"
      label="Qty:"
      hide-margin
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesQty"
      @onChanged="ValidateQty($event, 'TurbinesQty', 'TurbinesQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.TurbinesPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'TurbinesQty', 'TurbinesQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="ValleyMetalPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ValleyMetalPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ValleyMetalPresent)"
      :validate="validate"
      :current-value="model.ValleyMetalPresent"
      :choices="['Yes', 'No']"
      label="Valley Metal Present?"
      @onChanged="model.ValleyMetalPresent = $event"
    />
    <boolean-wrapper-component
      v-show="model.ValleyMetalPresent"
      id="ValleyMetalPainted"
      hide-margin
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalPainted"
      :choices="['Yes', 'No']"
      label="Painted?"
      @onChanged="model.ValleyMetalPainted = $event"
    />
    <checkbox-wrapper-component
      v-show="model.ValleyMetalPresent"
      id="ValleyMetalMaterial"
      :max-characters="25"
      hide-margin
      :validate="model.ValleyMetalPresent"
      :current-value="String(model.ValleyMetalMaterial)"
      :choices="masterValleyMetal"
      label="Valley Metal Material:"
      @onChanged="model.ValleyMetalMaterial = $event"
    />
    <numeric-wrapper-component
      v-show="model.ValleyMetalPresent"
      label="Qty:"
      hide-margin
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalQty"
      @onChanged="ValidateQty($event, 'ValleyMetalQty', 'ValleyMetalQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.ValleyMetalPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ValleyMetalQty', 'ValleyMetalQtyDamaged')"
    />

    <boolean-camera-wrapper-component
      id="OtherPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherPresent)"
      :validate="validate"
      :current-value="model.OtherPresent"
      :choices="['Yes', 'No']"
      label="Other Present?"
      @onChanged="model.OtherPresent = $event"
    />
    <numeric-wrapper-component
      v-show="model.OtherPresent"
      label="Qty:"
      hide-margin
      :validate="model.OtherPresent"
      :current-value="model.OtherQty"
      @onChanged="ValidateQty($event, 'OtherQty', 'OtherQtyDamaged')"
    />
    <numeric-wrapper-component
      v-show="model.OtherPresent"
      label="Qty Damaged:"
      hide-margin
      :validate="model.OtherPresent"
      :current-value="model.OtherQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'OtherQty', 'OtherQtyDamaged')"
    />
  </div>
</template>

