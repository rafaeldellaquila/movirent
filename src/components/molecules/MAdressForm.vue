<template>
  <h2 class="text-lg font-medium leading-tight tracking-tight text-white md:text-xl">
    {{ $t('address') }}
  </h2>
  <div class="flex flex-col md:flex-row md:space-x-4 items-end">
    <MForm
      id="cep"
      name="cep"
      label="cep"
      type="text"
      v-model="cep"
      placeholder="cep_placeholder"
      class="w-full"
      rules="required|cep"
    />
    <AButton
      label="cep_search"
      @click="fetchAddress"
      type="button"
      buttonClass="border-2 text-secondary-main border-secondary-main hover:border-secondary-dark hover:text-secondary-dark py-2.5"
    />
  </div>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="street"
      name="street"
      label="street"
      type="text"
      v-model="user.street"
      placeholder="street_placeholder"
      class="w-full"
    />
    <MForm
      id="neighborhood"
      name="neighborhood"
      label="neighborhood"
      type="text"
      v-model="user.neighborhood"
      placeholder="neighborhood_placeholder"
      class="w-full"
    />
  </div>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="city"
      name="city"
      label="city"
      type="text"
      v-model="user.city"
      placeholder="city_placeholder"
      class="w-full"
    />
    <MForm
      id="state"
      name="state"
      label="state"
      type="text"
      v-model="user.state"
      placeholder="state_placeholder"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import MForm from './MForm.vue'
import AButton from '@atoms/AButton.vue'
import { ref } from 'vue'

import { useUserStore } from '@store/userStore'

const { user, fetchAddressByCep } = useUserStore()
const cep = ref('')

async function fetchAddress() {
  await fetchAddressByCep(cep.value)
  console.log('fetchAddress', user)
}
</script>
