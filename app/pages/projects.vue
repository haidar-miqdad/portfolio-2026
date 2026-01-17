<script setup lang="ts">
import { projects } from "~/utils/projectData";

// SEO Meta
useHead({ title: "Projects Archive | Haidar Miqdad" });

const isModalOpen = ref(false);
const selectedProject = ref(null);

const openProject = (project: any) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};
</script>

<template>
  <main class="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
    <div class="mb-16">
      <NuxtLink
        to="/"
        class="group inline-flex items-center text-accent mb-6 font-mono text-sm hover:underline"
      >
        <Icon
          name="mdi:arrow-left"
          class="mr-2 group-hover:-translate-x-1 transition-transform"
        />
        Back to Home
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
        Project Archive
      </h1>
      <p class="text-slate-400 max-w-2xl text-lg">
        A complete list of things I’ve built. From scalability experiments to
        production-grade backend systems.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 400, delay: idx * 50 },
        }"
      >
        <div
          @click="openProject(project)"
          class="h-full group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer flex flex-col"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 rounded-lg bg-white/5 text-accent">
              <Icon name="mdi:folder-outline" size="24" />
            </div>
            <Icon
              name="mdi:arrow-top-right"
              class="text-slate-500 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
            />
          </div>

          <h3
            class="text-xl font-bold text-slate-200 group-hover:text-accent transition-colors mb-2"
          >
            {{ project.title }}
          </h3>

          <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tech in project.techStack.slice(0, 3)"
              :key="tech"
              class="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.techStack.length > 3"
              class="text-[10px] font-mono text-slate-500 py-1"
            >
              +{{ project.techStack.length - 3 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <ProjectDetailModal
      v-if="selectedProject"
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="isModalOpen = false"
    />
  </main>
</template>
