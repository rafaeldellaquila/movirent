<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
    <MForm id="email" name="email" label="email" type="email" placeholder="email_placeholder" />
    <MForm
      id="password"
      name="password"
      label="password"
      type="password"
      placeholder="password_placeholder"
    />
    <div class="flex items-center justify-between">
      <a href="#" class="text-sm font-medium hover:underline text-white">
        {{ $t('forgot_password') }}
      </a>
    </div>
    <AButton
      label="sign_in"
      type="submit"
      buttonClass="text-primary-main bg-secondary-main hover:bg-secondary-dark px-5 py-2.5"
    />
    <p class="text-sm font-light text-white">
      {{ $t('register_cta') }}
      <RouterLink
        to="/register"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        {{ $t('sign_up') }}
      </RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import MForm from '@molecules/MForm.vue'
import AButton from '@atoms/AButton.vue'

const emits = defineEmits(['submitForm'])

function submitForm() {
  emits('submitForm')
}
</script>
