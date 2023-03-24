<template>
  <!-- Hero -->
  <HeroBanner banner="home" class="bg-bottom">
    <div class="relative -mt-12 ml-12">
      <div
        ref="heroCaption"
        class="text-shadow-md clip-path-to-top p-4 font-Merriweather text-8xl font-bold leading-none text-white"
      >
        <span class="custom-class">Relax &</span>
        <span class="ml-14 block">Recharge</span>
      </div>

      <p
        ref="heroText"
        class="text-shadow-sm mt-5 mb-4 text-xl font-medium text-white"
      >
        Life is extremely fast. Travel and have fun while your heart is young.
      </p>

      <BaseButton button-type="primary" ref="heroButton">Book Now</BaseButton>
    </div>
  </HeroBanner>
  <!-- ./Hero -->

  <!-- ./About -->
  <AboutSection />
  <!-- ./About -->

  <!-- Featured Room -->
  <RoomSection />
  <!-- ./Featured Room -->

  <!-- Services -->
  <ServicesSection :services="services" />
  <!-- ./Services -->

  <!-- Testimonials -->
  <Testimonials :testimonials="testimonials"></Testimonials>

  <!-- How to get here -->
  <FeaturedSection :featured="featured" />
  <!-- ./How to get here -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import BaseButton from "@/components/BaseButton.vue";
import Testimonials from "@/components/Testimonials.vue";
import RoomSection from "../components/home/RoomSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import FeaturedSection from "../components/home/FeaturedSection.vue";

import gsap from "gsap";

const heroCaption = ref(null);
const heroText = ref(null);
const heroButton = ref(null);

onMounted(() => {
  /*  gsap.from(heroCaption.value, {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    delay: 0.5,
    duration: 2,
    ease: "power2.out",
  }); */

  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
  tl.from(heroCaption.value, {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 2.2,
  });
  tl.from(
    heroText.value,
    {
      y: 100,
      autoAlpha: 0,
      duration: 2,
    },
    0.2
  );
  tl.from(heroButton.value, {
    y: 100,
    autoAlpha: 0,
    duration: 2,
  });
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
