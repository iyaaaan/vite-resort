<template>
  <!-- Hero -->
  <HeroBanner banner="accommodation-hero">
    <div class="mx-auto max-w-5xl px-4 text-center font-light text-white">
      <p>
        Step into a world of warmth and tranquility as we invite you to
        experience our thoughtfully designed rooms and suites, carefully crafted
        to make you feel right at home. Discover the perfect blend of modern
        amenities, personalized touches, and a cozy ambiance that will ensure
        your stay with us is nothing short of exceptional.
      </p>
    </div>
  </HeroBanner>

  <section class="py-20">
    <h2 class="mb-12 text-center font-Playfair text-4xl text-beaver">
      Indulge in the epitome of comfort and relaxation of our suites
    </h2>

    <!-- deluxe -->
    <div class="container mt-20">
      <h3 class="font-Playfair text-2xl text-stone-700">
        Deluxe Ocean View Room
      </h3>
      <p class="max-w-4xl font-light text-stone-700">
        Enjoy breathtaking views of the sparkling ocean from your private
        balcony in our Deluxe Ocean View Room. Indulge in spacious comfort and
        modern amenities, ensuring a truly rejuvenating stay.
      </p>

      <!-- rooms -->
      <div v-if="deluxe.length">
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
                  <BaseButton
                    button-type="secondary"
                    class="fade-to-top full-clip-path w-full md:w-auto"
                    >Book Room</BaseButton
                  >
                </router-link>

                <router-link
                  :to="{ name: 'RoomDetails', params: { id: d.id } }"
                >
                  <BaseButton
                    class="fade-to-top full-clip-path w-full text-stone-700 md:w-auto"
                    button-type="borderless"
                    :hasArrow="true"
                    >View Details
                  </BaseButton>
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading deluxe rooms..</strong></h1>
      </div>
    </div>

    <!-- family -->
    <div class="container mt-20">
      <h3 class="font-Playfair text-2xl text-stone-700">Family Villa</h3>
      <p class="max-w-4xl font-light text-stone-700">
        Ideal for families seeking ample space and convenience, our Family Villa
        offers multiple bedrooms, a fully equipped kitchen, and a cozy living
        area. Create cherished memories together while enjoying the comforts of
        a home away from home.
      </p>

      <!-- rooms -->
      <div v-if="family.length">
        <div class="grid grid-cols-3 gap-4">
          <template v-for="f in family" :key="f.id">
            <div class="bg-white p-5">
              <img
                :src="`src/assets/img/room/${f.img}`"
                alt=""
                class="mb-5 w-full object-cover"
              />
              <span class="font-Playfair text-xl text-stone-700">{{
                f.name
              }}</span>
              <p class="font-light text-stone-700">{{ f.desc }}</p>

              <div class="mt-8">
                <router-link
                  :to="{ name: 'RoomDetails', params: { id: f.id } }"
                >
                  <BaseButton
                    button-type="secondary"
                    class="fade-to-top full-clip-path w-full md:w-auto"
                    >Book Room</BaseButton
                  >
                </router-link>

                <router-link
                  :to="{ name: 'RoomDetails', params: { id: f.id } }"
                >
                  <BaseButton
                    class="fade-to-top full-clip-path w-full text-stone-700 md:w-auto"
                    button-type="borderless"
                    :hasArrow="true"
                    >View Details
                  </BaseButton>
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading deluxe rooms..</strong></h1>
      </div>
    </div>

    <!-- luxury -->
    <div class="container mt-20">
      <h3 class="font-Playfair text-2xl text-stone-700">
        Luxury Beachfront Suite
      </h3>
      <p class="max-w-4xl font-light text-stone-700">
        Experience ultimate luxury in our Beachfront Suite, where sophistication
        meets stunning ocean vistas. Pamper yourself in a spacious suite
        featuring a private plunge pool, direct beach access, and personalized
        concierge service.
      </p>

      <!-- rooms -->
      <div v-if="luxury.length">
        <div class="grid grid-cols-3 gap-4">
          <template v-for="l in luxury" :key="l.id">
            <div class="bg-white p-5">
              <img
                :src="`src/assets/img/room/${l.img}`"
                alt=""
                class="mb-5 w-full object-cover"
              />
              <span class="font-Playfair text-xl text-stone-700">{{
                l.name
              }}</span>
              <p class="font-light text-stone-700">{{ l.desc }}</p>

              <div class="mt-8">
                <router-link
                  :to="{ name: 'RoomDetails', params: { id: l.id } }"
                >
                  <BaseButton
                    button-type="secondary"
                    class="fade-to-top full-clip-path w-full md:w-auto"
                    >Book Room</BaseButton
                  >
                </router-link>

                <router-link
                  :to="{ name: 'RoomDetails', params: { id: l.id } }"
                >
                  <BaseButton
                    class="fade-to-top full-clip-path w-full text-stone-700 md:w-auto"
                    button-type="borderless"
                    :hasArrow="true"
                    >View Details
                  </BaseButton>
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading deluxe rooms..</strong></h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import HeroBanner from "@/components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";

const rooms = ref([]);

const deluxe = computed(() => {
  return rooms.value.filter((t) => t.type == "deluxe");
});

const family = computed(() => {
  return rooms.value.filter((t) => t.type == "family");
});

const luxury = computed(() => {
  return rooms.value.filter((t) => t.type == "luxury");
});

onMounted(() => {
  fetch("http://localhost:3000/room")
    .then((res) => res.json())
    .then((data) => (rooms.value = data))
    .catch((err) => console.log(err.message));
});
</script>