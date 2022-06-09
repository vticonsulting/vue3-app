<template>
  <div class="numericContainer">
    <div class="flexRowSpaceBetweenNoWrap">
      <div class="labelContainer">
        <span>{{ label }} {{ response }}</span>
      </div>
      <div v-if="!showPad" class="iconEnabled" @click="Reset()">
        <i class="fas fa-2x fa-calculator" />
      </div>
      <div
        v-if="showPad"
        class="iconEnabled"
        @click="showPad = false"
        @click="$emit('onchanged', response == null ? null : Number(response))"
      >
        <i class="fas fa-2x fa-check-square" />
      </div>
    </div>
    <div v-if="showPad" class="keyPadContainer">
      <div id="keyPadContainer">
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" @click="OnClick('1')">
            1
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('2')">
            2
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('3')">
            3
          </div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" @click="OnClick('4')">
            4
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('5')">
            5
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('6')">
            6
          </div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" @click="OnClick('7')">
            7
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('8')">
            8
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('9')">
            9
          </div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" @click="response = ''">
            CE
          </div>
          <div class="keyPad keyEnabled" @click="OnClick('0')">
            0
          </div>
          <div v-if="decimal" class="keyPad keyEnabled" @click="OnClick('.')">
            .
          </div>
          <div v-else class="keyPad keyDisabled">
            .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
