<template>
  <main class="flex flex-col h-screen">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

import { useUserStore } from '@store/userStore'

import { useAuthStore } from './store/authStore'

const { loadAuthenticationState } = useAuthStore()
const { loadUserData } = useUserStore()
const router = useRouter()

if (loadAuthenticationState()) {
  loadUserData()
  router.push('/auth/dashboard/')
}
</script>
