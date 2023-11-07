<template>
  <section ref="heroWrap">
    <div
      ref="heroBg"
      :style="{
        'background-image':
          'linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(' +
          props.banner +
          ')',
      }"
      class="flex w-full items-center rounded-none bg-cover bg-no-repeat"
      :class="
        props.page == 'home'
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

const heroWrap = ref(null);
const heroBg = ref(null);

const props = defineProps({
  page: String,
  banner: String,
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2.2 } });
  //tl.set(document.body, { overflow: "hidden" });
  tl.from(heroWrap.value, {
    //autoAlpha: 0,
    scale: 0.5,
    "border-radius": 15,
  });

  tl.from(
    heroBg.value,
    {
      //autoAlpha: 0,
      "border-radius": "15px",
    },
    0.5
  );

  //tl.set(document.body, { overflow: "auto" });

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
