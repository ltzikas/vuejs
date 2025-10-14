<template>
  <section id="services" :class="[backgrounds.services, sectionClasses]">
    <div class="mx-auto max-w-5xl px-6">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{{ $t('services.title') }}</h2>
      <p class="text-slate-700 dark:text-slate-300 mb-8">{{ $t('services.subtitle') }}</p>
      <div class="grid gap-8 md:grid-cols-2">
        <div v-for="service in services" :key="service.title" class="rounded-xl bg-cyan-50 dark:bg-slate-800 shadow p-6 flex flex-col items-start">
          <span class="text-3xl mb-3">{{ service.icon }}</span>
          <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">{{ service.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectionBackground } from '@/composables/useSectionBackground'

const { backgrounds, sectionClasses } = useSectionBackground()
const services = [
  { icon: '💻', title: 'Desarrollo Frontend', desc: 'Interfaces modernas y responsivas.' },
  { icon: '🧩', title: 'APIs Backend', desc: 'APIs robustas y seguras.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Experiencias atractivas y accesibles.' },
  { icon: '📝', title: 'Consultoría', desc: 'Te ayudo a definir y mejorar tu producto.' }
]
</script>