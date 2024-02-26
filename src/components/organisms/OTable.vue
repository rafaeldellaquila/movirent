<template>
  <table class="w-full text-sm text-left">
    <ATHead :titles="titles" />
    <tbody>
      <template v-if="displayedItems !== undefined">
        <tr
          @click="() => console.log('implementar')"
          class="border-b cursor-pointer"
          v-for="content in displayedItems"
          :key="content.Title"
        >
          <td class="px-4 py-3">
            <img :src="content.Poster" :alt="content.Title" class="w-10 h-10" />
          </td>
          <td class="px-4 py-3 font-medium whitespace-nowrap">{{ content.Title }}</td>
          <td class="px-4 py-3">{{ content.Year }}</td>
          <td class="px-4 py-3">{{ content.Type }}</td>
          <td class="px-4 py-3">{{ content.Rent ? `${$t('yes')}` : `${$t('no')}` }}</td>
        </tr>
      </template>
    </tbody>
  </table>
  <MTableFooter
    :currentPage="currentPage"
    :totalPages="totalPages"
    @changePage="changePage"
    :itemsPerPage="itemsPerPage"
    :totalItems="totalItems"
  />
</template>
<script setup lang="ts">
import ATHead from '@atoms/ATHead.vue'
import MTableFooter from '@molecules/MTableFooter.vue'
import type { PropType } from 'vue'
import { computed, ref } from 'vue'

import type { FilmProps } from '@/types/common'

const props = defineProps({
  titles: {
    type: Array<string>,
    required: true
  },
  contents: {
    type: Object as PropType<FilmProps[]>,
    required: true
  }
})

const currentPage = ref(1)
const totalItems = ref(props.contents.length)
const itemsPerPage = ref(5)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

const changePage = (page: number) => {
  currentPage.value = page
}

const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value

  if (props.contents) return props.contents.slice(start, end)
  return undefined
})
</script>
