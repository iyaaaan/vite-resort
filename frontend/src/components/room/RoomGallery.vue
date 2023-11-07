<template>
  <!-- main image -->
  <div
    class="mb-4 flex h-[35rem] w-full items-center justify-between rounded-tr rounded-tl bg-red-100 bg-cover bg-center bg-no-repeat"
    :style="{
      'background-image': 'url(' + imageUrls[activePhoto] + ')',
    }"
  >
    <!-- prev button -->
    <button @click="prevPhoto()" class="box-shadow ml-5 rounded-full">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-left"
        class="mx-auto block text-3xl text-zinc-900 opacity-60 transition-opacity hover:opacity-100"
      />
    </button>

    <!-- next button -->
    <button @click="nextPhoto()" class="box-shadow mr-5 rounded-full">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-right"
        class="mx-auto block text-3xl text-zinc-800 opacity-60 transition-opacity hover:opacity-100"
      />
    </button>
  </div>

  <!-- thumbnails -->
  <div class="grid grid-flow-col-dense gap-4">
    <div
      v-for="(thumb, index) in thumbUrls"
      :key="index"
      :style="{
        'background-image': 'url(' + thumb + ')',
      }"
      @click="activePhoto = index"
      :class="{
        'pointer-events-none grayscale-0': activePhoto == index,
      }"
      class="h-28 cursor-pointer bg-cover bg-center bg-no-repeat grayscale transition-all first:rounded-bl last:rounded-br hover:grayscale-0"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  thumbs: [Array],
});

const imageUrls = [];
const thumbUrls = [];

const thumbnails = props.thumbs;

// dynamically import images for vite build
props.thumbs.forEach((img) => {
  const imageUrl = computed(
    () => new URL(`/src/assets/img/room/imgs/${img}`, import.meta.url).href
  );

  const thumbUrl = computed(
    () => new URL(`/src/assets/img/room/thumbs/${img}`, import.meta.url).href
  );

  imageUrls.push(imageUrl.value);
  thumbUrls.push(thumbUrl.value);
});

// current photo
let activePhoto = ref(0);

// previous photo
function prevPhoto() {
  activePhoto.value =
    activePhoto.value - 1 >= 0 ? activePhoto.value - 1 : imageUrls.length - 1;
}

// next photo
function nextPhoto() {
  activePhoto.value =
    activePhoto.value + 1 < imageUrls.length ? activePhoto.value + 1 : 0;
}

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.which == 37) prevPhoto();
    if (event.which == 39) nextPhoto();
  });
});
</script>
