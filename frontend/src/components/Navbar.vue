<template>
  <header class="relative z-10">
    <nav
      class="clip-path-to-bottom fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between overflow-hidden bg-gradient-to-b py-4 px-4 font-Poppins backdrop-blur-sm transition-transform duration-300 ease-linear lg:px-12 lg:backdrop-blur-none"
      :class="[
        { '-translate-y-full': !showNavbar },
        topOfPage ? 'lg:from-black' : 'bg-[#72645B]',
      ]"
      ref="nav"
    >
      <!-- logo -->
      <router-link class="cursor-pointer items-center" :to="{ name: 'Home' }">
        <img
          class="inline-block"
          src="@/assets/img/logo.png"
          alt="Company Logo"
          height="70"
          width="70"
        />
        <h2 class="hidden font-Allura text-3xl text-white sm:inline-block">
          Paradise Beach Resort
        </h2>
      </router-link>

      <!-- menu toggler -->
      <span
        @click="toggleMenu"
        class="flex h-6 w-6 items-center justify-center lg:hidden"
      >
        <font-awesome-icon
          :icon="`fas fa-${menuIcon}`"
          class="text-2xl text-white"
        />
      </span>

      <!-- menu -->
      <div
        class="flex max-h-0 basis-full flex-col text-right font-Poppins font-light transition-all duration-300 ease-linear lg:max-h-full lg:basis-0 lg:flex-row"
        :class="{ 'max-h-96': activeMenu }"
      >
        <template v-for="(menu, index) in menus" :key="menu.index">
          <div>
            <router-link
              :to="{ name: menu }"
              class="hover:after:bg-secondary-light group relative m-4 mr-0 inline-block text-sm uppercase text-white after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:after:right-0 hover:after:w-6 lg:mr-4"
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
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menus = ref(["Home", "About", "Rooms", "Activities", "Contact"]);

const nav = ref(null);

let activeMenu = ref(false);
let menuIcon = ref("bars");

let topOfPage = ref(true);
let showNavbar = ref(true);
let lastScrollPosition = ref(0);
let scrollOffset = ref(0);

// check if navbar is not at the top of the page
const handleScroll = () => {
  // check if page is at the top
  if (window.pageYOffset === 0) {
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
      menuIcon.value = "bars";
    }
  }

  lastScrollPosition.value = window.pageYOffset;
};

const toggleMenu = () => {
  activeMenu.value = !activeMenu.value;
  menuIcon.value = activeMenu.value ? "times" : "bars";
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("scroll", handleScroll);

  gsap.from(nav.value, {
    autoAlpha: 0,
    duration: 1,
    delay: 1.8,
  });
});
</script>

<style scoped>
.router-link-active::after {
  @apply w-6;
}
.router-link-active {
  @apply pointer-events-none;
}
</style>
