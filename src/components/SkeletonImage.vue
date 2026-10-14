<script setup>
import { ref, watch, onMounted } from 'vue'
import { t } from '../i18n'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  lazy: { type: Boolean, default: true }
})

const img = ref(null)
const loaded = ref(false)
const failed = ref(false)

// A cached image can finish loading before Vue attaches the @load listener.
function sync() {
  if (img.value?.complete && img.value.naturalWidth > 0) loaded.value = true
}
onMounted(sync)
watch(
  () => props.src,
  () => {
    loaded.value = false
    failed.value = false
  }
)
</script>

<template>
  <div class="relative h-full w-full overflow-hidden bg-[#12151e]" :style="{ aspectRatio: `${width} / ${height}` }">
    <div v-if="!loaded" class="skeleton absolute inset-0" :class="{ 'is-failed': failed }">
      <span v-if="failed" class="absolute inset-0 grid place-items-center text-xs text-neutral-500">{{ t.ui.projects.imageUnavailable }}</span>
    </div>
    <img
      ref="img"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
      class="h-full w-full object-cover object-top transition-opacity duration-500"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="failed = true"
    />
  </div>
</template>
