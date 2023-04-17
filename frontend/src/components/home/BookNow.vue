<template>
  <section class="book-now flex items-center justify-center px-4">
    <div class="p-4">
      <div class="w-[30rem]">
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
      <p>You are few clicks away from your dream vacation!</p>

      <BaseButton button-type="primary" class="fade-to-top full-clip-path anime"
        >Make a Reservation Now!</BaseButton
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

  gsap.from(txt, {
    y: 100,
    autoAlpha: 0,
    ease: "Back.easeOut",
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".book-now",
      start: "top center",
    },
  });
});
</script>

<style lang="scss" scoped></style>
