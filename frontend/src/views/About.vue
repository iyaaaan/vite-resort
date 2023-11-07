<template>
  <!-- Hero -->
  <HeroBanner :banner="AboutHero">
    <div
      class="full-clip-path about-text mx-auto max-w-5xl px-4 text-center font-light text-white"
    >
      <p>
        Welcome to our beach resort, where tranquil waves meet pristine shores
        and unforgettable experiences await. Nestled in the heart of paradise,
        our resort offers a haven of luxury and relaxation like no other.
        Immerse yourself in the beauty of our sun-kissed beaches, indulge in
        world-class dining, and surrender to the soothing embrace of our
        exclusive spa.
      </p>
    </div>
  </HeroBanner>

  <!-- about -->
  <section class="about-wrap py-20 text-stone-700">
    <div class="container flex flex-wrap justify-center">
      <div class="full-clip-path story-img mb-4 h-auto w-80 md:w-96 lg:mr-4">
        <img
          src="/src/assets/img/banner/about.jpg"
          alt="about page image"
          class="h-full w-full"
        />
      </div>
      <div class="mt-4 max-w-3xl lg:text-left">
        <h2
          class="full-clip-path story-title pb-2 text-center font-Playfair text-4xl md:text-5xl lg:text-left"
        >
          Our Story
        </h2>
        <p
          class="story-text full-clip-path text-justify font-light lg:text-left"
        >
          Our beach resort has a rich history that stems from a vision of
          creating a luxurious and rejuvenating retreat in harmony with the
          natural beauty of its surroundings. Inspired by the breathtaking
          coastal landscapes and a desire to provide a haven for relaxation, the
          resort was founded by a visionary entrepreneur and a team of
          passionate individuals who shared a common goal – to create an
          unparalleled getaway experience.
        </p>
        <p
          class="story-text full-clip-path text-justify font-light lg:text-left"
        >
          Whether you seek adventure or pure serenity, our resort promises to
          create cherished moments that linger in your memory. Step into a world
          where every detail is crafted with precision, where exceptional
          service and unparalleled elegance converge. Your dream vacation begins
          here, where time stands still, and your desires become reality.
          Discover the epitome of seaside sophistication and let us redefine the
          meaning of bliss. Welcome to your private oasis, where the art of
          escape is perfected.
        </p>
      </div>
    </div>
  </section>

  <!-- amenities -->
  <section class="amenities-wrap py-20">
    <div class="container">
      <h2
        class="full-clip-path amenities-title mx-auto max-w-4xl text-center font-Playfair text-2xl text-beaver md:text-4xl"
      >
        Unrivaled Luxuries and Endless Delights: Experience our Resort's
        Exceptional Facilities and Amenities
      </h2>

      <div
        class="amenities-card-wrap mt-12 grid grid-cols-1 gap-4 text-stone-700 sm:grid-cols-2 md:grid-cols-3"
      >
        <template v-for="(amenity, index) in amenities" :key="index">
          <div class="amenities-card">
            <div class="flex items-center gap-4">
              <Icon :icon="amenity.icon" class="text-4xl" />
              <span class="font-Playfair text-2xl">{{ amenity.name }}</span>
            </div>
            <p class="font-light">{{ amenity.desc }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>

  <section class="env-wrap bg-[#818d75] py-20 text-white">
    <div class="container flex flex-wrap justify-center">
      <div class="mt-4 max-w-3xl lg:mr-4 lg:text-left">
        <h2
          class="full-clip-path env-title text-center font-Playfair text-4xl md:text-5xl lg:text-left"
        >
          Environmental Commitment
        </h2>
        <p class="full-clip-path env-text text-justify font-light lg:text-left">
          At our beach resort, we are deeply committed to preserving the
          pristine beauty of our surroundings and minimizing our environmental
          footprint. Through comprehensive energy conservation measures,
          including the use of renewable energy sources and efficient
          technologies, we strive to reduce our carbon emissions and promote a
          sustainable future.
        </p>
        <p class="full-clip-path env-text text-justify font-light lg:text-left">
          Our waste management practices prioritize recycling, composting, and
          responsible disposal, ensuring that we minimize waste generation and
          promote a circular economy. Additionally, we actively engage with the
          local community through various initiatives, supporting conservation
          projects, educational programs, and empowering local businesses to
          foster sustainable development and create a positive impact on the
          environment and society.
        </p>
      </div>
      <div
        class="full-clip-path env-img order-first h-auto w-80 md:w-96 xl:order-last"
      >
        <img
          src="/src/assets/img/banner/env-com.jpg"
          alt="about page image"
          class="h-full w-full"
        />
      </div>
    </div>
  </section>

  <!-- travel information -->
  <section class="travel-wrap py-20">
    <div class="container flex flex-wrap justify-center">
      <div class="travel-img full-clip-path h-auto w-80 md:w-96 lg:mr-4">
        <img
          src="/src/assets/img/banner/travel-info.jpg"
          alt="about page image"
          class="h-full w-full"
        />
      </div>
      <div class="mt-4 max-w-3xl font-light text-stone-700">
        <h2
          class="full-clip-path travel-title text-center font-Playfair text-4xl text-beaver md:text-5xl lg:text-left"
        >
          Travel Information
        </h2>
        <span class="full-clip-path travel-sub font-light"
          >Seamless Journey to Paradise: Easy Directions to Reach Our Beach
          Resort</span
        >

        <div class="full-clip-path travel-text">
          <p>
            Below are the step-by-step instruction on how to get here from
            [Terminal Name], made easy just for you.
          </p>

          <ol class="list-decimal pl-7">
            <li>From [Terminal Name], walk to the nearby [Bus Stop Name].</li>
            <li>
              Board the [Bus Number] bus heading towards [Destination/Resort
              Name].
            </li>
            <li>
              Pay the fare of [Fare Cost], which may vary depending on the
              distance.
            </li>
            <li>
              Stay on the bus for approximately [Estimated Travel Time] minutes
              until you reach the [Bus Stop Name] near [Resort Name].
            </li>
            <li>
              Alight at [Bus Stop Name] and walk [Walking Distance] to reach our
              resort entrance.
            </li>
          </ol>

          <BaseButton
            class="text-beaver"
            button-type="borderless"
            :hasArrow="true"
            >Discover more
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AboutHero from "@/assets/img/banner/about-hero.webp";
import { Icon } from "@iconify/vue";
import HeroBanner from "@/components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.refresh();

  gsap.from(".about-text", {
    y: 50,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    autoAlpha: 0,
    delay: 1,
  });

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, autoAlpha: 0 },
    scrollTrigger: {
      trigger: ".about-wrap",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".story-img, .story-text", {
    y: 100,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.from(
    ".story-title",
    {
      y: 50,
      autoAlpha: 0,
      //"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.5
  );

  gsap.from(".amenities-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
    ease: "Power4.inOut",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".amenities-wrap",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.from(".amenities-card", {
    scale: 0.8,
    autoAlpha: 0,
    stagger: 0.2,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".amenities-card-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  let env_tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, autoAlpha: 0 },
    scrollTrigger: {
      trigger: ".env-wrap",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  env_tl.from(
    ".env-title",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  );

  env_tl.from(
    ".env-text",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  );

  env_tl.from(
    ".env-img",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.5
  );
  let travel_tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, autoAlpha: 0 },
    scrollTrigger: {
      trigger: ".travel-wrap",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
      markers: true,
    },
  });

  travel_tl.from(
    ".travel-title, .travel-sub",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  );

  travel_tl.from(
    ".travel-text",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.3
  );

  travel_tl.from(
    ".travel-img",
    {
      y: 100,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.5
  );
});

onUnmounted(() => {
  ScrollTrigger.killAll();
});

let amenities = ref([
  {
    name: "Pool",
    icon: "fa-solid:swimming-pool",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Restaurant",
    icon: "material-symbols:restaurant-menu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Casino",
    icon: "cil:casino",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Spa",
    icon: "material-symbols:spa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Casino",
    icon: "game-icons:martini",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Gym",
    icon: "mdi:gym",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
]);
</script>
