<script setup lang="ts">
// Konfigurasi SEO & Head
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
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
});
</script>

<template>
  <div
    class="bg-primary min-h-screen text-slate-300 antialiased selection:bg-accent selection:text-primary relative isolate overflow-x-hidden"
  >
    <div class="fixed inset-0 z-[-1] pointer-events-none" aria-hidden="true">
      <div
        class="absolute inset-0 opacity-[0.07]"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'104\' viewBox=\'0 0 60 104\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15zM30 52l25.98 15v30L30 112 4.02 97V67z\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'1\'/%3E%3C/svg%3E');
          background-size: 60px 104px;
        "
      ></div>

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F172A_85%)]"
      ></div>

      <div
        class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"
      ></div>

      <div
        class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
      ></div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <TheMascot />
  </div>
</template>

<style>
/* Global CSS */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  @apply bg-primary; /* Fallback color */
}

/* Custom Scrollbar */
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
  background: #84cc16;
}
</style>
