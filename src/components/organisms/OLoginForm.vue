<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
    <MForm
      v-model="user.email"
      id="email"
      name="email"
      label="email"
      type="email"
      placeholder="email_placeholder"
    />
    <MForm
      v-model="user.password"
      id="password"
      name="password"
      label="password"
      type="password"
      placeholder="password_placeholder"
    />
    <AButton
      label="sign_in"
      type="submit"
      buttonClass="text-primary-main bg-secondary-main hover:bg-secondary-dark px-5 py-2.5"
    />
    <p class="text-sm font-light text-white">
      {{ $t('register_cta') }}
      <RouterLink
        to="register"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        {{ $t('sign_up') }}
      </RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import AButton from '@atoms/AButton.vue'
import MForm from '@molecules/MForm.vue'

import { useAuthStore } from '@/store/authStore'

import { useUserStore } from '@store/userStore'

const { user } = useUserStore()
const { login } = useAuthStore()

const submitForm = () => login({ email: user.email, password: user.password, status: user.status })
</script>
