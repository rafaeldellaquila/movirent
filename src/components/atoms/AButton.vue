<template>
  <button
    :class="`transform transition duration-500 hover:scale-95 w-full font-medium rounded-lg text-sm text-center ${buttonClass}`"
    @click="onClick"
    :type="type"
  >
    {{ $t(`${label}`) }}
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import type { PropType } from 'vue'

defineProps({
  label: String,
  buttonClass: String,
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  }
})

const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>
