<template>
  <div class="mb-4">
    <label class="custom-label" :for="id">
      {{ label }}
    </label>
    <input
      class="custom-input"
      autocomplete="off"
      type="text"
      :id="id"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>

<style>
.custom-input {
  @apply w-full rounded border bg-gray-100 py-2 px-3 text-stone-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300;
}

.custom-label {
  @apply mb-2 block text-sm font-bold text-gray-700;
}
</style>
