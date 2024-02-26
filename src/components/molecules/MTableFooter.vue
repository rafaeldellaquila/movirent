<template>
  <nav
    class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
    aria-label="Table navigation"
  >
    <span class="text-sm font-normal"> </span>
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage <= 1"
          href="#"
          class="flex items-center justify-center h-full py-1.5 px-3 ml-0"
        >
          <ChevronLeftIcon class="w-5 h-5" />
        </button>
      </li>
      <span class="font-semibold"
        >{{ startItem }}-{{ endItem }} <span class="font-regular">of</span> {{ totalItems }}</span
      >
      <li>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="flex items-center justify-center h-full py-1.5 px-3 ml-0"
        >
          <ChevronRightIcon class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['changePage'])

const startItem = computed(() => (props.currentPage - 1) * props.itemsPerPage + 1)
const endItem = computed(() => Math.min(props.currentPage * props.itemsPerPage, props.totalItems))

const goToPage = (page: number) => {
  console.log('mtablefooter', page)
  emits('changePage', page)
}
</script>
