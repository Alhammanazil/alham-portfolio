<script setup>
import { computed } from 'vue'
import { t, lang, languages, setLang } from '../i18n'

const items = computed(() => [
  { label: t.value.ui.nav.about, href: '#about' },
  { label: t.value.ui.nav.experience, href: '#experience' },
  { label: t.value.ui.nav.projects, href: '#projects' },
  { label: t.value.ui.nav.contact, href: '#contact' }
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/5 bg-[#090b12]">
    <nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-5" :aria-label="t.ui.navLabel">
      <a href="#top" class="flex items-center gap-2.5 text-sm font-semibold text-white">
        <span class="grid h-7 w-7 place-items-center rounded-lg bg-amber-300 font-mono text-xs font-bold text-neutral-900">AM</span>
        <span class="hidden sm:inline">Alham Manazil</span>
      </a>
      <div class="flex items-center gap-4 sm:gap-6">
        <ul class="flex items-center gap-4 text-sm text-neutral-300 sm:gap-7">
          <li v-for="i in items" :key="i.href">
            <a :href="i.href" class="transition-colors hover:text-white">{{ i.label }}</a>
          </li>
        </ul>
        <div class="flex overflow-hidden rounded-lg border border-white/15 text-xs font-semibold" role="group" :aria-label="t.ui.language">
          <button
            v-for="l in languages"
            :key="l.code"
            type="button"
            class="min-h-[2rem] min-w-[2.25rem] px-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber-300"
            :class="lang === l.code ? 'bg-amber-300 text-neutral-900' : 'text-neutral-300 hover:bg-white/5'"
            :aria-pressed="lang === l.code"
            :aria-label="l.name"
            :lang="l.code"
            @click="setLang(l.code)"
          >
            {{ l.label }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
