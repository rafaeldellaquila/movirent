<template>
  <div>
    <label :for="id" class="block mb-2 text-sm font-medium text-white">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="sm:text-sm rounded-lg block w-full p-2.5"
      required
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  name: String,
  id: String,
  label: String,
  placeholder: String
})
</script>
