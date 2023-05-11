<template>
  <section
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
        voluptatem ipsum porro quidem earum eaque aut officia libero assumenda
        deleniti aliquam necessitatibus architecto.
      </div>
    </div>

    <!-- testimonial 2 -->
    <div
      class="testimonial testimonial--portrait flex items-center justify-center bg-gray-800 p-4"
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
      class="testimonial testimonial--portrait flex items-center justify-center bg-zinc-600 p-4 sm:row-span-2 md:col-start-3 md:row-start-1 lg:col-start-4"
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
        voluptatem ipsum porro quidem earum eaque aut officia libero assumenda
        deleniti aliquam necessitatibus architecto. Ut reiciendis voluptas
        placeat. Architecto et placeat pariatur quisquam.
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
      class="testimonial testimonial--landscape col-span-2 hidden items-center justify-center bg-stone-600 p-4 lg:flex"
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
  </section>
</template>

<style lang="scss">
.testimonial {
  @apply flex w-full items-center justify-center rounded-lg p-4;

  &__details {
    @apply flex flex-row flex-wrap items-center justify-center p-4;

    &-img {
      @apply h-auto w-24 px-4;

      & img {
        @apply w-full rounded-full object-cover;
      }
    }

    &-name {
      @apply my-0 text-sm text-center font-bold text-white;
    }

    &-rating {
      @apply text-center;
    }

    &-star {
      @apply text-lg text-yellow-300
    }
  }

  &__text {
    @apply w-full p-4 font-light text-white text-sm text-justify;
  }

  &--portrait {
    @apply flex-col;

    & .testimonial__details {
      @apply flex-row w-full;

    }
  }

  &--landscape {
    @apply flex-col md:flex-row;

    & .testimonial__details {
      @apply w-full  md:w-1/3;

    }

    & .testimonial__text {
      @apply md:w-2/3;
    }
  }
}

</style>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
