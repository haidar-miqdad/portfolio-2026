// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app/",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false, // False = Panggil <ProjectCard>, bukan <CommonProjectCard>
    },
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600], // Untuk teks paragraf (tetap bersih)
      "Space Grotesk": [700], // KHUSUS HEADLINE (Biar ganteng)
    },
    display: "swap",
  },
});
