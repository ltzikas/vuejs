import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'
import Experience from '../pages/Experience.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import Education from '../pages/Education.vue'
import Contact from '../pages/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/education', name: 'Education', component: Education },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
