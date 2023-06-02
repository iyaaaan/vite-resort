<template>
  <div class="bg-white p-5">
    <img
      :src="`/src/assets/img/room/${room.img}`"
      alt=""
      class="mb-5 w-full object-cover"
    />
    <span class="font-Playfair text-xl text-stone-700">{{
      room.name
    }}</span>
    <p class="font-light text-stone-700">{{ room.desc }}</p>

    <div class="mt-8">
      <router-link
        :to="{ name: 'RoomDetails', params: { id: room.id } }"
      >
        <BaseButton
          button-type="secondary"
          class="fade-to-top full-clip-path w-full md:w-auto"
          >Book Room</BaseButton
        >
      </router-link>

      <router-link
        :to="{ name: 'RoomDetails', params: { id: room.id } }"
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

<script setup>
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  room: [Object, Array], 
});
</script>