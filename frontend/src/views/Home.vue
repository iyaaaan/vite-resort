<template>
  <main class="smooth-scroll">
    <!-- Hero -->
    <HeroBanner banner="home" class="target1">
      <div class="bases relative -mt-12 ml-12" ref="captionWrapper">
        <div
          class="fade-to-top tilta full-clip-path anime p-4 font-Allura text-8xl leading-none text-white"
          ref="heroCaption"
        >
          <span class="custom-class">Relax &</span>
          <span class="ml-14 block">Recharge</span>
        </div>

        <p
          class="fade-to-top full-clip-path anime mt-5 mb-4 text-xl font-normal text-white"
          ref="heroText"
        >
          Life is extremely fast. Travel and have fun while your heart is young.
        </p>

        <BaseButton
          button-type="primary"
          ref="heroButton"
          class="fade-to-top full-clip-path anime"
          >Book Now</BaseButton
        >
      </div>
    </HeroBanner>
    <!-- ./Hero -->

    <!--    <section
      class="item1 flex items-center justify-center font-Allura text-4xl font-bold text-red-600"
    >
      1
    </section>
    <section
      class="item2 flex items-center justify-center font-Allura text-4xl font-bold text-red-600"
    >
      2
    </section>
    <section
      class="item3 flex items-center justify-center font-Allura text-4xl font-bold text-red-600"
    >
      3
    </section> -->

    <!-- ./About -->
    <AboutSection />

    <!-- Featured Room -->
    <!-- <RoomSection /> -->

    <!-- Services -->
    <!-- <ServicesSection :services="services" /> -->

    <!-- Testimonials -->
    <!-- <Testimonials :testimonials="testimonials"></Testimonials> -->

    <!-- How to get here -->
    <!-- <FeaturedSection :featured="featured" /> -->
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import Testpage from "@/views/Testpage.vue";
import BaseButton from "@/components/BaseButton.vue";
import Testimonials from "@/components/Testimonials.vue";
import RoomSection from "../components/home/RoomSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import FeaturedSection from "../components/home/FeaturedSection.vue";
import Sample1 from "../components/home/Sample1.vue";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const container = ref(null);
const captionWrapper = ref(null);

/*
function setLocomotiveScroll() {
  new LocomotiveScroll({
    el: container.value,
    smooth: true,
    multiplier: 1,
  });
} */

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  const vw = (coef) => window.innerWidth * (coef / 100);
  const vh = (coef) => window.innerHeight * (coef / 100);

  const heroScroller = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: ".bases",
      scroller: ".smooth-scroll",
      start: 10,
      scrub: true,
      end: `${vh(100)}`,
    },
  });

  gsap.from(
    ".fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
    },
    "heroScroll"
  );

  heroScroller.to(
    ".fade-to-top",
    {
      y: 100,
      autoAlpha: 0,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.2,
    },
    "heroScroll"
  );
  heroScroller.to(
    ".target1",
    {
      scale: 0.5,
    },
    "heroScroll"
  );

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
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
