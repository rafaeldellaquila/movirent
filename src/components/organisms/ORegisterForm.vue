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
import MAdress from '@molecules/MAdressForm.vue'
import MPasswordForm from '@molecules/MPasswordForm.vue'
import MPersonalData from '@molecules/MPersonalDataForm.vue'
import MTermsCheckbox from '@molecules/MTermsCheckbox.vue'
import { RouterLink } from 'vue-router'

import { useUserStore } from '@store/userStore'

const { user, registerUser } = useUserStore()

function submitForm() {
  console.log('clique', user)
  // const isValid = await validate()
  // if (isValid) {
  //   console.log('Formulário válido:', user)
  //   // userStore.addUser(form.value)
  // } else {
  //   console.log('Formulário inválido')
  registerUser(user)
  console.log('Usuário registrado com sucesso:', user)
  // }
}
</script>
