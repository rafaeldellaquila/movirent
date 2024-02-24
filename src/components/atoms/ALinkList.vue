<template>
  <li>
    <RouterLink :to="url" :class="classes">{{ $t(`${text}`) }}</RouterLink>
  </li>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  classes: String,
  text: String,
  url: {
    type: String,
    required: true,
    default: '/'
  }
})
</script>
