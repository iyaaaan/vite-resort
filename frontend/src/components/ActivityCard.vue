<template>
  <div
    class="group mx-auto max-w-full cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl md:max-w-sm lg:max-w-full"
  >
    <!-- img -->
    <div
      class="h-64 w-full overflow-hidden rounded-tr rounded-tl bg-white transition-all duration-300 group-hover:h-32"
    >
      <img
        :src="`/src/assets/img/activities/${props.activity.img}`"
        alt=""
        class="block w-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-60"
      />
    </div>

    <!-- text wrap -->
    <div
      class="relative h-32 overflow-hidden rounded-br rounded-bl bg-white p-4 transition-all duration-300 group-hover:h-64"
    >
      <!-- title -->
      <h2 class="font-Playfair text-2xl text-secondary">
        {{ props.activity.title }}
      </h2>
      <!-- inclusions -->
      <p class="text-sm">
        <span class="text-stone-700">Inclusions: </span>
        <span class="text-slate-500"
          ><em>{{ props.activity.inclusions }}</em></span
        >
      </p>

      <!-- text -->
      <p
        class="max-h-0 translate-y-14 font-light text-stone-700 opacity-0 transition-all delay-100 duration-500 group-hover:max-h-max group-hover:translate-y-0 group-hover:opacity-100"
      >
        {{ props.activity.text }}
      </p>

      <!-- price -->
      <div
        class="absolute -bottom-16 right-0 rounded-br bg-secondary px-4 py-2 text-white opacity-0 transition-all delay-100 duration-300 group-hover:bottom-0 group-hover:opacity-100"
      >
        <span>
          <strong>{{ props.activity.price }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  activity: (Array, Object),
});

onMounted(() => {
  console.log(props.activity);
});
</script>

<style lang="scss" scoped></style>
