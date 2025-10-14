<template>
  <section id="skills" :class="[backgrounds.skills, sectionClasses]">
        <!-- Fondo animado de partículas -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="animate-particle absolute top-10 left-1/4 w-24 h-24 rounded-full bg-cyan-300/30 dark:bg-cyan-400/20 blur-2xl"></div>
      <div class="animate-particle2 absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-indigo-300/30 dark:bg-indigo-400/20 blur-2xl"></div>
      <div class="animate-particle3 absolute top-1/2 left-2/3 w-16 h-16 rounded-full bg-fuchsia-300/30 dark:bg-fuchsia-400/20 blur-2xl"></div>
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-7xl px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-2 text-slate-900 dark:text-white">
            {{ $t('skills.title') }}
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-300 mb-10">
            {{ $t('skills.subtitle') }}
        </p>

        <div class="grid gap-10 md:grid-cols-3">
            <div v-for="group in skillGroups" :key="group.title">
            <h3 class="inline-block px-4 py-2 mb-4 rounded-full bg-cyan-100 text-cyan-700 font-bold dark:bg-cyan-900 dark:text-cyan-300 shadow">
                {{ group.title }}
            </h3>
            <div class="grid gap-6">
                <div
                v-for="skill in group.skills"
                :key="skill.name"
                class="flex items-center gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 shadow-lg border border-cyan-100 dark:border-cyan-900 backdrop-blur transition-all duration-300
                        hover:scale-105 hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-400 group"
                >
                <span class="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-200 via-indigo-100 to-fuchsia-100 dark:from-cyan-900 dark:via-indigo-900 dark:to-fuchsia-900 shadow group-hover:rotate-6 transition-transform duration-300">
                    <component :is="skill.icon" class="w-8 h-8 text-cyan-600 dark:text-cyan-300" />
                </span>
                <div>
                    <div class="font-semibold text-slate-800 dark:text-slate-100 text-lg">{{ skill.name }}</div>
                    <div class="text-xs text-slate-500 dark:text-slate-400">{{ skill.level }}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes particle {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(30px) scale(1.1); }
}
@keyframes particle2 {
  0%, 100% { transform: translateX(0) scale(1); }
  50% { transform: translateX(-40px) scale(1.15); }
}
@keyframes particle3 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-25px) scale(0.9); }
}
.animate-particle { animation: particle 8s ease-in-out infinite; }
.animate-particle2 { animation: particle2 10s ease-in-out infinite; }
.animate-particle3 { animation: particle3 7s ease-in-out infinite; }
</style>

<script setup lang="ts">

import { useSectionBackground } from '@/composables/useSectionBackground'

const { backgrounds, sectionClasses } = useSectionBackground()

// Íconos SVG como componentes
const VueIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l10 18H2L12 2zm0 3.84L5.53 18h12.94L12 5.84z"/></svg>`
}
const TsIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 1.5h21v21h-21v-21zm11.25 17.25v-6h2.25v6h-2.25zm-6-6v6h2.25v-6h-2.25zm3.75-3.75h2.25v2.25h-2.25v-2.25zm6 0h2.25v2.25h-2.25v-2.25z"/></svg>`
}
const HtmlIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 1.5h21v21h-21v-21zm11.25 17.25v-6h2.25v6h-2.25zm-6-6v6h2.25v-6h-2.25zm3.75-3.75h2.25v2.25h-2.25v-2.25zm6 0h2.25v2.25h-2.25v-2.25z"/></svg>`
}
const NodeIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`
}
const GitIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/></svg>`
}
const FigmaIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><circle cx="12" cy="17" r="4"/></svg>`
}

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Vue 3', level: 'Advanced', icon: VueIcon },
      { name: 'TypeScript', level: 'Advanced', icon: TsIcon },
      { name: 'HTML5', level: 'Advanced', icon: HtmlIcon },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Intermediate', icon: NodeIcon },
      // Add more if needed
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Advanced', icon: GitIcon },
      { name: 'Figma', level: 'Intermediate', icon: FigmaIcon },
      // Add more if needed
    ]
  }
]
</script>