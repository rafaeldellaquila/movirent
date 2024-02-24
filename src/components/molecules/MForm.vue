<template>
  <div class="mb-6 md:mb-0">
    <ALabel :for="id" :label="label" />
    <AInput :type="type" :name="name" :id="id" :placeholder="placeholder" :required="required" />
  </div>
</template>

<script setup lang="ts">
import ALabel from '@atoms/ALabel.vue'
import AInput from '@atoms/AInput.vue'

defineProps({
  type: String,
  name: String,
  id: String,
  label: String,
  placeholder: String,
  required: {
    type: Boolean,
    default: true
  }
})
</script>
