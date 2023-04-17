<template>
  <div class="flex h-screen w-screen items-center justify-center">HELLO</div>
  <div class="con flex h-screen items-center">
    <div class="wrapper flex flex-nowrap">
      <section
        class="section vh-100 d-flex justify-content-center align-items-center w-96 flex-shrink-0"
      >
        Part One
      </section>
      <section
        class="section section--dark section--small vh-100 d-flex justify-content-center align-items-center flex-shrink-0"
      >
        Part Two
      </section>
      <section
        class="section section--small vh-100 d-flex justify-content-center align-items-center flex-shrink-0"
      >
        Part Three
      </section>
      <section
        class="section section--small vw-100 vh-100 d-flex justify-content-center align-items-center flex-shrink-0"
      >
        Part Four
      </section>
    </div>
  </div>

  <div class="flex h-screen w-screen items-center justify-center">WORLD</div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = gsap.utils.toArray("section");
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".con",
      pin: true,
      scrub: true,
      //end: () => `+=${maxWidth}`,
      start: "top top",
      end: "+=2000",
      invalidateOnRefresh: true,
    },
  });

  sections.forEach((sct, i) => {
    ScrollTrigger.create({
      trigger: sct,
      start: () =>
        "top top-=" +
        (sct.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth)),
      end: () =>
        "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
      toggleClass: { targets: sct, className: "active" },
    });
  });
});
</script>

<style scoped>
.section {
  font-size: 5rem;
}
.section--large {
  width: 100vw;
  background-color: #8d3dae;
  color: white;
}
.section--small {
  width: 46rem;
}
.section--dark {
  color: white;
  background-color: black;
}

section {
  font-weight: 900;
  transition: color 0.3s;
}
</style>
