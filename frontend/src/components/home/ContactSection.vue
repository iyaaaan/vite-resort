<template>
  <section
    class="contact-sec-container container px-0 py-20 text-neutral-700 md:py-32"
  >
    <div class="text-center">
      <h2
        class="contact-sec-title full-clip-path px-4 pb-3 font-Playfair text-4xl text-beaver md:text-5xl"
      >
        What are you waiting for?
      </h2>
      <p class="contact-sec-caption full-clip-path mt-0 px-4 font-light">
        Experience the ultimate beach getaway at our resort!
      </p>
    </div>

    <div class="mt-16 flex flex-wrap items-start justify-end">
      <div class="contact-sec-img hidden w-full px-4 md:block md:w-1/2">
        <img src="src/assets/img/banner/book-now.jpg" alt="" class="w-full" />
      </div>
      <div class="w-full px-4 md:w-1/2">
        <form action="#">
          <div class="contact-sec-input full-clip-path mb-4">
            <label class="text-beaver">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              class="block w-full rounded-lg px-4 py-2 outline-none"
              autocomplete="off"
            />
          </div>

          <div class="contact-sec-input full-clip-path mb-4">
            <label class="text-beaver">E-mail</label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              class="block w-full rounded-lg px-4 py-2 outline-none"
              autocomplete="off"
            />
          </div>

          <div class="contact-sec-input full-clip-path mb-4">
            <label class="text-beaver">Message</label>
            <textarea
              id="message"
              class="block w-full px-4 py-2"
              rows="5"
              placeholder="Message"
              autocomplete="off"
            ></textarea>
          </div>

          <div>
            <BaseButton
              button-type="secondary"
              class="contact-sec-btn w-full md:w-auto"
              >Reserve your spot</BaseButton
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8, y: 100, autoAlpha: 0 },
    scrollTrigger: {
      trigger: ".contact-sec-container",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".contact-sec-title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  })
    .from(
      ".contact-sec-caption",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      0.2
    )
    .from(".contact-sec-img", { duration: 0.4 }, 0.7)
    .from(
      ".contact-sec-input",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        stagger: 0.2,
      },
      0.3
    )
    .from(".contact-sec-btn", {
      y: 0,
      duration: 0.5,
      scale: 0.8,
      ease: "Back.easeOut",
    });
});
</script>
