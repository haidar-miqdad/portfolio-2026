<template>
  <div
    class="absolute px-4 py-2 rounded-xl text-sm
           bg-white/10 backdrop-blur-md
           border border-white/20 text-white/80
           shadow-lg"
  >
    {{ label }}
  </div>
</template>

<script setup>
defineProps({
  label: String
})
</script>
