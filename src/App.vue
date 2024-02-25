<template>
  <main class="flex flex-col h-screen">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

import { useUserStore } from '@store/userStore'

const { loadUserData, loadAuthenticationState } = useUserStore()
const router = useRouter()

console.log('tá autenticado', loadAuthenticationState())

if (loadAuthenticationState()) {
  loadUserData()
  router.push('/auth/dashboard/')
}
</script>
