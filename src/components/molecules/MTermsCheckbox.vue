<template>
  <div class="flex items-start mb-4">
    <div class="flex items-center h-5">
      <input
        :id="id"
        :aria-describedby="id"
        :value="value"
        type="checkbox"
        class="w-4 h-4 border rounded focus:ring-3"
        required
      />
    </div>
    <div class="ml-3 text-sm text-white">
      <label :for="id" class="font-light">
        {{ $t(`${label}`) }}
        <a :href="termsUrl" class="font-medium text-info hover:underline">
          {{ $t(`${termsLabel}`) }} </a
        >.
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  label: String,
  termsLabel: String,
  termsUrl: String,
  value: Boolean
})
</script>
