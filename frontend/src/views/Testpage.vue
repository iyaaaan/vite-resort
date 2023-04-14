<template>
  <div class="gallery-container">
    <div class="gallery">
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
    <div class="gallery">
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
    <div class="gallery">
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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Get the gallery container element
  var galleryContainer = document.querySelector(".gallery-container");

  // Get the gallery elements
  var galleries = galleryContainer.querySelectorAll(".gallery");

  // Get the width of each gallery item
  var galleryItemWidth = galleries[0].querySelector("section").clientWidth;

  // Get the total width of the galleries
  var galleryWidth = galleries[0].scrollWidth * 3;

  // Set the width of the gallery container
  galleryContainer.style.width = galleryWidth + "px";

  // Create a GSAP timeline for the animation
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: galleryContainer,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 0.1, max: 0.5 },
        ease: "power1.out",
      },
    },
  });

  // Add a GSAP animation to move the galleries horizontally
  tl.to(galleries[0], {
    x: -galleryWidth / 3 + window.innerWidth / 2 - galleryItemWidth / 2,
    ease: "none",
    duration: 2,
    labels: {
      start: 0,
      end: galleryWidth / 3 - window.innerWidth / 2 + galleryItemWidth / 2,
    },
  })
    .to(galleries[1], {
      x: galleryWidth / 3 - window.innerWidth / 2 + galleryItemWidth / 2,
      ease: "none",
      duration: 2,
      labels: {
        start: galleryWidth / 3 - window.innerWidth / 2 - galleryItemWidth / 2,
        end:
          (galleryWidth / 3) * 2 - window.innerWidth / 2 + galleryItemWidth / 2,
      },
    })
    .to(galleries[2], {
      x: (galleryWidth / 3) * 2 - window.innerWidth / 2 + galleryItemWidth / 2,
      ease: "none",
      duration: 2,
      labels: {
        start:
          (galleryWidth / 3) * 2 - window.innerWidth / 2 - galleryItemWidth / 2,
        end: galleryWidth - window.innerWidth,
      },
    });
});
</script>

<style scoped>
.gallery-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.gallery {
  display: flex;
  scroll-snap-align: center;
  flex: 0 0 calc(100% / 3);
}

.gallery section {
  width: 300px;
  height: 300px;
}
</style>
