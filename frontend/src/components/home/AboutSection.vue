<template>
  <section
    class="as-wrap relative flex w-full items-center justify-center px-4 py-40 text-center"
  >
    <div class="max-w-3xl">
      <h2
        class="as-fade-to-top full-clip-path font-Allura text-7xl leading-none text-secondary"
      >
        Paradise Beach Resort
      </h2>
      <p class="as-fade-to-top full-clip-path atitle mt-2 text-gray-600">
        The best place to clear your mind.
      </p>

      <p class="as-fade-to-top full-clip-path my-5 text-justify text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero
        repellat consectetur saepe facilis. Placeat, similique quisquam! Ut,
        consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore,
        perspiciatis necessitatibus dolorem quas.
      </p>

      <p class="as-fade-to-top full-clip-path my-5 text-justify text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis
        corrupti. Voluptates, harum a reprehenderit explicabo quisquam nostrum
        dignissimos provident.
      </p>

      <font-awesome-icon
        icon="fa-solid fa-water"
        class="as-wave full-clip-path mx-auto my-12 block text-4xl text-gray-300"
      />

      <div
        class="as-img my-12 mx-auto h-80 w-[30rem] p-2 shadow shadow-gray-800"
      >
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

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.inOut", duration: 0.5 },
    scrollTrigger: {
      trigger: ".as-wrap",
      start: "top 85%",
    },
  });

  tl.from(
    ".as-fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
    },
    0.1
  );
  tl.from(
    ".as-wave",
    {
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    },
    0.5
  );
  /*   tl.from(
    ".as-img",
    {
      autoAlpha: 0,
      scale: 0.8,
    },
    0.8
  ); */

  /* gsap.from(".as-img", {
    scale: 0,
    scrollTrigger: {
      trigger: ".as-img",
      start: "center center",
      pin: true,
      toggleActions: "play reverse play none",
      markers: true,
    },
  }); */
});
</script>
