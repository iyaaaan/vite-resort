<template>
  <!-- Hero -->
  <HeroBanner banner="home">
    <div class="relative -mt-12 ml-12 bg-black bg-opacity-40 p-6">
      <div
        class="text-shadow-md font-AlexBrush text-8xl leading-none text-white"
      >
        <span>Relax &</span>
        <span class="ml-14 block">Recharge</span>
      </div>

      <p class="text-shadow-sm mt-5 mb-4 text-xl text-white">
        Life is extremely fast. Travel and have fun while your heart is young.
      </p>

      <BaseButton button-type="primary">Book Now</BaseButton>
    </div>
  </HeroBanner>
  <!-- ./Hero -->

  <!-- ./About -->
  <div class="my-24 mx-auto max-w-3xl p-4 text-center">
    <h2 class="text-5xl leading-none text-secondary">Paradise Beach Resort</h2>
    <p class="mt-2 text-gray-500">The best place to clear your mind.</p>

    <p class="my-5 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero
      repellat consectetur saepe facilis. Placeat, similique quisquam! Ut,
      consequuntur! Aliquam, earum. Nostrum delectus doloremque ex labore,
      perspiciatis necessitatibus dolorem quas.
    </p>

    <p class="my-5 text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis
      corrupti. Voluptates, harum a reprehenderit explicabo quisquam nostrum
      dignissimos provident.
    </p>

    <font-awesome-icon
      icon="fa-solid fa-water"
      class="mx-auto my-12 block text-4xl text-gray-500"
    />

    <div class="my-12 mx-auto h-80 w-[30rem] p-2 shadow shadow-gray-800">
      <img
        src="../assets/img/banner/home-about.jpg"
        alt="about image"
        class="h-full w-full"
      />
    </div>
  </div>
  <!-- ./About -->

  <!-- Featured Room -->
  <div class="my-24 flex shadow-[0_0px_30px_#d1cfcf]">
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="max-w-lg">
        <h2 class="font-Playfair text-5xl font-bold text-primary">
          Comfortable Stay
        </h2>
        <p class="my-4 text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          quisquam excepturi ut animi id ipsam vel, vitae corporis maxime
          repellat?
        </p>
        <router-link :to="{ name: 'package' }" class="underline"
          >View More</router-link
        >
      </div>
    </div>
    <div class="h-[30rem] flex-1">
      <img
        src="../assets/img/room/room-1.jpg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
  </div>
  <!-- ./Featured Room -->

  <!-- Services -->
  <div class="my-24">
    <h2 class="text-center font-Playfair text-5xl font-bold text-primary">
      Services
    </h2>
    <ul class="mx-auto flex max-w-5xl space-x-10">
      <template v-for="(service, index) in services" :key="index">
        <li class="mt-10 border p-4 text-center shadow-lg">
          <font-awesome-icon
            :icon="`fas fa-${service.icon}`"
            class="text-4xl text-gray-500"
          />
          <h3 class="my-3 font-Playfair text-xl font-bold text-secondary">
            {{ service.name }}
          </h3>
          <p class="text-justify text-gray-700">{{ service.text }}</p>
        </li>
      </template>
    </ul>
  </div>
  <!-- ./Services -->

  <!-- Testimonials -->
  <div class="my-24 mx-auto max-w-3xl">
    <h2 class="text-center font-Playfair text-5xl font-bold text-primary">
      What Clients Say
    </h2>
    <carousel :items-to-show="1">
      <slide v-for="(test, index) in testimonials" :key="index">
        <div class="mx-auto mt-16 max-w-3xl p-4 text-center">
          <div class="mx-auto w-48">
            <img
              :src="`src/assets/img/testimonial/${test.img}`"
              alt=""
              class="h-full w-full rounded-full"
            />
          </div>
          <blockquote
            class="relative my-5 before:absolute before:left-0 before:-top-16 before:font-Playfair before:text-9xl before:text-gray-300 before:content-[open-quote] after:invisible after:content-[close-quote]"
          >
            {{ test.text }}
          </blockquote>
          <span class="font-Playfair text-gray-600">
            <em> - {{ test.name }} </em></span
          >
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <!-- ./Testimonials -->

  <!-- How to get here -->
  <div class="my-24 p-4">
    <div class="flex items-center justify-center space-x-5">
      <div
        class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100"
      >
        <img src="../assets/img/banner/about.jpg" alt="" class="w-full" />
      </div>
      <div
        class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100"
      >
        <img src="../assets/img/banner/package.jpg" alt="" class="w-full" />
      </div>
      <div
        class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100"
      >
        <img src="../assets/img/banner/contact.jpg" alt="" class="w-full" />
      </div>
      <div
        class="h-64 w-96 overflow-hidden rounded-md border border-solid border-zinc-100"
      >
        <img src="../assets/img/banner/home.jpg" alt="" class="w-full" />
      </div>
    </div>
    <div class="mt-8 text-center">
      <span
        class="inline-block rounded-lg bg-primary p-4 text-white hover:bg-primaryLight"
      >
        <font-awesome-icon
          icon="fas fa-map-pin"
          class="text-2xl text-red-600"
        />
        &nbsp; How to get here.
      </span>
    </div>
  </div>
  <!-- ./How to get here -->

  <!-- Follow Us -->
  <!-- ./Follow Us -->
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import HeroBanner from "../components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";

const services = ref([
  {
    name: "Pool",
    icon: "swimming-pool",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem! ",
  },
  {
    name: "Restaurant",
    icon: "utensils",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, maiores!",
  },
  {
    name: "Gym",
    icon: "dumbbell",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas?",
  },
  {
    name: "Bar",
    icon: "glass-martini-alt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
  },
]);

const testimonials = ref([
  {
    name: "Christian Ocol",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae suscipit quidem!",
    img: "test-1.png",
  },
  {
    name: "Christian 2",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
  },
  {
    name: "Christian 3",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!",
    img: "test-1.png",
  },
]);
</script>

<style></style>
