<template>
  <h2 class="text-lg font-medium leading-tight tracking-tight text-white md:text-xl">
    {{ $t('password_creation') }}
  </h2>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="password"
      name="password"
      label="password"
      type="password"
      v-model="password"
      placeholder="password_placeholder"
      class="w-full"
    />
    <MForm
      id="repeat_password"
      name="repeat_password"
      label="repeat_password"
      type="password"
      v-model="repeat_password"
      @update:modelValue="updatePassword"
      placeholder="password_placeholder"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import MForm from './MForm.vue'
import { ref } from 'vue'
import { useUserStore } from '@store/userStore'

const password = ref('')
const repeat_password = ref('')
const { user } = useUserStore()

function updatePassword() {
  if (password.value === repeat_password.value) {
    user.password = password.value
  } else {
    console.error('As senhas não coincidem.')
  }
}
</script>
