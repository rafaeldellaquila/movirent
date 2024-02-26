<template>
  <thead class="text-xs text-white uppercase bg-primary-main">
    <tr>
      <th v-for="title in titles" :key="title" scope="col" class="px-4 py-3">{{ title }}</th>
    </tr>
  </thead>
</template>
<script setup lang="ts">
defineProps({
  titles: {
    type: Array<string>,
    required: true
  }
})
</script>
