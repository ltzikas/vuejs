# My Portfolio

Personal portfolio developed with Vue 3 + Vite.

---

## Technologies Used

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** (ultra-fast build tool)
- **TypeScript** (static typing)
- **Vue Router** (SPA routing)
- **Tailwind CSS** (utility-first CSS framework)
- **Pinia** (global state management for theme and future features)
- **Theme persistence** (light/dark mode with localStorage + Pinia)
- **Architecture ready for microservices/API REST)

---

## Project Structure

```
src/
├── assets/         # Images and global styles (includes tailwind.css)
├── components/     # Reusable components (NavBar, FooterBar, ThemeToggle, LanguageSelector, etc.)
├── layouts/        # General layouts (optional, currently empty)
├── mocks/          # Mocked JSON data (services, projects, etc.)
├── pages/          # Main pages (see "Sections" below)
├── router/         # Router configuration
├── services/       # Services to consume mocks or APIs
├── stores/         # Pinia stores (theme, language, etc.)
├── App.vue         # Root component with layout and dark mode
├── main.ts         # App entry point
```

---

## Sections

The portfolio is organized into the following sections for a clear and professional presentation:

- **Sobre mí / About:** Personal and professional background, values, interests, and photo.
- **Skills / Habilidades:** Technologies, tools, frameworks, and soft skills.
- **Experiencia / Experience:** Work history, roles, achievements, and companies.
- **Proyectos / Projects:** Portfolio of personal and professional projects, with links and descriptions.
- **Servicios / Services:** Description of freelance or consulting services offered.
- **Educación / Education:** Degrees, courses, and relevant certifications.
- **Contacto / Contact:** Contact form, email, and social links.

---

## Implemented Features

### Functional

- **SPA with navigation between pages:** About, Services, Projects, Contact.
- **Mock data consumption:** Services and Projects are loaded from JSON files simulating a future API.
- **Decoupled architecture:** Data is fetched via services, making it easy to switch to a real API.
- **Light/Dark mode:** Toggle to switch theme, with persistence in localStorage and automatic detection of system preference.
- **Global theme state with Pinia:** The theme (dark/light) is managed globally and reactively using Pinia, so all components can access and react to changes without prop drilling.
- **Custom color palette:** Tailwind configured with custom colors for visual identity.

### Technical

- **Use of Composition API and `<script setup>`** for simpler and more reactive components.
- **Pinia for global state management:** Used for theme and ready for future global features.
- **Reactive variables (`ref`, `computed`)** and effects (`watchEffect`) to manage state and logic.
- **Tailwind CSS** for fast, responsive, and professional layout.
- **100% ES Modules configuration** (no CommonJS mix).
- **Ready for new features:** social links, meeting scheduling, chatbot, etc.

---

## Theme Management with Pinia

- The theme (dark/light) is managed globally using a Pinia store (`src/stores/theme.ts`).
- The store synchronizes the theme with `localStorage` for persistence and applies the `dark` class to `<html>` for Tailwind compatibility.
- Any component can access or modify the theme using `useThemeStore()`, making the codebase clean and scalable.
- No need to pass theme state as props between components.

---

## Internationalization (i18n)

- The project uses [vue-i18n](https://vue-i18n.intlify.dev/) for scalable multi-language support.
- Language files are organized per language (e.g., `src/locales/en.json`, `src/locales/es.json`).
- The language preference is managed globally using a Pinia store (`src/stores/language.ts`) and is persisted in localStorage.
- The store synchronizes the selected language with vue-i18n, so all components update reactively when the language changes.
- A language selector component allows users to switch between Spanish and English (and more in the future).
- The structure is ready to scale to more languages and to migrate content to a database.

---

## Next Steps

- Update NavBar and routing to reflect the new sections.
- Implement and populate each section: About, Skills, Experience, Projects, Services, Education, Contact.
- Integrate LinkedIn and GitHub links.
- Improve contact section (form and/or meeting scheduling).
- Add visual details (avatar, banner, etc).
- (Optional) Integrate a ChatGPT chatbot.

---

## Installation & Usage

```sh
npm install
npm run dev
```

---

## Notes

- The project is designed to be easily scalable and adaptable to a real API.
- Consistent use of ES Modules and service-based architecture is recommended.
- **For Vue 3 projects, use the [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension in VSCode instead of Vetur.**

---
---
