<template>
  <button
    :class="`transform transition duration-500 hover:scale-95 w-full font-medium rounded-lg text-sm text-center ${buttonClass}`"
    @click="onClick"
    :type="type"
  >
    <template v-if="typeof label === 'string'">
      {{ $t(label) }}
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import type { PropType } from 'vue'

defineProps({
  label: [String, Object],
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
