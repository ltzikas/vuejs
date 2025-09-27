<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-cyan-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
    <div class="mx-auto max-w-lg px-6">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{{ $t('contact.title') }}</h2>
      <p class="text-slate-700 dark:text-slate-300 mb-8">{{ $t('contact.subtitle') }}</p>
      <form class="space-y-6">
        <input type="text" placeholder="Nombre" class="w-full px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" />
        <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" />
        <textarea placeholder="Mensaje" rows="4" class="w-full px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"></textarea>
        <button type="submit" class="w-full py-3 rounded bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition-colors">Enviar</button>
      </form>
      <div class="mt-8 flex justify-center gap-4">
        <a href="mailto:tucorreo@mail.com" class="text-cyan-600 dark:text-cyan-300 font-medium hover:underline">Email</a>
        <a href="https://wa.me/XXXXXXXXXX" target="_blank" class="text-cyan-600 dark:text-cyan-300 font-medium hover:underline">WhatsApp</a>
        <!-- Agrega más redes si quieres -->
      </div>
    </div>
  </section>
</template>