<script setup>
import { ref, computed, nextTick } from 'vue'
import { projects } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
import SkeletonImage from './SkeletonImage.vue'
import { t } from '../i18n'

const n = projects.length

// The track holds two identical halves and slides left by exactly 50%, so the loop is seamless.
// Each half repeats the projects twice so it is wider than even very large screens.
const half = [...projects, ...projects]
const loop = [...half, ...half]

const dialog = ref(null)
const index = ref(0)
const current = computed(() => projects[index.value])

async function open(k) {
  index.value = k % n
  await nextTick()
  dialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
}
function close() {
  dialog.value?.close()
}
function onClosed() {
  document.documentElement.style.overflow = ''
}
function step(dir) {
  index.value = (index.value + dir + n) % n
}
function onBackdrop(e) {
  if (e.target === dialog.value) close()
}
function onKey(e) {
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}
</script>

<template>
  <section id="projects" class="border-t border-white/5">
    <div class="mx-auto max-w-5xl px-5 pt-20">
      <SectionHead
        :kicker="t.ui.projects.kicker"
        :title="t.ui.projects.title"
        :lead="t.ui.projects.lead"
      />
    </div>

    <div class="marquee pb-20" :aria-label="t.ui.projects.stripLabel">
      <ul class="track">
        <li v-for="(p, k) in loop" :key="`${p.slug}-${k}`" class="item" :aria-hidden="k >= n ? 'true' : null">
          <button
            type="button"
            class="tile group relative block w-full overflow-hidden rounded-xl border border-white/10 text-left focus:outline-none focus-visible:border-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300"
            :tabindex="k >= n ? -1 : 0"
            :aria-label="`${t.ui.projects.open} ${p.name}`"
            @click="open(k)"
          >
            <SkeletonImage
              :src="`/img/projects/${p.slug}-thumb.webp`"
              :alt="k < n ? `${p.name} ${t.ui.projects.preview}` : ''"
              :width="480"
              :height="300"
              :lazy="k > 3"
            />
            <span class="caption pointer-events-none absolute inset-x-0 bottom-0 px-4 py-2.5 text-sm font-semibold">
              {{ p.name }}
            </span>
          </button>
        </li>
      </ul>
    </div>

    <dialog
      ref="dialog"
      class="m-auto w-[min(94vw,56rem)] max-h-[92vh] overflow-auto rounded-2xl border border-white/10 bg-[#0d1019] p-0 text-neutral-200 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      :aria-label="t.ui.projects.details"
      @click="onBackdrop"
      @close="onClosed"
      @keydown="onKey"
    >
      <div class="relative">
        <SkeletonImage
          :key="current.slug"
          :src="`/img/projects/${current.slug}-full.webp`"
          :alt="`${current.name} ${t.ui.projects.screenshot}`"
          :width="1200"
          :height="675"
          :lazy="false"
        />
        <button type="button" class="nav-btn left-3" :aria-label="t.ui.projects.prev" @click="step(-1)">‹</button>
        <button type="button" class="nav-btn right-3" :aria-label="t.ui.projects.next" @click="step(1)">›</button>
        <button type="button" class="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-lg text-white hover:bg-black/80" :aria-label="t.ui.projects.close" @click="close">✕</button>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-white">{{ current.name }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-400">{{ t.projectSummaries[current.slug] }}</p>
        <ul class="mt-4 flex flex-wrap gap-1.5">
          <li v-for="s in current.stack" :key="s" class="chip">{{ s }}</li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-3 text-sm">
          <a :href="current.github" target="_blank" rel="noopener" class="btn border-white/15 py-2 text-neutral-200 hover:bg-white/5">{{ t.ui.projects.source }}</a>
          <a v-if="current.demo" :href="current.demo" target="_blank" rel="noopener" class="btn border-amber-300 bg-amber-300 py-2 text-neutral-900 hover:bg-amber-200">{{ t.ui.projects.demo }}</a>
        </div>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
/* ---- auto-scrolling strip ---- */
.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.track {
  display: flex;
  width: max-content;
  animation: slide 80s linear infinite;
}
/* Pause while someone is looking at or about to click a tile */
.marquee:hover .track,
.marquee:focus-within .track {
  animation-play-state: paused;
}
@keyframes slide {
  to { transform: translateX(-50%); }
}
.item {
  width: 17rem;
  flex: none;
  padding-right: 1rem; /* spacing as padding keeps the 50% loop point exact */
}
@media (min-width: 640px) {
  .item { width: 21rem; }
}

/* ---- tiles: dark by default, colour + yellow on hover ---- */
.tile {
  background: #05060a;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.tile :deep(img) {
  filter: grayscale(1) brightness(0.42) contrast(1.05);
  transition: filter 0.45s ease, transform 0.6s ease, opacity 0.5s ease;
}
.caption {
  background: linear-gradient(to top, rgba(5, 6, 10, 0.95), rgba(5, 6, 10, 0.55) 70%, transparent);
  color: #e5e7eb;
  padding-top: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
}
.tile:hover,
.tile:focus-visible {
  border-color: #fcd34d;
  box-shadow: 0 0 0 1px rgba(252, 211, 77, 0.5), 0 12px 40px -12px rgba(252, 211, 77, 0.35);
}
.tile:hover :deep(img),
.tile:focus-visible :deep(img) {
  filter: none;
  transform: scale(1.05);
}
.tile:hover .caption,
.tile:focus-visible .caption {
  background: #fcd34d;
  color: #171717;
  padding-top: 0.625rem;
}
/* Touch screens have no hover, so show the colour version there */
@media (hover: none) {
  .tile :deep(img) { filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .track { animation: none; }
  .item[aria-hidden='true'] { display: none; }
}

/* ---- lightbox arrows ---- */
.nav-btn {
  position: absolute;
  top: 50%;
  display: grid;
  height: 2.5rem;
  width: 2.5rem;
  transform: translateY(-50%);
  place-items: center;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
}
.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
