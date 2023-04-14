<template>
  <main class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home">
      <div class="bases relative -mt-12 ml-12">
        <div
          class="fade-to-top tilta full-clip-path anime p-4 font-Allura text-8xl leading-none text-white"
        >
          <span class="custom-class">Relax &</span>
          <span class="ml-14 block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path anime mt-5 mb-4 text-xl font-normal text-white"
        >
          Life is extremely fast. Travel and have fun while your heart is young.
        </p>

        <BaseButton
          button-type="primary"
          class="fade-to-top full-clip-path anime"
          >Book Now</BaseButton
        >
      </div>
    </HeroBanner>

    <!-- ./About -->
    <AboutSection />

    <!-- Featured Room -->
    <RoomSection />

    <!-- Services -->
    <ServicesSection :services="services" />

    <!-- <div
      ref="bgSection"
      class="h-96 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('src/assets/img/banner/contact.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
    ></div> -->

    <!-- Testimonials -->
    <Testimonials :testimonials="testimonials"></Testimonials>

    <!-- How to get here -->
    <!-- <FeaturedSection :featured="featured" /> -->
    <!-- <Testpage /> -->

    <div class="my-cont flex h-screen flex-col justify-center">
      <div class="my-wrap flex">
        <section class="my-section h-80 w-80 shrink-0 bg-red-100"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-200"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-300"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-400"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-500"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-600"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-700"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-800"></section>
        <section class="my-section h-80 w-80 shrink-0 bg-red-900"></section>
      </div>
      <div class="my-wrap2 flex flex-row-reverse">
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-100"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-200"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-300"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-400"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-500"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-600"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-700"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-800"></section>
        <section class="my-section2 h-80 w-80 shrink-0 bg-orange-900"></section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import Testpage from "@/views/Testpage.vue";
import BaseButton from "@/components/BaseButton.vue";
import Testimonials from "@/components/Testimonials.vue";
import RoomSection from "@/components/home/RoomSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const bgSection = ref(null);

onMounted(() => {
  // define lenis
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // integrate lenis into gsap
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  /* function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
 */

  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2.2 } });
  tl.from(
    ".fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
    },
    0.5
  );

  const sections = gsap.utils.toArray(".my-section");
  const sections2 = gsap.utils.toArray(".my-section2");
  let maxWidth = 0;
  let maxWidth2 = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
    });
  };

  const getMaxWidth2 = () => {
    maxWidth2 = 0;
    sections2.forEach((section) => {
      maxWidth2 += section.offsetWidth;
    });
  };

  getMaxWidth();
  getMaxWidth2();

  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth2);

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".my-cont",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=3000",
      invalidateOnRefresh: true,
      markers: true,
    },
  });

  gsap.to(sections2, {
    x: () => `+${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".my-cont",
      scrub: true,
      start: "top top",
      end: "+=3000",
      invalidateOnRefresh: true,
      markers: true,
    },
  });

  sections.forEach((sec, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: () =>
        "top top-=" +
        (sec.offsetLeft - window.innerWidth / 2) *
          (maxWidth2 / (maxWidth2 - window.innerWidth)),
      end: () =>
        "+=" + sec.offsetWidth * (maxWidth2 / (maxWidth2 - window.innerWidth)),
      toggleClass: { targets: sec, className: "active" },
    });
  });
});

const services = ref([
  {
    name: "Pool",
    icon: "swimming-pool",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem! ",
  },
  {
    name: "Restaurant",
    icon: "utensils",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, maiores!",
  },
  {
    name: "Gym",
    icon: "dumbbell",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas?",
  },
  {
    name: "Bar",
    icon: "glass-martini-alt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },
]);

const testimonials = ref([
  {
    name: "Christian Ocol",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem!",
    img: "test-1.png",
    rating: 4,
  },
  {
    name: "Christian 2",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
    rating: 5,
  },
  {
    name: "Christian 3",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
    rating: 4,
  },
]);

const featured = ref(["about.jpg", "package.jpg", "contact.jpg", "home.jpg"]);
</script>
