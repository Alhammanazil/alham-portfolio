<script setup>
import { ref, computed, nextTick } from 'vue'
import { projects, projectTags } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
import SkeletonImage from './SkeletonImage.vue'
import { t } from '../i18n'

// ---- filter + layout ----
const active = ref('all')
const view = ref('strip') // 'strip' (auto-scrolling) or 'grid'

const list = computed(() => (active.value === 'all' ? projects : projects.filter((p) => p.tags.includes(active.value))))
const n = computed(() => list.value.length)

const filters = computed(() => [
  { key: 'all', label: t.value.ui.projects.all, count: projects.length },
  ...projectTags
    .filter((tag) => projects.some((p) => p.tags.includes(tag)))
    .map((tag) => ({
      key: tag,
      label: t.value.ui.projects.tags[tag] ?? tag,
      count: projects.filter((p) => p.tags.includes(tag)).length
    }))
])

// The strip needs enough items to loop smoothly; short lists fall back to the grid.
const MIN_FOR_STRIP = 4
const showStrip = computed(() => view.value === 'strip' && n.value >= MIN_FOR_STRIP)

// The track holds two identical halves and slides left by exactly 50%, so the loop is seamless.
// Each half repeats the list until it is wider than even very large screens.
const loop = computed(() => {
  const reps = Math.max(2, Math.ceil(12 / n.value))
  const half = Array.from({ length: reps }, () => list.value).flat()
  return [...half, ...half]
})
const duration = computed(() => `${Math.max(40, n.value * 13.5)}s`)

// ---- lightbox ----
const dialog = ref(null)
const index = ref(0)
const tab = ref('shot') // 'shot' or 'live'
const liveLoaded = ref(false)
const current = computed(() => list.value[index.value] ?? list.value[0])
const canLive = computed(() => Boolean(current.value?.demo && current.value?.embed))
const showLive = computed(() => tab.value === 'live' && canLive.value)

function setTab(next) {
  tab.value = next
  liveLoaded.value = false
}
async function open(k) {
  index.value = k % n.value
  tab.value = 'shot'
  await nextTick()
  dialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
}
function close() {
  dialog.value?.close()
}
function onClosed() {
  document.documentElement.style.overflow = ''
  tab.value = 'shot' // unloads the live iframe
}
function step(dir) {
  index.value = (index.value + dir + n.value) % n.value
  liveLoaded.value = false
}
function onBackdrop(e) {
  if (e.target === dialog.value) close()
}
function onKey(e) {
  // Arrow keys belong to the embedded page while it has focus.
  if (e.target?.tagName === 'IFRAME') return
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

      <div class="mb-8 mt-2 flex flex-wrap items-center justify-between gap-3">
        <div role="group" :aria-label="t.ui.projects.filterLabel" class="flex flex-wrap gap-2">
          <button
            v-for="f in filters"
            :key="f.key"
            type="button"
            class="filter"
            :class="{ on: active === f.key }"
            :aria-pressed="active === f.key"
            @click="active = f.key"
          >
            {{ f.label }}<span class="count">{{ f.count }}</span>
          </button>
        </div>
        <div role="group" :aria-label="t.ui.projects.layoutLabel" class="seg">
          <button type="button" :class="{ on: view === 'strip' }" :aria-pressed="view === 'strip'" @click="view = 'strip'">
            {{ t.ui.projects.viewStrip }}
          </button>
          <button type="button" :class="{ on: view === 'grid' }" :aria-pressed="view === 'grid'" @click="view = 'grid'">
            {{ t.ui.projects.viewGrid }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="showStrip" class="marquee pb-20" :aria-label="t.ui.projects.stripLabel">
      <ul class="track" :style="{ '--dur': duration }">
        <li v-for="(p, k) in loop" :key="`${active}-${p.slug}-${k}`" class="item" :aria-hidden="k >= n ? 'true' : null">
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

    <div v-else class="mx-auto max-w-5xl px-5 pb-20">
      <p v-if="!n" class="text-sm text-neutral-400">{{ t.ui.projects.noMatch }}</p>
      <ul v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(p, k) in list" :key="`${active}-${p.slug}`">
          <button
            type="button"
            class="tile group relative block w-full overflow-hidden rounded-xl border border-white/10 text-left focus:outline-none focus-visible:border-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300"
            :aria-label="`${t.ui.projects.open} ${p.name}`"
            @click="open(k)"
          >
            <SkeletonImage
              :src="`/img/projects/${p.slug}-thumb.webp`"
              :alt="`${p.name} ${t.ui.projects.preview}`"
              :width="480"
              :height="300"
              :lazy="k > 2"
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
      <div v-if="current">
        <div v-if="canLive" class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 pr-14" role="tablist" :aria-label="t.ui.projects.tabsLabel">
          <button type="button" role="tab" class="tab" :class="{ on: !showLive }" :aria-selected="!showLive" @click="setTab('shot')">
            {{ t.ui.projects.tabShot }}
          </button>
          <button type="button" role="tab" class="tab" :class="{ on: showLive }" :aria-selected="showLive" @click="setTab('live')">
            <span class="dot" aria-hidden="true"></span>{{ t.ui.projects.tabLive }}
          </button>
        </div>

        <div class="relative">
          <div v-if="showLive" class="relative w-full bg-white" style="aspect-ratio: 16 / 9">
            <div v-if="!liveLoaded" class="skeleton absolute inset-0"></div>
            <iframe
              :key="current.slug"
              :src="current.demo"
              :title="`${t.ui.projects.livePreview} ${current.name}`"
              class="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              @load="liveLoaded = true"
            ></iframe>
          </div>
          <SkeletonImage
            v-else
            :key="current.slug"
            :src="`/img/projects/${current.slug}-full.webp`"
            :alt="`${current.name} ${t.ui.projects.screenshot}`"
            :width="1200"
            :height="675"
            :lazy="false"
          />
          <template v-if="!showLive">
            <button type="button" class="nav-btn left-3" :aria-label="t.ui.projects.prev" @click="step(-1)">‹</button>
            <button type="button" class="nav-btn right-3" :aria-label="t.ui.projects.next" @click="step(1)">›</button>
          </template>
          <button type="button" class="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-lg text-white hover:bg-black/80" :class="{ 'close-live': showLive }" :aria-label="t.ui.projects.close" @click="close">✕</button>
        </div>

        <div class="p-6">
          <h3 class="text-xl font-semibold text-white">{{ current.name }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-400">{{ t.projectSummaries[current.slug] }}</p>
          <p v-if="showLive" class="mt-3 text-xs leading-relaxed text-neutral-500">{{ t.ui.projects.liveHint }}</p>
          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li v-for="s in current.stack" :key="s" class="chip">{{ s }}</li>
          </ul>
          <div class="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a v-if="current.github" :href="current.github" target="_blank" rel="noopener" class="btn border-white/15 py-2 text-neutral-200 hover:bg-white/5">{{ t.ui.projects.source }}</a>
            <a v-if="current.demo" :href="current.demo" target="_blank" rel="noopener" class="btn border-amber-300 bg-amber-300 py-2 text-neutral-900 hover:bg-amber-200">{{ t.ui.projects.demo }}</a>
            <template v-if="showLive">
              <button type="button" class="btn ml-auto border-white/15 py-2 text-neutral-200 hover:bg-white/5" :aria-label="t.ui.projects.prev" @click="step(-1)">‹ {{ t.ui.projects.prev }}</button>
              <button type="button" class="btn border-white/15 py-2 text-neutral-200 hover:bg-white/5" :aria-label="t.ui.projects.next" @click="step(1)">{{ t.ui.projects.next }} ›</button>
            </template>
          </div>
        </div>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
/* ---- filter chips + layout switch ---- */
.filter {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.35rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #d4d4d8;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.filter:hover {
  border-color: rgba(252, 211, 77, 0.55);
}
.filter.on {
  border-color: #fcd34d;
  background: #fcd34d;
  color: #171717;
}
.filter .count {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.7rem;
  opacity: 0.65;
}
.filter:focus-visible,
.seg button:focus-visible,
.tab:focus-visible {
  outline: 2px solid #fcd34d;
  outline-offset: 2px;
}
.seg {
  display: inline-flex;
  gap: 2px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 3px;
}
.seg button {
  border-radius: 9999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #a1a1aa;
}
.seg button.on {
  background: rgba(252, 211, 77, 0.16);
  color: #fcd34d;
}

/* ---- lightbox tabs ---- */
.tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.5rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #a1a1aa;
}
.tab.on {
  background: rgba(252, 211, 77, 0.14);
  color: #fcd34d;
}
.tab .dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: ping-dot 1.8s ease-out infinite;
}
@keyframes ping-dot {
  to { box-shadow: 0 0 0 7px rgba(52, 211, 153, 0); }
}
/* In live mode the close button sits on the tab bar instead of covering the embedded page. */
.close-live {
  top: -2.9rem;
}

/* ---- auto-scrolling strip ---- */
.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.track {
  display: flex;
  width: max-content;
  animation: slide var(--dur, 80s) linear infinite;
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
  .tab .dot { animation: none; }
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
