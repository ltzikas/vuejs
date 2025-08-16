<template>
  <footer :class="['text-center py-4 mt-8 text-sm', theme.isDark ? 'bg-darkbg text-gray-400' : 'bg-primary text-white']">
    © {{ year }} Lucio Tzikas · Portfolio
  </footer>
</template>

<script lang="ts" setup>
import { useThemeStore } from '../stores/theme'
const theme = useThemeStore()

const year = new Date().getFullYear()
</script>
