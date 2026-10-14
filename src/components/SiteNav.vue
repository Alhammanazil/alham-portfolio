<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { t, lang, languages, setLang } from '../i18n'

const items = computed(() => [
  { label: t.value.ui.nav.about, href: '#about' },
  { label: t.value.ui.nav.experience, href: '#experience' },
  { label: t.value.ui.nav.projects, href: '#projects' },
  { label: t.value.ui.nav.contact, href: '#contact' }
])

// The toggle shows the current language and flips to the other one on click.
const current = computed(() => languages.find((l) => l.code === lang.value))
const other = computed(() => languages.find((l) => l.code !== lang.value))

const open = ref(false)
const close = () => (open.value = false)

function onKey(e) {
  if (e.key === 'Escape') close()
}
function onResize() {
  if (window.innerWidth >= 640) close()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/5 bg-[#090b12]/75 backdrop-blur-md">
    <nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-5" :aria-label="t.ui.navLabel">
      <a href="#top" class="flex items-center gap-2.5 text-sm font-semibold text-white" @click="close">
        <span class="grid h-7 w-7 place-items-center rounded-lg bg-amber-300 font-mono text-xs font-bold text-neutral-900">AM</span>
        <span class="hidden sm:inline">Alham Manazil</span>
      </a>

      <div class="flex items-center gap-2 sm:gap-6">
        <ul class="hidden items-center gap-7 text-sm text-neutral-400 sm:flex">
          <li v-for="i in items" :key="i.href">
            <a :href="i.href" class="transition-colors hover:text-white">{{ i.label }}</a>
          </li>
        </ul>

        <button
          type="button"
          class="min-h-[2.5rem] rounded-md px-2 font-mono text-xs font-semibold tracking-wide text-neutral-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
          :aria-label="`${t.ui.switchTo}: ${other.name}`"
          :lang="current.code"
          @click="setLang(other.code)"
        >
          {{ current.label }}
        </button>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-md text-neutral-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 sm:hidden"
          :aria-label="open ? t.ui.closeMenu : t.ui.menu"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <ul
      v-show="open"
      id="mobile-menu"
      class="border-t border-white/5 bg-[#090b12]/95 px-5 py-2 sm:hidden"
    >
      <li v-for="i in items" :key="i.href">
        <a :href="i.href" class="block py-3 text-sm text-neutral-300 transition-colors hover:text-white" @click="close">
          {{ i.label }}
        </a>
      </li>
    </ul>
  </header>
</template>
