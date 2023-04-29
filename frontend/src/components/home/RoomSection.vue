<template>
  <section
    class="rsWrap relative flex items-center bg-stone-700 py-40"
    data-scroll
    data-scroll-section
  >
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="max-w-lg p-4">
        <h2
          class="rsText full-clip-path py-4 font-Playfair text-5xl font-bold text-white"
        >
          Comfortable Stay
        </h2>
        <p class="rsText full-clip-path my-4 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          quisquam excepturi ut animi id ipsam vel, vitae corporis maxime
          repellat?
        </p>
        <router-link
          :to="{ name: 'package' }"
          class="rsText full-clip-path block text-white underline"
          >View Rooms</router-link
        >
      </div>
    </div>

    <div class="rsRight full-clip-path h-[30rem] flex-1 bg-slate-600">
      <img
        ref="roomBg"
        src="@/assets/img/room/room-1.jpg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roomBg = ref(null);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.inOut", duration: 1 },
    scrollTrigger: {
      trigger: ".rsWrap",
      start: "top center",
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
      x: 200,
      autoAlpha: 0,
      "clip-path": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    },
    0.3
  );

  gsap.set(roomBg.value, { scale: 1.2 });
  gsap.to(roomBg.value, {
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".rsWrap",
      start: "top center",
      scrub: true,
    },
  });
});
</script>
