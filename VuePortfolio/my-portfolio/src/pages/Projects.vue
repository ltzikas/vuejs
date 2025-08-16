<template>
  <section>
    <h1>{{ $t('projects') }}</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <p>Tecnologías: {{ project.tech.join(', ') }}</p>        
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchProjects, Project } from '../services/projectsApi'

const projects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await fetchProjects()
})
</script>
