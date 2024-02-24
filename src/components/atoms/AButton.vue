<template>
  <button
    :class="`transform transition duration-500 hover:scale-95 w-full text-primary-main bg-secondary-main hover:bg-secondary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${buttonClass}`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  buttonClass: String
})

const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>
