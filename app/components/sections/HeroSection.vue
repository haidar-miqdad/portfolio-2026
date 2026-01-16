<script setup lang="ts">
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

const mainTechStack = [
  { name: "Golang", icon: "vscode-icons:file-type-go" },
  { name: "React", icon: "logos:react" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
];
</script>

<template>
  <section
    class="min-h-screen flex items-center pt-28 pb-20 relative overflow-hidden font-sans"
  >
    <div
      class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"
    ></div>

    <div
      class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div
        class="order-2 lg:order-1 relative z-10 flex flex-col justify-center"
      >
        <ClientOnly>
          <div
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="100"
            class="flex items-center gap-3 text-accent font-mono text-sm tracking-widest uppercase mb-6"
          >
            <span class="h-px w-8 bg-accent"></span>
            Hello world, I am
          </div>

          <h1
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="200"
            class="font-display font-bold text-5xl md:text-7xl tracking-tight leading-tight mb-6 text-white"
          >
            Haidar Miqdad.
          </h1>

          <h2
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="300"
            class="font-display text-2xl md:text-4xl font-medium text-slate-400 mb-8 leading-snug"
          >
            Engineering scalable <br class="hidden lg:block" />
            <span class="text-slate-200">backend systems</span> &
            <span class="text-accent">dynamic UIs</span>.
          </h2>

          <p
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="400"
            class="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mb-10 border-l-2 border-slate-700 pl-6"
          >
            Full Stack Engineer building structured, production-ready
            applications. Focused on stability, performance, and maintainable
            architecture.
          </p>

          <div
            v-motion
            :initial="slideUp.initial"
            :enter="slideUp.enter"
            :delay="500"
            class="flex flex-wrap gap-4"
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
        class="order-1 lg:order-2 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
      >
        <ClientOnly>
          <div
            v-motion
            :initial="fadeInScale.initial"
            :enter="fadeInScale.enter"
            class="relative z-10 w-full max-w-[400px] flex flex-col items-center"
          >
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-max max-w-full z-20 flex justify-center gap-2 pointer-events-none px-4"
            >
              <div
                v-for="(tech, index) in mainTechStack"
                :key="tech.name"
                class="animate-float"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                <div
                  class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface/90 border border-white/10 backdrop-blur-xl shadow-xl transition-transform hover:scale-110 pointer-events-auto"
                >
                  <Icon :name="tech.icon" size="18" />
                  <span
                    class="text-[10px] font-mono font-bold text-slate-200 uppercase"
                    >{{ tech.name }}</span
                  >
                </div>
              </div>
            </div>

            <div class="group relative mt-6 w-full">
              <div
                class="absolute inset-4 bg-accent/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"
              ></div>

              <div
                class="relative rounded-[2rem] overflow-hidden border border-white/10 bg-surface/20 backdrop-blur-sm shadow-2xl"
              >
                <div class="aspect-[4/5] relative">
                  <div class="absolute inset-0 bg-slate-800/20"></div>

                  <img
                    src="~/assets/img/miqdad.png"
                    alt="Haidar Miqdad"
                    class="w-full h-full object-cover object-top grayscale-[10%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />

                  <div
                    class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
</style>
