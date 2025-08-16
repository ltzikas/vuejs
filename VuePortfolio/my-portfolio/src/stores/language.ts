import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
  const i18n = useI18n()
  const locale = ref(localStorage.getItem('lang') || 'es')

  // Sincroniza el idioma con vue-i18n y localStorage
  watch(locale, (val) => {
    i18n.locale.value = val
    localStorage.setItem('lang', val)
  }, { immediate: true })

  function setLanguage(lang: string) {
    locale.value = lang
  }

  return { locale, setLanguage }
})
