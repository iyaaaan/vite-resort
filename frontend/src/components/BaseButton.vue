<template>
  <button class="button group" :class="`button-${buttonType}`">
    <slot></slot>

    <Icon
      v-if="hasArrow"
      icon="heroicons:arrow-long-right-solid"
      class="inline text-xl transition-transform group-hover:translate-x-1"
    />
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  buttonType: String,
  hasArrow: {
    type: Boolean,
    default: false,
  },
});
</script>
