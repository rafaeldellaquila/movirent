<template>
  <div class="mb-6 md:mb-0">
    <ALabel :forLabel="id" :label="label" />
    <AInput
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :modelValue="modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
    />
  </div>
</template>

<script setup lang="ts">
import ALabel from '@atoms/ALabel.vue'
import AInput from '@atoms/AInput.vue'

defineProps({
  type: String,
  name: {
    type: String,
    required: true
  },
  id: String,
  label: String,
  placeholder: String,
  required: {
    type: Boolean,
    default: true
  },
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
