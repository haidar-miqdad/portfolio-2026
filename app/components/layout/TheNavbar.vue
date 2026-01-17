<script setup lang="ts">
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
    <div
      class="flex items-center justify-between rounded-full border border-white/10 bg-surface/70 px-6 py-3 backdrop-blur-md shadow-lg shadow-black/20"
    >
      <a
        href="#"
        class="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition hover:bg-accent hover:text-primary"
      >
        <Icon name="mdi:code-braces" size="18" />
      </a>

      <ul class="flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="text-sm font-medium text-slate-400 transition hover:text-accent hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
