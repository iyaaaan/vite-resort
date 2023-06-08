<template>
  <!-- main image -->
  <div
    class="mb-4 flex h-[35rem] w-full items-center justify-between rounded-tr rounded-tl bg-red-100 bg-cover bg-center bg-no-repeat"
    :style="{
      'background-image':
        'url(/src/assets/img/room/' + thumbnails[activePhoto] + ')',
    }"
  >
    <!-- prev button -->
    <button @click="prevPhoto()" class="box-shadow ml-5 rounded-full">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-left"
        class="mx-auto block text-3xl text-white opacity-60 transition-opacity hover:opacity-100"
      />
    </button>

    <!-- next button -->
    <button @click="nextPhoto()" class="box-shadow mr-5 rounded-full">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-right"
        class="mx-auto block text-3xl text-white opacity-60 transition-opacity hover:opacity-100"
      />
    </button>
  </div>

  <!-- thumbnails -->
  <div class="grid grid-flow-col-dense gap-4">
    <div
      v-for="(thumb, index) in thumbnails"
      :key="index"
      :style="{
        'background-image': 'url(/src/assets/img/room/' + thumb + ')',
      }"
      @click="activePhoto = index"
      :class="{
        'pointer-events-none grayscale-0': activePhoto == index,
      }"
      class="h-28 cursor-pointer bg-cover bg-center bg-no-repeat grayscale transition-all first:rounded-bl last:rounded-br hover:grayscale-0"
    ></div>
  </div>

  <div class="grid grid-flow-col-dense gap-4">
    <div v-for="(thumb, index) in thumbnails" :key="index">
      {{ thumb }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  thumbs: [Array],
  img: [String],
});

let thumbnails = [].concat(props.img, props.thumbs);
console.log(thumbnails.value);

// current photo
let activePhoto = ref(0);

// previous photo
function prevPhoto() {
  activePhoto.value =
    activePhoto.value - 1 >= 0 ? activePhoto.value - 1 : thumbnails.length - 1;
}

// next photo
function nextPhoto() {
  activePhoto.value =
    activePhoto.value + 1 < thumbnails.length ? activePhoto.value + 1 : 0;
}

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.which == 37) prevPhoto();
    if (event.which == 39) nextPhoto();
  });
});
</script>
