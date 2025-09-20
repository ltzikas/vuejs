<template>
  <nav
    :class="[
      'py-1 flex justify-between items-center px-4 shadow-md',
      theme.isDark ? 'bg-background-dark' : 'bg-background-light',
    ]"
  >
    <a href="#hero" class="hidden md:flex items-center gap-3 group">
      <img
        src="https://ui-avatars.com/api/?name=Lucio+Tzikas&background=1e40af&color=fff&size=40"
        alt="Avatar"
        class="rounded-full w-10 h-10 border-2 border-accent shadow group-hover:scale-105 transition"
      />
    </a>
    <ul class="hidden md:flex justify-center gap-8 list-none m-0 p-0">
      <li v-for="link in links" :key="link.to">
        <a :href="link.to" :class="[linkClass, 'min-w-[90px] text-center']">{{
          $t(link.label)
        }}</a>
      </li>
    </ul>
    <HamburgerIcon
      :isOpen="menuOpen"
      @toggle="menuOpen = !menuOpen"
      aria-label="Abrir menú"
    />
    <div class="flex items-center gap-5">
      <SocialMedia />
      <LanguageSelector />
      <ThemeToggle />
    </div>
  </nav>
  <!-- Menú contextual lateral solo en mobile -->
  <div
    v-if="menuOpen"
    class="fixed inset-0 z-50 md:hidden bg-black/60"
    @click.self="menuOpen = false"
  >
    <div
      class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-background-dark shadow-lg p-6 flex flex-col"
    >
      <button
        class="self-end mb-6 text-2xl"
        aria-label="Cerrar menú"
        @click="menuOpen = false"
      >
        &times;
      </button>
      <ul class="flex flex-col gap-4">
        <li v-for="link in links" :key="link.to">
          <a
            :href="link.to"
            :class="[linkClass, 'block text-lg']"
            @click="menuOpen = false"
          >
            {{ $t(link.label) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import LanguageSelector from "./LanguageSelector.vue";
import SocialMedia from "./SocialMedia.vue";
import { useThemeStore } from "../stores/theme";
import HamburgerIcon from "./HamburgerIcon.vue";

const theme = useThemeStore();

const menuOpen = ref(false);

const links = [
  { to: "#about", label: "about" },
  { to: "#skills", label: "skills" },
  { to: "#experience", label: "experience" },
  { to: "#projects", label: "projects" },
  { to: "#services", label: "services" },
  { to: "#education", label: "education" },
  { to: "#contact", label: "contact" },
];

const linkClass = computed(() =>
  [
    "font-medium px-3 py-2 rounded transition",
    theme.isDark
      ? "text-white hover:bg-primary-hover-dark"
      : "text-gray-900 hover:bg-primary-hover-light hover:text-white",
  ].join(" ")
);
</script>
