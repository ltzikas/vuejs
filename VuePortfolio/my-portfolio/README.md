# My Portfolio

Personal portfolio built with Vue 3, Vite, TypeScript and Tailwind CSS. Light/Dark theme, ES/EN i18n, responsive design, and a unified design system.

---

## Features

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Tailwind CSS with custom design system
- Dark mode (Tailwind `dark:` + preference persistence)
- ES/EN internationalization (Vue I18n + persistence)
- Responsive layout and smooth interactions
- Consistent NavBar: ThemeToggle, LanguageSelector, SocialMedia
- Footer always dark with brand accent border

---

## Tech Stack

- Vue 3 + Vite
- TypeScript
- Tailwind CSS
- Vue I18n

---

## Project Structure

```
my-portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── assets/
│   │   ├── tailwind.css
│   │   └── Lucio.JPG
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavBar.vue
│   │   │   └── FooterBar.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── SkillsSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── EducationSection.vue
│   │   │   └── ContactSection.vue
│   │   └── ui/
│   │       ├── ThemeToggle.vue
│   │       ├── LanguageSelector.vue
│   │       ├── SocialMedia.vue
│   │       └── HamburgerIcon.vue
│   ├── composables/
│   │   └── useSectionBackground.ts
│   ├── locales/
│   │   ├── en.json
│   │   └── es.json
│   ├── mocks/
│   │   ├── projects.json
│   │   └── services.json
│   ├── services/
│   │   ├── projectsApi.ts
│   │   └── servicesApi.ts
│   └── pages/                 # Legacy (no router). Kept for reference.
└── public/
    └── vite.svg
```

Note: The app is a single-page layout using sections. The folder `src/pages/` is legacy and not used by the current build.

---

## Design System

- Colors (semantic):
  - primary: blue-600 (light) / blue-900 (dark)
  - background: slate-100 (light) / slate-950 (dark)
  - surface: white (light) / slate-800 (dark)
  - text: slate-800 (light) / slate-50 (dark)
- Pattern: zebra alternation between surface/background across sections.
- Components use Tailwind classes directly; dynamic classes only for animations/positions.

---

## Theme Strategy (Dark/Light)

- Styling: Tailwind `dark:` classes (no JS-based styling).
- Persistence: `localStorage.getItem('theme')` to remember user choice.
- Toggle:
  - Toggles the `dark` class on `<html>`.
  - Saves preference in `localStorage`.
- Optional: prevent flash of wrong theme by adding a tiny inline script in `index.html` to set `dark` before CSS loads.

---

## Internationalization

- Vue I18n with ES/EN.
- User preference persisted in `localStorage` as `lang`.
- LanguageSelector UI mirrors ThemeToggle styles.

---

## Setup

Prerequisites: Node 18+

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Preview production
npm run preview
```

Recommended VS Code extensions:
- Vue - Official (Volar)

---

## Scripts (package.json)

- dev: start Vite dev server
- build: Vite build
- preview: preview dist

---

## Accessibility & UX

- Focus-visible rings on interactive elements
- Hover rings + subtle scale on toggles
- High-contrast palette in both themes

---

## SEO (optional suggestions)

- Add meta description and Open Graph tags in `index.html`.
- Set `theme-color` for light/dark.
- Add `public/robots.txt` and a `sitemap.xml` if deployed.

---

## Notes

- No Vue Router needed; all content lives in sections on the same page.
- API/service files and mocks are ready to wire projects/services content.

---

## License

© 2025 Lucio Tzikas. All rights reserved.