<template>
  <!-- testimonial card  -->
  <div class="testimonial">
    <div>
      <!-- details -->
      <div class="testimonial__details">
        <!-- image -->
        <div class="testimonial__details-img">
          <img :src="imageUrl" alt="" />
        </div>
        <div>
          <!-- name -->
          <p class="testimonial__details-name">{{ testimonial.name }}</p>

          <!-- star rating -->
          <div class="testimonial__details-rating">
            <template v-for="(n, index) in testimonial.rating" :key="index">
              <font-awesome-icon
                icon="fas fa-star"
                class="testimonial__details-star"
              />

              <!-- additional stars -->
              <template v-for="x in 5 - testimonial.rating">
                <font-awesome-icon
                  v-if="index === testimonial.rating - 1"
                  class="text-base text-gray-200"
                  icon="fas fa-star"
                />
              </template>
            </template>
          </div>
        </div>
      </div>

      <!-- text -->
      <div class="testimonial__text">
        {{ testimonial.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  testimonial: [Object, Array],
});

const imageUrl = computed(
  () =>
    new URL(
      `/src/assets/img/testimonial/${props.testimonial.img}`,
      import.meta.url
    ).href
);
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
