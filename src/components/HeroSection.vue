<script setup>
import { profile } from '../data/portfolio'
import { t } from '../i18n'
</script>

<template>
  <section id="top">
    <div class="relative mx-auto max-w-5xl px-5 pb-24 pt-20 text-center sm:pt-32">
      <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">{{ profile.name }}</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">{{ t.profile.headline }}</p>
      <p class="mt-3 text-sm text-neutral-400">{{ t.profile.status }}</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#projects" class="btn border-amber-300 bg-amber-300 text-neutral-900 hover:bg-amber-200">{{ t.ui.hero.seeWork }}</a>
        <a href="#contact" class="btn border-white/15 text-neutral-200 hover:bg-white/5">{{ t.ui.hero.contact }}</a>
      </div>
    </div>
  </section>
</template>
