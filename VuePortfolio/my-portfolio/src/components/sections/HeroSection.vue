<template>
  <section
    ref="sectionRef"
    id="hero"
    :class="[
      backgrounds.hero,
      'relative overflow-hidden flex flex-col md:h-auto md:flex md:items-center',
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
      class="sticky top-0 h-[100dvh] overflow-hidden flex flex-col md:static md:h-auto md:overflow-visible"
    >
      <div :style="animStyle" class="flex flex-col will-change-transform">
        <div
          class="relative flex flex-col w-full overflow-hidden md:overflow-visible md:flex-initial md:mx-auto md:max-w-7xl md:px-6 md:py-20"
        >
          <div
            class="flex flex-col md:grid md:gap-12 md:grid-cols-2 md:items-center"
          >
            <!-- Texto -->
            <div
              class="order-2 md:order-1 text-center md:text-left px-5 py-4 md:px-0 md:py-0"
            >
              <!-- Eyebrow -->
              <div
                class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
              >
                <span
                  class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                ></span>
                {{ $t("hero.available") }}
              </div>

              <!-- Title -->
              <h1
                class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] sm:leading-tight tracking-tight"
              >
                <span
                  class="mt-2 block text-slate-400 text-sm sm:text-lg font-semibold uppercase tracking-[0.2em] dark:text-slate-300"
                  >{{ $t("hero.eyebrow") }}</span
                >
                <span class="block">
                  <span
                    class="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-400"
                  >
                    {{ $t("hero.titleStrong") }}
                  </span>
                  <br class="sm:block" />
                  <span
                    class="px-1 text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-100"
                  >
                    {{ $t("hero.titleRest") }}
                  </span>
                </span>
              </h1>

              <!-- Typed line -->
              <p
                class="mt-1 md:mt-4 mb-1 inline-block min-h-[2rem] px-1 py-0.5 rounded-lg bg-cyan-50/60 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800 font-mono text-sm sm:text-base text-cyan-700 dark:text-cyan-200 tracking-wide transition-all duration-400 shadow"
              >
                <span>{{ typedText }}</span
                ><span
                  class="border-r-2 border-cyan-400 dark:border-cyan-300 ml-1 animate-caret"
                ></span>
              </p>

              <!-- Copy -->
              <p
                class="mt-1 md:mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0 md:whitespace-pre-line"
              >
                {{ $t("hero.description") }}
              </p>

              <!-- CTAs -->
              <div
                class="mt-2 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
              >
                <a
                  href="#projects"
                  @click.prevent="scrollToAnchor('projects')"
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
                  @click.prevent="scrollToAnchor('contact')"
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
                class="hidden md:grid mt-6 grid-cols-3 gap-4 max-w-md md:mx-0"
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
              :style="photoContainerStyle"
              class="order-1 md:order-2 relative md:h-auto shrink-0 md:shrink overflow-hidden md:overflow-visible md:mx-auto md:max-w-none"
            >
              <div class="relative block w-full md:inline-block">
                <img
                  :src="photoUrl"
                  :alt="$t('hero.photoAlt')"
                  :style="imageStyle"
                  class="w-full object-top max-w-none md:max-w-md rounded-b-3xl md:rounded-3xl ring-0 md:ring-2 md:ring-slate-200 md:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.35)] md:dark:ring-white/10 opacity-60 md:opacity-100"
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
        <dl
          ref="statsRef"
          class="md:hidden px-5 pt-3 pb-1 grid grid-cols-3 gap-1.5"
        >
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-lg font-semibold text-slate-900 dark:text-slate-100"
            >
              +15
            </dd>
            <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
              {{ $t("hero.stats.years") }}
            </dt>
          </div>
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-lg font-semibold text-slate-900 dark:text-slate-100"
            >
              +20
            </dd>
            <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
              {{ $t("hero.stats.projects") }}
            </dt>
          </div>
          <div
            class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
          >
            <dd
              class="text-lg font-semibold text-slate-900 dark:text-slate-100"
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
const photoStartPx = ref(0);
const photoEndPx = ref(0);

// Keep the scroll range stable, but let the section shrink by the same
// amount the photo has already closed. This removes the blank area without
// feeding the animation back into its own scroll math.
const heroSectionStyle = computed(() => {
  if (!isMobile.value) return {};
  const vh = window.innerHeight;
  const hiddenPhoto = Math.max(0, photoStartPx.value - currentPhotoPx.value);
  const shrinkGain = 1.4;
  const minHeight = vh * 0.15;
  const height = Math.max(
    minHeight,
    Math.round(vh + statsHeight.value - hiddenPhoto * shrinkGain),
  );
  return { height: `${height}px` };
});

const PHOTO_START_VH = 0.46;
const PHOTO_END_VH = 0.2;

// Photo container keeps a fixed initial height (photoStartPx). The <img>
// inside is absolutely positioned and its computed height interpolates
// between start and end. This lets us animate the visible photo size
// without causing layout reflows for the rest of the content.
// Compute a current interpolated photo height (px) and apply it
// to the container so the rest of the content flows up with the image.
const currentPhotoPx = computed(() => {
  if (!isMobile.value || photoStartPx.value === 0) return 0;
  const vh = window.innerHeight;
  const start = photoStartPx.value;
  const end = photoEndPx.value || Math.round(vh * PHOTO_END_VH);
  return Math.round(start - (start - end) * scrollProg.value);
});

const photoContainerStyle = computed(() => {
  if (!isMobile.value || photoStartPx.value === 0) return {};
  return {
    height: `${currentPhotoPx.value}px`,
    overflow: "hidden",
    transition: "height 220ms cubic-bezier(0.22,1,0.36,1)",
  };
});

// Image takes full height of the container. The container transition
// drives layout so the content below moves up as a block.
const imageStyle = computed((): Record<string, string> => {
  if (!isMobile.value || photoStartPx.value === 0) return {};
  return {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transformOrigin: "top",
    transition: "transform 220ms cubic-bezier(0.22,1,0.36,1)",
  };
});

const animStyle = computed(() => ({
  transform: `translateY(-${innerOffset.value}px)`,
}));

function getCollapsedHeroHeight() {
  if (!isMobile.value) return sectionRef.value?.offsetHeight ?? 0;
  const vh = window.innerHeight;
  const shrinkGain = 1.4;
  const minHeight = vh * 0.15;
  const totalPhotoShrink = Math.max(0, photoStartPx.value - photoEndPx.value);
  return Math.max(
    minHeight,
    Math.round(vh + statsHeight.value - totalPhotoShrink * shrinkGain),
  );
}

function scrollToAnchor(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const nav = document.querySelector("nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
  const extraOffset = window.innerWidth < 768 ? 12 : 16;

  const currentHeroHeight = sectionRef.value?.offsetHeight ?? 0;
  const collapsedHeroHeight = getCollapsedHeroHeight();
  const pendingCollapse = Math.max(0, currentHeroHeight - collapsedHeroHeight);

  const top = Math.max(
    0,
    Math.round(
      target.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        extraOffset -
        pendingCollapse,
    ),
  );

  window.scrollTo({ top, behavior: "smooth" });
}

function measureStats() {
  statsHeight.value = statsRef.value?.offsetHeight ?? 0;
  // compute photo px values based on current viewport
  const vh = window.innerHeight;
  photoStartPx.value = Math.round(vh * PHOTO_START_VH);
  photoEndPx.value = Math.round(vh * PHOTO_END_VH);
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
  const maxOffset = statsHeight.value;
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

// Debounce helper for expensive event handlers (resize)
function debounce<T extends (...a: any[]) => void>(fn: T, wait = 150) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t !== undefined) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait) as unknown as number;
  };
}

onMounted(() => {
  startTyping();
  updateMobile();
  measureStats();
  // ResizeObserver to react to viewport / layout changes
  const ro = new ResizeObserver(() => {
    updateMobile();
    measureStats();
    handleScroll();
  });
  ro.observe(document.documentElement);
  if (sectionRef.value) ro.observe(sectionRef.value);
  if (statsRef.value) ro.observe(statsRef.value);
  window.addEventListener("scroll", handleScroll, { passive: true });
  const debouncedResize = debounce(() => {
    updateMobile();
    measureStats();
    handleScroll();
  }, 150);
  window.addEventListener("resize", debouncedResize);
  // save debounced resize for cleanup
  (sectionRef as any)._debouncedResize = debouncedResize;
  // save observer for cleanup
  (sectionRef as any)._ro = ro;
});
onBeforeUnmount(() => {
  stopTyping();
  window.removeEventListener("scroll", handleScroll);
  const dr = (sectionRef as any)._debouncedResize as
    | ((...a: any[]) => void)
    | undefined;
  if (dr) window.removeEventListener("resize", dr);
  // disconnect ResizeObserver
  try {
    const ro = (sectionRef as any)._ro as ResizeObserver | undefined;
    if (ro) ro.disconnect();
  } catch (e) {
    // ignore
  }
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
