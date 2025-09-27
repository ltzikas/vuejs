<template>
  <section id="projects" class="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{{ $t('projects.title') }}</h2>
      <p class="text-slate-700 dark:text-slate-300 mb-8">{{ $t('projects.subtitle') }}</p>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" :key="project.title" class="rounded-xl bg-white dark:bg-slate-800 shadow p-6 flex flex-col">
          <img :src="project.image" :alt="project.title" class="rounded-lg mb-4 h-40 object-cover" />
          <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">{{ project.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 mb-2">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.techs" :key="tech" class="px-2 py-1 rounded bg-cyan-100 text-cyan-700 text-xs dark:bg-cyan-900 dark:text-cyan-300">{{ tech }}</span>
          </div>
          <div class="mt-auto flex gap-3">
            <a v-if="project.demo" :href="project.demo" target="_blank" class="text-cyan-600 dark:text-cyan-300 font-medium hover:underline">Demo</a>
            <a v-if="project.repo" :href="project.repo" target="_blank" class="text-slate-600 dark:text-slate-400 font-medium hover:underline">Repo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Vue',
    desc: 'Landing personal con Vue 3 y Tailwind.',
    image: '../assets/vue.svg',
    techs: ['Vue', 'Tailwind', 'TypeScript'],
    demo: '#',
    repo: '#'
  },
  // Agrega más proyectos aquí
]
</script>