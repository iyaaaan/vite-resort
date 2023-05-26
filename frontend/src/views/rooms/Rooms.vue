<template>
  <div>
    <!-- Hero -->
    <HeroBanner banner="accommodation-hero">
      <div class="mx-auto max-w-5xl px-4 text-center font-light text-white">
        <p>
          Step into a world of warmth and tranquility as we invite you to
          experience our thoughtfully designed rooms and suites, carefully
          crafted to make you feel right at home. Discover the perfect blend of
          modern amenities, personalized touches, and a cozy ambiance that will
          ensure your stay with us is nothing short of exceptional.
        </p>
      </div>
    </HeroBanner>

    <section class="py-20">
      <h2 class="mb-12 text-center font-Playfair text-4xl text-beaver">
        Indulge in the epitome of comfort and relaxation of our suites
      </h2>

      <div class="container">
        <div>
          <h3 class="font-Playfair text-2xl text-stone-700">
            Deluxe Ocean View Room
          </h3>
          <p class="max-w-4xl font-light text-stone-700">
            Enjoy breathtaking views of the sparkling ocean from your private
            balcony in our Deluxe Ocean View Room. Indulge in spacious comfort
            and modern amenities, ensuring a truly rejuvenating stay.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <template v-for="d in deluxe" :key="d.id">
            <div class="bg-white p-5">
              <img
                :src="`src/assets/img/room/${d.img}`"
                alt=""
                class="mb-5 w-full object-cover"
              />
              <span class="font-Playfair text-xl text-stone-700">{{
                d.name
              }}</span>
              <p class="font-light text-stone-700">{{ d.desc }}</p>

              <div class="mt-8">
                <router-link
                  :to="{ name: 'RoomDetails', params: { id: d.id } }"
                >
                  asd
                </router-link>

                <BaseButton
                  class="fade-to-top full-clip-path w-full text-stone-700 md:w-auto"
                  button-type="borderless"
                  :hasArrow="true"
                  >Discover more
                </BaseButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import HeroBanner from "@/components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";

let deluxe = ref([
  {
    id: 1,
    name: "Serenity Suite",
    desc: "Immerse yourself in tranquility with panoramic ocean views and a private balcony.",
    img: "deluxe-room.jpg",
  },
  {
    id: 2,
    name: "Coastal Escape",
    desc: "Experience coastal bliss in this spacious room featuring modern amenities and mesmerizing ocean vistas.",
    img: "deluxe-room.jpg",
  },
  {
    id: 3,
    name: "Horizon Hideaway",
    desc: "Relax in this comfortable retreat, offering a seamless blend of style and comfort with breathtaking ocean views.",
    img: "deluxe-room.jpg",
  },
]);
</script>
