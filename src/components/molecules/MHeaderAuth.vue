<template>
  <header>
    <nav class="bg-white px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <ALogo />
        <div class="flex items-center lg:order-2">
          <AUserDetail :name="user.name" :email="user.email" />
          <AButton
            @click="logout"
            label="logout"
            type="button"
            class="ml-3 outline px-4 py-2 text-primary-main mr-4"
          />
          <AButton
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <Bars3Icon class="w-6 h-6"
          /></AButton>
        </div>

        <div
          :class="isOpen ? 'flex  m-4' : 'hidden'"
          class="lg:bg-white justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul class="w-full flex flex-col font-medium text-center lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/"
                class="border-b-gray-100 border-b-2 lg:border-0 block py-2 pr-4 pl-3 text-primary-main rounded lg:bg-transparent lg:p-0"
                aria-current="page"
                >Home</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import AButton from '../atoms/AButton.vue'
import ALogo from '../atoms/ALogo.vue'
import AUserDetail from '../atoms/AUserDetail.vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

import { useAuthStore } from '@/store/authStore'
import { useUserStore } from '@/store/userStore'

const isOpen = ref(false)
const { logout } = useAuthStore()
const { user } = useUserStore()
</script>
