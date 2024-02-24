<template>
  <div>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="$t(`${placeholder}`)"
      class="sm:text-sm rounded-lg block w-full p-2.5"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
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
