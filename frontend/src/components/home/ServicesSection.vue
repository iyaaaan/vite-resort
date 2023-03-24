<template>
  <section class="my-24">
    <h2 class="text-center font-Playfair text-5xl font-bold text-primary">
      Services
    </h2>
    <ul class="sv mx-auto flex max-w-5xl space-x-10" ref="sv">
      <template v-for="(service, index) in services" :key="index">
        <li
          class="mt-10 rounded-md border border-solid border-zinc-100 bg-white p-4 text-center shadow-lg"
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  services: Array,
});

const sv = ref(null);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: sv.value,
        start: "top center",
        end: "+=400",
        //scrub: true,
        markers: true,
      },
    })
    .from(sv.value.children, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,
    });
});
</script>
