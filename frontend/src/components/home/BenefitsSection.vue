<template>
  <section
    class="perks-container container flex flex-wrap items-start justify-center border-b border-b-gray-500 px-0 py-20 text-stone-700 md:py-32"
  >
    <div class="perks-img full-clip-path w-80 md:w-96">
      <img src="@/assets/img/banner/home-perks2.jpg" alt="" class="w-full" />
    </div>
    <div
      class="perks-text-wrap mt-10 flex w-full flex-wrap p-4 lg:mt-0 lg:w-1/2"
    >
      <h2
        class="perks-title full-clip-path mb-8 basis-full self-center font-Playfair text-5xl text-beaver"
      >
        The Perks
      </h2>
      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3 class="font-semibold">Serene Environment</h3>

        <!-- line -->
        <div class="perks-line h-1 w-7 bg-secondary"></div>

        <p class="font-light">
          Enjoy a peaceful and relaxing atmosphere surrounded by natural beauty
          and the sound of the ocean.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3 class="font-semibold">Luxury Accommodations</h3>

        <!-- line -->
        <div class="perks-line h-1 w-7 bg-secondary"></div>

        <p class="font-light">
          Experience the ultimate in comfort and style with our luxurious
          accommodations that cater to your every need.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3 class="font-semibold">Endless Activities</h3>

        <!-- line -->
        <div class="perks-line h-1 w-7 bg-secondary"></div>

        <p class="font-light">
          From snorkeling and kayaking to beach yoga and sunset cruises, our
          resort offers endless activities to keep you entertained.
        </p>
      </div>

      <div class="w-full pr-4 pb-4 md:w-1/2">
        <h3 class="font-semibold">Personalized Service</h3>

        <!-- line -->
        <div class="perks-line h-1 w-7 bg-secondary"></div>

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
  gsap.from(".perks-img", {
    ease: "Power4.inOut",
    duration: 0.8,
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    scrollTrigger: {
      trigger: ".perks-img",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, y: 100, autoAlpha: 0 },
    scrollTrigger: {
      trigger: ".perks-text-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(
    ".perks-title",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  ).from(
    ".perks-line",
    {
      y: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      ease: "Power1.easeOut",
    },
    0.5
  );
});
</script>

<style lang="scss" scoped></style>
