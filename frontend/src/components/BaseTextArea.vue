<template>
  <div class="mb-4">
    <label class="custom-label" :for="id">
      {{ label }}
    </label>

    <textarea
      :id="id"
      class="custom-input"
      rows="5"
      :placeholder="label"
      autocomplete="off"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    ></textarea>
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
