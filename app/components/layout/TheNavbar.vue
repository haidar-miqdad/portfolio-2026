<script setup lang="ts">
const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95vw]">
    <div
      class="flex items-center gap-3 md:gap-8 rounded-full border border-white/10 bg-[#0F172A]/80 px-4 py-2 md:px-6 md:py-3 backdrop-blur-md shadow-2xl shadow-black/50"
    >
      <a
        href="#"
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition hover:bg-accent hover:text-primary"
      >
        <Icon name="mdi:code-braces" size="18" />
      </a>

      <ul class="flex items-center gap-4 md:gap-6">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="text-xs md:text-sm font-medium text-slate-400 transition hover:text-accent hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)] whitespace-nowrap"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
