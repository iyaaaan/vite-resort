<template>
  <div
    class="flex -translate-y-1/2 items-center justify-between bg-beaver p-6 text-white shadow-lg"
  >
    <div class="flex flex-wrap items-center">
      <h2 class="mr-4 mb-2 inline-block font-Playfair text-4xl">
        {{ room.name }}
        {{ room.type }}
      </h2>
      <template v-for="(n, index) in room.rating" :key="index">
        <font-awesome-icon icon="fas fa-star" class="text-xl text-yellow-300" />
        <!-- additional stars -->
        <template v-for="x in 5 - room.rating">
          <font-awesome-icon
            v-if="index === room.rating - 1"
            class="text-xl text-gray-200"
            icon="fas fa-star"
          />
        </template>
      </template>
      <div class="basis-full font-light">{{ room.inclusion }}</div>
    </div>
    <div>
      <span class="text-2xl font-semibold">{{ room.price }}</span>
      <span>/ night</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  room: [Object, Array],
});
</script>
