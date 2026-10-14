import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './i18n'
import './i18n'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

createApp(App)
  .directive('reveal', {
    mounted(el) {
      el.classList.add('reveal')
      observer.observe(el)
    }
  })
  .mount('#app')
