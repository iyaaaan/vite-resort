<template>
  <!-- Hero -->
  <hero-banner banner="accommodation-hero" />

  <!-- room name -->
  <div class="container" v-if="room">
    <room-name
      :name="room.name"
      :rating="room.rating"
      :price="room.price"
      :inclusion="room.inclusion"
    ></room-name>
  </div>

  <div class="container mt-4 grid grid-cols-3 gap-4" v-if="room">
    <!-- room gallery -->
    <div class="col-span-2">
      <room-gallery :thumbs="room.thumb" :img="room.img" />
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
    <div v-if="similarRooms.length" class="col-span-3 grid grid-cols-3 gap-4">
      <template v-for="(similar, index) in similarRooms" :key="index">
        <room-card :room="similar" />
      </template>
    </div>
  </div>
  <!-- ./ container -->
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import axios from "axios";
import HeroBanner from "@/components/HeroBanner.vue";
import RoomName from "@/components/room/RoomName.vue";
import RoomGallery from "@/components/room/RoomGallery.vue";
import RoomCard from "@/components/room/RoomCard.vue";
import BookingForm from "@/components/room/BookingForm.vue";
import Testimonial from "@/components/Testimonial.vue";
import { useRoute } from "vue-router";

// route parameter
const props = defineProps(["id"]);

// store all rooms
const rooms = ref([]);

// store similar room type
let similarRooms = ref();

// room details
const room = ref();

onMounted(async () => {
  /* fetch(`http://localhost:3000/room/${props.id}`)
    .then((res) => res.json())
    .then((data) => (room.value = data))
    .catch((err) => console.log(err.message)); */
  const res = await fetch(`http://localhost:3000/room/${props.id}`);
  room.value = await res.json();

  fetch(`http://localhost:3000/room/`)
    .then((res) => res.json())
    .then((data) => (rooms.value = data))
    .catch((err) => console.log(err.message));

  similarRooms = computed(() => {
    return rooms.value.filter(
      (t) => t.type == room.value.type && t.id !== room.value.id
    );
  });
});

// store route
const route = useRoute();

watch(route, () => {
  fetch(`http://localhost:3000/room/${props.id}`)
    .then((res) => res.json())
    .then((data) => (room.value = data))
    .catch((err) => console.log(err.message));

  console.log("watch");
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
