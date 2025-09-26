<template>
  <section>
    <h1>{{ $t('services') }}</h1>
    <ul v-if="services.length">
      <li v-for="service in services" :key="service.id">
        <h2>{{ service.title[$i18n.locale] }}</h2>
        <p>{{ service.description[$i18n.locale] }}</p>
      </li>
    </ul>
    <p v-else>Cargando servicios...</p>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

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
