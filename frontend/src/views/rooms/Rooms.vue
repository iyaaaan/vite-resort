<template>
  <!-- Hero -->
  <HeroBanner :banner="RoomHero">
    <div
      class="full-clip-path rooms-text mx-auto max-w-5xl px-4 text-center font-light text-white"
    >
      <p>
        Step into a world of warmth and tranquility as we invite you to
        experience our thoughtfully designed rooms and suites, carefully crafted
        to make you feel right at home. Discover the perfect blend of modern
        amenities, personalized touches, and a cozy ambiance that will ensure
        your stay with us is nothing short of exceptional.
      </p>
    </div>
  </HeroBanner>

  <section class="rooms-wrap py-20">
    <h2
      class="full-clip-path rooms-title mb-12 px-4 pb-1 text-center font-Playfair text-3xl text-beaver md:text-4xl"
    >
      Indulge in the epitome of comfort and relaxation of our suites
    </h2>

    <!-- deluxe -->
    <div class="card-wrap container mt-20">
      <h3
        class="deluxe-title full-clip-path font-Playfair text-2xl font-bold text-stone-700"
      >
        Deluxe Ocean View Room
      </h3>
      <p class="full-clip-path deluxe-text max-w-4xl font-light text-stone-700">
        Enjoy breathtaking views of the sparkling ocean from your private
        balcony in our Deluxe Ocean View Room. Indulge in spacious comfort and
        modern amenities, ensuring a truly rejuvenating stay.
      </p>

      <!-- rooms -->
      <div v-if="deluxe.length">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="d in deluxe" class="full-clip-path room-card">
            <!-- room card -->
            <router-link :to="{ name: 'RoomDetails', params: { id: d.id } }">
              <div class="mx-auto w-full sm:w-4/5 md:w-full">
                <custom-card :card="d" folder="room/card"></custom-card>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading deluxe rooms..</strong></h1>
      </div>
    </div>

    <!-- family -->
    <div class="card-wrap container mt-20">
      <h3
        class="full-clip-path family-title family-title full-clip-path font-Playfair text-2xl font-bold text-stone-700"
      >
        Family Villa
      </h3>
      <p
        class="family-title full-clip-path max-w-4xl font-light text-stone-700"
      >
        Ideal for families seeking ample space and convenience, our Family Villa
        offers multiple bedrooms, a fully equipped kitchen, and a cozy living
        area. Create cherished memories together while enjoying the comforts of
        a home away from home.
      </p>

      <!-- rooms -->
      <div v-if="family.length">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="f in family" class="full-clip-path room-card">
            <!-- room card -->
            <router-link :to="{ name: 'RoomDetails', params: { id: f.id } }">
              <div class="mx-auto w-full sm:w-4/5 md:w-full">
                <custom-card :card="f" folder="room/card"></custom-card>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading family rooms..</strong></h1>
      </div>
    </div>

    <!-- luxury -->
    <div class="card-wrap container mt-20">
      <h3
        class="full-clip-path luxury-title font-Playfair text-2xl font-bold text-stone-700"
      >
        Luxury Beachfront Suite
      </h3>
      <p class="full-clip-path luxury-text max-w-4xl font-light text-stone-700">
        Experience ultimate luxury in our Beachfront Suite, where sophistication
        meets stunning ocean vistas. Pamper yourself in a spacious suite
        featuring a private plunge pool, direct beach access, and personalized
        concierge service.
      </p>

      <!-- rooms -->
      <div v-if="luxury.length">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="l in luxury" class="full-clip-path room-card">
            <!-- room card -->
            <router-link :to="{ name: 'RoomDetails', params: { id: l.id } }">
              <div class="mx-auto w-full sm:w-4/5 md:w-full">
                <custom-card :card="l" folder="room/card"></custom-card>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <h1><strong>Loading luxury rooms..</strong></h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  onMounted,
  ref,
  computed,
  onBeforeUnmount,
  nextTick,
  onUpdated,
} from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import RoomHero from "@/assets/img/banner/accommodation-hero.webp";
import RoomCard from "@/components/room/RoomCard.vue";
import CustomCard from "@/components/CustomCard.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

// store all rooms
const rooms = ref([]);

// store deluxe rooms
const deluxe = computed(() => {
  return rooms.value.filter((t) => t.type == "deluxe");
});

// store family rooms
const family = computed(() => {
  return rooms.value.filter((t) => t.type == "family");
});

// store luxury rooms
const luxury = computed(() => {
  return rooms.value.filter((t) => t.type == "luxury");
});

const getRooms = async () => {
  try {
    await axios.get("room").then((res) => {
      rooms.value = res.data;
    });
  } catch (error) {
    if (error) console.log(error);
  }
};

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  getRooms();

  gsap.from(".rooms-text", {
    y: 50,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    autoAlpha: 0,
    delay: 1,
  });

  let tl = gsap.timeline({
    defaults: { ease: "Power4.inOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".rooms-wrap",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".rooms-title", {
    y: 50,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    autoAlpha: 0,
    delay: 1,
  });
});
onUpdated(() => {
  nextTick(() => {
    ScrollTrigger.refresh();

    let cardWrap = gsap.utils.toArray(".card-wrap").forEach(function (elem) {
      let cards = elem.querySelectorAll(".room-card");

      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom top",
            //toggleActions: "restart reverse restart reverse",
            toggleActions: "play none none reverse",
          },
        })
        .from(cards, {
          y: 50,
          //scale: 0.8,
          autoAlpha: 0,
          stagger: 0.2,
          ease: "Power4.inOut",
          duration: 0.8,
        });
    });
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.killAll();
});
</script>
