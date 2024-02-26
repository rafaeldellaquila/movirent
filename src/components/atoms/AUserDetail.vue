<template>
  <div class="hidden md:flex">
    <p class="text-sm mr-2 flex">
      <span class="font-bold">{{ name }}</span> &lt;{{ email }}&gt;
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  name: String,
  email: String
})
</script>
