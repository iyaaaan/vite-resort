<template>
  <section class="services-container py-40 px-4">
    <div class="services-wrap">
      <h2
        class="service-title full-clip-path mb-10 text-center font-Playfair text-5xl font-bold text-primary"
      >
        Amenities
      </h2>

      <!-- :style="{
              'background-image':
                'linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(/src/assets/img/banner/' +
                service.name +
                '.jpg)',
            }" -->
      <div
        class="card container grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <template v-for="(service, index) in services" :key="index">
          <div
            class="service-item group relative h-full w-full overflow-hidden bg-cover bg-center"
          >
            <!-- bg img -->
            <div class="absolute h-full w-full">
              <img
                :src="`src/assets/img/ameneties/${service.name}.jpg`"
                alt="about image"
                class="h-full w-full object-cover"
              />
            </div>
            <!-- content -->
            <div
              class="card-content relative h-full translate-y-full cursor-pointer bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.7))] px-4 py-8 text-center transition-all duration-300 group-hover:translate-y-0"
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
      </div>
    </div>
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
  gsap.from(".service-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
    duration: 1,
    scrollTrigger: {
      trigger: ".services-container",
      start: "top center",
    },
  });

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
        ease: "Back.easeOut",
        duration: 0.8,
      }),
  });
});
</script>
