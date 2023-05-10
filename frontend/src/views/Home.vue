<template>
  <main class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home">
      <div
        class="hero-caption relative mx-auto -mt-12 p-4 text-center md:ml-12 md:text-left"
      >
        <div
          class="fade-to-top full-clip-path pb-4 font-Allura text-6xl leading-none text-white md:text-8xl lg:text-9xl"
        >
          <span>Relax &</span>
          <span class="ml-0 inline md:ml-14 md:block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path m-0 text-base font-light text-white md:text-lg"
        >
          Life is extremely fast. Travel and have fun while your heart is young.
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
      class="h-96 w-full bg-[url('src/assets/img/banner/banner.webp')] bg-cover bg-fixed bg-bottom bg-no-repeat"
    ></section>

    <!-- How to get here -->
    <!-- <FeaturedSection :featured="featured" /> -->

    <!-- Book Now -->
    <Contact></Contact>
  </main>
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

  gsap.from(
    ".fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
      ease: "power4.inOut",
      duration: 1.2,
      scrollTrigger: {
        trigger: ".hero-caption",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart reverse restart reverse",
      },
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
