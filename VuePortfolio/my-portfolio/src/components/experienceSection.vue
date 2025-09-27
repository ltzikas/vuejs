<template>
  <section id="experience" class="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
    <div class="mx-auto max-w-5xl px-6">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{{ $t('experience.title') }}</h2>
      <p class="text-slate-700 dark:text-slate-300 mb-10">{{ $t('experience.subtitle') }}</p>

      <div class="relative">
        <!-- Línea de tiempo central (visible en md+) -->
        <div class="pointer-events-none hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] rounded bg-gradient-to-b from-cyan-400 via-indigo-400 to-fuchsia-400 dark:from-cyan-600 dark:via-indigo-600 dark:to-fuchsia-600"></div>

        <transition name="fade" mode="out-in">
          <div :key="current" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <article
              v-for="(item, idx) in visibleCards"
              :key="item.company + idx"
              class="relative p-6 rounded-xl shadow-lg border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all"
            >
              <!-- Punto que conecta con la línea -->
              <span
                class="hidden md:flex absolute top-7 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow"
                :class="[
                  idx === 0 ? 'right-[-20px]' : 'left-[-20px]',
                  'bg-cyan-400 dark:bg-cyan-600'
                ]"
                aria-hidden="true"
              ></span>

              <header class="flex flex-wrap items-center gap-2 mb-2">
                <span class="text-2xl text-indigo-500 dark:text-indigo-300">{{ item.icon }}</span>
                <h3 class="font-semibold text-lg text-slate-900 dark:text-white">{{ item.role }}</h3>
                <span class="text-xs px-2 py-1 rounded bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">{{ item.period }}</span>
              </header>

              <div class="text-slate-600 dark:text-slate-400 font-medium mb-2">{{ item.company }}</div>

              <ul class="list-disc ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li v-for="desc in item.tasks" :key="desc">{{ desc }}</li>
              </ul>

              <div v-if="item.achievements?.length" class="mt-3">
                <span class="font-semibold text-cyan-700 dark:text-cyan-300 text-xs">Logros:</span>
                <ul class="list-disc ml-5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <li v-for="ach in item.achievements" :key="ach">{{ ach }}</li>
                </ul>
              </div>
            </article>
          </div>
        </transition>

        <!-- Controles -->
        <button @click="prev" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-2 shadow hover:bg-cyan-100 dark:hover:bg-cyan-900 transition" aria-label="Anterior">
          <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-2 shadow hover:bg-cyan-100 dark:hover:bg-cyan-900 transition" aria-label="Siguiente">
          <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        <!-- Indicadores -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(_, idx) in totalSteps"
            :key="idx"
            @click="goTo(idx)"
            :class="[
              'w-2.5 h-2.5 rounded-full transition-transform',
              idx === current ? 'bg-cyan-500 dark:bg-cyan-300 scale-125' : 'bg-cyan-200 dark:bg-cyan-700'
            ]"
            aria-label="Ir al slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const experiences = [
  {
    icon: '🏢',
    role: 'Frontend Developer',
    company: 'Tech Solutions',
    period: '2022 - Presente',
    tasks: [
      'Desarrollo de interfaces SPA con Vue 3 y Tailwind.',
      'Optimización de performance y accesibilidad.',
      'Colaboración con equipos de backend y diseño.'
    ],
    achievements: [
      'Reducción de tiempos de carga en un 40%.',
      'Reconocimiento interno por liderazgo técnico.'
    ]
  },
  {
    icon: '🧑‍💻',
    role: 'Freelance Web Developer',
    company: 'Clientes varios',
    period: '2020 - 2022',
    tasks: [
      'Implementación de landing pages y dashboards.',
      'Integración de APIs y sistemas de pago.',
      'Consultoría en UX/UI y arquitectura frontend.'
    ],
    achievements: [
      'Más de 20 proyectos entregados.',
      'Feedback positivo de clientes por comunicación y resultados.'
    ]
  },
  {
    icon: '🚀',
    role: 'Intern Developer',
    company: 'Startup XYZ',
    period: '2019 - 2020',
    tasks: [
      'Soporte en migración de stack a Vue.',
      'Automatización de procesos internos.',
      'Documentación y testing.'
    ],
    achievements: [
      'Participación en lanzamiento de producto.',
      'Mejora de procesos con automatización.'
    ]
  },
  {
    icon: '🌐',
    role: 'Consultor Frontend',
    company: 'Agencia Web',
    period: '2018 - 2019',
    tasks: [
      'Auditoría de performance y accesibilidad.',
      'Capacitación a equipos internos.',
      'Prototipado rápido de soluciones.'
    ],
    achievements: ['Mejora de Lighthouse score en 30%.']
  }
]

const current = ref(0)
const cardsPerView = 2

// Ventana deslizante (2 por vez) con wrap-around
const visibleCards = computed(() => {
  if (experiences.length === 0) return []
  const a = experiences[current.value % experiences.length]
  const b = experiences[(current.value + 1) % experiences.length]
  return [a, b]
})

// Pasos = longitud (se mueve de a 1 para efecto continuo)
const totalSteps = computed(() => experiences.length)

function next() {
  current.value = (current.value + 1) % experiences.length
}
function prev() {
  current.value = (current.value - 1 + experiences.length) % experiences.length
}
function goTo(i: number) {
  current.value = i % experiences.length
}

// Autoplay (pausa al interactuar)
let timer: number | undefined
function startAuto() { timer = window.setInterval(next, 4500) }
function stopAuto() { if (timer) clearInterval(timer) }

onMounted(startAuto)
onBeforeUnmount(stopAuto)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .35s, transform .35s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(6px); }
</style>