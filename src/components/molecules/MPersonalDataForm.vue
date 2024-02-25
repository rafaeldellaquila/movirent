<template>
  <h2 class="text-lg font-medium leading-tight tracking-tight text-white md:text-xl">
    {{ $t('personal_data') }}
  </h2>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="name"
      name="name"
      label="name"
      type="text"
      v-model="user.name"
      placeholder="name_placeholder"
      class="w-full"
    />
    <MForm
      id="email"
      name="email"
      label="email"
      type="email"
      v-model="user.email"
      placeholder="email_placeholder"
      class="w-full"
    />
  </div>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="tel"
      name="tel"
      label="tel"
      type="tel"
      v-model="user.tel"
      placeholder="tel_placeholder"
      class="w-full"
    />
    <MForm
      id="document"
      name="document"
      label="document"
      type="text"
      v-model="user.document"
      placeholder="document_placeholder"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore'
import MForm from './MForm.vue'

const { user } = useUserStore()
</script>
