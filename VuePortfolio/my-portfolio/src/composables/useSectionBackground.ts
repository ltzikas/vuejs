export const useSectionBackground = () => {
  const backgrounds = {
    // Gradiente sutil de grises con toque azul
    hero: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-t-4 border-blue-600',
    about: 'bg-surface-light dark:bg-surface-dark',
    skills: 'bg-background-light dark:bg-background-dark',
    experience: 'bg-surface-light dark:bg-surface-dark',
    projects: 'bg-background-light dark:bg-background-dark',
    services: 'bg-surface-light dark:bg-surface-dark',
    contact: 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-white',
  } as const

  const sectionClasses = 'py-20 px-4 md:px-8 transition-colors duration-300'

  return { 
    backgrounds,
    sectionClasses 
  }
}