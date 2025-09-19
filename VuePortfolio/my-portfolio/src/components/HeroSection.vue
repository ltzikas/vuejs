<template>
  <div :class="[theme.isDark ? 'bg-surface-dark' : 'bg-surface-light']">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
      </div>
      <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 flex justify-center md:justify-start">
          <img
            src="/src/assets/Lucio.jpg"
            alt="Lucio Tzikas"
            class="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-500 shadow-lg bg-gray-800"
          />
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4">
            ¡Impulsa tu negocio con desarrollo web de alto impacto!
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6">
            Soy Lucio Tzikas, Full Stack Developer freelance.
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a href="#contact" class="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition">
              Hablemos
            </a>
            <a href="#projects" class="px-8 py-3 rounded-full border border-indigo-400 text-indigo-300 font-semibold hover:bg-indigo-600 hover:text-white transition">
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
      <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>
