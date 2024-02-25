<template>
  <div class="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
    <h1>DASHBOARD</h1>
    <button type="button" @click="logout">logout</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/authStore'

const { logout } = useAuthStore()
</script>
