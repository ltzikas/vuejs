import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Importa la función para crear i18n y los archivos de mensajes de idioma
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

// Crea la instancia de i18n con:
// - legacy: false (para usar Composition API de i18n)
// - locale: idioma inicial (de localStorage o 'es')
// - fallbackLocale: idioma de respaldo si falta una traducción
// - messages: los textos de cada idioma
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
