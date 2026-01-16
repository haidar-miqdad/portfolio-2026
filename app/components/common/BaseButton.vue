<script setup lang="ts">
defineProps<{
  href?: string;
  variant?: "primary" | "outline";
}>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="inline-flex items-center justify-center rounded px-8 py-4 text-sm font-mono font-medium transition-all duration-300 group relative overflow-hidden"
    :class="[
      variant === 'outline'
        ? 'border border-accent text-accent hover:bg-accent/10'
        : 'bg-accent/10 text-accent border border-accent/20 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)]',
    ]"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>
