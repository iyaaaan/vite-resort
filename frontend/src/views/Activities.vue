<template>
  <!-- Hero -->
  <HeroBanner :banner="ActivityHero">
    <div
      class="full-clip-path activity-text mx-auto max-w-5xl px-4 text-center font-light text-white"
    >
      <p>
        From thrilling water sports to energizing beachside activities, our
        beach resort offers a wide range of experiences to satisfy your inner
        adventurer. Whether you're seeking a heart-pounding adrenaline rush or a
        leisurely day under the sun, our carefully curated selection of
        activities promises endless fun and unforgettable memories for guests of
        all ages and interests.
      </p>
    </div>
  </HeroBanner>

  <!-- activities -->
  <section class="activity-wrap container py-20">
    <h2
      class="full-clip-path activity-title mb-12 px-4 text-center font-Playfair text-3xl text-beaver md:text-4xl"
    >
      Embrace Adventure and Fun: Explore Our Thrilling Sports and Activities!
    </h2>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      <template v-for="item in items" :key="item.id">
        <div class="activity-card">
          <custom-card :card="item" folder="activities"></custom-card>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import HeroBanner from "@/components/HeroBanner.vue";
import ActivityHero from "@/assets/img/banner/activity-hero.webp";
import BaseButton from "@/components/BaseButton.vue";
import CustomCard from "@/components/CustomCard.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.refresh();

  gsap.from(".activity-text", {
    y: 50,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    autoAlpha: 0,
    delay: 1,
  });

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".activity-wrap",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".activity-title", {
    y: 50,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    autoAlpha: 0,
    delay: 1,
  });

  tl.from(".activity-card", {
    scale: 0.8,
    autoAlpha: 0,
    stagger: 0.2,
  });
});

onUnmounted(() => {
  ScrollTrigger.killAll();
});

const items = ref([
  {
    id: 1,
    title: "Kayak",
    text: "Paddle along the coastline and discover hidden coves and picturesque landscapes.",
    inclusions: "Kayak, Helmet, Paddle, Lifevest",
    price: "$20",
    img: "kayak.webp",
  },
  {
    id: 2,
    title: "Beach Volleyball",
    text: "Gather your friends for a friendly game of beach volleyball in the sun-soaked sand.",
    inclusions: "Volleyball, Net",
    price: "Free",
    img: "volleyball.webp",
  },
  {
    id: 3,
    title: "Snorkeling",
    text: "Dive into the crystal-clear waters and explore the vibrant underwater world teeming with marine life.",
    inclusions: "Goggles, Fins",
    price: "$25",
    img: "snorkel.webp",
  },
  {
    id: 4,
    title: "Surfing",
    text: "Catch the perfect wave and experience the thrill of riding the ocean's swells.",
    inclusions: "Surf Board, Trainer (for beginners)",
    price: "$35",
    img: "surf.webp",
  },
  {
    id: 5,
    title: "Parasailing",
    text: "Soar high above the coastline and take in breathtaking panoramic views from the sky",
    inclusions: "Lifevest, Helmet, Parachute, Speedboat",
    price: "$80",
    img: "parasail.webp",
  },
  {
    id: 6,
    title: "Jet Ski",
    text: "Experience the thrill of speeding across the waves on a jet ski.",
    inclusions: "Jet Ski, Lifevest, Helmet",
    price: "$50",
    img: "jetski.webp",
  },
  {
    id: 7,
    title: "Beach Bonfire",
    text: "Gather around a cozy beach bonfire under the starry sky, roasting marshmallows and sharing stories with loved ones.",
    inclusions: "Wood, Matches, Gas, (Bring your own mallows)",
    price: "Free",
    img: "bonfire.webp",
  },
]);
</script>

<style lang="scss" scoped></style>
