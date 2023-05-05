<template>
  <section
    class="container flex flex-wrap justify-center border-b border-b-gray-500 py-48 px-0"
  >
    <!-- left -->
    <div class="flex w-full flex-wrap items-center justify-center lg:w-1/2">
      <!-- card -->
      <template v-for="activity in activities" key="index">
        <div class="w-full p-4 md:w-1/2">
          <div class="rounded-lg border bg-white px-8 py-10">
            <!-- card icon -->
            <Icon
              :icon="activity.icon"
              class="mx-auto text-7xl text-neutral-500"
            />

            <!-- card title -->
            <h3
              class="mt-8 text-center font-Playfair text-xl font-bold text-neutral-600"
            >
              {{ activity.name }}
            </h3>

            <!-- card description -->
            <p class="text-justify text-neutral-600">
              {{ activity.desc }}
            </p>
          </div>
        </div>
      </template>
    </div>

    <!-- right -->
    <div
      class="order-first my-10 w-full px-4 text-center lg:order-last lg:my-20 lg:w-1/2 lg:text-left"
    >
      <h2
        class="mb-5 font-Playfair text-3xl text-beaver md:text-5xl lg:mb-10 xl:text-6xl"
      >
        Engage yourself in our fun and exciting outdoor activities!
      </h2>

      <router-link :to="{ name: 'package' }" class="block">
        <BaseButton
          :hasArrow="true"
          button-type="borderless"
          class="p-0 text-stone-500"
          >Discover more
        </BaseButton>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { Icon } from "@iconify/vue";

const activities = ref([
  {
    icon: "mdi:diving-snorkel",
    name: "Snorkeling",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "map:kayaking",
    name: "Kayaking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "material-symbols:surfing-rounded",
    name: "Surfing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },

  {
    icon: "map:jet-skiing",
    name: "Jet Ski",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
]);
</script>

<style lang="scss" scoped></style>
