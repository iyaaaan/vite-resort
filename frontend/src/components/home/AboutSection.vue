<template>
  <section
    class="as-wrap relative flex w-full items-center justify-center px-4 py-32 text-center"
  >
    <div class="max-w-full text-stone-700 md:max-w-3xl">
      <h2
        class="as-title full-clip-path font-Allura text-5xl leading-none text-secondary md:text-7xl"
      >
        Paradise Beach Resort
      </h2>
      <p class="atitle mt-2 font-light">The best place to clear your mind.</p>

      <p class="my-5 text-justify font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero
        repellat consectetur saepe facilis. Placeat, similique quisquam! Ut,
        consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore,
        perspiciatis necessitatibus dolorem quas.
      </p>

      <p class="my-5 text-justify font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis
        corrupti. Voluptates, harum a reprehenderit explicabo quisquam nostrum
        dignissimos provident.
      </p>

      <font-awesome-icon
        icon="fa-solid fa-water"
        class="as-wave full-clip-path mx-auto my-12 block text-4xl text-neutral-400"
      />

      <div class="as-img my-12 mx-auto h-auto w-full md:w-[30rem]">
        <img
          src="@/assets/img/banner/home-about.jpg"
          alt="about image"
          class="h-full w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".as-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "Power4.inOut",
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".as-title",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });
});
</script>
