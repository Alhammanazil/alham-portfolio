<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' }
})
</script>

<template>
  <header v-reveal class="mb-12 max-w-2xl">
    <p class="kicker">{{ kicker }}</p>
    <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ title }}</h2>
    <p v-if="lead" class="mt-3 text-neutral-300">{{ lead }}</p>
  </header>
</template>
