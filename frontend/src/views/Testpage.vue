<template>
  <section
    class="as-wrap my-24 mx-auto max-w-3xl p-4 text-center"
    data-scroll
    data-scroll-section
  >
    <div>
      <h2
        class="as-fade-to-top full-clip-path text-5xl leading-none text-secondary"
      >
        Paradise Beach Resort
      </h2>
      <p class="as-fade-to-top full-clip-path atitle mt-2 text-gray-600">
        The best place to clear your mind.
      </p>

      <p class="as-fade-to-top full-clip-path atext my-5 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero
        repellat consectetur saepe facilis. Placeat, similique quisquam! Ut,
        consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore,
        perspiciatis necessitatibus dolorem quas.
      </p>

      <p class="as-fade-to-top full-clip-path my-5 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis
        corrupti. Voluptates, harum a reprehenderit explicabo quisquam nostrum
        dignissimos provident.
      </p>

      <font-awesome-icon
        icon="fa-solid fa-water"
        class="asWave full-clip-path mx-auto my-12 block text-4xl text-gray-300"
      />

      <div
        class="asImg w-[30rem my-12 mx-auto h-80 bg-slate-600 p-2 shadow shadow-gray-800"
      >
        <!-- <img
          src="@/assets/img/banner/home-about.jpg"
          alt="about image"
          class="h-full w-full"
        /> -->
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
    defaults: { ease: "Power4.easeOut", duration: 2 },
    scrollTrigger: {
      trigger: ".as-wrap",
      markers: true,
      start: "center center",
    },
  });

  tl.from(".as-fade-to-top", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
  });

  tl.from(
    ".asWave",
    {
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 2,
    },
    0.5
  );

  tl.from(
    ".asImg",
    {
      autoAlpha: 0,
      scale: 0.8,
      duration: 2,
    },
    0.8
  );
});
</script>
