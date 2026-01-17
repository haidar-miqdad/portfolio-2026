<script setup lang="ts">
// --- Config Animasi Teks (TIDAK BERUBAH) ---
const slideUp = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 800, ease: "easeOut" } },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1000, ease: "easeOut", delay: 300 },
  },
};

const orbitingStack = [
  // 1. Golang: Kiri Atas
  {
    name: "Golang",
    icon: "vscode-icons:file-type-go",
    positionClass: "top-0 left-12 md:top-2 md:left-0 z-10",
    animationClass: "animate-float-slow",
    delay: "0s",
  },
  // 2. React: Kanan Atas
  {
    name: "React",
    icon: "logos:react",
    positionClass: "top-12 right-0 md:-right-2 z-30",
    animationClass: "animate-float-medium",
    delay: "0.5s",
  },
  // 3. Flutter: Kanan Tengah
  {
    name: "Flutter",
    icon: "logos:flutter",
    positionClass: "top-1/2 right-0 md:-right-6 z-30 translate-y-[-50%]",
    animationClass: "animate-float-fast",
    delay: "0.8s",
  },
  // 4. Nuxt: Kanan Bawah
  {
    name: "Nuxt",
    icon: "logos:nuxt-icon",
    // HP: right-0 | Laptop: -right-6
    positionClass: "bottom-6 -right-0 md:-right-0 z-30",
    animationClass: "animate-float-slow",
    delay: "1.2s",
  },
  // 5. Docker: Kiri Bawah
  {
    name: "Docker",
    icon: "logos:docker-icon",
    positionClass: "bottom-10 left-0 md:bottom-14 md:left-2 z-30",
    animationClass: "animate-float-medium",
    delay: "1.8s",
  },
];
</script>

<template>
  <section
    class="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden font-sans"
  >
    <div
      class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"
    ></div>

    <div
      class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center"
    >
      <div
        class="lg:col-span-7 order-2 lg:order-1 relative z-10 flex flex-col justify-center"
      >
        <ClientOnly>
          <div
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="100"
            class="flex items-center gap-3 text-accent font-mono text-sm tracking-widest uppercase mb-8"
          >
            <span class="h-px w-12 bg-accent"></span>
            Hello world, I am
          </div>

          <h1
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="200"
            class="font-display font-extrabold text-7xl md:text-8xl tracking-tighter leading-none mb-6 text-white"
          >
            Haidar Miqdad.
          </h1>

          <h2
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="300"
            class="font-mono text-lg md:text-xl text-slate-400 mb-12 flex items-center gap-4"
          >
            <span class="hidden md:block h-px w-16 bg-slate-700"></span>
            <span>
              Engineering
              <span class="text-slate-200 font-bold"
                >scalable backend systems</span
              >
              & <span class="text-accent font-bold">dynamic UIs</span>.
            </span>
          </h2>

          <div
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="400"
            class="flex flex-wrap gap-5"
          >
            <BaseButton href="#projects" class="shadow-lg shadow-accent/10">
              Explore Work
              <Icon
                name="mdi:arrow-down"
                class="group-hover:translate-y-1 transition-transform"
              />
            </BaseButton>

            <BaseButton href="/resume.pdf" variant="outline">
              Download CV
            </BaseButton>
          </div>
        </ClientOnly>
      </div>

      <div
        class="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end mt-16 lg:mt-0"
      >
        <ClientOnly>
          <div
            v-motion
            :initial="fadeInScale.initial"
            :enter="fadeInScale.enter"
            class="relative z-10 w-full max-w-[420px]"
          >
            <div
              v-for="tech in orbitingStack"
              :key="tech.name"
              class="absolute"
              :class="[tech.positionClass, tech.animationClass]"
              :style="{ animationDelay: tech.delay }"
            >
              <div
                class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface/80 border border-white/10 backdrop-blur-xl shadow-2xl transition-transform cursor-default"
              >
                <Icon :name="tech.icon" size="18" />
                <span
                  class="text-xs font-mono font-bold text-slate-200 uppercase"
                  >{{ tech.name }}</span
                >
              </div>
            </div>

            <div class="relative z-20 rounded-[2.5rem] overflow-hidden">
              <img
                src="~/assets/img/miqdad.webp"
                alt="Haidar Miqdad"
                class="w-full h-auto object-cover object-top grayscale-[10%] transition-all duration-700 hover:grayscale-0 scale-105 group-hover:scale-110"
              />
              <div
                class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent z-30"
              ></div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Floating (TIDAK BERUBAH) */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}
.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-1deg);
  }
}
.animate-float-medium {
  animation: float-medium 4.5s ease-in-out infinite;
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-7px);
  }
}
.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}
</style>
