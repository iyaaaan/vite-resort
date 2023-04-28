<template>
  <header class="relative z-10">
    <nav
      class="clip-path-to-bottom fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between bg-gradient-to-b from-black p-4 font-Montserrat transition-transform duration-300 ease-linear"
      :class="{ 'bg-stone-700': !topOfPage, '-translate-y-full': !showHeader }"
      ref="nav"
      data-scroll
      data-scroll-section
    >
      <!-- logo -->
      <router-link class="cursor-pointer items-center" :to="{ name: 'home' }">
        <img
          class="inline-block"
          src="@/assets/img/logo.png"
          alt="Company Logo"
          height="80"
          width="80"
        />
        <h2 class="hidden font-Allura text-4xl text-white md:inline-block">
          Paradise Beach Resort
        </h2>
      </router-link>

      <!-- menu -->
      <div class="basis-full">
        <template v-for="(menu, index) in menus" :key="index">
          <div>
            <router-link
              :to="{ name: menu }"
              class="group relative m-4 inline-block text-sm uppercase tracking-widest text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:after:right-0 hover:after:w-full"
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
          </div>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menus = ref(["home", "about", "package", "contact"]);

const nav = ref(null);

let topOfPage = ref(true);

let showHeader = ref(true);
let lastScrollPosition = ref(0);
let scrollOffset = ref(1000);

// check if navbar is not at the top of the page
const handleScroll = () => {
  if (window.pageYOffset > 0) {
    if (topOfPage.value) topOfPage.value = false;
    console.log("not top");
  } else {
    if (!topOfPage.value) topOfPage.value = true;
    console.log("top");
  }
};

const onScroll = () => {
  /* if (window.pageYOffset < 0) {
    return;
  }
  if (
    Math.abs(window.pageYOffset - lastScrollPosition.value) < scrollOffset.value
  ) {
    return;
  }
  showHeader.value = window.pageYOffset < lastScrollPosition.value;
  lastScrollPosition.value = window.pageYOffset; */

  if (window.pageYOffset > lastScrollPosition.value) {
    console.log("offset > lastPos");
    showHeader.value = false;
  } else {
    console.log("offset < lastPos");
    showHeader.value = true;
  }
  lastScrollPosition.value = window.pageYOffset;

  console.log(window.pageYOffset);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  lastScrollPosition.value = window.pageYOffset;
  window.addEventListener("scroll", onScroll);

  /*  const showAnim = gsap
    .from(nav.value, {
      yPercent: -100,
      paused: true,
      duration: 1,
      ease: "Power4.easeOut",
    })
    .progress(1);

  gsap.from(nav.value, {
    autoAlpha: 0,
    duration: 1,
    delay: 1.8,
  });

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  }); */
});
</script>

<style scoped>
.router-link-active::after {
  width: 100%;
}
.router-link-active {
  pointer-events: none;
}
</style>
