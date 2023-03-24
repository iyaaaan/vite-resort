<template>
  <section class="my-24 p-4">
    <div class="flex items-center justify-center space-x-5">
      <template v-for="(feat, index) in featured" :key="index">
        <div
          class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100 shadow-xl"
        >
          <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="w-full"
          />
        </div>
      </template>
    </div>

    <div class="mt-8 text-center">
      <span
        class="inline-block rounded-lg bg-primary p-2 text-white hover:bg-primaryLight"
      >
        <font-awesome-icon icon="fas fa-map-pin" class="text-lg text-red-600" />
        How to get here
      </span>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  featured: Array,
});
</script>
