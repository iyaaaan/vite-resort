<template>
  <section
    class="services-container flex h-screen items-center justify-center py-40 px-4"
  >
    <div class="services-wrap w-full">
      <h2
        class="service-title full-clip-path text-center font-Playfair text-5xl font-bold text-primary"
      >
        Services
      </h2>
      <ul
        class="mx-auto flex flex-nowrap space-x-10 overflow-hidden py-10 px-4"
      >
        <template v-for="(service, index) in services" :key="index">
          <li
            class="service-item w-80 shrink-0 rounded-md border border-solid border-zinc-300 bg-neutral-100 p-4 text-center shadow-lg"
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
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  services: Array,
});

onMounted(() => {
  gsap.from(".service-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "Back.easeOut",
    duration: 0.8,
    scrollTrigger: {
      trigger: ".services-container",
      start: "top center",
    },
  });

  const serviceItems = gsap.utils.toArray(".service-item");
  let maxWidth = 0;

  const serviceItemWidth = () => {
    maxWidth = 0;
    serviceItems.forEach((item) => {
      maxWidth += item.offsetWidth;
    });
  };

  serviceItemWidth();

  ScrollTrigger.addEventListener("refreshInit", serviceItemWidth);

  gsap.to(serviceItems, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".services-container",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=2000",
      invalidateOnRefresh: true,
    },
  });

  serviceItems.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: () =>
        "top top-=" +
        (item.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth)),
      end: () =>
        "+=" + item.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
    });
  });
});
</script>
