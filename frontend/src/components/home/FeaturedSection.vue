<template>
  <section class="fs-wrap py-40 px-4">
    <div class="fs-img flex items-center justify-center space-x-5">
      <template v-for="(feat, index) in featured" :key="index">
        <div
          class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100 bg-slate-600 shadow-xl"
        >
          <!-- <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="w-full"
          /> -->
        </div>
      </template>
    </div>

    <div class="fs-caption full-clip-path mt-8 text-center">
      <span
        class="inline-block rounded-lg bg-primary p-2 text-white hover:bg-primaryLight"
      >
        <font-awesome-icon icon="fas fa-map-pin" class="text-lg text-red-600" />
        How to get here
      </span>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  featured: Array,
});

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Power4.easeOut", duration: 2 },
    scrollTrigger: {
      trigger: ".fs-wrap",
      start: "top 80%",
    },
  });

  tl.from(".fs-img > *", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.7,
    ease: "Back.easeOut",
  });

  tl.from(
    ".fs-caption",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    0.5
  );
});
</script>
