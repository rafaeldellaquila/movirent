<template>
  <OHeaderUnauth />
  <section class="mx-auto lg:max-w-2xl flex-grow mt-10 md:mt-20 mb-40">
    <RouterView />
  </section>
  <OFooter />
</template>
<script setup lang="ts">
import OFooter from '@organisms/OFooter.vue'
import OHeaderUnauth from '@organisms/OHeaderUnauth.vue'
import { RouterView } from 'vue-router'
</script>
