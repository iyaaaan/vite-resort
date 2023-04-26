<template>
  <section
    class="feat-container w-100 z-10 flex h-screen flex-col justify-center overflow-hidden"
  >
    <div class="w flex w-80 flex-nowrap overflow-hidden">
      <template v-for="(feat, index) in featured" :key="index">
        <div class="feat-wrap w-80 shrink-0">
          <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="h-full w-full"
          />
        </div>
      </template>
    </div>

    <!--   <div class="flex translate-x-2 flex-row-reverse">
      <template v-for="(feat, index) in featured" :key="index">
        <div class="feat-wrap2 h-[50vh] w-auto shrink-0">
          <img
            :src="`src/assets/img/banner/${feat}`"
            :alt="feat"
            class="h-full w-full"
          />
        </div>
      </template>
    </div> -->

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
    x: () => `-${maxWidth - (window.innerWidth - maxWidth)}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".feat-container",
      pin: true,
      scrub: true,
      pinSpacing: false,
      start: "top top",
      end: "+=3000",
      invalidateOnRefresh: true,
      snap: 1 / (featWrap.length - 0.5),
    },
  });

  gsap.to(featWrap2, {
    x: () => `+${maxWidth - (window.innerWidth - maxWidth)}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".feat-container",
      scrub: true,
      start: "top top",
      end: "+=3000",
      invalidateOnRefresh: true,
    },
  });
});
</script>
