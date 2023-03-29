<template>
  <section class="rsWrap relative my-24 flex" data-scroll data-scroll-section>
    <div class="flex flex-1 flex-col items-center justify-center bg-white">
      <div class="max-w-lg">
        <h2
          class="rsText full-clip-path p-4 font-Playfair text-5xl font-bold text-primary"
        >
          Comfortable Stay
        </h2>
        <p class="rsText full-clip-path my-4 text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          quisquam excepturi ut animi id ipsam vel, vitae corporis maxime
          repellat?
        </p>
        <router-link
          :to="{ name: 'package' }"
          class="rsText full-clip-path block underline"
          >View More</router-link
        >
      </div>
    </div>

    <div class="rsRight full-clip-path h-[30rem] flex-1 border bg-slate-600">
      <!-- <img
        src="@/assets/img/room/room-1.jpg"
        alt=""
        class="h-full w-full object-cover"
      /> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 2 },
    scrollTrigger: {
      trigger: ".rsWrap",
      start: "top 80%",
    },
  });

  tl.from(".rsText", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
  });

  tl.from(
    ".rsRight",
    {
      x: 100,
      autoAlpha: 0,
      scale: 0.8,
      "clip-path": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    },
    0.3
  );
});
</script>
