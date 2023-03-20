<script setup>
defineProps({
  banner: String,
});
</script>

<template>
  <div
    :style="{
      'background-image': 'url(/src/assets/img/banner/' + banner + '.jpg)',
    }"
    class="flex h-screen w-full items-center bg-cover bg-center bg-no-repeat font-Montserrat"
  >
    <slot></slot>
  </div>
</template>
