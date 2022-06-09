<script>
export default {
  data() {
    return {
      file: null,
    }
  },
}
</script>

<template>
  <o-field class="file">
    <o-upload v-model="file">
      <o-button tag="a" class="space-x-2" variant="primary" icon-left="upload">
        <span>Click to upload</span>
      </o-button>
    </o-upload>

    <span v-if="file" class="file-name">{{ file.name }}</span>
  </o-field>
</template>
