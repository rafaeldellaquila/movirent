<template>
  <div class="w-full md:w-1/2">
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon class="w-5 h-5" color="primary-color-main" />
      </div>
      <input
        type="search"
        name="search"
        class="border border-primary-main text-primary-main text-sm rounded-lg block w-full pl-10 p-2"
        placeholder="search"
        v-model="searchQuery"
        @keyup.enter="handleSearch"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { defineProps, ref } from 'vue'

const props = defineProps({
  onSearch: Function,
  placeholder: String
})

const searchQuery = ref('')

const handleSearch = () => {
  if (props.onSearch) {
    props.onSearch(searchQuery.value)
  }
}
</script>
