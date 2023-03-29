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
</script>
