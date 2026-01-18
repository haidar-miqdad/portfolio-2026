<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import mascotAnimation from "~/public/animations/mascot.json";

const { y } = useWindowScroll();

const posX = computed(() => {
  const scrollFactor = y.value / 700;
  const oscillation = Math.cos(scrollFactor);

  // Rentang gerak dari posisi 5% sampai 80% layar
  return ((oscillation + 1) / 2) * 75 + 5;
});
</script>

<template>
  <ClientOnly>
    <div
      class="fixed bottom-0 z-40 w-32 md:w-40 transition-all duration-700 ease-out pointer-events-none"
      :style="{ left: `${posX}%` }"
    >
      <Vue3Lottie
        :animationData="mascotAnimation"
        :height="200"
        :width="200"
        :loop="true"
        :autoplay="true"
        :speed="1"
      />
    </div>
  </ClientOnly>
</template>
