<template>
  <MHeader />
  <main class="mx-auto p-4 lg:max-w-2xl my-16">
    <RouterView />
  </main>
  <OFooter />
</template>
<script setup lang="ts">
import MHeader from '@/components/molecules/MHeader.vue'
import OFooter from '@organisms/OFooter.vue'
import { RouterView } from 'vue-router'
</script>
