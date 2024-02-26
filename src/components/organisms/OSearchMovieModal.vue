<template>
  <div
    :class="isOpen ? 'flex' : 'hidden'"
    class="backdrop-blur-sm flex drop-shadow-2xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-5xl max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <!-- MSearchMovieHeader -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold text-primary-main">{{ $t('hent_film') }}</h3>
          <button
            @click="closeModal"
            type="button"
            class="text-primary-main bg-transparent rounded-lg text-sm w-8 h-8"
          >
            <XMarkIcon class="w-7 h-7" />
          </button>
        </div>
        <!-- MSearchMovieBody -->
        <div class="p-4 md:p-5 space-y-4">
          <MSearchInput class="min-w-full" :onSearch="performSearch" />
          <template v-if="contents !== undefined">
            <OTable :titles="thead" :contents="contents" />
          </template>
        </div>
        <!-- Modal footer -->
        <div class="w-1/3 flex items-center justify-end p-4 md:p-5 rounded-b">
          <AButton
            type="button"
            class="text-primary-main bg-secondary-main font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {{ $t('add_film') }}
          </AButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AButton from '@atoms/AButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import MSearchInput from '@molecules/MSearchInput.vue'
import OTable from '@organisms/OTable.vue'
import { ref } from 'vue'

import type { FilmProps } from '@/types/common'

import axios from 'axios'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const thead = [' ', 'Title', 'Year', 'Rated', 'Rent']
const key = 'd1f9b8f7'
const emits = defineEmits(['close'])

const closeModal = () => {
  emits('close')
}

const contents = ref<FilmProps[]>()

const performSearch = async (query: string) => {
  if (query.length >= 3) {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${key}`
      )
      contents.value = data.Search
    } catch (error) {
      console.error(error)
    }
  } else {
    console.error('Digite mais de três letras.')
  }
}
</script>
