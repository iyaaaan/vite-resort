<template>
  <!-- Hero -->
  <hero-banner banner="accommodation-hero" />

  <!-- room name -->
  <div class="container" v-if="room">
    <div
      class="flex -translate-y-1/2 items-center justify-between bg-beaver p-6 text-white"
    >
      <div class="flex flex-wrap items-center">
        <h2 class="mr-4 mb-2 inline-block font-Playfair text-4xl">
          {{ room.name }}
          {{ room.type }}
        </h2>
        <template v-for="(n, index) in room.rating" :key="index">
          <font-awesome-icon
            icon="fas fa-star"
            class="text-xl text-yellow-300"
          />
          <!-- additional stars -->
          <template v-for="x in 5 - room.rating">
            <font-awesome-icon
              v-if="index === room.rating - 1"
              class="text-xl text-gray-200"
              icon="fas fa-star"
            />
          </template>
        </template>
        <div class="basis-full font-light">{{ room.inclusion }}</div>
      </div>
      <div>
        <span class="text-2xl font-semibold">{{ room.price }}</span>
        <span>/ night</span>
      </div>
    </div>
  </div>

  <div class="container mt-20 grid grid-cols-3 gap-4" v-if="room">
    <!-- room gallery -->
    <div class="col-span-2">
      <room-gallery />
    </div>

    <!-- booking form -->
    <div>
      <booking-form />
    </div>

    <!-- room text -->
    <div class="col-span-2 my-10 font-light text-stone-700">
      {{ room.text }}
    </div>

    <!-- amenities -->
    <div class="relative col-span-3 my-10 h-96 py-20">
      <!-- bg -->
      <div
        class="absolute -left-1/2 top-0 -z-10 h-full w-[200vw] bg-gray-500"
      ></div>
      <p class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        facere!
      </p>
    </div>
    <!-- ./ amenities -->

    <!-- testimonial -->
    <template v-for="(testimonial, index) in testimonials" :key="index">
      <Testimonial :testimonial="testimonial" class="bg-teal-500" />
    </template>

    <!-- similar rooms -->
    <div>
      <template v-for="(similar, index) in similarRooms" :key="index">
        <room-card :room="similar" />
      </template>

    </div>
  </div>
  <!-- ./ container -->
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import RoomGallery from "@/components/RoomGallery.vue";
import BookingForm from "@/components/BookingForm.vue";
import Testimonial from "@/components/Testimonial.vue";
  import RoomCard from "@/components/RoomCard.vue";

// route parameter
const props = defineProps(["id"]);

//
let rooms = ref([]);

const similarRooms = computed(() => {
  return rooms.value.filter((t) => t.type == room.type);
});

// room details
let room = ref(null);
onMounted(() => {
  // fetch room details
  fetch(`http://localhost:3000/room/${props.id}`)
    .then((res) => res.json())
    .then((data) => (room.value = data))
    .catch((err) => console.log(err.message));

  // fetch all rooms
  fetch("http://localhost:3000/room")
    .then((res) => res.json())
    .then((data) => (rooms.value = data))
    .catch((err) => console.log(err.message));
});

/* testimonials */
const testimonials = ref([
  {
    name: "Juan Dela Cruz",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis. Placeat, similique quisquam! Ut, consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore, perspiciatis necessitatibus dolorem quas.",
    img: "test-1.jpg",
    rating: 4,
  },
  {
    name: "Rhianna Gomez",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-2.jpg",
    rating: 5,
  },
  {
    name: "Joshua The Explorer",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-3.jpg",
    rating: 4,
  },
]);

const testimonialClass = ref(["bg-slate-700 ", "bg-stone-600", "bg-gray-700 "]);

/* const current = new Date();
const dateToday = `${current.getFullYear()}/${(
  "0" +
  (current.getMonth() + 1)
).slice(-2)}/${("0" + current.getDate()).slice(-2)}`; */
</script>

<style></style>
