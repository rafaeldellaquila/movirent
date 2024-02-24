<template>
  <RouterLink
    to="/"
    class="flex items-center mb-6 text-2xl font-semibold"
    :class="negative ? 'text-white' : 'text-primary-main'"
  >
    <img class="w-16 h-16 mr-4" src="/src/assets/logo.svg" alt="logo" />
    Movirent
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  negative: {
    type: Boolean,
    default: false
  }
})
</script>
