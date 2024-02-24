<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white">
      <img class="w-16 h-16 mr-4" src="/src/assets/logo.svg" alt="logo" />
      Movirent
    </a>
    <div class="w-full rounded-lg shadow bg-primary-main md:max-w-md max-w-sm md:mt-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-10">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-secondary-main md:text-2xl">
          {{ $t('sign_acount') }}
        </h1>
        <OLoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OLoginForm from '@organisms/OLoginForm.vue'
</script>
