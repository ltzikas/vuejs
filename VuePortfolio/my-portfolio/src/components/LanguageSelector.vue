<template>
  <select
    v-model="language.locale"
    @change="language.setLanguage(language.locale)"
    class="border rounded px-2 py-1 text-sm"
  >
    <option value="es">Español</option>
    <option value="en">English</option>
    <!-- Agrega más idiomas aquí en el futuro -->
  </select>
</template>

<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'
const language = useLanguageStore()
</script>
