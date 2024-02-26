<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10">
    <div class="flex flex-col items-center mx-auto max-w-screen-xl text-center">
      <ALogo />
      <p class="my-6 text-primary-main">
        {{ $t('footer_description') }}
      </p>
      <span class="text-sm text-primary-main"
        >© 2024 - {{ new Date().getFullYear().toString() }}
        <RouterLink to="/" class="hover:underline">{{ $t('movirent') }}</RouterLink
        >. {{ $t('all_rights_reserved') }}.</span
      >
    </div>
  </footer>
</template>
<script setup lang="ts">
import ALogo from '@atoms/ALogo.vue'
import { RouterLink } from 'vue-router'
</script>
