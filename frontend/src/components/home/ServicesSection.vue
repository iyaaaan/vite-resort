<template>
  <section class="flex flex-wrap p-4">
    <template v-for="(service, index) in services" :key="index">
      <div
        class="service-item group relative h-64 w-full overflow-hidden p-4 sm:w-1/2 md:h-[50vh] lg:w-1/4"
      >
        <!-- bg img -->
        <div class="relative h-full w-full">
          <img
            :src="`src/assets/img/ameneties/${service.name}.jpg`"
            alt="about image"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- content -->
        <div
          class="card-content relative flex h-full translate-y-full cursor-pointer flex-col justify-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7))] px-4 py-8 text-center transition-all duration-300 group-hover:-translate-y-full"
        >
          <font-awesome-icon
            :icon="`fas fa-${service.icon}`"
            class="text-5xl text-white"
          />
          <h3
            class="my-3 font-Playfair text-xl font-bold capitalize text-secondaryLight"
          >
            {{ service.name }}
          </h3>
          <p class="text-justify text-white">
            {{ service.text }}
          </p>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { computed } from "@vue/reactivity";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  services: Array,
});

onMounted(() => {
  const serviceItem = gsap.utils.toArray(".service-item");

  gsap.set(serviceItem, {
    autoAlpha: 0,
    y: 100,
  });
  ScrollTrigger.batch(serviceItem, {
    start: "top center",
    onEnter: (batch) =>
      gsap.to(batch, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.2,
        ease: "Power4.inOut",
        duration: 0.3,
      }),
  });
});
</script>
