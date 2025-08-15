# My Portfolio

Personal portfolio developed with Vue 3 + Vite.

---

## Technologies Used

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** (ultra-fast build tool)
- **TypeScript** (static typing)
- **Vue Router** (SPA routing)
- **Tailwind CSS** (utility-first CSS framework)
- **Theme persistence** (light/dark mode with localStorage)
- **Architecture ready for microservices/API REST**

---

## Project Structure

```
src/
├── assets/         # Images and global styles (includes tailwind.css)
├── components/     # Reusable components (currently empty)
├── layouts/        # General layouts (optional, currently empty)
├── mocks/          # Mocked JSON data (services, projects, etc.)
├── pages/          # Main pages (Home, About, Services, Projects, Contact)
├── router/         # Router configuration
├── services/       # Services to consume mocks or APIs
├── App.vue         # Root component with layout and dark mode
├── main.ts         # App entry point
```

---

## Implemented Features

### Functional

- **SPA with navigation between pages:** Home, About, Services, Projects, Contact.
- **Mock data consumption:** Services and Projects are loaded from JSON files simulating a future API.
- **Decoupled architecture:** Data is fetched via services, making it easy to switch to a real API.
- **Light/Dark mode:** Toggle to switch theme, with persistence in localStorage and automatic detection of system preference.
- **Custom color palette:** Tailwind configured with custom colors for visual identity.

### Technical

- **Use of Composition API and `<script setup>`** for simpler and more reactive components.
- **Reactive variables (`ref`, `computed`)** and effects (`watchEffect`) to manage state and logic.
- **Tailwind CSS** for fast, responsive, and professional layout.
- **100% ES Modules configuration** (no CommonJS mix).
- **Ready for new features:** social links, meeting scheduling, chatbot, etc.

---

## Next Steps

- Integrate LinkedIn and GitHub links.
- Improve contact section (form and/or meeting scheduling).
- Layout and populate "About", "Services", and "Projects" sections with real data.
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

---
