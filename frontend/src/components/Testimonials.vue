<template>
  <section class="container mx-auto py-48 px-0">
    <div class="test-wrap">
      <h2
        class="test-title full-clip-path py-4 text-center font-Playfair text-3xl text-beaver md:text-5xl"
      >
        Become one of our satisfied customers
      </h2>

      <!-- cards  -->
      <div
        class="my-28 grid w-full grid-flow-row-dense grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- testimonial 1 -->
        <div
          class="testimonial testimonial--landscape bg-slate-700 p-4 sm:col-span-2"
        >
          <!-- details -->
          <div class="testimonial__details">
            <div class="testimonial__details-img">
              <img src="src/assets/img/testimonial/test.jpg" alt="" />
            </div>
            <div>
              <p class="testimonial__details-name">Juan Dela Cruz</p>
              <div class="testimonial__details-rating">
                <template v-for="(n, index) in 5" :key="index">
                  <font-awesome-icon
                    icon="fas fa-star"
                    class="testimonial__details-star"
                  />
                </template>
              </div>
            </div>
          </div>

          <!-- text -->
          <div class="testimonial__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatem officia esse reiciendis vel odit? Molestias, quas quos
            similique quae facilis dolorum cupiditate magni iusto vel provident
            voluptatem ipsum porro quidem earum eaque aut officia libero
            assumenda deleniti aliquam necessitatibus architecto.
          </div>
        </div>

        <!-- testimonial 2 -->
        <div
          class="testimonial testimonial--portrait flex items-center justify-center bg-stone-600 p-4"
        >
          <!-- details -->
          <div class="testimonial__details">
            <div class="testimonial__details-img">
              <img src="src/assets/img/testimonial/test.jpg" alt="" />
            </div>
            <div>
              <p class="testimonial__details-name">Juan Dela Cruz</p>
              <div class="testimonial__details-rating">
                <template v-for="(n, index) in 5" :key="index">
                  <font-awesome-icon
                    icon="fas fa-star"
                    class="testimonial__details-star"
                  />
                </template>
              </div>
            </div>
          </div>

          <!-- text -->
          <div class="testimonial__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatem officia esse reiciendis vel odit? Molestias, quas quos
            similique quae facilis dolorum.
          </div>
        </div>

        <!-- testimonial 3 -->
        <div
          class="testimonial testimonial--portrait flex items-center justify-center bg-gray-800 p-4 sm:row-span-2 md:col-start-3 md:row-start-1 lg:col-start-4"
        >
          <!-- details -->
          <div class="testimonial__details">
            <div class="testimonial__details-img">
              <img src="src/assets/img/testimonial/test.jpg" alt="" />
            </div>
            <div>
              <p class="testimonial__details-name">Juan Dela Cruz</p>
              <div class="testimonial__details-rating">
                <template v-for="(n, index) in 5" :key="index">
                  <font-awesome-icon
                    icon="fas fa-star"
                    class="testimonial__details-star"
                  />
                </template>
              </div>
            </div>
          </div>

          <!-- text -->
          <div class="testimonial__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatem officia esse reiciendis vel odit? Molestias, quas quos
            similique quae facilis dolorum cupiditate magni iusto vel provident
            voluptatem ipsum porro quidem earum eaque aut officia libero
            assumenda deleniti aliquam necessitatibus architecto. Ut reiciendis
            voluptas placeat. Architecto et placeat pariatur quisquam.
          </div>
        </div>

        <!-- testimonial 4 -->
        <div
          class="testimonial testimonial--portrait flex items-center justify-center bg-neutral-700 p-4"
        >
          <!-- details -->
          <div class="testimonial__details">
            <div class="testimonial__details-img">
              <img src="src/assets/img/testimonial/test.jpg" alt="" />
            </div>
            <div>
              <p class="testimonial__details-name">Juan Dela Cruz</p>
              <div class="testimonial__details-rating">
                <template v-for="(n, index) in 5" :key="index">
                  <font-awesome-icon
                    icon="fas fa-star"
                    class="testimonial__details-star"
                  />
                </template>
              </div>
            </div>
          </div>

          <!-- text -->
          <div class="testimonial__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatem officia esse reiciendis vel odit?
          </div>
        </div>

        <!-- testimonial 5 -->
        <div
          class="testimonial testimonial--landscape col-span-2 hidden items-center justify-center bg-zinc-600 p-4 lg:flex"
        >
          <!-- details -->
          <div class="testimonial__details">
            <div class="testimonial__details-img">
              <img src="src/assets/img/testimonial/test.jpg" alt="" />
            </div>
            <div>
              <p class="testimonial__details-name">Juan Dela Cruz</p>
              <div class="testimonial__details-rating">
                <template v-for="(n, index) in 5" :key="index">
                  <font-awesome-icon
                    icon="fas fa-star"
                    class="testimonial__details-star"
                  />
                </template>
              </div>
            </div>
          </div>

          <!-- text -->
          <div class="testimonial__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatem officia esse reiciendis vel odit? Molestias, quas quos
            similique quae facilis dolorum cupiditate magni iusto vel provident
            voluptatem ipsum porro quidem earum eaque.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = ref([
  {
    name: "Juan Dela Cruz",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis. Placeat, similique quisquam! Ut, consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore, perspiciatis necessitatibus dolorem quas.",
    img: "test.jpg",
    rating: 4,
  },
  {
    name: "Rhianna Gomez",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test.jpg",
    rating: 5,
  },
  {
    name: "Joshua The Explorer",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test.jpg",
    rating: 4,
  },
]);

onMounted(() => {
  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 1.5, delay: 0.5 },
    scrollTrigger: {
      trigger: ".test-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".test-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.from(
    ".testimonial",
    {
      //scale: 0.9,
      y: -50,
      autoAlpha: 0,
      duration: 0.7,
      ease: "Back.easeOut",
      stagger: {
        grid: [4,2],
        from: "random",
        amount: .5
      }
    },
    0.3
  );
});
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  @apply text-white hover:text-slate-300;
}

.carousel__pagination-button {
  @apply rounded-full after:bg-neutral-400 hover:after:bg-neutral-600;
}

.carousel__pagination-button.carousel__pagination-button--active {
  @apply after:bg-beaver;
}
</style>
