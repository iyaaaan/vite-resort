<template>
  <router-link :to="{ name: 'RoomDetails', params: { id: room.id } }">
    <div class="group bg-white p-5 shadow-md">
      <div class="mb-4 h-72 w-full overflow-hidden">
        <div
          :style="{
            'background-image': 'url(/src/assets/img/room/' + room.img + ')',
          }"
          alt=""
          class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-125"
        ></div>
      </div>
      <span
        class="overflow-hidden bg-center font-Playfair text-2xl text-secondary"
        >{{ room.name }}</span
      >
      <p class="mb-0 font-light text-stone-700">{{ room.desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { onMounted } from "vue";

defineProps({
  room: [Object, Array],
});
</script>
