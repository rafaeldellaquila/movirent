<template>
  <div class="flex flex-col items-center justify-center">
    <div class="rounded-lg shadow bg-primary-main md:mt-0 p-6">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-secondary-main md:text-2xl">
        {{ $t('sign_account') }}
      </h1>
      <ORegisterForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import ORegisterForm from '@organisms/ORegisterForm.vue'
</script>
