<template>
  <footer class="bg-primary pt-20 pb-12 relative overflow-hidden">
    <div
      class="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"
    ></div>

    <div
      class="mx-auto max-w-[1000px] px-6 md:px-12 flex flex-col items-center text-center"
    >
      <div class="flex gap-8 mb-8">
        <a
          href="https://github.com/haidarmiqdad"
          target="_blank"
          aria-label="GitHub"
          class="text-slate-400 transition-all duration-300 hover:text-accent hover:-translate-y-1"
        >
          <Icon name="mdi:github" size="28" />
        </a>
        <a
          href="https://linkedin.com/in/haidarmiqdad"
          target="_blank"
          aria-label="LinkedIn"
          class="text-slate-400 transition-all duration-300 hover:text-accent hover:-translate-y-1"
        >
          <Icon name="mdi:linkedin" size="28" />
        </a>
        <a
          href="https://instagram.com/haidarmiqdad"
          target="_blank"
          aria-label="Instagram"
          class="text-slate-400 transition-all duration-300 hover:text-accent hover:-translate-y-1"
        >
          <Icon name="mdi:instagram" size="28" />
        </a>
      </div>

      <p class="text-slate-300 text-lg mb-3">
        Designed & Built by
        <span class="text-accent font-mono font-medium">Haidar Miqdad</span>
      </p>

      <p
        class="text-slate-500 text-sm flex items-center justify-center gap-2 flex-wrap"
      >
        Built with
        <span class="flex items-center gap-1">
          <Icon
            name="logos:nuxt-icon"
            size="14"
            class="opacity-70 grayscale hover:grayscale-0 transition-all"
          />
          Nuxt 3 </span
        >,
        <span class="flex items-center gap-1">
          <Icon
            name="logos:tailwindcss-icon"
            size="14"
            class="opacity-70 grayscale hover:grayscale-0 transition-all"
          />
          Tailwind CSS
        </span>
        & Glassmorphism concept.
      </p>

      <p class="text-slate-600 text-xs mt-8 font-mono">
        © {{ new Date().getFullYear() }} All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Tidak ada script logic yang diperlukan
</script>
