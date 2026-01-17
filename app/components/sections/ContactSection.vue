<template>
  <section id="contact" class="py-32 text-center relative">
    <ClientOnly>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"
      ></div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="max-w-2xl mx-auto space-y-8"
      >
        <p class="text-accent font-mono text-lg">04. What's Next?</p>

        <h2 class="text-4xl md:text-5xl font-bold text-slate-100">
          Get In Touch
        </h2>

        <p class="text-slate-400 text-lg leading-relaxed">
          I’m currently open to new opportunities as a
          <span class="text-accent">Software Engineer</span> (Backend / Full
          Stack). Whether you have a question about my stack or just want to say
          hi, my inbox is always open!
        </p>

        <!-- perintah ke Sistem Operasi (Windows/Mac/HP) untuk membuka Aplikasi Email Default yang terinstall di perangkat tersebut (seperti Microsoft Outlook, Apple Mail, atau aplikasi Mail di HP). -->
         <!-- untuk User korporat yang wajib pakai Outlook/Office 365 atau pengguna iCloud Mail -->
        <div class="pt-8">
          <BaseButton
            href="mailto:haidarmiqdad.dev@gmail.com?subject=Hello%20Haidar!%20I%20saw%20your%20portfolio"
            class="!px-10 !py-5 text-lg"
          >
            Say Hello
            <Icon name="mdi:email-outline" size="20" />
          </BaseButton>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
