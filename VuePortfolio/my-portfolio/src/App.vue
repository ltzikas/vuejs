<template>
  <div
    :class="[
      'min-h-screen font-sans flex flex-col',
      'bg-background-light dark:bg-background-dark'
    ]"
  >
    <NavBar />
    <main>
      <HeroSection id="hero" />
      <About id="about" />
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
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import HeroSection from "./pages/Home.vue";
import About from "./pages/About.vue";
import SkillsSection from "./pages/Skills.vue";
import ExperienceSection from "./pages/Experience.vue";
import ProjectsSection from "./pages/Projects.vue";
import ServicesSection from "./pages/Services.vue";
import EducationSection from "./pages/Education.vue";
import ContactSection from "./pages/Contact.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500&display=swap");

body {
  font-family: "Segoe UI", Arial, sans-serif;
}
</style>
