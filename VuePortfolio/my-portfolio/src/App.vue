<template>
  <div :class="['min-h-screen font-sans flex flex-col', theme.isDark ? 'bg-bodydrk' : 'bg-gray-100']">
    <NavBar />
    <main :class="['flex-1 max-w-3xl mx-auto my-8 p-6 rounded-lg shadow', theme.isDark ? 'bg-darkbg text-gray-100' : 'bg-white text-gray-900']">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from './stores/theme'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageSelector from './components/LanguageSelector.vue'

const theme = useThemeStore()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500&display=swap');

body {
  font-family: 'Segoe UI', Arial, sans-serif;
}
</style>
