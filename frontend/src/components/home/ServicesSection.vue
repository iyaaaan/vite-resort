<template>
  <section class="services-container py-40 px-4">
    <div class="services-wrap">
      <h2
        class="service-title full-clip-path mb-10 text-center font-Playfair text-5xl font-bold text-primary"
      >
        Amenities
      </h2>
      <ul
        class="container grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <template v-for="(service, index) in services" :key="index">
          <li
            class="service-item group relative h-full cursor-pointer self-center border border-zinc-300 bg-white bg-cover bg-center px-4 py-8 text-center hover:border-zinc-500 hover:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,.8),rgba(0,0,0,.8)),url('@/assets/img/banner/restaurant.jpg')] hover:shadow-md"
          >
            <font-awesome-icon
              :icon="`fas fa-${service.icon}`"
              class="text-5xl text-gray-400 transition-colors group-hover:text-white"
            />
            <h3
              class="my-3 font-Playfair text-xl font-bold capitalize text-secondary group-hover:text-white"
            >
              {{ service.name }}
            </h3>
            <p class="text-justify text-gray-700 group-hover:text-white">
              {{ service.text }}
            </p>
          </li>
        </template>
      </ul>

      <!-- :style="{
              'background-image':
                'linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(/src/assets/img/banner/' +
                service.name +
                '.jpg)',
            }" -->
      <div
        class="container grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <template v-for="(service, index) in services" :key="index">
          <div
            class="h-full w-full overflow-hidden bg-cover bg-center"
            :style="newImgUrl"
          >
            <div
              class="group relative h-full translate-y-full cursor-pointer bg-white px-4 py-8 text-center"
            >
              <font-awesome-icon
                :icon="`fas fa-${service.icon}`"
                class="text-5xl text-gray-400 transition-colors group-hover:text-white"
              />
              <h3
                class="my-3 font-Playfair text-xl font-bold capitalize text-secondary group-hover:text-white"
              >
                {{ service.name }}
              </h3>
              <p class="text-justify text-gray-700 group-hover:text-white">
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

let newImgUrl = computed(() => {
  return `background-image: url("/src/assets/img/banner/${props.services[0].name}.jpg")`;
});

console.log(props.services[0].name);

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

  /* const serviceItems = gsap.utils.toArray(".service-item");
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
  }); */
});
</script>
