<template>
  <router-link
    :to="{ name: 'RoomDetails', params: { id: room.id } }"
    class="mx-auto w-full sm:w-4/5 md:w-full"
  >
    <div
      class="group h-full bg-white p-7 shadow-md transition-all hover:shadow-2xl"
    >
      <div class="mb-4 w-full">
        <img
          :src="`/src/assets/img/room/card/${room.card}`"
          alt=""
          class="mx-auto"
        />
      </div>
      <span
        class="overflow-hidden bg-center font-Playfair text-2xl text-secondary"
        >{{ room.name }}</span
      >
      <p class="mb-0 mt-1 font-light text-stone-700">{{ room.desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  room: [Object, Array],
});
</script>
