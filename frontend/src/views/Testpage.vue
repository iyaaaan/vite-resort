<template>
  <section class="as-wrap flex justify-center bg-red-300"></section>
  <div class="box h-80 w-80 bg-green-600"></div>
  <section class="as-wrap flex justify-center bg-red-300"></section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 10 },
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      onEnter: () => console.log("ENTER"),
      onLeave: () => console.log("LEAVE"),
      onEnterBack: () => console.log("ENTER BACK"),
      onLeaveBack: () => console.log("ELAVE BACK"),
      markers: true,
    },
  });

  tl.to(".box", {
    x: 500,
  });
});
</script>
