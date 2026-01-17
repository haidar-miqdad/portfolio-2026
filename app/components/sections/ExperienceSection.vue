<script setup lang="ts">
const jobs = [
  {
    role: "Fullstack Developer",
    company: "PT. Hyperdata Digital",
    date: "2024 – 2025",
    description:
      "Architected scalable full-stack solutions using Golang, Laravel, and Vue.js. Successfully refactored legacy APIs to minimize latency for high-volume transaction modules and eliminated manual payment verifications.",
    tags: ["Golang", "Laravel", "Vue.js", "System Architecture"],
  },
  {
    role: "Technical Mentor (Mobile Dev)",
    company: "SMK IDN Boarding School",
    date: "2024 – 2025",
    description:
      "Designed and led intensive Flutter/Dart curriculum. Conducted code reviews and enforced Clean Architecture standards, bridging the gap between academic theory and industry best practices.",
    tags: ["Flutter", "Dart", "Mentoring", "Clean Architecture"],
  },
  {
    role: "Core Team (Social Media)",
    company: "Google Developer Group (GDG)",
    date: "2025",
    description:
      "Strategized digital campaigns driving 60% membership growth. Facilitated large-scale tech events connecting local developers with industry experts and global tech trends.",
    tags: ["Community Management", "Event Planning", "Tech Evangelism"],
  },
];
</script>

<template>
  <section id="experience" class="py-24 relative">
    <ClientOnly>
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-center gap-4 mb-16"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3"
        >
          <span class="text-accent font-mono text-xl">02.</span>
          Experience
        </h2>
        <div class="h-px flex-1 bg-slate-700/50"></div>
      </div>

      <div class="relative space-y-12 pl-4 md:pl-0">
        <div
          class="absolute left-4 md:left-[300px] top-2 bottom-0 w-px bg-slate-800 hidden md:block"
        ></div>

        <div
          v-for="(job, index) in jobs"
          :key="index"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: index * 200 },
          }"
          class="relative grid md:grid-cols-[300px_1fr] gap-8 group"
        >
          <div class="text-left md:text-right relative md:pr-12">
            <h3
              class="text-lg font-bold text-slate-100 group-hover:text-accent transition-colors"
            >
              {{ job.company }}
            </h3>
            <div class="text-sm font-mono text-slate-400 mt-1 mb-2">
              {{ job.date }}
            </div>

            <div
              class="absolute top-1.5 -right-[9px] w-[17px] h-[17px] rounded-full bg-primary border-2 border-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(132,204,22,0.6)] transition-all duration-300 hidden md:block z-10"
            ></div>
          </div>

          <div
            class="relative p-6 rounded-xl bg-surface/30 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-surface/50 hover:border-accent/30 hover:-translate-y-1"
          >
            <div
              class="absolute top-4 -left-2 w-4 h-4 bg-surface/30 rotate-45 border-l border-b border-white/5 hidden md:block group-hover:bg-surface/50 group-hover:border-accent/30 transition-colors"
            ></div>

            <h4 class="text-xl font-bold text-slate-200 mb-3">
              {{ job.role }}
            </h4>
            <p class="text-slate-400 leading-relaxed mb-4 text-sm">
              {{ job.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
