<template>
  <section ref="heroWrap">
    <div
      ref="heroBg"
      :style="{
        'background-image':
          'linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(/src/assets/img/banner/' +
          banner +
          '.webp)',
      }"
      class="flex w-full items-center bg-cover bg-no-repeat"
      :class="
        banner === 'home-hero'
          ? 'h-screen bg-fixed bg-bottom'
          : 'h-[70vh] bg-center'
      "
    >
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroWrap = ref(null);
const heroBg = ref(null);

defineProps({
  banner: String,
});

onMounted(() => {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2.2 } });
  tl.from(heroWrap.value, {
    autoAlpha: 0,
  });

  gsap.fromTo(
    heroBg.value,
    {
      backgroundPositionY: () => "100%",
    },
    {
      backgroundPositionY: () => "40%",
      ease: "none",
      scrollTrigger: {
        trigger: heroWrap.value,
        start: () => "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // to make it responsive
      },
    }
  );
});
</script>
