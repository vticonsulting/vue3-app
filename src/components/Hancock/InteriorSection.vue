<template>
  <boolean-wrapper-component
    v-show="isAllState"
    id="HasCovid"
    :current-value="model.HasCovid"
    :choices="['Yes', 'No']"
    :validate="false"
    label="Is there anyone who lives in the home who currently has COVID-19 or has had it within the last 14 days, has been exposed to someone with COVID-19 within the past 14 days, or has any symptoms related to COVID-19?"
    @onChanged="model.HasCovid = $event"
  />

  <checkbox-camera-wrapper-component
    id="AtticDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.AtticDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AtticDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AtticDamaged)"
    :choices="masterYesNoNa"
    label="Attic:"
    @onChanged="model.AtticDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AtticDamaged == 'Yes'"
    id="AtticDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.AtticDamaged == 'Yes'"
    :current-value="model.AtticDescription"
    label="Damage Description:"
    @onChanged="model.AtticDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AtticDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.AtticDamaged == 'Yes'"
    :current-value="model.AtticSf"
    @onChanged="model.AtticSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BasementDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BasementDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BasementDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BasementDamaged)"
    :choices="masterYesNoNa"
    label="Basement:"
    @onChanged="model.BasementDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BasementDamaged == 'Yes'"
    id="BasementDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BasementDamaged == 'Yes'"
    :current-value="model.BasementDescription"
    label="Damage Description:"
    @onChanged="model.BasementDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BasementDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BasementDamaged == 'Yes'"
    :current-value="model.BasementSf"
    @onChanged="model.BasementSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BathroomTwoDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BathroomTwoDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BathroomTwoDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BathroomTwoDamaged)"
    :choices="masterYesNoNa"
    label="Bathroom #2:"
    @onChanged="model.BathroomTwoDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BathroomTwoDamaged == 'Yes'"
    id="BathroomTwoDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BathroomTwoDamaged == 'Yes'"
    :current-value="model.BathroomTwoDescription"
    label="Damage Description:"
    @onChanged="model.BathroomTwoDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BathroomTwoDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BathroomTwoDamaged == 'Yes'"
    :current-value="model.BathroomTwoSf"
    @onChanged="model.BathroomTwoSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BathroomThreeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BathroomThreeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BathroomThreeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BathroomThreeDamaged)"
    :choices="masterYesNoNa"
    label="Bathroom #3:"
    @onChanged="model.BathroomThreeDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BathroomThreeDamaged == 'Yes'"
    id="BathroomThreeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BathroomThreeDamaged == 'Yes'"
    :current-value="model.BathroomThreeDescription"
    label="Damage Description:"
    @onChanged="model.BathroomThreeDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BathroomThreeDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BathroomThreeDamaged == 'Yes'"
    :current-value="model.BathroomThreeSf"
    @onChanged="model.BathroomThreeSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomTwoDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomTwoDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomTwoDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomTwoDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #2:"
    @onChanged="model.BedroomTwoDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomTwoDamaged == 'Yes'"
    id="BedroomTwoDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomTwoDamaged == 'Yes'"
    :current-value="model.BedroomTwoDescription"
    label="Damage Description:"
    @onChanged="model.BedroomTwoDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomTwoDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomTwoDamaged == 'Yes'"
    :current-value="model.BedroomTwoSf"
    @onChanged="model.BedroomTwoSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomTwoClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomTwoClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomTwoClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomTwoClosetDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #2 Closet:"
    @onChanged="model.BedroomTwoClosetDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomTwoClosetDamaged == 'Yes'"
    id="BedroomTwoClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomTwoClosetDamaged == 'Yes'"
    :current-value="model.BedroomTwoClosetDescription"
    label="Damage Description:"
    @onChanged="model.BedroomTwoClosetDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomTwoClosetDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomTwoClosetDamaged == 'Yes'"
    :current-value="model.BedroomTwoClosetSf"
    @onChanged="model.BedroomTwoClosetSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomThreeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomThreeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomThreeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomThreeDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #3:"
    @onChanged="model.BedroomThreeDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomThreeDamaged == 'Yes'"
    id="BedroomThreeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomThreeDamaged == 'Yes'"
    :current-value="model.BedroomThreeDescription"
    label="Damage Description:"
    @onChanged="model.BedroomThreeDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomThreeDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomThreeDamaged == 'Yes'"
    :current-value="model.BedroomThreeSf"
    @onChanged="model.BedroomThreeSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomThreeClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomThreeClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomThreeClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomThreeClosetDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #3 Closet:"
    @onChanged="model.BedroomThreeClosetDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomThreeClosetDamaged == 'Yes'"
    id="BedroomThreeClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomThreeClosetDamaged == 'Yes'"
    :current-value="model.BedroomThreeClosetDescription"
    label="Damage Description:"
    @onChanged="model.BedroomThreeClosetDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomThreeClosetDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomThreeClosetDamaged == 'Yes'"
    :current-value="model.BedroomThreeClosetSf"
    @onChanged="model.BedroomThreeClosetSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomFourDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomFourDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomFourDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomFourDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #4:"
    @onChanged="model.BedroomFourDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomFourDamaged == 'Yes'"
    id="BedroomFourDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomFourDamaged == 'Yes'"
    :current-value="model.BedroomFourDescription"
    label="Damage Description:"
    @onChanged="model.BedroomFourDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomFourDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomFourDamaged == 'Yes'"
    :current-value="model.BedroomFourSf"
    @onChanged="model.BedroomFourSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BedroomFourClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomFourClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomFourClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomFourClosetDamaged)"
    :choices="masterYesNoNa"
    label="Bedroom #4 Closet:"
    @onChanged="model.BedroomFourClosetDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BedroomFourClosetDamaged == 'Yes'"
    id="BedroomFourClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BedroomFourClosetDamaged == 'Yes'"
    :current-value="model.BedroomFourClosetDescription"
    label="Damage Description:"
    @onChanged="model.BedroomFourClosetDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BedroomFourClosetDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BedroomFourClosetDamaged == 'Yes'"
    :current-value="model.BedroomFourClosetSf"
    @onChanged="model.BedroomFourClosetSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="BreakfastAreaDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BreakfastAreaDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BreakfastAreaDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BreakfastAreaDamaged)"
    :choices="masterYesNoNa"
    label="Breakfast Area:"
    @onChanged="model.BreakfastAreaDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.BreakfastAreaDamaged == 'Yes'"
    id="BreakfastAreaDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.BreakfastAreaDamaged == 'Yes'"
    :current-value="model.BreakfastAreaDescription"
    label="Damage Description:"
    @onChanged="model.BreakfastAreaDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.BreakfastAreaDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.BreakfastAreaDamaged == 'Yes'"
    :current-value="model.BreakfastAreaSf"
    @onChanged="model.BreakfastAreaSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="ContentsDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.ContentsDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.ContentsDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.ContentsDamaged)"
    :choices="masterYesNoNa"
    label="Contents:"
    @onChanged="model.ContentsDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.ContentsDamaged == 'Yes'"
    id="ContentsDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.ContentsDamaged == 'Yes'"
    :current-value="model.ContentsDescription"
    label="Damage Description:"
    @onChanged="model.ContentsDescription = $event"
  />

  <checkbox-camera-wrapper-component
    id="CrawlSpaceDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.CrawlSpaceDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.CrawlSpaceDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.CrawlSpaceDamaged)"
    :choices="masterYesNoNa"
    label="Crawlspace:"
    @onChanged="model.CrawlSpaceDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.CrawlSpaceDamaged == 'Yes'"
    id="CrawlSpaceDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.CrawlSpaceDamaged == 'Yes'"
    :current-value="model.CrawlSpaceDescription"
    label="Damage Description:"
    @onChanged="model.CrawlSpaceDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.CrawlSpaceDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.CrawlSpaceDamaged == 'Yes'"
    :current-value="model.CrawlSpaceSf"
    @onChanged="model.CrawlSpaceSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="DiningRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.DiningRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.DiningRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.DiningRoomDamaged)"
    :choices="masterYesNoNa"
    label="Dining Room:"
    @onChanged="model.DiningRoomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.DiningRoomDamaged == 'Yes'"
    id="DiningRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.DiningRoomDamaged == 'Yes'"
    :current-value="model.DiningRoomDescription"
    label="Damage Description:"
    @onChanged="model.DiningRoomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.DiningRoomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.DiningRoomDamaged == 'Yes'"
    :current-value="model.DiningRoomSf"
    @onChanged="model.DiningRoomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="FamilyRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.FamilyRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.FamilyRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.FamilyRoomDamaged)"
    :choices="masterYesNoNa"
    label="Family Room:"
    @onChanged="model.FamilyRoomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.FamilyRoomDamaged == 'Yes'"
    id="FamilyRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.FamilyRoomDamaged == 'Yes'"
    :current-value="model.FamilyRoomDescription"
    label="Damage Description:"
    @onChanged="model.FamilyRoomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.FamilyRoomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.FamilyRoomDamaged == 'Yes'"
    :current-value="model.FamilyRoomSf"
    @onChanged="model.FamilyRoomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="FoyerDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.FoyerDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.FoyerDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.FoyerDamaged)"
    :choices="masterYesNoNa"
    label="Foyer:"
    @onChanged="model.FoyerDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.FoyerDamaged == 'Yes'"
    id="FoyerDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.FoyerDamaged == 'Yes'"
    :current-value="model.FoyerDescription"
    label="Damage Description:"
    @onChanged="model.FoyerDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.FoyerDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.FoyerDamaged == 'Yes'"
    :current-value="model.FoyerSf"
    @onChanged="model.FoyerSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="GameRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.GameRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.GameRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.GameRoomDamaged)"
    :choices="masterYesNoNa"
    label="Game Room:"
    @onChanged="model.GameRoomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.GameRoomDamaged == 'Yes'"
    id="GameRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.GameRoomDamaged == 'Yes'"
    :current-value="model.GameRoomDescription"
    label="Damage Description:"
    @onChanged="model.GameRoomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.GameRoomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.GameRoomDamaged == 'Yes'"
    :current-value="model.GameRoomSf"
    @onChanged="model.GameRoomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="HallDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.HallDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.HallDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.HallDamaged)"
    :choices="masterYesNoNa"
    label="Hall:"
    @onChanged="model.HallDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.HallDamaged == 'Yes'"
    id="HallDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.HallDamaged == 'Yes'"
    :current-value="model.HallDescription"
    label="Damage Description:"
    @onChanged="model.HallDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.HallDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.HallDamaged == 'Yes'"
    :current-value="model.HallSf"
    @onChanged="model.HallSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="HallClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.HallClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.HallClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.HallClosetDamaged)"
    :choices="masterYesNoNa"
    label="Hall Closet:"
    @onChanged="model.HallClosetDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.HallClosetDamaged == 'Yes'"
    id="HallClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.HallClosetDamaged == 'Yes'"
    :current-value="model.HallClosetDescription"
    label="Damage Description:"
    @onChanged="model.HallClosetDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.HallClosetDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.HallClosetDamaged == 'Yes'"
    :current-value="model.HallClosetSf"
    @onChanged="model.HallClosetSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="KitchenDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.KitchenDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.KitchenDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.KitchenDamaged)"
    :choices="masterYesNoNa"
    label="Kitchen:"
    @onChanged="model.KitchenDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.KitchenDamaged == 'Yes'"
    id="KitchenDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.KitchenDamaged == 'Yes'"
    :current-value="model.KitchenDescription"
    label="Damage Description:"
    @onChanged="model.KitchenDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.KitchenDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.KitchenDamaged == 'Yes'"
    :current-value="model.KitchenSf"
    @onChanged="model.KitchenSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="LivingRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.LivingRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.LivingRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.LivingRoomDamaged)"
    :choices="masterYesNoNa"
    label="Living Room:"
    @onChanged="model.LivingRoomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.LivingRoomDamaged == 'Yes'"
    id="LivingRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.LivingRoomDamaged == 'Yes'"
    :current-value="model.LivingRoomDescription"
    label="Damage Description:"
    @onChanged="model.LivingRoomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.LivingRoomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.LivingRoomDamaged == 'Yes'"
    :current-value="model.LivingRoomSf"
    @onChanged="model.LivingRoomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="MasterBedroomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterBedroomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterBedroomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterBedroomDamaged)"
    :choices="masterYesNoNa"
    label="Master Bedroom:"
    @onChanged="model.MasterBedroomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.MasterBedroomDamaged == 'Yes'"
    id="MasterBedroomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.MasterBedroomDamaged == 'Yes'"
    :current-value="model.MasterBedroomDescription"
    label="Damage Description:"
    @onChanged="model.MasterBedroomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.MasterBedroomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.MasterBedroomDamaged == 'Yes'"
    :current-value="model.MasterBedroomSf"
    @onChanged="model.MasterBedroomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="MasterClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterClosetDamaged)"
    :choices="masterYesNoNa"
    label="Master Bedroom Closet:"
    @onChanged="model.MasterClosetDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.MasterClosetDamaged == 'Yes'"
    id="MasterClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.MasterClosetDamaged == 'Yes'"
    :current-value="model.MasterClosetDescription"
    label="Damage Description:"
    @onChanged="model.MasterClosetDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.MasterClosetDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.MasterClosetDamaged == 'Yes'"
    :current-value="model.MasterClosetSf"
    @onChanged="model.MasterClosetSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="MasterBathroomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterBathroomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterBathroomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterBathroomDamaged)"
    :choices="masterYesNoNa"
    label="Master Bathroom:"
    @onChanged="model.MasterBathroomDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.MasterBathroomDamaged == 'Yes'"
    id="MasterBathroomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.MasterBathroomDamaged == 'Yes'"
    :current-value="model.MasterBathroomDescription"
    label="Damage Description:"
    @onChanged="model.MasterBathroomDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.MasterBathroomDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.MasterBathroomDamaged == 'Yes'"
    :current-value="model.MasterBathroomSf"
    @onChanged="model.MasterBathroomSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="OfficeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.OfficeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.OfficeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.OfficeDamaged)"
    :choices="masterYesNoNa"
    label="Office / Study:"
    @onChanged="model.OfficeDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.OfficeDamaged == 'Yes'"
    id="OfficeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.OfficeDamaged == 'Yes'"
    :current-value="model.OfficeDescription"
    label="Damage Description:"
    @onChanged="model.OfficeDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.OfficeDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.OfficeDamaged == 'Yes'"
    :current-value="model.OfficeSf"
    @onChanged="model.OfficeSf = $event"
  />

  <checkbox-camera-wrapper-component
    id="PantryDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.PantryDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.PantryDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.PantryDamaged)"
    :choices="masterYesNoNa"
    label="Pantry:"
    @onChanged="model.PantryDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.PantryDamaged == 'Yes'"
    id="PantryDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.PantryDamaged == 'Yes'"
    :current-value="model.PantryDescription"
    label="Damage Description:"
    @onChanged="model.PantryDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.PantryDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.PantryDamaged == 'Yes'"
    :current-value="model.PantrySf"
    @onChanged="model.PantrySf = $event"
  />

  <checkbox-camera-wrapper-component
    id="UtilityDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.UtilityDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.UtilityDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.UtilityDamaged)"
    :choices="masterYesNoNa"
    label="Utility:"
    @onChanged="model.UtilityDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.UtilityDamaged == 'Yes'"
    id="UtilityDescription"
    text-area
    :max-characters="1500"
    hide-margin
    :validate="model.UtilityDamaged == 'Yes'"
    :current-value="model.UtilityDescription"
    label="Damage Description:"
    @onChanged="model.UtilityDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.UtilityDamaged == 'Yes'"
    label="Damage (SQFT):"
    decimal
    hide-margin
    :validate="model.UtilityDamaged == 'Yes'"
    :current-value="model.UtilitySf"
    @onChanged="model.UtilitySf = $event"
  />

  <textbox-camera-wrapper-component
    id="AdditionalOneArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem1Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem1Damage)"
    :current-value="model.AdditionalOneArea"
    label="Area/Item:"
    @onChanged="model.AdditionalOneArea = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AdditionalOneArea.length > 0"
    id="AdditionalOneDamaged"
    hide-margin
    :validate="model.AdditionalOneArea.length > 0"
    :current-value="model.AdditionalOneDamaged"
    :choices="masterYesNo"
    label="Was There Damage?"
    @onChanged="model.AdditionalOneDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AdditionalOneDamaged == 'Yes'"
    id="AdditionalOneDescription"
    hide-margin
    :validate="model.AdditionalOneDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalOneDescription"
    label="Damage Description:"
    @onChanged="model.AdditionalOneDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AdditionalOneDamaged == 'Yes'"
    id="AdditionalOneSf"
    hide-margin
    :validate="model.AdditionalOneDamaged == 'Yes'"
    :current-value="model.AdditionalOneSf"
    label="Damage (SQFT):"
    decimal
    @onChanged="model.AdditionalOneSf = $event"
  />

  <textbox-camera-wrapper-component
    id="AdditionalTwoArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem2Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem2Damage)"
    :current-value="model.AdditionalTwoArea"
    label="Area/Item:"
    @onChanged="model.AdditionalTwoArea = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AdditionalTwoArea.length > 0"
    id="AdditionalTwoDamaged"
    hide-margin
    :validate="model.AdditionalTwoArea.length > 0"
    :current-value="model.AdditionalTwoDamaged"
    :choices="masterYesNo"
    label="Was There Damage?"
    @onChanged="model.AdditionalTwoDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AdditionalTwoDamaged == 'Yes'"
    id="AdditionalTwoDescription"
    hide-margin
    :validate="model.AdditionalTwoDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalTwoDescription"
    label="Damage Description:"
    @onChanged="model.AdditionalTwoDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AdditionalTwoDamaged == 'Yes'"
    id="AdditionalTwoSf"
    hide-margin
    :validate="model.AdditionalTwoDamaged == 'Yes'"
    :current-value="model.AdditionalTwoSf"
    label="Damage (SQFT):"
    decimal
    @onChanged="model.AdditionalTwoSf = $event"
  />

  <textbox-camera-wrapper-component
    id="AdditionalThreeArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem3Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem3Damage)"
    :current-value="model.AdditionalThreeArea"
    label="Area/Item:"
    @onChanged="model.AdditionalThreeArea = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AdditionalThreeArea.length > 0"
    id="AdditionalThreeDamaged"
    hide-margin
    :validate="model.AdditionalThreeArea.length > 0"
    :current-value="model.AdditionalThreeDamaged"
    :choices="masterYesNo"
    label="Was There Damage?"
    @onChanged="model.AdditionalThreeDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AdditionalThreeDamaged == 'Yes'"
    id="AdditionalThreeDescription"
    hide-margin
    :validate="model.AdditionalThreeDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalThreeDescription"
    label="Damage Description:"
    @onChanged="model.AdditionalThreeDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AdditionalThreeDamaged == 'Yes'"
    id="AdditionalThreeSf"
    hide-margin
    :validate="model.AdditionalThreeDamaged == 'Yes'"
    :current-value="model.AdditionalThreeSf"
    label="Damage (SQFT):"
    decimal
    @onChanged="model.AdditionalThreeSf = $event"
  />

  <textbox-camera-wrapper-component
    id="AdditionalFourArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem4Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem4Damage)"
    :current-value="model.AdditionalFourArea"
    label="Area/Item:"
    @onChanged="model.AdditionalFourArea = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AdditionalFourArea.length > 0"
    id="AdditionalFourDamaged"
    hide-margin
    :validate="model.AdditionalFourArea.length > 0"
    :current-value="model.AdditionalFourDamaged"
    :choices="masterYesNo"
    label="Was There Damage?"
    @onChanged="model.AdditionalFourDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AdditionalFourDamaged == 'Yes'"
    id="AdditionalFourDescription"
    hide-margin
    :validate="model.AdditionalFourDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalFourDescription"
    label="Damage Description:"
    @onChanged="model.AdditionalFourDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AdditionalFourDamaged == 'Yes'"
    id="AdditionalFourSf"
    hide-margin
    :validate="model.AdditionalFourDamaged == 'Yes'"
    :current-value="model.AdditionalFourSf"
    label="Damage (SQFT):"
    decimal
    @onChanged="model.AdditionalFourSf = $event"
  />

  <textbox-camera-wrapper-component
    id="AdditionalFiveArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem5Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem5Damage)"
    :current-value="model.AdditionalFiveArea"
    label="Area/Item:"
    @onChanged="model.AdditionalFiveArea = $event"
  />
  <checkbox-wrapper-component
    v-show="model.AdditionalFiveArea.length > 0"
    id="AdditionalFiveDamaged"
    hide-margin
    :validate="model.AdditionalFiveArea.length > 0"
    :current-value="model.AdditionalFiveDamaged"
    :choices="masterYesNo"
    label="Was There Damage?"
    @onChanged="model.AdditionalFiveDamaged = $event"
  />
  <textbox-wrapper-component
    v-show="model.AdditionalFiveDamaged == 'Yes'"
    id="AdditionalFiveDescription"
    hide-margin
    :validate="model.AdditionalFiveDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalFiveDescription"
    label="Damage Description:"
    @onChanged="model.AdditionalFiveDescription = $event"
  />
  <numeric-wrapper-component
    v-show="model.AdditionalFiveDamaged == 'Yes'"
    id="AdditionalFiveSf"
    hide-margin
    :validate="model.AdditionalFiveDamaged == 'Yes'"
    :current-value="model.AdditionalFiveSf"
    label="Damage (SQFT):"
    decimal
    @onChanged="model.AdditionalFiveSf = $event"
  />
</template>
