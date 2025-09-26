<template>
  <footer :class="['text-center py-4 mt-8 text-sm', 'bg-background-dark text-white']">
    © {{ year }} Lucio Tzikas · Portfolio
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>
