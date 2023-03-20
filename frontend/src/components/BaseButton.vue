<template>
  <button
    class="rounded-md py-2 px-4 text-white transition-colors"
    :class="buttonType == 'primary' ? primaryClass : secondaryClass"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  buttonType: String,
});

const primaryClass = ref("bg-primary hover:bg-primaryLight");
const secondaryClass = ref("bg-secondary hover:bg-secondaryLight");
</script>

<style lang="scss" scoped></style>
