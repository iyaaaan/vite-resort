<template>
  <main
    class="my-container h-100vh flex w-[500vw] flex-nowrap items-center justify-center"
  >
    <div class="my-item h-screen w-screen bg-red-300"></div>
    <div class="my-item h-screen w-screen bg-blue-300"></div>
    <div class="my-item h-screen w-screen bg-gray-300"></div>
    <div class="my-item h-screen w-screen bg-pink-300"></div>
    <div class="my-item h-screen w-screen bg-indigo-300"></div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let con = document.querySelector(".my-container");
  let sections = gsap.utils.toArray(".my-item");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".my-container",
      pin: true,
      scrub: 0.1,
      //snap: 1 / (sections.length - 1),
      end: "+=3000",
      //end: `+=${con.offsetWidth}`,
    },
  });
});
</script>

<style scoped>
.hero__panel {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ff9a62;
  z-index: 10;
}
.end {
  position: relative;

  z-index: 40;
  background-color: #666;
}
.gallery {
  width: 500vw;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 100vh;
  position: relative;
  z-index: 30;
}
.panel-1 {
  background-color: #85b6ff;
}

.panel-2 {
  background-color: #be91f0;
}

.panel-3 {
  background-color: #aff4c6;
}

.panel-4 {
  background-color: #4ecb71;
}

section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
