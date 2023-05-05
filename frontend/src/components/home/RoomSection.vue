<template>
  <section class="rsWrap overflow-hidden bg-[#72645B] px-4 py-44 lg:px-0">
    <div class="container flex flex-col flex-wrap items-center lg:flex-row">
      <div
        class="mb-12 flex flex-1 flex-col items-center justify-center py-4 md:w-3/4 lg:mb-0 lg:px-4"
      >
        <div class="w-full lg:max-w-lg">
          <h2
            class="rsText full-clip-path py-4 font-Playfair text-6xl text-white"
          >
            Comfortable Stay
          </h2>
          <p class="rsText full-clip-path my-4 font-light text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quisquam excepturi ut animi id ipsam vel, vitae corporis maxime
            repellat?
          </p>
          <router-link
            :to="{ name: 'package' }"
            class="rsText full-clip-path block text-white underline"
          >
            <BaseButton :hasArrow="true" button-type="borderless" class="p-0"
              >Discover more
            </BaseButton>
          </router-link>
        </div>
      </div>

      <div
        class="rsRight full-clip-path h-[30rem] flex-1 bg-slate-600 md:w-3/4"
      >
        <img
          ref="roomBg"
          src="@/assets/img/room/deluxe.jpg"
          alt=""
          class="h-full w-full object-cover object-left"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
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
      autoAlpha: 0,
      "clip-path": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      duration: 0.6,
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
