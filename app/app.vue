<script setup lang="ts">
useHead({
  title: "Haidar Miqdad | Full Stack Engineer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Haidar Miqdad, a Software Engineer specializing in Go, React, and Scalable Systems.",
    },
    { name: "theme-color", content: "#0F172A" },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }, // Pastikan punya favicon
  ],
});
</script>

<template>
  <NuxtLayout>
    <div
      class="bg-primary min-h-screen text-slate-300 antialiased selection:bg-accent selection:text-primary"
    >
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

/* Custom Scrollbar biar makin ganteng */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #84cc16; /* Warna Accent */
}
</style>
