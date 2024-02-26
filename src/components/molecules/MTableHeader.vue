<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
  >
    <MSearchInput />
    <div
      class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
    >
      <button
        type="button"
        @click="() => (isOpen = !isOpen)"
        class="flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2"
      >
        <PlusIcon class="h-3.5 w-3.5 mr-2" />
        {{ $t('hent_film') }}
      </button>
      <div class="flex items-center space-x-3 w-full md:w-auto">
        <button
          id="filterDropdownButton"
          class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium bg-white rounded-lg border border-gray-200"
          type="button"
        >
          <FunnelIcon class="h-4 w-4 mr-2 text-primary-main" />
          {{ $t('filter') }}
          <ChevronDownIcon class="-mr-1 ml-1.5 w-5 h-5" />
        </button>
        <div class="z-10 hidden w-48 p-3 rounded-lg shadow">
          <h6 class="mb-3 text-sm font-medium text-primary-main">Choose brand</h6>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center">
              <input id="nikon" type="checkbox" value="" />
              <label for="nikon" class="ml-2 text-sm font-medium text-primary-main"
                >Nikon (12)</label
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <OSearchMovieModal :isOpen="isOpen" @close="isOpen = false" />
</template>
<script setup lang="ts">
import MSearchInput from './MSearchInput.vue'
import { ChevronDownIcon, FunnelIcon, PlusIcon } from '@heroicons/vue/24/outline'
import OSearchMovieModal from '@organisms/OSearchMovieModal.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
