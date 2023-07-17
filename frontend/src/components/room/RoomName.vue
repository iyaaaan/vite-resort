<template>
  <div
    class="flex -translate-y-1/2 items-center justify-between bg-beaver p-6 text-white shadow-lg"
  >
    <div class="flex flex-wrap items-center">
      <h2 class="mr-4 mb-2 inline-block font-Playfair text-4xl">
        {{ title }}
      </h2>
      <template v-for="(n, index) in rating" :key="index">
        <font-awesome-icon icon="fas fa-star" class="text-xl text-yellow-300" />
        <!-- additional stars -->
        <template v-for="x in 5 - rating">
          <font-awesome-icon
            v-if="index === rating - 1"
            class="text-xl text-gray-200"
            icon="fas fa-star"
          />
        </template>
      </template>
      <div class="basis-full font-light">{{ inclusions }}</div>
    </div>
    <div>
      <span class="text-2xl font-semibold">{{ price }}</span>
      <span>/ night</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: [String],
  inclusions: [String],
  price: [String],
  rating: [Number],
});
</script>
