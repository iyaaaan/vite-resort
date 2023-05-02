<template>
  <header class="relative z-10">
    <nav
      class="clip-path-to-bottom fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between overflow-hidden bg-gradient-to-b from-black py-4 px-12 font-Montserrat transition-transform duration-300 ease-linear"
      :class="{ 'bg-stone-700': !topOfPage, '-translate-y-full': !showNavbar }"
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

      <!-- menu toggler -->
      <span @click="toggleMenu" class="inline-flex lg:hidden">
        <font-awesome-icon icon="fas fa-bars" class="text-2xl text-white" />
      </span>

      <!-- menu -->
      <div
        class="flex max-h-0 basis-full flex-col text-right transition-all duration-300 ease-linear lg:max-h-full lg:basis-0 lg:flex-row"
        :class="{ 'max-h-96': activeMenu }"
      >
        <template v-for="(menu, index) in menus" :key="index">
          <div>
            <router-link
              :to="{ name: menu }"
              class="group relative m-4 mr-0 inline-block text-sm uppercase text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:after:right-0 hover:after:w-full lg:mr-4"
            >
              <span
                class="relative inline-block overflow-hidden p-0 transition duration-300 before:absolute before:left-0 before:inline-block before:translate-y-full before:tracking-[3px] before:transition before:duration-300 before:content-[attr(data-before)] group-hover:before:translate-y-0"
                :data-before="menu"
              >
                <span
                  class="inline-block translate-y-0 tracking-[3px] transition duration-300 group-hover:-translate-y-full"
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

let activeMenu = ref(false);

let topOfPage = ref(true);
let showNavbar = ref(true);
let lastScrollPosition = ref(0);
let scrollOffset = ref(1000);

// check if navbar is not at the top of the page
const handleScroll = () => {
  // check if page is at the top
  if (window.pageYOffset == 0) {
    topOfPage.value = true;
  } else {
    topOfPage.value = false;
  }

  // after scrolling past the offset, hide navbar; show on scroll up
  /* if (window.pageYOffset > 0 && window.pageYOffset < scrollOffset.value) {
    showNavbar.value = true;
  } else {
    if (window.pageYOffset < lastScrollPosition.value) {
      showNavbar.value = true;
    } else {
      showNavbar.value = false;
    }
  } */

  if (window.pageYOffset > scrollOffset.value) {
    if (window.pageYOffset < lastScrollPosition.value) {
      showNavbar.value = true;
    } else {
      showNavbar.value = false;
      activeMenu.value = false;
    }
  }

  lastScrollPosition.value = window.pageYOffset;
};

const toggleMenu = () => {
  activeMenu.value = !activeMenu.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

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
