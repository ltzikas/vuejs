<template>
  <div class="flex gap-2 items-center">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.name"
      class="social-link"
    >
      <span class="icon-wrapper">
        <span v-if="link.name === 'Twitter'" class="icon">
          <!-- Twitter SVG -->
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.3 1.64 4.49c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.28 4.28 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/>
          </svg>
        </span>
        <span v-else-if="link.name === 'GitHub'" class="icon">
          <!-- GitHub SVG -->
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </span>
        <span v-else-if="link.name === 'LinkedIn'" class="icon">
          <!-- LinkedIn SVG -->
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
          </svg>
        </span>
      </span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const socialLinks = ref([
  {
    name: 'Twitter',
    url: 'https://twitter.com/'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/'
  }
])
</script>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--icon-bg, #f3f4f6);
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.07);
}
.icon {
  color: var(--icon-color, #1e293b);
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}
.social-link:hover .icon-wrapper {
  background: #2563eb;
  box-shadow: 0 2px 8px 0 rgba(37,99,235,0.15);
}
.social-link:hover .icon {
  color: #fff;
}

/* Dark mode support */
:root.dark .icon-wrapper {
  --icon-bg: #1e293b;
}
:root.dark .icon {
  --icon-color: #f1f5f9;
}
</style>