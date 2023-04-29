<template>
  <main class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home">
      <div class="hero-caption relative -mt-12 ml-12">
        <div
          class="fade-to-top tilta full-clip-path anime p-4 font-Allura text-8xl leading-none text-white"
        >
          <span class="custom-class">Relax &</span>
          <span class="ml-14 block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path anime mt-5 mb-4 text-xl font-normal text-white"
        >
          Life is extremely fast. Travel and have fun while your heart is young.
        </p>

        <BaseButton
          button-type="primary"
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
    <!-- <FeaturedSection :featured="featured" /> -->

    <!-- Book Now -->
    <BookNow></BookNow>
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
import BookNow from "@/components/home/BookNow.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const bgSection = ref(null);

onMounted(() => {
  // define lenis
  const lenis = new Lenis({
    duration: 2.2,
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

  let tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 2.2 },
    scrollTrigger: {
      trigger: ".hero-caption",
      start: "top center",
    },
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
    name: "pool",
    icon: "swimming-pool",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem! ",
  },
  {
    name: "restaurant",
    icon: "utensils",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, maiores!",
  },
  {
    name: "gym",
    icon: "dumbbell",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas?",
  },
  {
    name: "bar",
    icon: "glass-martini-alt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },

  {
    name: "wifi",
    icon: "wifi-3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },

  {
    name: "room service",
    icon: "concierge-bell",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },

  {
    name: "spa",
    icon: "spa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },

  {
    name: "casino",
    icon: "dice",
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

const featured = ref([
  "package.jpg",
  "contact.jpg",
  "banner-1.jpg",
  "package.jpg",
  "contact.jpg",
  "banner-1.jpg",
  "package.jpg",
  "contact.jpg",
  "banner-1.jpg",
  "package.jpg",
  "contact.jpg",
]);
</script>
