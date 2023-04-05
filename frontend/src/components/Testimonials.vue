<template>
  <section class="test-wrap mx-autopy-24 my-24">
    <h2
      class="test-title full-clip-path text-center font-Playfair text-5xl font-bold text-primary"
    >
      What Clients Say
    </h2>
    <div class="testimonial">
      <carousel :items-to-show="1">
        <slide v-for="(test, index) in testimonials" :key="index">
          <div class="mx-auto mt-16 max-w-3xl p-4 text-center">
            <div class="mx-auto w-48">
              <img
                :src="`src/assets/img/testimonial/${test.img}`"
                alt=""
                class="test-img h-full w-full rounded-full"
              />
            </div>
            <div class="test-rating my-4">
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
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  testimonials: Object,
});

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 1.5 },
    scrollTrigger: {
      trigger: ".test-wrap",
      start: "center center",
      end: "+=1500",
      toggleActions: "play reverse play none",
      pin: true,
    },
  });

  tl.from(".test-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.from(
    ".testimonial",
    {
      //scale: 0.8,
      autoAlpha: 0,
      duration: 0.7,
      ease: "Back.easeOut",
    },
    0.5
  );
});
</script>

<style lang="scss" scoped></style>
