<template>
  <section>
    <h1>{{ $t('services') }}</h1>
    <ul v-if="services.length">
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.title[language.locale] }}</h3>
        <p>{{ service.description[language.locale] }}</p>
      </li>
    </ul>
    <p v-else>Cargando servicios...</p>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useLanguageStore } from '../stores/language'

const language = useLanguageStore()

type Service = {
  id: number
  title: Record<string, string>
  description: Record<string, string>
  icon?: string
}

const services = ref<Service[]>([])

onMounted(async () => {
  const res = await fetch('/src/mocks/services.json')
  services.value = await res.json()
})
</script>
