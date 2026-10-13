<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
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
    <div class="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-xs text-neutral-600">
      <span>© {{ new Date().getFullYear() }} Alham Manazil</span>
      <a href="#top" class="transition-colors hover:text-neutral-300">Back to top ↑</a>
    </div>
  </footer>
</template>
