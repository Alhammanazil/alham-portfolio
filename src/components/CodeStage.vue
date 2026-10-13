<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Decorative, looping "AI pair programmer" animation. Scenes mirror real work:
// attendance tracking, a donation page and a damage-report query.
// token classes: k keyword, f function, s string, c comment, p plain
const scenes = [
  {
    file: 'checkin.js',
    prompt: 'track staff attendance without fingerprint hardware',
    lines: [
      [['c', '// scan a QR code, log the time']],
      [['k', 'async function '], ['f', 'checkIn'], ['p', '(staffId) {']],
      [['p', '  '], ['k', 'const '], ['p', 'at = '], ['k', 'new '], ['f', 'Date'], ['p', '()']],
      [['p', '  '], ['k', 'await '], ['p', 'sheet.'], ['f', 'append'], ['p', '({ staffId, at })']],
      [['p', '  '], ['k', 'return '], ['s', '`welcome, ${staffId}`']],
      [['p', '}']]
    ]
  },
  {
    file: 'DonateController.php',
    prompt: 'show donation progress in real time',
    lines: [
      [['k', '$raised '], ['p', '= Donation::'], ['f', 'sum'], ['p', '('], ['s', "'amount'"], ['p', ');']],
      [['k', '$goal   '], ['p', '= '], ['s', '50000000'], ['p', ';']],
      [['k', '$pct    '], ['p', '= '], ['f', 'min'], ['p', '(100, $raised / $goal * 100);']],
      [['p', '']],
      [['k', 'return '], ['f', 'view'], ['p', '('], ['s', "'donate'"], ['p', ', '], ['f', 'compact'], ['p', '('], ['s', "'pct'"], ['p', '));']]
    ]
  },
  {
    file: 'open_reports.sql',
    prompt: 'which damage reports are still open?',
    lines: [
      [['k', 'SELECT '], ['p', 'id, title, reported_at']],
      [['k', 'FROM   '], ['p', 'damage_reports']],
      [['k', 'WHERE  '], ['p', 'status = '], ['s', "'open'"]],
      [['k', 'ORDER BY '], ['p', 'reported_at '], ['k', 'ASC'], ['p', ';']]
    ]
  }
]

const LINES = Math.max(...scenes.map((s) => s.lines.length))

const sceneIdx = ref(0)
const promptShown = ref(0)
const codeShown = ref(0)
const phase = ref('prompt') // prompt -> think -> code -> done

const scene = computed(() => scenes[sceneIdx.value])
const promptText = computed(() => scene.value.prompt.slice(0, promptShown.value))

const codeTotal = (s) => s.lines.reduce((n, l) => n + l.reduce((m, t) => m + t[1].length, 0) + 1, 0)

const visibleLines = computed(() => {
  let left = codeShown.value
  const out = []
  for (const line of scene.value.lines) {
    if (left <= 0) break
    const toks = []
    for (const [cls, text] of line) {
      if (left <= 0) break
      const n = Math.min(left, text.length)
      toks.push([cls, text.slice(0, n)])
      left -= n
    }
    out.push(toks)
    left -= 1
  }
  return out
})

let alive = true
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
// Wait, and keep waiting while the tab is hidden so we don't burn CPU in the background.
async function tick(ms) {
  await sleep(ms)
  while (document.hidden && alive) await sleep(400)
}

async function run() {
  while (alive) {
    for (let i = 0; i < scenes.length && alive; i++) {
      sceneIdx.value = i
      promptShown.value = 0
      codeShown.value = 0
      phase.value = 'prompt'
      await tick(500)
      const s = scenes[i]
      while (promptShown.value < s.prompt.length && alive) {
        promptShown.value++
        await tick(34)
      }
      phase.value = 'think'
      await tick(1100)
      phase.value = 'code'
      const total = codeTotal(s)
      while (codeShown.value < total && alive) {
        codeShown.value += 2
        await tick(24)
      }
      codeShown.value = total
      phase.value = 'done'
      await tick(2600)
    }
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    promptShown.value = scenes[0].prompt.length
    codeShown.value = codeTotal(scenes[0])
    phase.value = 'done'
    return
  }
  run()
})
onBeforeUnmount(() => {
  alive = false
})
</script>

<template>
  <div class="stage relative mx-auto w-full max-w-2xl text-left" aria-hidden="true">
    <div class="stage-glow"></div>
    <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1019]/90 shadow-2xl shadow-black/50 backdrop-blur">
      <!-- title bar -->
      <div class="flex items-center gap-3 border-b border-white/5 px-4 py-3">
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
        </div>
        <span class="font-mono text-xs text-neutral-500">{{ scene.file }}</span>
        <span class="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-neutral-500">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>assistant
        </span>
      </div>

      <!-- prompt -->
      <div class="flex gap-3 border-b border-white/5 px-4 py-3 font-mono text-[13px]">
        <span class="text-amber-300">›</span>
        <p class="min-h-[1.4em] text-neutral-200">
          {{ promptText }}<span v-if="phase === 'prompt'" class="caret"></span>
        </p>
      </div>

      <!-- code -->
      <div class="relative px-4 py-4 font-mono text-[12.5px] leading-[1.7] sm:text-[13px]" :style="{ minHeight: `calc(${LINES} * 1.7em + 2rem)` }">
        <p v-if="phase === 'think'" class="flex items-center gap-2 text-neutral-500">
          <span class="text-amber-300">✦</span> writing code
          <span class="dots"><i></i><i></i><i></i></span>
        </p>
        <div v-for="(line, i) in visibleLines" :key="i" class="flex">
          <span class="w-6 shrink-0 select-none text-right text-neutral-700">{{ i + 1 }}</span>
          <code class="whitespace-pre pl-4">
            <span v-for="(t, j) in line" :key="j" :class="`t-${t[0]}`">{{ t[1] }}</span><span v-if="phase === 'code' && i === visibleLines.length - 1" class="caret"></span>
          </code>
        </div>
      </div>

      <!-- status -->
      <div class="flex items-center justify-between border-t border-white/5 px-4 py-2.5 font-mono text-[11px] text-neutral-600">
        <span>{{ scene.file.split('.').pop().toUpperCase() }}</span>
        <span class="status" :class="{ on: phase === 'done' }">✓ ready to review</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.t-k { color: #c4b5fd; }
.t-f { color: #fcd34d; }
.t-s { color: #6ee7b7; }
.t-c { color: #64748b; }
.t-p { color: #cbd5e1; }

.caret {
  display: inline-block;
  width: 7px;
  height: 1.05em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: #fcd34d;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.dots i {
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-left: 3px;
  border-radius: 50%;
  background: currentColor;
  animation: bounce 1s ease-in-out infinite;
}
.dots i:nth-child(2) { animation-delay: 0.15s; }
.dots i:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-4px); opacity: 1; }
}

.status { opacity: 0; transform: translateY(3px); transition: opacity 0.4s, transform 0.4s; color: #6ee7b7; }
.status.on { opacity: 1; transform: none; }

.stage-glow {
  position: absolute;
  inset: -12% -8%;
  background:
    radial-gradient(40% 50% at 25% 30%, rgba(251, 191, 36, 0.18), transparent 70%),
    radial-gradient(45% 55% at 78% 70%, rgba(129, 140, 248, 0.2), transparent 70%);
  filter: blur(28px);
  animation: breathe 7s ease-in-out infinite;
}
@keyframes breathe {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.06); }
}

@media (prefers-reduced-motion: reduce) {
  .caret, .dots i, .stage-glow { animation: none; }
}
</style>
