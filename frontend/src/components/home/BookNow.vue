<template>
  <section class="book-now flex h-screen items-center justify-center px-4">
    <div class="p-4">
      <div class="book-now-img w-[30rem] shadow-xl">
        <img src="src/assets/img/banner/banner-1.jpg" alt="" class="w-full" />
      </div>
    </div>
    <div class="p-4">
      <div class="font-Playfair text-5xl font-bold">
        <span class="book-now-text mr-3 inline-block">What </span>
        <span class="book-now-text mr-3 inline-block">are </span>
        <span class="book-now-text mr-3 inline-block">you </span>
        <span class="book-now-text mr-3 inline-block">waiting </span>
        <span class="book-now-text mr-3 inline-block">for?</span>
      </div>
      <p class="book-now-item full-clip-path">
        You are few clicks away from the dream vacation you deserve!
      </p>

      <BaseButton button-type="primary" class="book-now-item full-clip-path"
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
      end: "+=2500",
      pin: true,
      markers: true,
    },
  });

  gsap.set(".book-now-img", { x: 500, autoAlpha: 0 });
  tl.to(
    ".book-now-img",
    {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "Expo.inOut",
    },
    1
  );

  tl.from(
    txt,
    {
      y: 100,
      autoAlpha: 0,
      stagger: 0.15,
    },
    1
  );

  tl.from(
    ".book-now-item",
    {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
    },
    1
  );
});
</script>
