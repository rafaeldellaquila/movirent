<template>
  <section class="p-3 sm:p-5">
    <div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
      <MTableHeader />
      <div class="overflow-x-auto">
        <!-- <OTable /> -->
      </div>
      <!-- <MTableFooter /> -->
    </div>
  </section>
</template>
<script setup lang="ts">
import OTable from './OTable.vue'
import MTableFooter from '@molecules/MTableFooter.vue'
import MTableHeader from '@molecules/MTableHeader.vue'
</script>
