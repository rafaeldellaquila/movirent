<template>
  <label :for="forLabel" class="block mb-2 text-sm font-medium text-white">
    {{ $t(`${label}`) }}
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  forLabel: String
})
</script>
