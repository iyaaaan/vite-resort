<template>
  <section
    class="rsWrap overflow-hidden rounded-lg bg-[#72645B] px-4 py-20 md:py-32 lg:py-44"
  >
    <div
      class="container flex flex-col flex-wrap items-center px-0 lg:flex-row"
    >
      <div
        class="mb-12 flex flex-1 flex-col items-center justify-center py-4 md:w-3/4 lg:mb-0"
      >
        <div class="w-full lg:max-w-lg">
          <h2
            class="rsText full-clip-path py-2 font-Playfair text-4xl text-white sm:text-5xl xl:text-6xl"
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
        class="rsRight full-clip-path h-auto flex-1 overflow-hidden rounded-lg bg-slate-600 md:w-3/4 xl:h-[30rem]"
      >
        <img
          ref="roomBg"
          src="@/assets/img/room/accommodation-banner.jpg"
          alt=""
          class="h-full w-full object-cover"
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
    defaults: { ease: "Power4.inOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".rsWrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
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
    },
    0.3
  );

  gsap.set(roomBg.value, { scale: 1.2 });
  gsap.to(roomBg.value, {
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".rsWrap",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>
