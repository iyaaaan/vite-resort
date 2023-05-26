<template>
  <div class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home-hero">
      <div
        class="hero-caption relative mx-auto -mt-12 p-4 text-center md:ml-12 md:text-left lg:max-w-2xl"
      >
        <div
          class="fade-to-top full-clip-path pb-4 font-Allura text-6xl leading-none text-white md:text-8xl"
        >
          <span>Relax &</span>
          <span class="ml-0 inline md:ml-14 md:block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path m-0 text-base font-light text-white md:text-lg"
        >
          Welcome to Our Beach Resort: Where Tranquility Meets Extravagance.
          Immerse Yourself in the Ultimate Getaway Experience.
        </p>

        <div class="mt-8">
          <BaseButton
            button-type="secondary"
            class="fade-to-top full-clip-path w-full md:w-auto"
            >Book Your Escape</BaseButton
          >

          <BaseButton
            class="fade-to-top full-clip-path w-full md:w-auto"
            button-type="borderless"
            :hasArrow="true"
            >Discover more
          </BaseButton>
        </div>
      </div>
    </HeroBanner>

    <!-- ./About -->
    <AboutSection />

    <!-- Featured Room -->
    <RoomSection />

    <!-- Activities -->
    <Activities />

    <!-- Perks -->
    <Benefits />

    <!-- Testimonials -->
    <Testimonials></Testimonials>

    <!-- banner section -->
    <section
      class="h-auto w-full bg-cover bg-fixed bg-bottom bg-no-repeat md:h-96 md:bg-[url('src/assets/img/banner/home-banner.webp')]"
    >
      <img
        src="src/assets/img/banner/home-banner.webp"
        alt=""
        class="w-full md:hidden"
      />
    </section>

    <!-- How to get here -->
    <!-- <FeaturedSection :featured="featured" /> -->

    <!-- Book Now -->
    <Contact></Contact>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import Testpage from "@/views/Testpage.vue";
import BaseButton from "@/components/BaseButton.vue";
import Testimonials from "@/components/Testimonials.vue";
import RoomSection from "@/components/home/RoomSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import Activities from "@/components/home/ActivitiesSection.vue";
import Benefits from "@/components/home/BenefitsSection.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import BookNow from "@/components/home/BookNow.vue";
import Contact from "@/components/home/ContactSection.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".fade-to-top", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
    delay: 1,
    ease: "Power4.inOut",
    duration: 0.8,
    scrollTrigger: {
      trigger: ".hero-caption",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });
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
</script>
