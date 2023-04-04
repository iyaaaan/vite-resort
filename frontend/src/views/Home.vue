<template>
  <main class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home" class="target1" ref="bb">
      <div class="bases relative -mt-12 ml-12">
        <div
          class="fade-to-top tilta full-clip-path anime p-4 font-Allura text-8xl leading-none text-white"
          ref="heroCaption"
        >
          <span class="custom-class">Relax &</span>
          <span class="ml-14 block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path anime mt-5 mb-4 text-xl font-normal text-white"
          ref="heroText"
        >
          Life is extremely fast. Travel and have fun while your heart is young.
        </p>

        <BaseButton
          button-type="primary"
          ref="heroButton"
          class="fade-to-top full-clip-path anime"
          >Book Now</BaseButton
        >
      </div>
    </HeroBanner>

    <!-- ./About -->
    <AboutSection />

    <!-- Featured Room -->
    <RoomSection />

    <!-- Services -->
    <ServicesSection :services="services" />

    <!-- Testimonials -->
    <Testimonials :testimonials="testimonials"></Testimonials>

    <!-- How to get here -->
    <FeaturedSection :featured="featured" />
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import Testpage from "@/views/Testpage.vue";
import BaseButton from "@/components/BaseButton.vue";
import Testimonials from "@/components/Testimonials.vue";
import RoomSection from "@/components/home/RoomSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initGsapLocoScroll, fadeToTop } from "../composables/myAnimate";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const bb = ref(null);

onMounted(() => {
  // define
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2.2 } });
  tl.from(bb.value.$el, {
    autoAlpha: 0,
  });
  tl.from(
    ".fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
    },
    0.5
  );
});

const services = ref([
  {
    name: "Pool",
    icon: "swimming-pool",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem! ",
  },
  {
    name: "Restaurant",
    icon: "utensils",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, maiores!",
  },
  {
    name: "Gym",
    icon: "dumbbell",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas?",
  },
  {
    name: "Bar",
    icon: "glass-martini-alt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },
]);

const testimonials = ref([
  {
    name: "Christian Ocol",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem!",
    img: "test-1.png",
    rating: 4,
  },
  {
    name: "Christian 2",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
    rating: 5,
  },
  {
    name: "Christian 3",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
    rating: 4,
  },
]);

const featured = ref(["about.jpg", "package.jpg", "contact.jpg", "home.jpg"]);
</script>
