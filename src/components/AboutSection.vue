<script setup>
import { stack } from '../data/portfolio'
import { t } from '../i18n'
import SectionHead from './SectionHead.vue'
</script>

<template>
  <section id="about" class="mx-auto max-w-5xl px-5 py-20">
    <SectionHead :kicker="t.ui.about.kicker" :title="t.ui.about.title" />

    <div class="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div v-reveal class="space-y-5 leading-relaxed text-neutral-400">
        <p v-for="p in t.about.paragraphs" :key="p">{{ p }}</p>
        <ul class="flex flex-wrap gap-2 pt-2">
          <li v-for="s in stack" :key="s" class="chip">{{ s }}</li>
        </ul>
      </div>

      <dl v-reveal class="divide-y divide-white/5 self-start rounded-2xl border border-white/10 bg-white/[0.02]">
        <div v-for="f in t.about.facts" :key="f.label" class="px-5 py-4">
          <dt class="text-xs font-medium uppercase tracking-wider text-neutral-400">{{ f.label }}</dt>
          <dd class="mt-1 text-sm text-neutral-200">{{ f.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
