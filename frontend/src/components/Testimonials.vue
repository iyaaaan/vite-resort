<template>
  <section class="container mx-auto py-20 px-0 md:py-32">
    <div class="test-wrap">
      <h2
        class="test-title full-clip-path mb-0 py-4 text-center font-Playfair text-4xl text-beaver md:mb-8 md:text-5xl"
      >
        What our customers say
      </h2>

      <!-- cards  -->
      <div
        class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- testimonial 1 -->
        <div
          class="testimonial full-clip-path testimonial--landscape bg-slate-700 sm:col-span-2"
        >
          <div>
            <!-- details -->
            <div class="testimonial__details">
              <div class="testimonial__details-img">
                <img src="src/assets/img/testimonial/test-1.jpg" alt="" />
              </div>
              <div>
                <p class="testimonial__details-name">Alex</p>
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
              I was blown away by the personalized service at the beach resort!
              The staff went above and beyond to ensure that my stay was
              comfortable and enjoyable. I also loved the sustainable tourism
              practices and the resort's commitment to the environment.
            </div>
          </div>
        </div>

        <!-- testimonial 2 -->
        <div
          class="testimonial full-clip-path testimonial--portrait bg-stone-600"
        >
          <div>
            <!-- details -->
            <div class="testimonial__details">
              <div class="testimonial__details-img">
                <img src="src/assets/img/testimonial/test-2.jpg" alt="" />
              </div>
              <div>
                <p class="testimonial__details-name">Maya</p>
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
              I stayed at the beach resort with my family and we had a fantastic
              time! There were so many activities to choose from, and the kids'
              club kept my little ones entertained while my husband and I
              enjoyed some much-needed relaxation time.
            </div>
          </div>
        </div>

        <!-- testimonial 3 -->
        <div
          class="testimonial full-clip-path testimonial--portrait bg-gray-700 sm:row-span-2 md:col-start-3 md:row-start-1 lg:col-start-4"
        >
          <div>
            <!-- details -->
            <div class="testimonial__details">
              <div class="testimonial__details-img">
                <img src="src/assets/img/testimonial/test-3.jpg" alt="" />
              </div>
              <div>
                <p class="testimonial__details-name">David</p>
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
              The beach resort was the perfect place for me to unwind and
              recharge. The serene environment and the sound of the ocean helped
              me relax and destress. I also loved the spa services and the
              delicious meals at the onsite restaurants.
            </div>
          </div>
        </div>

        <!-- testimonial 4 -->
        <div
          class="testimonial full-clip-path testimonial--portrait bg-neutral-700"
        >
          <div>
            <!-- details -->
            <div class="testimonial__details">
              <div class="testimonial__details-img">
                <img src="src/assets/img/testimonial/test-4.jpg" alt="" />
              </div>
              <div>
                <p class="testimonial__details-name">Emily</p>
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
              I had an amazing time at the beach resort! The accommodations were
              luxurious and the staff was incredibly friendly and helpful. I
              especially loved the sunset cruises and the delicious food at the
              onsite restaurants.
            </div>
          </div>
        </div>

        <!-- testimonial 5 -->
        <div
          class="testimonial full-clip-path testimonial--landscape col-span-1 bg-zinc-800 sm:col-span-2 md:col-span-3 lg:col-span-2"
        >
          <div>
            <!-- details -->
            <div class="testimonial__details">
              <div class="testimonial__details-img">
                <img src="src/assets/img/testimonial/test-5.jpg" alt="" />
              </div>
              <div>
                <p class="testimonial__details-name">Daniel</p>
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
              I would highly recommend the beach resort to anyone looking for a
              dream vacation. The location was unbeatable, with stunning views
              of the ocean and easy access to nearby attractions. The luxury
              accommodations and world-class dining made it an unforgettable
              experience.
            </div>
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
      y: -100,
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      autoAlpha: 0,
      duration: 1.2,
      ease: "Power4.easeOut",
      stagger: {
        grid: [4, 2],
        from: "random",
        amount: 0.5,
      },
    },
    0.3
  );
});
</script>

<style lang="scss">
.testimonial {
  @apply flex w-full flex-wrap items-center justify-center  rounded-lg p-4 md:p-8;

  &__details {
    @apply flex items-center;

    &-img {
      @apply mr-4 h-auto w-20;

      & img {
        @apply w-full rounded-full object-cover;
      }
    }

    &-name {
      @apply my-0 font-Playfair text-xl text-white;
    }

    &-star {
      @apply text-base text-yellow-300;
    }
  }

  &__text {
    @apply mt-4 w-full text-sm font-light text-white lg:text-left;
  }
}
</style>
