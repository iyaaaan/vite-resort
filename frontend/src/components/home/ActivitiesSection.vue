<template>
  <section
    class="acts-container container flex flex-wrap justify-center border-b border-b-gray-500 py-20 px-0 md:py-32"
  >
    <!-- left -->
    <div
      class="flex w-full flex-wrap items-center justify-center lg:w-2/3 xl:w-1/2"
    >
      <div class="acts-card-wrap flex flex-wrap justify-center">
        <!-- card -->
        <template v-for="activity in activities" key="index">
          <div class="acts-card w-full p-4 md:w-1/2">
            <div class="rounded-lg border bg-white px-8 py-10 text-stone-700">
              <!-- card icon -->
              <Icon :icon="activity.icon" class="mx-auto text-7xl" />

              <!-- card title -->
              <h3 class="mt-8 text-center font-Playfair text-xl font-bold">
                {{ activity.name }}
              </h3>

              <!-- card description -->
              <p class="text-justify font-light">
                {{ activity.desc }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- right -->
    <div
      class="order-first my-10 w-full px-4 text-center lg:order-last lg:my-20 lg:w-1/3 lg:text-left xl:w-1/2"
    >
      <div class="acts-text-wrap">
        <h2
          class="acts-title full-clip-path pb-7 font-Playfair text-3xl text-beaver sm:text-5xl lg:text-4xl xl:text-6xl"
        >
          Engage yourself in our fun and exciting outdoor activities!
        </h2>

        <router-link
          :to="{ name: 'Rooms' }"
          class="acts-cta full-clip-path block"
        >
          <BaseButton
            :hasArrow="true"
            button-type="borderless"
            class="p-0 text-stone-500"
            >Discover more
          </BaseButton>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".acts-title, .acts-cta", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
    ease: "Power4.inOut",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".acts-card-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.from(".acts-card", {
    scale: 0.8,
    autoAlpha: 0,
    stagger: 0.2,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".acts-card-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });
});

const activities = ref([
  {
    icon: "mdi:diving-snorkel",
    name: "Snorkeling",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "map:kayaking",
    name: "Kayaking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "material-symbols:surfing-rounded",
    name: "Surfing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "map:jet-skiing",
    name: "Jet Ski",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
]);
</script>

<style lang="scss" scoped></style>
