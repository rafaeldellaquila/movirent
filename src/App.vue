<template>
  <main class="flex flex-col h-screen">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useUserStore } from '@store/userStore'

const { loadUserData, isAuthenticated } = useUserStore()
loadUserData()
if (isAuthenticated) {
  console.log('tá autenticado', isAuthenticated)
}
</script>
