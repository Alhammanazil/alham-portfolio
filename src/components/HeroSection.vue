<script setup>
import { profile } from '../data/portfolio'
import CodeStage from './CodeStage.vue'
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-5xl px-5 pb-20 pt-16 text-center sm:pt-24">
      <p class="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-neutral-300">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
        </span>
        {{ profile.status }}
      </p>

      <h1 class="mt-7 text-5xl font-bold tracking-tight sm:text-7xl">
        <span class="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">{{ profile.name }}</span>
      </h1>
      <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-400">{{ profile.headline }}</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#projects" class="btn border-amber-300 bg-amber-300 text-neutral-900 hover:bg-amber-200">See what I've built</a>
        <a href="#contact" class="btn border-white/15 text-neutral-200 hover:bg-white/5">Get in touch</a>
      </div>

      <div class="mt-16">
        <CodeStage />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%);
  animation: grid-drift 18s linear infinite;
}
@keyframes grid-drift {
  to { background-position: 48px 48px; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-grid { animation: none; }
}
</style>
