<script setup lang="ts">
// Data Skill dikelompokkan biar rapi
const skillCategories = [
  {
    title: "Languages",
    icon: "mdi:code-tags",
    skills: [
      { name: "Go (Golang)", icon: "vscode-icons:file-type-go" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "PHP", icon: "logos:php" },
      { name: "Dart", icon: "logos:dart" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "mdi:server-network",
    skills: [
      { name: "Echo / Fiber", icon: "logos:go" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Redis", icon: "logos:redis" },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: "mdi:monitor-cellphone",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Nuxt 3", icon: "logos:nuxt-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Flutter", icon: "logos:flutter" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "mdi:docker",
    skills: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Git / GitHub", icon: "logos:git-icon" },
      { name: "Linux (Ubuntu)", icon: "logos:linux-tux" },
      { name: "Postman", icon: "logos:postman-icon" },
    ],
  },
];
</script>

<template>
  <section id="skills" class="py-24 relative">
    <ClientOnly>
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-center gap-4 mb-12"
      >
        <h2 class="text-3xl font-bold text-slate-100 flex items-center gap-2">
          <span class="text-accent font-mono text-xl">03.</span>
          Technical Expertise
        </h2>
        <div class="h-px flex-1 bg-slate-700/50"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(category, idx) in skillCategories"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            transition: { duration: 500, delay: idx * 100 },
          }"
          class="group rounded-xl bg-surface/30 border border-white/5 p-6 hover:border-accent/30 hover:bg-surface/50 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-lg bg-accent/10 text-accent">
              <Icon :name="category.icon" size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-200">
              {{ category.title }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-colors cursor-default"
            >
              <Icon :name="skill.icon" size="18" />
              <span class="text-sm text-slate-400 group-hover:text-slate-200">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
