<template>
  <section id="about" class="py-20 bg-surface-light dark:bg-surface-dark border-y border-slate-200/60 dark:border-slate-700/50">
    <div class="mx-auto max-w-7xl px-6">
      <header class="max-w-2xl">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          {{ $t('approachSection.title') }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300">
          {{ $t('approachSection.subtitle') }}
        </p>
      </header>

      <!-- Pasos -->
      <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(step, i) in steps"
          :key="i"
          class="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
        >
          <div class="flex items-start gap-3">
            <div class="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span class="text-sm font-semibold">{{ i + 1 }}</span>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">{{ step.title }}</h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ step.desc }}</p>
            </div>
          </div>
        </li>
      </ul>

      <!-- Valores -->
      <h3 class="mt-12 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {{ $t('approachSection.valuesTitle') }}
      </h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="(v, i) in $tm('approachSection.values')"
          :key="i"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm
                 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
        >
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
          <span>{{ v }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

interface Step {
  title: string
  desc: string
}

const { tm } = useI18n()
const steps = tm('approachSection.steps') as Step[]
</script>