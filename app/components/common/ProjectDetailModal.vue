<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
  project: any;
}>();

const emit = defineEmits(["close"]);
const close = () => emit("close");

// Lock Scroll Logic
onMounted(() => {
  if (props.isOpen) document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflow = "auto";
});
watch(
  () => props.isOpen,
  (val) => {
    document.body.style.overflow = val ? "hidden" : "auto";
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-[cubic-bezier(0.33,1,0.68,1)] duration-500"
      enter-from-class="opacity-0 translate-y-8 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-8 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 bg-[#000]/60 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="w-full max-w-5xl h-[85vh] md:h-auto md:max-h-[90vh] bg-[#0F172A] md:rounded-2xl rounded-t-2xl border border-white/10 shadow-2xl flex flex-col relative overflow-hidden"
        >
          <div
            class="flex-none flex items-center justify-between p-6 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-md z-20"
          >
            <div>
              <h2 class="text-2xl font-bold text-white tracking-tight">
                {{ project.title }}
              </h2>
              <p class="text-slate-400 text-sm mt-1">
                Project Detail & Technical Overview
              </p>
            </div>

            <button
              @click="close"
              class="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="mdi:close" size="24" />
            </button>
          </div>

          <div
            class="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 no-scrollbar"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <template v-if="project.images && project.images.length > 0">
                <div
                  v-for="(img, idx) in project.images"
                  :key="idx"
                  class="aspect-video rounded-xl bg-surface/50 border border-white/5 overflow-hidden relative group"
                >
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </template>

              <template v-else>
                <div
                  class="aspect-video rounded-xl bg-surface/50 border border-white/5 flex items-center justify-center"
                >
                  <span class="text-slate-500 text-xs">No Preview</span>
                </div>
              </template>
            </div>

            <div>
              <h3
                class="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4"
              >
                Technology Stack
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-200 hover:border-white/20 transition-colors cursor-default"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div
              class="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-white/5"
            >
              <div class="space-y-3">
                <h3
                  class="flex items-center gap-2 text-white font-semibold text-lg"
                >
                  <Icon
                    name="mdi:lightning-bolt-outline"
                    class="text-orange-400"
                  />
                  The Challenge
                </h3>
                <p class="text-slate-400 leading-relaxed text-sm md:text-base">
                  {{ project.details.challenge }}
                </p>
              </div>

              <div class="space-y-3">
                <h3
                  class="flex items-center gap-2 text-white font-semibold text-lg"
                >
                  <Icon name="mdi:check-circle-outline" class="text-accent" />
                  The Solution
                </h3>
                <p class="text-slate-400 leading-relaxed text-sm md:text-base">
                  {{ project.details.solution }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex-none p-6 border-t border-white/5 bg-[#0F172A] z-20 flex gap-4"
          >
            <BaseButton
              :href="project.repoUrl"
              variant="outline"
              class="flex-1 justify-center"
            >
              <Icon name="mdi:github" class="mr-2" size="20" /> Code
            </BaseButton>
            <BaseButton :href="project.demoUrl" class="flex-1 justify-center">
              Live Demo <Icon name="mdi:arrow-right" class="ml-2" size="20" />
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
