<template>
  <section id="education" class="py-20 bg-white dark:bg-slate-900">
    <div class="mx-auto max-w-4xl px-6">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{{ $t('education.title') }}</h2>
      <p class="text-slate-700 dark:text-slate-300 mb-8">{{ $t('education.subtitle') }}</p>
      <ul class="space-y-8">
        <li v-for="item in education" :key="item.title" class="flex items-start gap-4">
          <span class="text-2xl text-cyan-500 dark:text-cyan-300">{{ item.icon }}</span>
          <div>
            <h3 class="font-semibold text-lg text-slate-900 dark:text-white">{{ item.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400">{{ item.institution }}</p>
            <p class="text-xs text-slate-400 dark:text-slate-500">{{ item.period }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const education = [
  {
    icon: '🎓',
    title: 'Ingeniería en Sistemas',
    institution: 'Universidad Nacional',
    period: '2017 - 2022'
  },
  {
    icon: '💻',
    title: 'Diplomatura en Desarrollo Web',
    institution: 'Instituto XYZ',
    period: '2023'
  }
  // Agrega más estudios si quieres
]
</script>