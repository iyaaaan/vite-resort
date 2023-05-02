<template>
  <section class="book-now flex flex-wrap flex-col md:flex-row h-screen items-center justify-center px-4">
    <div class="w-full md:w-1/2 order-first md:order-last">
      <div class="book-now-img w-full md:w-[30rem] shadow-xl">
        <img src="src/assets/img/banner/banner-1.jpg" alt="" class="w-full" />
      </div>
    </div>
    <div class="w-full md:w-1/2 p-4 mb-8 md:mb-0">
      <div class="font-Playfair text-3xl md:text-5xl font-bold">
        <span class="book-now-text mr-3 inline-block">What </span>
        <span class="book-now-text mr-3 inline-block">are </span>
        <span class="book-now-text mr-3 inline-block">you </span>
        <span class="book-now-text mr-3 inline-block">waiting </span>
        <span class="book-now-text mr-3 inline-block">for?</span>
      </div>
      <p class="book-now-item full-clip-path">
        You are few clicks away from the dream vacation you deserve!
      </p>

      <BaseButton button-type="primary" class="book-now-item full-clip-path w-full md:w-auto"
        >Make a Reservation Now</BaseButton
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let txt = document.querySelectorAll(".book-now-text");

  let tl = gsap.timeline({
    defaults: { ease: "Back.easeOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".book-now",
      start: "top top",
      //end: "+=1000",
      //pin: true,
    },
  });

  gsap.set(".book-now-img", { x: 500, autoAlpha: 0 });
  tl.to(".book-now-img", {
    x: 0,
    autoAlpha: 1,
    duration: 1,
    ease: "Expo.inOut",
  });

  tl.from(
    txt,
    {
      y: 100,
      autoAlpha: 0,
      stagger: 0.15,
    },
    0.5
  );

  tl.from(
    ".book-now-item",
    {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
    },
    0.5
  );
});
</script>
