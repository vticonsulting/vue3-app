<script>
// https://codepen.io/walkerca/pen/vYxmBvz
export default {
  props: ['items', 'selectedItem'],

  data() {
    return {
      value: null,
      extendedValue: null,
    }
  },
  watch: {
    selectedItem(item) {
      this.value = item.value
      if (item.extended)
        this.extendedValue = item.extendedValue

      else
        this.extendedValue = null
    },
    value(val) {
      this.postUpdate()
    },
    extendedValue(val) {
      this.postUpdate()
    },
  },
  methods: {
    postUpdate() {
      this.$emit('select-updated', { value: this.value, extendedValue: this.extendedValue })
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="field">
      <label class="label">Value</label>
      <div class="select">
        <select v-model="value">
          <option v-for="item in items" :key="item.value" :value="item.value">
            {{ item.display }}
          </option>
        </select>
      </div>
    </div>
    <div v-if="selectedItem.extended" class="field">
      <label class="label">Extra Information</label>
      <div class="control">
        <input v-model="extendedValue" type="text" class="input">
      </div>
    </div>
  </div>
</template>
