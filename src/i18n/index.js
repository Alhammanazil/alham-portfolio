import { ref, computed, watchEffect } from 'vue'
import en from './en'
import id from './id'

const dictionaries = { en, id }
const STORAGE_KEY = 'lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved in dictionaries) return saved
  } catch {
    // storage can be blocked; fall through to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export const lang = ref(initialLang())
export const languages = [
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
  { code: 'en', label: 'ENG', name: 'English' }
]

export function setLang(code) {
  if (!(code in dictionaries)) return
  lang.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // not persisting is fine
  }
}

export const t = computed(() => dictionaries[lang.value])

// Keep <html lang>, the tab title and the meta description in step with the language.
watchEffect(() => {
  document.documentElement.lang = t.value.htmlLang
  document.title = t.value.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.value.meta.description)
})
