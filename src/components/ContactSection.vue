<script setup>
import { links } from '../data/portfolio'
import { t } from '../i18n'
</script>

<template>
  <section id="contact" class="border-t border-white/5">
    <div v-reveal class="mx-auto max-w-3xl px-5 py-24 text-center">
      <p class="kicker justify-center">{{ t.ui.contact.kicker }}</p>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {{ t.ui.contact.title }}
      </h2>
      <p class="mx-auto mt-4 max-w-md text-neutral-400">
        {{ t.ui.contact.lead }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a :href="links.linkedin" target="_blank" rel="noopener" class="btn border-amber-300 bg-amber-300 px-6 py-3 text-neutral-900 hover:bg-amber-200">
          {{ t.ui.contact.linkedin }}
        </a>
        <a :href="links.github" target="_blank" rel="noopener" class="btn border-white/15 px-6 py-3 text-neutral-200 hover:bg-white/5">
          {{ t.ui.contact.github }}
        </a>
      </div>
    </div>
  </section>
</template>
