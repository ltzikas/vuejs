<template>
  <footer class="bg-slate-900 text-white border-t-4 border-blue-600">
    <div class="mx-auto max-w-7xl px-6 py-6">
      <p class="text-center text-sm text-slate-300">
        © {{ year }} Lucio Tzikas · Portfolio
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>