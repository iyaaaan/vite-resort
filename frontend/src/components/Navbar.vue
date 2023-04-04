<template>
  <header class="relative z-10">
    <nav
      class="clip-path-to-bottom fixed top-0 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-black p-4 font-Montserrat"
      ref="nav"
      data-scroll
      data-scroll-section
    >
      <template v-for="(menu, index) in menus" :key="index">
        <router-link
          :to="{ name: menu }"
          class="group relative m-4 flex text-sm uppercase tracking-widest text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:after:right-0 hover:after:w-full"
        >
          <span
            class="relative inline-block overflow-hidden p-0 transition duration-300 before:absolute before:left-0 before:inline-block before:translate-y-full before:transition before:duration-300 before:content-[attr(data-before)] group-hover:before:translate-y-0"
            :data-before="menu"
          >
            <span
              class="inline-block translate-y-0 transition duration-300 group-hover:-translate-y-full"
              >{{ menu }}</span
            >
          </span>
        </router-link>

        <!-- logo -->
        <router-link
          :key="index"
          class="item cursor-pointer"
          v-if="index === 1"
          :to="{ name: 'home' }"
        >
          <img
            src="@/assets/img/logo.png"
            alt="Company Logo"
            height="120"
            width="120"
          />
        </router-link>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menus = ref(["home", "about", "package", "contact"]);

const nav = ref(null);

onMounted(() => {
  const showAnim = gsap
    .from(nav.value, {
      yPercent: -100,
      paused: true,
      duration: 1,
      ease: "Power4.easeOut",
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
});
</script>

<style scoped></style>
