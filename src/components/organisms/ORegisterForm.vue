<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
    <MPersonalData />

    <MAdress />

    <MPasswordForm />

    <MTermsCheckbox
      id="terms"
      label="accept_terms"
      termsLabel="terms_and_conditions"
      termsUrl="#"
      :value="true"
    />

    <AButton
      label="register"
      buttonClass="w-full text-primary-main bg-secondary-main hover:bg-secondary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
import MTermsCheckbox from '@molecules/MTermsCheckbox.vue'
import { RouterLink } from 'vue-router'
import MPersonalData from '@molecules/MPersonalDataForm.vue'
import MAdress from '@molecules/MAdressForm.vue'
import MPasswordForm from '../molecules/MPasswordForm.vue'

const emits = defineEmits(['submitForm'])

function submitForm() {
  emits('submitForm')
}
</script>
