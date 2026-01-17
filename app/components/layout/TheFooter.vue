<template>
  <footer
    class="relative z-10 w-full border-t border-white/10 bg-black/20 backdrop-blur-md pt-16 pb-12 mt-20"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
    ></div>

    <div class="mx-auto max-w-[1000px] px-6 md:px-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left space-y-4">
          <div class="space-y-1">
            <h3
              class="text-xl font-display font-bold text-slate-200 tracking-wide"
            >
              Haidar Miqdad
            </h3>
            <p class="text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
              Building scalable systems with precision and performance.
            </p>
          </div>

          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/5 shadow-inner"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-accent"
              ></span>
            </span>
            <span class="text-xs font-mono text-slate-300">
              All systems operational
            </span>
          </div>
        </div>

        <div class="flex gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            :aria-label="social.name"
            class="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-slate-400 transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/20 hover:scale-110"
          >
            <Icon :name="social.icon" size="22" />
          </a>
        </div>
      </div>

      <div class="h-px w-full bg-white/5 my-8"></div>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono"
      >
        <p>
          © {{ new Date().getFullYear() }} Haidar Miqdad. All rights reserved.
        </p>

        <p class="flex items-center gap-2">
          Crafted with
          <Icon
            name="logos:nuxt-icon"
            class="opacity-50 grayscale hover:grayscale-0 transition-all"
            size="14"
          />
          &
          <Icon
            name="logos:tailwindcss-icon"
            class="opacity-50 grayscale hover:grayscale-0 transition-all"
            size="14"
          />
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/haidar-miqdad",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/haidarmiqdad",
    icon: "mdi:linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/haidarmiqdad",
    icon: "mdi:instagram",
  },
];
</script>
