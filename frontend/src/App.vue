<template>
  <Navbar v-if="!$route.meta.hideNavbar"></Navbar>

  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>

  <Footer v-if="!$route.meta.hideFooter"></Footer>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // define lenis
  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // integrate lenis into gsap
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  /* function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
 */
});
</script>
