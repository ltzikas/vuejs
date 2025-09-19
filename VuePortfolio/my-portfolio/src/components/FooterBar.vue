<template>
  <footer :class="['text-center py-4 mt-8 text-sm', theme.isDark ? 'bg-background-dark text-white' : 'bg-background-light text-gray-400']">
    © {{ year }} Lucio Tzikas · Portfolio
  </footer>
</template>

<script lang="ts" setup>
import { useThemeStore } from '../stores/theme'
const theme = useThemeStore()

const year = new Date().getFullYear()
</script>
