<template>
  <section id="services" class="py-24 bg-slate-50 dark:bg-slate-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-[0.95fr_1.25fr]">
        <!-- Columna izquierda -->
        <div class="xl:sticky xl:top-28 xl:self-start">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400">
            Propuesta de valor
          </p>

          <h2 class="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100">
            Servicios
          </h2>

          <p class="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Me sumo para dar claridad técnica, ordenar iniciativas y acompañar su ejecución
          </p>

          <p class="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Si necesitás dar claridad a una iniciativa, preparar una plataforma para crecer o acompañar un entorno complejo, hablemos.
          </p>

          <div class="mt-10">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-cyan-400"
            >
              Conversemos
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="space-y-6">
          <article
            v-for="item in serviceItems"
            :key="item.id"
            class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300"
          >
            <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <!-- Número -->
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-base font-semibold text-slate-400 transition-colors duration-300 group-hover:border-cyan-200 group-hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-cyan-300">
                {{ item.number }}
              </div>

              <!-- Contenido -->
              <div class="flex-1 md:pl-6">
                <h3 class="text-lg md:text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
                  {{ item.title }}
                </h3>

                <p class="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                  {{ item.description }}
                </p>

                <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <li
                    v-for="bullet in item.bullets"
                    :key="bullet"
                    class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const serviceItems = [
  {
    id: 'clarity',
    number: '01',
    title: 'Ordenar y destrabar iniciativas',
    description:
      'Para contextos donde hay demanda, presión y ambigüedad, pero falta una dirección clara para avanzar.',
    bullets: [
      'Priorización técnica y funcional',
      'Definición de enfoque',
      'Alineación entre negocio y ejecución',
    ],
  },
  {
    id: 'modernization',
    number: '02',
    title: 'Modernizar y preparar para escalar',
    description:
      'Para plataformas que necesitan actualizarse, reducir fricción técnica y sostener crecimiento.',
    bullets: [
      'Modernización progresiva',
      'Reducción de deuda técnica',
      'Arquitectura y evolución',
    ],
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'Acompañar portfolios, equipos y entornos complejos',
    description:
      'Para entornos con múltiples aplicaciones, stakeholders y necesidades de coordinación constante.',
    bullets: [
      'Gobierno de iniciativas',
      'Visibilidad y previsibilidad',
      'Dirección técnica y seguimiento',
    ],
  },
]
</script>