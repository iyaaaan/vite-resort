<template>
  <!-- Hero -->
  <HeroBanner banner="accommodation-hero" />

  <div
    class="container flex -translate-y-1/2 items-center justify-between bg-beaver p-6 text-white"
    v-if="room"
  >
    <div>
      <h2 class="mr-4 mb-2 inline-block font-Playfair text-4xl">
        {{ room.name }}
      </h2>
      <template v-for="(n, index) in room.rating" :key="index">
        <font-awesome-icon icon="fas fa-star" class="text-xl text-yellow-300" />
        <!-- additional stars -->
        <template v-for="x in 5 - room.rating">
          <font-awesome-icon
            v-if="index === room.rating - 1"
            class="text-xl text-gray-200"
            icon="fas fa-star"
          />
        </template>
      </template>
      <div class="font-light">{{ room.inclusion }}</div>
    </div>
    <div>
      <span class="text-2xl font-semibold">{{ room.price }}</span>
      <span>/ night</span>
    </div>
  </div>

  <div class="container mt-20 grid grid-cols-3 gap-4" v-if="room">
    <!-- room gallery -->
    <div class="col-span-2 bg-red-200">
      <img
        :src="`/src/assets/img/room/${room.img}`"
        :alt="room.img"
        class="h-auto w-full"
      />
    </div>

    <!-- booking form -->
    <div class="border-gray-300">
      <form
        action=""
        class="mb-4 rounded-lg border border-gray-300 bg-white p-6 px-8 pt-6 pb-8 shadow-md"
      >
        <h2 class="mb-10 font-Playfair text-xl font-bold text-beaver">
          Book this room
        </h2>

        <div class="mb-4">
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="checkIn"
          >
            Check In
          </label>
          <input
            class="w-full rounded border bg-gray-100 py-2 px-3 text-stone-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            id="checkIn"
            type="text"
            placeholder="Check In"
            autocomplete="off"
          />
        </div>

        <div class="mb-4">
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="checkIn"
          >
            Check In
          </label>
          <input
            class="w-full rounded border bg-gray-100 py-2 px-3 text-stone-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            id="checkIn"
            type="text"
            placeholder="Check In"
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  </div>

  <div>HELLO</div>
  <div v-if="room">
    <h1>{{ room.name }}</h1>
    <span>{{ room.id }}</span>
    <p>{{ room.desc }}</p>
    <p>{{ room.img }}</p>
  </div>
  <div v-else>
    <h1><strong>Loading room details..</strong></h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";

const props = defineProps(["id"]);

let room = ref(null);

onMounted(() => {
  fetch(`http://localhost:3000/room/${props.id}`)
    .then((res) => res.json())
    .then((data) => (room.value = data))
    .catch((err) => console.log(err.message));
});
</script>

<style lang="scss" scoped></style>
