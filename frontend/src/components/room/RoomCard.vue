<template>
  <router-link
    :to="{ name: 'RoomDetails', params: { id: room.id } }"
    class="mx-auto w-full sm:w-4/5 md:w-full"
  >
    <div
      class="group h-full rounded border border-slate-200 bg-white p-6 transition-all hover:shadow-md"
    >
      <div class="mb-4 w-full">
        <img
          :src="`/src/assets/img/room/card/${room.img}`"
          alt=""
          class="mx-auto"
        />
      </div>
      <span class="font-Playfair text-2xl text-secondary">{{
        room.title
      }}</span>
      <p class="mb-0 mt-2 font-light text-stone-700">{{ room.text }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  room: [Object, Array],
});
</script>
