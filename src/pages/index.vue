<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <h1>{{ t('intro.desc') }}</h1>

    <input
      id="input" v-model="name" :placeholder="t('intro.whats-your-name')" :aria-label="t('intro.whats-your-name')"
      type="text" autocomplete="false" @keydown.enter="go"
    >
    <label class="hidden" for="input">
      {{ t('intro.whats-your-name') }}
    </label>
    <div>
      <button :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
