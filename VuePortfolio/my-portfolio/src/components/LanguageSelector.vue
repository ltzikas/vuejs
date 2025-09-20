<template>
  <button
    @click="toggleLanguage"
    class="relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none"
    :class="theme.isDark ? 'bg-surface-dark' : 'bg-gray-300'"
    :aria-label="
      language.locale === 'es' ? 'Cambiar a inglés' : 'Cambiar a español'
    "
  >
    <span
      class="absolute inset-0 rounded-full transition-colors duration-300 pointer-events-none"
      :class="theme.isDark ? 'bg-surface-dark' : 'bg-gray-300'"
    ></span>
    <span
      class="absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:ring-2 hover:ring-accent/60"
      :class="[
        language.locale === 'en' ? 'translate-x-6' : 'translate-x-0',
        theme.isDark ? 'bg-blue-950 text-white' : 'bg-white text-yellow-500',
      ]"
    >
      <span v-if="language.locale === 'es'" class="font-bold text-base"
        >ES</span
      >
      <span v-else class="font-bold text-base">EN</span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { useLanguageStore } from "../stores/language";
import { useThemeStore } from "../stores/theme";
const language = useLanguageStore();
const theme = useThemeStore();

function toggleLanguage() {
  language.setLanguage(language.locale === "es" ? "en" : "es");
}
</script>
