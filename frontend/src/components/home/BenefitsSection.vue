<template>
  <section
    class="perks-container container flex flex-wrap items-start justify-center border-b border-b-gray-500 px-0 py-48 text-stone-700"
  >
    <div class="perks-img full-clip-path w-full px-4 lg:w-96">
      <img
        src="@/assets/img/banner/home-perks.webp"
        alt=""
        class="w-full rounded-lg"
      />
    </div>
    <div class="mt-10 flex w-full flex-wrap p-4 lg:mt-0 lg:w-1/2">
      <h2
        class="perks-title full-clip-path mb-8 basis-full self-center font-Playfair text-5xl text-beaver"
      >
        The Perks
      </h2>
      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3
          class="after:7 relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-7 after:bg-secondary after:content-['']"
        >
          Serene Environment
        </h3>
        <p class="font-light">
          Enjoy a peaceful and relaxing atmosphere surrounded by natural beauty
          and the sound of the ocean.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3
          class="after:7 relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-7 after:bg-secondary after:content-['']"
        >
          Luxury Accommodations
        </h3>
        <p class="font-light">
          Experience the ultimate in comfort and style with our luxurious
          accommodations that cater to your every need.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3
          class="after:7 relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-7 after:bg-secondary after:content-['']"
        >
          Endless Activities
        </h3>
        <p class="font-light">
          From snorkeling and kayaking to beach yoga and sunset cruises, our
          resort offers endless activities to keep you entertained.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3
          class="after:7 relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-7 after:bg-secondary after:content-['']"
        >
          Personalized Service
        </h3>
        <p class="font-light">
          Our friendly and attentive staff are dedicated to making your stay
          unforgettable, ensuring your every need is met.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".perks-img, .perks-title", {
    y: 100,
    ease: "Power4.inOut",
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 0.8,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".perks-container",
      start: "100px bottom",
      end: "0 top",
      toggleActions: "restart none restart none",
    },
  });
});
</script>

<style lang="scss" scoped></style>
