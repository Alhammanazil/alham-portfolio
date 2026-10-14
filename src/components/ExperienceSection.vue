<script setup>
import { certifications } from '../data/portfolio'
import { t } from '../i18n'
import SectionHead from './SectionHead.vue'
</script>

<template>
  <section id="experience" class="border-t border-white/5">
    <div class="mx-auto max-w-5xl px-5 py-20">
      <SectionHead :kicker="t.ui.experience.kicker" :title="t.ui.experience.title" />

      <ol class="relative ml-2 border-l border-white/10">
        <li v-for="job in t.experience" :key="job.org + job.period" v-reveal class="relative pb-12 pl-8 last:pb-0">
          <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-[#090b12] bg-amber-300"></span>
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 class="text-lg font-semibold text-white">{{ job.role }}</h3>
            <p class="font-mono text-xs text-neutral-500">{{ job.period }}</p>
          </div>
          <p class="mt-1 text-sm text-amber-200/90">{{ job.org }}<span class="text-neutral-600"> · {{ job.place }}</span></p>
          <ul class="mt-4 space-y-2 text-sm leading-relaxed text-neutral-400">
            <li v-for="pt in job.points" :key="pt" class="flex gap-3">
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600"></span>
              <span>{{ pt }}</span>
            </li>
          </ul>
        </li>
      </ol>

      <div class="mt-16 grid gap-5 md:grid-cols-2">
        <div v-reveal class="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-500">{{ t.ui.experience.education }}</h3>
          <ul class="mt-4 space-y-4">
            <li v-for="e in t.education" :key="e.school">
              <p class="text-neutral-100">{{ e.school }}</p>
              <p class="text-sm text-neutral-500">{{ e.detail }} · {{ e.period }}</p>
            </li>
          </ul>
        </div>
        <div v-reveal class="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-500">{{ t.ui.experience.certifications }}</h3>
          <ul class="mt-4 space-y-2 text-sm text-neutral-300">
            <li v-for="c in certifications" :key="c" class="flex gap-3">
              <span class="text-amber-300">✓</span>{{ c }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
