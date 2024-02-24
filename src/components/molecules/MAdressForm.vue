<template>
  <h2 class="text-lg font-medium leading-tight tracking-tight text-white md:text-xl">
    {{ $t('address') }}
  </h2>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="street"
      name="street"
      label="street"
      type="text"
      placeholder="street_placeholder"
      class="w-full"
    />
    <MForm
      id="neighborhood"
      name="neighborhood"
      label="neighborhood"
      type="text"
      placeholder="neighborhood_placeholder"
      class="w-full"
    />
  </div>
  <div class="flex flex-col md:flex-row md:space-x-4">
    <MForm
      id="city"
      name="city"
      label="city"
      type="text"
      placeholder="city_placeholder"
      class="w-full"
    />
    <MForm
      id="state"
      name="state"
      label="state"
      type="text"
      placeholder="state_placeholder"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import MForm from './MForm.vue'
</script>
