<template>
  <section class="feat-container flex h-screen flex-col justify-center">
    <div class="flex">
      <template v-for="(feat, index) in featured" :key="index">
        <div class="feat-wrap w-80 shrink-0">
          <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="w-full"
          />
        </div>
      </template>
    </div>

    <div class="flex flex-row-reverse">
      <template v-for="(feat, index) in featured" :key="index">
        <div class="feat-wrap2 w-80 shrink-0">
          <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="w-full"
          />
        </div>
      </template>
    </div>

    <!-- <div class="fs-caption full-clip-path mt-8 text-center">
      <span
        class="inline-block rounded-lg bg-primary p-2 text-white hover:bg-primaryLight"
      >
        <font-awesome-icon icon="fas fa-map-pin" class="text-lg text-red-600" />
        How to get here
      </span>
    </div> -->
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
  /* let tl = gsap.timeline({
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
  ); */

  const featWrap = gsap.utils.toArray(".feat-wrap");
  const featWrap2 = gsap.utils.toArray(".feat-wrap2");

  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    featWrap.forEach((feat) => {
      maxWidth += feat.offsetWidth;
    });
  };

  getMaxWidth();

  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.to(featWrap, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".feat-container",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=2000",
      invalidateOnRefresh: true,
    },
  });

  gsap.to(featWrap2, {
    x: () => `+${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".feat-container",
      scrub: true,
      start: "top top",
      end: "+=2000",
      invalidateOnRefresh: true,
    },
  });
});
</script>
