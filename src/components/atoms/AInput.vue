<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    :value="modelValue"
    @input="updateValue($event.target.value)"
    :placeholder="$t(`${placeholder}`)"
    class="sm:text-sm rounded-lg block w-full p-2.5"
    :required="required"
    v-maska
    :data-maska="name ? useMask(name) : ''"
  />
</template>

<script setup lang="ts">
import useMask from '@/utils/masks'

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

const emits = defineEmits(['update:modelValue'])
const updateValue = (value: string) => emits('update:modelValue', value)
</script>
