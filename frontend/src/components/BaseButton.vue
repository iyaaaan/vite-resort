<template>
  <button class="button" :class="`button-${buttonType}`">
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
