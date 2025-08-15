<template>
  <div :class="['min-h-screen font-sans', isDark ? 'bg-darkbg' : 'bg-gray-100']">
    <nav :class="['py-3 flex justify-between items-center px-4', isDark ? 'bg-darkbg' : 'bg-primary']">
      <ul class="flex justify-center gap-6 list-none m-0 p-0">
        <li>
          <router-link
            to="/"
            :class="linkClass"
            active-class="bg-blue-700"
            exact-active-class="bg-blue-700"
          >Inicio</router-link>
        </li>
        <li>
          <router-link
            to="/about"
            :class="linkClass"
            active-class="bg-blue-700"
            exact-active-class="bg-blue-700"
          >Sobre mí</router-link>
        </li>
        <li>
          <router-link
            to="/services"
            :class="linkClass"
            active-class="bg-blue-700"
            exact-active-class="bg-blue-700"
          >Servicios</router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            :class="linkClass"
            active-class="bg-blue-700"
            exact-active-class="bg-blue-700"
          >Proyectos</router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            :class="linkClass"
            active-class="bg-blue-700"
            exact-active-class="bg-blue-700"
          >Contacto</router-link>
        </li>
      </ul>
      <button
        @click="toggleDark"
        :class="['ml-4 px-3 py-2 rounded transition', isDark ? 'bg-accent text-darkbg hover:bg-primary' : 'bg-accent text-white hover:bg-primary']"
        :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      >
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
      </button>
    </nav>
    <main :class="['max-w-3xl mx-auto my-8 p-6 rounded-lg shadow', isDark ? 'bg-darkbg text-gray-100' : 'bg-white text-gray-900']">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, onMounted, computed } from 'vue'

const isDark = ref(false)

const linkClass = computed(() =>
  [
    'font-medium px-3 py-2 rounded transition',
    isDark.value
      ? 'text-gray-100 hover:bg-primary'
      : 'text-white hover:bg-blue-600'
  ].join(' ')
)

function toggleDark() {
  isDark.value = !isDark.value
  updateHtmlClass()
}

function updateHtmlClass() {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

// Mantener el modo al recargar (opcional)
onMounted(() => {
  const saved = localStorage.getItem('theme-dark')
  if (saved !== null) {
    isDark.value = saved === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateHtmlClass()
})

watchEffect(() => {
  updateHtmlClass()
  localStorage.setItem('theme-dark', String(isDark.value))
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500&display=swap');

body {
  font-family: 'Segoe UI', Arial, sans-serif;
}
</style>
