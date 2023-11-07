<template>
  <section
    class="book-now flex flex-row flex-wrap items-center justify-center py-40 px-4"
  >
    <div
      class="book-now-img order-first w-full shadow-xl md:w-3/4 lg:order-last lg:w-1/2 xl:w-[30rem]"
    >
      <img src="src/assets/img/banner/book-now.jpg" alt="" class="w-full" />
    </div>
    <div
      class="mb-8 w-full py-4 md:mb-0 md:w-3/4 lg:w-1/2 lg:p-4 xl:mr-12 xl:w-auto"
    >
      <div
        class="book-now-item font-Playfair text-3xl font-bold lg:text-4xl xl:text-5xl"
      >
        <span>What are you waiting for?</span>
      </div>
      <p class="book-now-item full-clip-path">
        You are few clicks away from the dream vacation you deserve!
      </p>

      <BaseButton
        button-type="primary"
        class="book-now-item full-clip-path w-full md:w-auto"
        >Reserve Your Beach Retreat</BaseButton
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  ScrollTrigger.refresh();

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.5 },
    scrollTrigger: {
      trigger: ".book-now",
      start: "top center",
    },
  });

  tl.from(".book-now-item", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2,
  });

  tl.from(
    ".book-now-img",
    {
      y: 100,
      autoAlpha: 0,
      duration: 0.5,
    },
    0.5
  );
});

onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>
