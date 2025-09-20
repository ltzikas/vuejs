<template>
  <div
    :class="[
      'min-h-screen font-sans flex flex-col',
      theme.isDark ? 'bg-background-dark' : 'bg-background-light',
    ]"
  >
    <NavBar />
    <main>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <ServicesSection id="services" />
      <EducationSection id="education" />
      <ContactSection id="contact" />
    </main>
    <FooterBar />
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from "./stores/theme";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./pages/About.vue";
import SkillsSection from "./pages/Skills.vue";
import ExperienceSection from "./pages/Experience.vue";
import ProjectsSection from "./pages/Projects.vue";
import ServicesSection from "./pages/Services.vue";
import EducationSection from "./pages/Education.vue";
import ContactSection from "./pages/Contact.vue";

const theme = useThemeStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500&display=swap");

body {
  font-family: "Segoe UI", Arial, sans-serif;
}
</style>
