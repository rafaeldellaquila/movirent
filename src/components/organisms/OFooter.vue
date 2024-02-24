<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10">
    <div class="flex flex-col items-center mx-auto max-w-screen-xl text-center">
      <ALogo />
      <p class="my-6 text-primary-main">
        {{ $t('footer_description') }}
      </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-primary-main">
        <ALinkList
          classes="mr-4 hover:underline md:mr-6"
          v-for="item in list"
          :key="item.text"
          :text="item.text"
          :url="item.url"
        />
      </ul>
      <span class="text-sm text-primary-main"
        >© 2024 - {{ new Date().getFullYear().toString() }}
        <RouterLink to="/" class="hover:underline">{{ $t('movirent') }}</RouterLink
        >. {{ $t('all_rights_reserved') }}.</span
      >
    </div>
  </footer>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ALogo from '@atoms/ALogo.vue'
import ALinkList from '@atoms/ALinkList.vue'

const list = [
  {
    text: 'about',
    url: '/about'
  },
  {
    text: 'faq',
    url: '/faq'
  },
  {
    text: 'contact',
    url: '/contact'
  }
]
</script>
