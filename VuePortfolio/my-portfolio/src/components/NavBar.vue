<template>
  <nav :class="['py-3 flex justify-between items-center px-4 shadow-md', theme.isDark ? 'bg-darkbg' : 'bg-primary']">
    <router-link to="/" class="flex items-center gap-3 group">
      <img src="https://ui-avatars.com/api/?name=Lucio+Tzikas&background=1e40af&color=fff&size=40" alt="Avatar" class="rounded-full w-10 h-10 border-2 border-accent shadow group-hover:scale-105 transition" />      
    </router-link>
    <ul class="flex justify-center gap-6 list-none m-0 p-0">
      <li v-for="link in links" :key="link.to">
        <router-link
          :to="link.to"
          :class="[linkClass, 'min-w-[90px] text-center']"
          active-class="bg-blue-700"
          exact-active-class="bg-blue-700"
        >{{ $t(link.label) }}</router-link>
      </li>
    </ul>
    <div class="flex items-center gap-2">
      <a href="https://github.com/ltzikas" target="_blank" rel="noopener" class="text-white hover:text-accent transition" aria-label="GitHub">
        <!-- ...GitHub SVG... -->
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/></svg>
      </a>
      <a href="https://linkedin.com/in/ltzikas" target="_blank" rel="noopener" class="text-white hover:text-accent transition" aria-label="LinkedIn">
        <!-- ...LinkedIn SVG... -->
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.3h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/></svg>
      </a>
      <LanguageSelector />
      <ThemeToggle />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import LanguageSelector from './LanguageSelector.vue'
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()

const links = [
  { to: '/about', label: 'about' },
  { to: '/skills', label: 'skills' },
  { to: '/experience', label: 'experience' },
  { to: '/projects', label: 'projects' },
  { to: '/services', label: 'services' },
  { to: '/education', label: 'education' },
  { to: '/contact', label: 'contact' }
]

const linkClass = computed(() =>
  [
    'font-medium px-3 py-2 rounded transition',
    theme.isDark
      ? 'text-gray-100 hover:bg-primary'
      : 'text-white hover:bg-blue-600'
  ].join(' ')
)
</script>
