<template>
  <MHeader />
  <section class="mx-auto lg:max-w-2xl flex-grow mt-10 md:mt-20 mb-40">
    <RouterView />
  </section>
  <OFooter />
</template>
<script setup lang="ts">
import MHeader from '@/components/molecules/MHeader.vue'
import OFooter from '@organisms/OFooter.vue'
import { RouterView } from 'vue-router'
</script>
