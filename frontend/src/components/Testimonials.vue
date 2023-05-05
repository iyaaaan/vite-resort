<template>
  <section class="test-wrap container mx-auto py-40 px-0">
    <h2
      class="test-title full-clip-path py-4 text-center font-Playfair text-3xl md:text-5xl text-beaver"
    >
      Become one of our satisfied customers
    </h2>
    <div class="testimonial container mx-auto">
      <carousel :itemsToShow="1" :transition="500">
        <slide v-for="(test, index) in testimonials" :key="index">
          <div
            class="mx-auto mt-16 flex max-w-3xl cursor-context-menu flex-col items-center justify-center rounded-lg bg-[#343434] px-4 py-20 text-center md:flex-row"
          >
            <!-- img -->
            <div class="w-full p-4 md:mr-5 md:w-auto">
              <div class="mx-auto h-32 w-32">
                <img
                  :src="`src/assets/img/testimonial/${test.img}`"
                  alt=""
                  class="test-img h-full w-full rounded-full object-cover"
                />
              </div>

              <p class="mt-2 mb-4 font-bold text-white">{{ test.name }}</p>

              <div class="test-rating">
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
            </div>

            <div class="w-full p-4 md:w-8/12">
              <blockquote
                class="relative mt-10 text-justify font-light text-white before:absolute before:-top-16 before:-left-3 before:font-Playfair before:text-9xl before:leading-none before:text-neutral-500 before:content-[open-quote] after:invisible after:content-[close-quote] md:before:-top-24 md:before:text-[200px]"
              >
                {{ test.text }}
              </blockquote>
            </div>
          </div>
        </slide>

        <template #addons>
          <!-- <navigation /> -->
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = ref([
  {
    name: "Juan Dela Cruz",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis. Placeat, similique quisquam! Ut, consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore, perspiciatis necessitatibus dolorem quas.",
    img: "test.jpg",
    rating: 4,
  },
  {
    name: "Rhianna Gomez",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test.jpg",
    rating: 5,
  },
  {
    name: "Joshua The Explorer",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test.jpg",
    rating: 4,
  },
]);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 1.5 },
    scrollTrigger: {
      trigger: ".test-wrap",
      start: "top center",
      end: "+=1000",
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

<style lang="scss">
.carousel__prev,
.carousel__next {
  @apply text-white hover:text-slate-300;
}

.carousel__pagination-button {
  @apply rounded-full after:bg-neutral-400 hover:after:bg-neutral-600;
}

.carousel__pagination-button.carousel__pagination-button--active {
  @apply after:bg-beaver;
}
</style>
