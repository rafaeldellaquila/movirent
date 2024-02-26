<template>
  <MHeaderUnauth />
  <section class="mx-auto lg:max-w-2xl flex-grow mt-10 md:mt-20 mb-40">
    <RouterView />
  </section>
  <OFooter />
</template>
<script setup lang="ts">
import MHeaderUnauth from '@/components/molecules/MHeaderUnauth.vue'
import OFooter from '@organisms/OFooter.vue'
import { RouterView } from 'vue-router'
</script>
