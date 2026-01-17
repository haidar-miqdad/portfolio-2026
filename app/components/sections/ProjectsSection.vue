<!-- isi data di app/utils/projectData.ts -->
<script setup lang="ts">
import { projects } from "~/utils/projectData"; // Import data
import { useRouter } from "vue-router";

const router = useRouter();
const isModalOpen = ref(false);
const selectedProject = ref(null);

// Ambil hanya 3 project pertama untuk Home
const featuredProjects = projects.slice(0, 3);

const openProject = (project: any) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};
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
          Featured Projects
        </h2>
        <div class="h-px flex-1 bg-slate-700/50"></div>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <div
          v-for="(project, idx) in featuredProjects"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: idx * 100 },
          }"
        >
          <div
            @click="openProject(project)"
            class="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            <div class="flex justify-between items-start mb-4">
              <h3
                class="text-xl md:text-2xl font-bold text-slate-200 group-hover:text-accent transition-colors"
              >
                {{ project.title }}
              </h3>
              <Icon
                name="mdi:arrow-top-right"
                class="text-slate-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                size="24"
              />
            </div>
            <p class="text-slate-400 leading-relaxed mb-6 max-w-3xl">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-md border border-white/5"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <BaseButton href="/projects" variant="outline" class="!px-8">
          View Full Project Archive
          <Icon name="mdi:arrow-right" class="ml-2" />
        </BaseButton>
      </div>

      <ProjectDetailModal
        v-if="selectedProject"
        :is-open="isModalOpen"
        :project="selectedProject"
        @close="isModalOpen = false"
      />
    </ClientOnly>
  </section>
</template>
