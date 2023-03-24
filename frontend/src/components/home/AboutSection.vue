<template>
  <section class="my-24 mx-auto max-w-3xl p-4 text-center">
    <h2 class="atitle text-5xl leading-none text-secondary">
      Paradise Beach Resort
    </h2>
    <p class="atitle mt-2 text-gray-600">The best place to clear your mind.</p>

    <p class="atext my-5 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero
      repellat consectetur saepe facilis. Placeat, similique quisquam! Ut,
      consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore,
      perspiciatis necessitatibus dolorem quas.
    </p>

    <p class="my-5 text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis
      corrupti. Voluptates, harum a reprehenderit explicabo quisquam nostrum
      dignissimos provident.
    </p>

    <font-awesome-icon
      icon="fa-solid fa-water"
      class="mx-auto my-12 block text-4xl text-gray-300"
    />

    <div
      class="my-12 mx-auto h-80 w-[30rem] bg-white p-2 shadow shadow-gray-800"
    >
      <img
        src="@/assets/img/banner/home-about.jpg"
        alt="about image"
        class="h-full w-full"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  /*  gsap.from(".atitle", {
    scrollTrigger: ".atitle",
    y: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.2,
  }); */
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".atitle",
        start: "top center",
        end: "+=400",
        //scrub: true,
        markers: true,
      },
    })

    .from(".atitle", {
      y: -100,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,
    })

    .from(".atext", {
      y: -100,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,
    });
});
</script>
