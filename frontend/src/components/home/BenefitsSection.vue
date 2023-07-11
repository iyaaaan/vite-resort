<template>
  <section
    class="container flex flex-wrap items-start justify-center border-b border-b-gray-500 px-0 py-20 text-stone-700 md:py-32"
    ref="perksContainer"
  >
    <div class="full-clip-path w-80 md:mr-12 lg:w-96" ref="perksImg">
      <img src="@/assets/img/banner/home-perks2.jpg" alt="" class="w-full" />
    </div>
    <div class="mt-10 flex w-full flex-wrap p-4 lg:mt-0 lg:w-1/2">
      <h2
        class="full-clip-path mb-8 basis-full self-center font-Playfair text-5xl text-beaver"
        ref="perksTitle"
      >
        The Perks
      </h2>

      <template v-for="perk in perks" key="index">
        <div class="w-full pr-4 pb-4 md:w-1/2">
          <h3 class="font-semibold">{{ perk.title }}</h3>

          <!-- line -->
          <div class="perks-line h-0.5 w-7 bg-secondary"></div>

          <p class="font-light">
            {{ perk.text }}
          </p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const perks = [
  {
    title: "Serene Environment",
    text: "Enjoy a peaceful and relaxing atmosphere surrounded by natural beauty and the sound of the ocean.",
  },
  {
    title: "Luxury Accommodations",
    text: "Experience the ultimate in comfort and style with our luxurious accommodations that cater to your every need.",
  },
  {
    title: "Endless Activities",
    text: "From snorkeling and kayaking to beach yoga and sunset cruises, our resort offers endless activities to keep you entertained.",
  },
  {
    title: "Personalized Service",
    text: "Our friendly and attentive staff are dedicated to making your stay unforgettable, ensuring your every need is met.",
  },
];

const perksContainer = ref(null);
const perksTitle = ref(null);
const perksImg = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, autoAlpha: 0 },
    scrollTrigger: {
      trigger: perksContainer.value,
      start: "top 70%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(perksImg.value, {
    y: 100,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.from(
    perksTitle.value,
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  );

  tl.from(
    ".perks-line",
    {
      x: -50,
      stagger: 0.2,
      duration: 0.5,
    },
    0.3
  );
});
</script>

<style lang="scss" scoped></style>
