<template>
  <div
    class="group mx-auto max-w-full cursor-pointer rounded border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl md:max-w-sm lg:max-w-full"
  >
    <!-- img -->
    <div
      class="h-64 w-full overflow-hidden rounded-tr rounded-tl bg-white transition-all duration-300 group-hover:h-32"
    >
      <img
        :src="imageUrl"
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
        {{ props.card.title }}
      </h2>
      <!-- inclusions -->
      <p class="text-sm">
        <span class="text-stone-700">Inclusions: </span>
        <span class="text-slate-500"
          ><em>{{ props.card.inclusions }}</em></span
        >
      </p>

      <!-- text -->
      <p
        class="max-h-0 translate-y-14 font-light text-stone-700 opacity-0 transition-all delay-100 duration-500 group-hover:max-h-max group-hover:translate-y-0 group-hover:opacity-100"
      >
        {{ props.card.text }}
      </p>

      <!-- price -->
      <div
        class="absolute -bottom-16 right-0 rounded-br bg-secondary px-4 py-2 text-white opacity-0 transition-all delay-100 duration-300 group-hover:bottom-0 group-hover:opacity-100"
      >
        <div>
          <span
            ><strong>{{ props.card.price }}</strong></span
          >
          <span v-if="route.path.startsWith('/rooms')"> / night</span>
          <span
            v-if="
              route.path.startsWith('/activities') &&
              props.card.price !== 'Free'
            "
          >
            / hour</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

// Access the current route
const route = useRoute();

const props = defineProps({
  card: (Array, Object),
  folder: String,
});

const imageUrl = computed(
  () =>
    new URL(
      `/src/assets/img/${props.folder}/${props.card.img}`,
      import.meta.url
    ).href
);
</script>

<style lang="scss" scoped></style>
