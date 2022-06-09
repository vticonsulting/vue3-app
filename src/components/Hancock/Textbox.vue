<template>
  <div class="flexRowStartNoWrap" style="width:100%">
    <div class="choiceContainer">
      <div>
        <input
          v-if="!textArea && !disabled"
          :maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
          @keyup="KeyPressEvent"
        >
        <input
          v-if="!textArea && disabled"
          disabled
          :maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
        >
        <textarea
          v-if="textArea && !disabled"
          rows="2"
          :maxlength="maxCharacters"
          cols="450"
          :value="response"
          class="form-control formValue tb tbArea"
          @keyup="KeyPressEvent"
        />
        <textarea
          v-if="textArea && disabled"
          rows="2"
          :maxlength="maxCharacters"
          disabled
          cols="450"
          :value="response"
          class="form-control formValue tb tbArea"
        />
        <div style="font-size:x-small; padding-top:2px;">
          Remaining Characters:
          <b>{{ maxCharacters - charsEntered }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
