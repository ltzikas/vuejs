<template>
  <div>
    <h2>Servicios</h2>
    <ul v-if="services.length">
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </li>
    </ul>
    <p v-else>Cargando servicios...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchServices, Service } from '../services/servicesApi'

const services = ref<Service[]>([])

onMounted(async () => {
  services.value = await fetchServices()
})
</script>
