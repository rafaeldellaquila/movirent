<template>
  <div class="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
    <div
      class="w-full rounded-lg shadow bg-primary-main md:mt-0 p-6 space-y-4 md:space-y-6 sm:p-10"
    >
      <h1 class="text-xl font-bold leading-tight tracking-tight text-secondary-main md:text-2xl">
        {{ $t('register_account') }}
      </h1>
      <ORegisterForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import ORegisterForm from '@organisms/ORegisterForm.vue'
</script>
