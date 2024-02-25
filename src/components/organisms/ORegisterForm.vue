<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
    <MPersonalData />
    <MPasswordForm />

    <AButton
      label="register"
      type="submit"
      buttonClass="text-primary-main bg-secondary-main hover:bg-secondary-dark px-5 py-2.5"
    />
    <p class="text-sm font-light text-white">
      {{ $t('login_cta') }}
      <RouterLink to="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
        {{ $t('sign_in') }}
      </RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import AButton from '@atoms/AButton.vue'
import MPasswordForm from '@molecules/MPasswordForm.vue'
import MPersonalData from '@molecules/MPersonalDataForm.vue'
import { RouterLink } from 'vue-router'

import { useAuthStore } from '@/store/authStore'

import { useUserStore } from '@store/userStore'

const { user } = useUserStore()
const { registerUser } = useAuthStore()

const submitForm = () => registerUser(user)
</script>
