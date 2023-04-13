<template>
  <section class="sv-wrap py-40 px-4">
    <h2
      class="sv-title full-clip-path text-center font-Playfair text-5xl font-bold text-primary"
    >
      Services
    </h2>
    <ul class="sv-list mx-auto flex max-w-5xl space-x-10">
      <template v-for="(service, index) in services" :key="index">
        <li
          class="mt-10 rounded-md border border-solid border-zinc-300 bg-neutral-100 p-4 text-center shadow-lg"
        >
          <font-awesome-icon
            :icon="`fas fa-${service.icon}`"
            class="text-4xl text-gray-400"
          />
          <h3 class="my-3 font-Playfair text-xl font-bold text-secondary">
            {{ service.name }}
          </h3>
          <p class="text-justify text-gray-700">{{ service.text }}</p>
        </li>
      </template>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  services: Array,
});

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Power4.easeOut", duration: 2 },
    scrollTrigger: {
      trigger: ".sv-wrap",
      start: "top center",
    },
  });

  tl.from(".sv-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });
  tl.from(
    ".sv-list > *",
    {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: "Back.easeOut",
    },
    0.5
  );
});
</script>
