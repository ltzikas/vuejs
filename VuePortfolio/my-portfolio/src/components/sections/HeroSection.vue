<template>
  <section
    ref="sectionRef"
    id="hero"
    :class="[
      backgrounds.hero,
      'relative overflow-hidden flex flex-col md:h-auto md:min-h-screen md:flex md:items-center',
    ]"
    :style="heroSectionStyle"
  >
    <!-- Fondos decorativos -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 top-[-10%] h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.08)_0%,_rgba(56,189,248,0)_60%)] dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.12)_0%,_rgba(56,189,248,0)_60%)]"
      ></div>
    </div>
    <div
      aria-hidden="true"
      class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-blob dark:bg-cyan-500/20"
    ></div>
    <div
      aria-hidden="true"
      class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-blob animation-delay-2000 dark:bg-indigo-500/20"
    ></div>

    <!-- Sticky viewport: clips to 100dvh on mobile. Animated div translates up on scroll to reveal stats below the fold -->
    <div
      class="sticky top-0 h-[100dvh] overflow-hidden flex flex-col md:static md:h-auto md:overflow-visible md:flex-1"
    >
      <div :style="animStyle" class="flex flex-col will-change-transform">
        <div
          class="relative flex flex-col h-[100dvh] md:h-auto w-full overflow-hidden md:overflow-visible md:flex-initial md:mx-auto md:max-w-7xl md:px-6 md:py-28"
        >
          <div
            class="flex flex-col flex-1 md:grid md:gap-12 md:grid-cols-2 md:items-center"
          >
            <!-- Texto -->
            <div
              class="flex flex-col justify-between flex-1 md:flex-initial order-2 md:order-1 text-center md:text-left px-5 py-5 md:px-0 md:py-0"
            >
              <!-- Eyebrow -->
              <div
                class="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
              >
                <span
                  class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                ></span>
                {{ $t("hero.available") }}
              </div>

              <!-- Title -->
              <h1
                class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              >
                <span
                  class="block text-slate-400 text-base sm:text-lg font-semibold uppercase tracking-[0.2em] dark:text-slate-300"
                  >{{ $t("hero.eyebrow") }}</span
                >
                <span class="mt-2 block">
                  <span
                    class="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-400"
                  >
                    {{ $t("hero.titleStrong") }}
                  </span>
                  <br class="hidden sm:block" />
                  <span
                    class="text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-100"
                  >
                    {{ $t("hero.titleRest") }}
                  </span>
                </span>
              </h1>

              <!-- Typed line -->
              <p
                class="mt-2 md:mt-4 mb-1 inline-block min-h-[2rem] px-1 py-0.5 rounded-lg bg-cyan-50/60 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800 font-mono text-sm sm:text-base text-cyan-700 dark:text-cyan-200 tracking-wide transition-all duration-400 shadow"
              >
                <span>{{ typedText }}</span
                ><span
                  class="border-r-2 border-cyan-400 dark:border-cyan-300 ml-1 animate-caret"
                ></span>
              </p>

              <!-- Copy -->
              <p
                class="mt-2 md:mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0 md:whitespace-pre-line"
              >
                {{ $t("hero.description") }}
              </p>

              <!-- CTAs -->
              <div
                class="mt-3 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
              >
                <a
                  href="#projects"
                  class="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white hover:bg-cyan-400 transition-colors dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
                >
                  {{ $t("hero.ctaPrimary") }}
                  <svg
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-50 transition-colors dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
                >
                  {{ $t("hero.ctaSecondary") }}
                  <svg
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <!-- Stats -->
              <dl
                class="hidden md:grid mt-10 grid-cols-3 gap-4 max-w-md md:mx-0"
              >
                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
                >
                  <dd
                    class="text-2xl font-semibold text-slate-900 dark:text-slate-100"
                  >
                    +15
                  </dd>
                  <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">
                    {{ $t("hero.stats.years") }}
                  </dt>
                </div>
                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
                >
                  <dd
                    class="text-2xl font-semibold text-slate-900 dark:text-slate-100"
                  >
                    +20
                  </dd>
                  <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">
                    {{ $t("hero.stats.projects") }}
                  </dt>
                </div>
                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
                >
                  <dd
                    class="text-2xl font-semibold text-slate-900 dark:text-slate-100"
                  >
                    +5
                  </dd>
                  <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">
                    {{ $t("hero.stats.clients") }}
                  </dt>
                </div>
              </dl>
            </div>

            <!-- Foto -->
            <div
              :style="photoStyle"
              class="order-1 md:order-2 relative h-[35dvh] md:h-auto shrink-0 md:shrink overflow-hidden md:overflow-visible md:mx-auto md:max-w-none"
            >
              <div class="relative block h-full w-full md:inline-block">
                <img
                  :src="photoUrl"
                  :alt="$t('hero.photoAlt')"
                  class="h-full w-full object-cover object-top max-w-none md:max-w-md rounded-b-3xl md:rounded-3xl ring-0 md:ring-2 md:ring-slate-200 md:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.35)] md:dark:ring-white/10 opacity-60 md:opacity-100"
                />
                <!-- Gradient fade photo → text (mobile only) -->
                <div
                  aria-hidden="true"
                  class="md:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none"
                ></div>
                <div
                  aria-hidden="true"
                  class="hidden md:block pointer-events-none absolute -inset-2 rounded-[1.75rem] bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-fuchsia-400/20 blur-xl"
                ></div>
                <div
                  class="hidden md:block absolute -bottom-4 -right-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 shadow-lg text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                >
                  <span class="inline-flex items-center gap-2 text-xs">
                    <span
                      class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                    ></span>
                    {{ $t("hero.availability") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile stats: initially below fold, revealed by scrolling within the hero -->
        <dl ref="statsRef" class="md:hidden px-5 py-5 grid grid-cols-3 gap-2">
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-xl font-semibold text-slate-900 dark:text-slate-100"
            >
              +15
            </dd>
            <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
              {{ $t("hero.stats.years") }}
            </dt>
          </div>
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-xl font-semibold text-slate-900 dark:text-slate-100"
            >
              +20
            </dd>
            <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
              {{ $t("hero.stats.projects") }}
            </dt>
          </div>
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-xl font-semibold text-slate-900 dark:text-slate-100"
            >
              +5
            </dd>
            <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
              {{ $t("hero.stats.clients") }}
            </dt>
          </div>
        </dl>
      </div>
      <!-- /animated-div -->
    </div>
    <!-- /sticky-viewport -->
    <!-- Overlay de ruido sutil -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSectionBackground } from "@/composables/useSectionBackground";

// Imagen de perfil
const photoUrl = new URL("@/assets/Lucio.JPG", import.meta.url).href;
// Fondo decorativo
const { backgrounds } = useSectionBackground();

// Scroll-reveal stats + photo shrink (mobile only)
const sectionRef = ref<HTMLElement | null>(null);
const statsRef = ref<HTMLElement | null>(null);
const innerOffset = ref(0);
const scrollProg = ref(0);
const isMobile = ref(false);
const statsHeight = ref(0);

// Section height = 100dvh + exact stats height (no hardcoded 6rem)
const heroSectionStyle = computed(() =>
  isMobile.value && statsHeight.value > 0
    ? { height: `calc(100dvh + ${statsHeight.value}px)` }
    : {},
);

const PHOTO_START_VH = 0.35;
const PHOTO_END_VH = 0.28;

const photoStyle = computed(() => {
  if (!isMobile.value) return {};
  const vh = window.innerHeight;
  const h =
    vh * (PHOTO_START_VH - (PHOTO_START_VH - PHOTO_END_VH) * scrollProg.value);
  return { height: `${Math.round(h)}px`, transition: "height 0.08s linear" };
});

const animStyle = computed(() => ({
  transform: `translateY(-${innerOffset.value}px)`,
}));

function measureStats() {
  statsHeight.value = statsRef.value?.offsetHeight ?? 0;
}

function updateMobile() {
  isMobile.value = window.innerWidth < 768;
}

function handleScroll() {
  if (!sectionRef.value || window.innerWidth >= 768) {
    innerOffset.value = 0;
    scrollProg.value = 0;
    return;
  }
  const scrolledPast = Math.max(
    0,
    -sectionRef.value.getBoundingClientRect().top,
  );
  const maxOffset = sectionRef.value.offsetHeight - window.innerHeight;
  const clamped = Math.max(0, Math.min(scrolledPast, maxOffset));
  innerOffset.value = Math.round(clamped);
  scrollProg.value = maxOffset > 0 ? clamped / maxOffset : 0;
}

// Typed effect con i18n
const { tm, locale } = useI18n();
const typedText = ref("");
let typingTimer: number | undefined;

function phrases() {
  // Frases leídas desde i18n
  const arr = tm("hero.typed") as unknown as string[];

  // Si $t no devuelve array, usa fallback local:

  return arr;
}

function startTyping() {
  stopTyping();
  const lines = phrases();
  let i = 0;
  let deleting = false;
  let text = "";

  const tick = () => {
    const target = lines[i % lines.length];
    const step = deleting ? -1 : 1;
    text = target.slice(0, text.length + step);
    typedText.value = text;

    const base = deleting ? 25 : 45;
    const pauseEnd = 900;
    const pauseStart = 350;
    if (!deleting && text === target) {
      deleting = true;
      typingTimer = window.setTimeout(tick, pauseEnd);
    } else if (deleting && text === "") {
      deleting = false;
      i++;
      typingTimer = window.setTimeout(tick, pauseStart);
    } else {
      typingTimer = window.setTimeout(tick, base + Math.random() * 60);
    }
  };

  tick();
}

function stopTyping() {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = undefined;
  }
}

onMounted(() => {
  startTyping();
  updateMobile();
  measureStats();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateMobile();
    measureStats();
    handleScroll();
  });
});
onBeforeUnmount(() => {
  stopTyping();
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", () => {
    updateMobile();
    measureStats();
    handleScroll();
  });
});
watch(locale, () => startTyping());
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(10px, -10px) scale(1.05);
  }
}
.animate-blob {
  animation: blob 12s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
}
.animate-caret {
  animation: caret 1s step-end infinite;
}
</style>
