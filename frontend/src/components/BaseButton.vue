<template>
  <button class="button group" :class="`button-${buttonType}`">
    <slot></slot>

    <Icon
      v-if="hasArrow"
      icon="heroicons:arrow-long-right-solid"
      class="inline text-xl transition-transform group-hover:translate-x-1"
    />

    <!-- <svg
     
      class="ml-1 inline-block transition-transform group-hover:translate-x-1"
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4243 5.42427C23.6586 5.18995 23.6586 4.81005 23.4243 4.57574L19.6059 0.757361C19.3716 0.523046 18.9917 0.523046 18.7574 0.757361C18.523 0.991675 18.523 1.37157 18.7574 1.60589L22.1515 5L18.7574 8.39411C18.523 8.62843 18.523 9.00833 18.7574 9.24264C18.9917 9.47696 19.3716 9.47696 19.6059 9.24264L23.4243 5.42427ZM-5.24537e-08 5.6L23 5.6L23 4.4L5.24537e-08 4.4L-5.24537e-08 5.6Z"
        fill="white"
      />
    </svg> -->
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
