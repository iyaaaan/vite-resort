<template>
  <!-- main image -->
  <div
    class="flex h-screen w-full items-center justify-between bg-red-100 bg-cover bg-center bg-no-repeat"
    :style="{
      'background-image':
        'url(/src/assets/img/room/' + photos[activePhoto] + ')',
    }"
  >
    <!-- prev button -->
    <button class="bg-red-700" @click="prevPhoto()">prev</button>

    <!-- next button -->
    <button class="bg-red-700" @click="nextPhoto()">next</button>
  </div>

  <!-- thumbnails -->
  <div></div>
</template>

<script setup>
import { ref } from "vue";

let photos = ref(["thumb-1.jpg", "thumb-2.jpg", "thumb-3.jpg", "thumb-4.jpg"]);
let activePhoto = ref(0);

function prevPhoto() {
  console.log("prev");
  activePhoto.value =
    activePhoto.value - 1 >= 0
      ? activePhoto.value - 1
      : photos.value.length - 1;
}

function nextPhoto() {
  console.log("nek");
  activePhoto.value =
    activePhoto.value + 1 < photos.value.length ? activePhoto.value + 1 : 0;
}
</script>

<style lang="scss" scoped></style>
