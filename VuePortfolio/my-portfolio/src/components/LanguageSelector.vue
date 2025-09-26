<template>
  <button
    @click="toggleLanguage"
    class="relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none"
    :class="'bg-gray-300'"
  :aria-label="locale === 'en' ? 'Cambiar a español' : 'Switch to English'"
  >
  <span
    class="absolute inset-0 rounded-full transition-colors duration-300 pointer-events-none"
    :class=" 'bg-surface-dark'"
  ></span>
    <span
      class="absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:ring-2 hover:ring-accent/60"
      :class="[
        locale === 'en' ? 'translate-x-6' : 'translate-x-0',
        'bg-blue-950 text-white',
      ]"
    >
      <span v-if="locale === 'es'" class="font-bold text-base"
        >ES</span
      >
      <span v-else class="font-bold text-base">EN</span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { locale } = useI18n()

onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved) locale.value = saved
})

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  localStorage.setItem('lang', locale.value)
}
</script>
