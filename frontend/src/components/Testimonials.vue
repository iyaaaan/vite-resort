<template>
  <div class="my-24 mx-auto max-w-3xl">
    <h2 class="text-center font-Playfair text-5xl font-bold text-primary">
      What Clients Say
    </h2>
    <carousel :items-to-show="1">
      <slide v-for="(test, index) in testimonials" :key="index">
        <div class="mx-auto mt-16 max-w-3xl p-4 text-center">
          <div class="mx-auto w-48">
            <img
              :src="`src/assets/img/testimonial/${test.img}`"
              alt=""
              class="h-full w-full rounded-full"
            />
          </div>
          <div class="my-4">
            <!-- rating -->
            <template v-for="(n, index) in test.rating" :key="index">
              <font-awesome-icon
                icon="fas fa-star"
                class="text-2xl text-yellow-300"
              />
              <!-- additional stars -->
              <template v-for="x in 5 - test.rating">
                <font-awesome-icon
                  v-if="index === test.rating - 1"
                  class="text-2xl text-gray-200"
                  icon="fas fa-star"
                />
              </template>
            </template>
          </div>
          <blockquote
            class="relative my-5 before:absolute before:left-0 before:-top-16 before:font-Playfair before:text-9xl before:text-gray-300 before:content-[open-quote] after:invisible after:content-[close-quote]"
          >
            {{ test.text }}
          </blockquote>
          <span class="font-Playfair text-gray-600">
            <em> - {{ test.name }} </em></span
          >
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted } from "vue";

const props = defineProps({
  testimonials: Object,
});

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
