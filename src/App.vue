<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { t } from './i18n'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <footer class="border-t border-white/5">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-xs text-neutral-400">
      <span>© {{ new Date().getFullYear() }} Alham Manazil</span>
      <a href="#top" class="transition-colors hover:text-neutral-300">{{ t.ui.footer.top }}</a>
    </div>
  </footer>
</template>
