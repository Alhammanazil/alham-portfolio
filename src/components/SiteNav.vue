<script setup>
const items = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/5 bg-[#090b12]/75 backdrop-blur-md">
    <nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-5" aria-label="Main">
      <a href="#top" class="flex items-center gap-2.5 text-sm font-semibold text-white">
        <span class="grid h-7 w-7 place-items-center rounded-lg bg-amber-300 font-mono text-xs font-bold text-neutral-900">AM</span>
        <span class="hidden sm:inline">Alham Manazil</span>
      </a>
      <ul class="flex items-center gap-5 text-sm text-neutral-400 sm:gap-7">
        <li v-for="i in items" :key="i.href">
          <a :href="i.href" class="transition-colors hover:text-white">{{ i.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
