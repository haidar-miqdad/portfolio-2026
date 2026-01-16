<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  techStack: string[];
  image?: string; // Opsional, kalau ada screenshot project
  repoUrl?: string;
  demoUrl?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group relative rounded-xl border border-white/10 bg-surface/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_rgba(132,204,22,0.3)]"
  >
    <div
      class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-purple-600 opacity-0 transition duration-500 group-hover:opacity-10 blur-lg -z-10"
    ></div>

    <div class="flex flex-col gap-6 md:flex-row">
      <div
        v-if="image"
        class="w-full md:w-1/3 overflow-hidden rounded-lg bg-black/30 border border-white/5 relative aspect-video md:aspect-auto"
      >
        <img
          :src="image"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div
          class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>

      <div class="flex-1 space-y-4 relative z-10">
        <div class="flex items-start justify-between">
          <h3
            class="text-xl font-bold text-slate-100 group-hover:text-accent transition-colors duration-300"
          >
            {{ title }}
          </h3>

          <div class="flex gap-3 text-slate-400">
            <a
              v-if="repoUrl"
              :href="repoUrl"
              target="_blank"
              class="hover:text-white transition-colors p-1"
              title="View Source Code"
            >
              <Icon name="mdi:github" size="22" />
            </a>
            <a
              v-if="demoUrl"
              :href="demoUrl"
              target="_blank"
              class="hover:text-accent transition-colors p-1"
              title="Live Demo"
            >
              <Icon name="mdi:open-in-new" size="22" />
            </a>
          </div>
        </div>

        <p
          class="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors"
        >
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-3">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/10"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
