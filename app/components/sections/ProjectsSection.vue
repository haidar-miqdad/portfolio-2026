<script setup lang="ts">
// Data Projects dipindah ke sini
const projects = [
  {
    title: "VIA - News & Magazine Platform",
    description:
      "A centralized news platform built with Go (Echo) and React. Designed for high scalability, handling 10k+ concurrent users with Redis caching.",
    techStack: ["Go", "React", "Redis", "Docker"],
    repoUrl: "https://github.com/username/via", // Ganti link aslimu
    demoUrl: "#",
  },
  {
    title: "Financial Integrator Middleware",
    description:
      "Middleware service connecting Book & Go, Midtrans, and Mekari Jurnal. Automates invoice reconciliation reducing manual work by 80%.",
    techStack: ["Node.js", "Express", "Midtrans API"],
    repoUrl: "https://github.com/username/finance",
  },
  {
    title: "School Management System",
    description:
      "Comprehensive dashboard for SMK IDN. Managing student grades, attendance, and teacher schedules with automated reporting.",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    repoUrl: "#",
  },
];
</script>

<template>
  <section id="projects" class="py-24">
    <ClientOnly>
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-center gap-4 mb-12"
      >
        <h2 class="text-3xl font-bold text-slate-100 flex items-center gap-2">
          <span class="text-accent font-mono text-xl">01.</span>
          Some Things I've Built
        </h2>
        <div class="h-px flex-1 bg-slate-700/50"></div>
      </div>

      <div class="flex flex-col gap-12">
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: idx * 100 },
          }"
        >
          <ProjectCard v-bind="project" />
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
