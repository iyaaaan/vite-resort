<template>
  <div>
    <!-- Hero -->
    <HeroBanner banner="about-hero">
      <div class="mx-auto max-w-5xl text-center font-light text-white">
        <p>
          Welcome to our beach resort, where tranquil waves meet pristine shores
          and unforgettable experiences await. Nestled in the heart of paradise,
          our resort offers a haven of luxury and relaxation like no other.
          Immerse yourself in the beauty of our sun-kissed beaches, indulge in
          world-class dining, and surrender to the soothing embrace of our
          exclusive spa.
        </p>
      </div>
    </HeroBanner>

    <!-- about -->
    <section class="bg-[#8E706C] py-20 text-white">
      <div class="container flex flex-wrap justify-center">
        <div class="mb-4 h-auto w-80 md:w-96 lg:mr-4">
          <img
            src="src/assets/img/banner/about.jpg"
            alt="about page image"
            class="h-full w-full"
          />
        </div>
        <div class="mt-4 max-w-3xl lg:text-left">
          <h2
            class="text-center font-Playfair text-4xl md:text-5xl lg:text-left"
          >
            Our Story
          </h2>
          <p class="text-justify font-light lg:text-left">
            Our beach resort has a rich history that stems from a vision of
            creating a luxurious and rejuvenating retreat in harmony with the
            natural beauty of its surroundings. Inspired by the breathtaking
            coastal landscapes and a desire to provide a haven for relaxation,
            the resort was founded by a visionary entrepreneur and a team of
            passionate individuals who shared a common goal – to create an
            unparalleled getaway experience.
          </p>
          <p class="text-justify font-light lg:text-left">
            Whether you seek adventure or pure serenity, our resort promises to
            create cherished moments that linger in your memory. Step into a
            world where every detail is crafted with precision, where
            exceptional service and unparalleled elegance converge. Your dream
            vacation begins here, where time stands still, and your desires
            become reality. Discover the epitome of seaside sophistication and
            let us redefine the meaning of bliss. Welcome to your private oasis,
            where the art of escape is perfected.
          </p>
        </div>
      </div>
    </section>

    <!-- amenities -->
    <section class="py-20">
      <div class="container">
        <h2
          class="mx-auto max-w-4xl text-center font-Playfair text-2xl text-beaver md:text-4xl"
        >
          Unrivaled Luxuries and Endless Delights: Experience our Resort's
          Exceptional Facilities and Amenities
        </h2>

        <div
          class="mt-12 grid grid-cols-1 gap-4 text-stone-700 sm:grid-cols-2 md:grid-cols-3"
        >
          <template v-for="amenity in amenities" :key="id">
            <div>
              <div class="flex items-center gap-4">
                <Icon :icon="amenity.icon" class="text-4xl" />
                <span class="font-Playfair text-2xl">{{ amenity.name }}</span>
              </div>
              <p class="font-light">{{ amenity.desc }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- environmental commitment -->
    <section class="bg-[#7E8378] py-20 text-white">
      <div class="container flex flex-wrap justify-center">
        <div class="mb-4 h-auto w-80 md:w-96 lg:mr-4">
          <img
            src="src/assets/img/banner/about.jpg"
            alt="about page image"
            class="h-full w-full"
          />
        </div>
        <div class="mt-4 max-w-3xl">
          <h2
            class="text-center font-Playfair text-4xl md:text-5xl lg:text-left"
          >
            Environmental Commitment
          </h2>
          <p class="text-justify font-light lg:text-left">
            At our beach resort, we are deeply committed to preserving the
            pristine beauty of our surroundings and minimizing our environmental
            footprint. Through comprehensive energy conservation measures,
            including the use of renewable energy sources and efficient
            technologies, we strive to reduce our carbon emissions and promote a
            sustainable future.
          </p>
          <p class="text-justify font-light lg:text-left">
            Our waste management practices prioritize recycling, composting, and
            responsible disposal, ensuring that we minimize waste generation and
            promote a circular economy. Additionally, we actively engage with
            the local community through various initiatives, supporting
            conservation projects, educational programs, and empowering local
            businesses to foster sustainable development and create a positive
            impact on the environment and society.
          </p>
        </div>
      </div>
    </section>

    <!-- social responsibility -->
    <section class="py-20">
      <div class="container flex flex-wrap justify-center">
        <div class="mt-4 mb-4 max-w-3xl lg:mr-4 lg:text-left">
          <h2
            class="text-center font-Playfair text-4xl text-beaver md:text-5xl lg:text-left"
          >
            Environmental Commitment
          </h2>
          <p class="text-justify font-light text-stone-700 lg:text-left">
            At our beach resort, we are deeply committed to preserving the
            pristine beauty of our surroundings and minimizing our environmental
            footprint. Through comprehensive energy conservation measures,
            including the use of renewable energy sources and efficient
            technologies, we strive to reduce our carbon emissions and promote a
            sustainable future.
          </p>
          <p class="text-justify font-light text-stone-700 lg:text-left">
            Our waste management practices prioritize recycling, composting, and
            responsible disposal, ensuring that we minimize waste generation and
            promote a circular economy. Additionally, we actively engage with
            the local community through various initiatives, supporting
            conservation projects, educational programs, and empowering local
            businesses to foster sustainable development and create a positive
            impact on the environment and society.
          </p>
        </div>
        <div class="order-first h-auto w-80 md:w-96 xl:order-last">
          <img
            src="src/assets/img/banner/about.jpg"
            alt="about page image"
            class="h-full w-full"
          />
        </div>
      </div>
    </section>

    <!-- banner section -->
    <section
      class="flex h-auto w-full items-center justify-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/img/banner/home-banner.webp')] bg-cover bg-fixed bg-bottom bg-no-repeat py-10 md:h-96"
    >
      <div class="container">
        <p class="text-center font-light text-white">
          For those seeking a taste of local culture and history, nearby
          attractions beckon with their charm. Wander through quaint coastal
          villages, where you'll encounter friendly locals, vibrant markets, and
          authentic culinary delights. Uncover hidden gems as you explore
          historic landmarks and immerse yourself in the rich heritage of the
          region.
        </p>
      </div>
    </section>

    <!-- travel information -->
    <section class="py-20">
      <div class="container flex flex-wrap justify-center">
        <div class="mb-4 h-auto w-80 md:w-96 lg:mr-4">
          <img
            src="src/assets/img/banner/about.jpg"
            alt="about page image"
            class="h-full w-full"
          />
        </div>
        <div class="mt-4 max-w-3xl">
          <h2
            class="text-center font-Playfair text-4xl text-beaver md:text-5xl lg:text-left"
          >
            Travel Information
          </h2>
          <span class="text-stone-700"
            >Seamless Journey to Paradise: Easy Directions to Reach Our Beach
            Resort</span
          >

          <p class="font-light text-stone-700">
            At our beach resort, we are deeply committed to preserving the
            pristine beauty of our surroundings and minimizing our environmental
            footprint. Through comprehensive energy conservation measures,
            including the use of renewable energy sources and efficient
            technologies, we strive to reduce our carbon emissions and promote a
            sustainable future.
          </p>
          <p class="font-light text-stone-700">
            Our waste management practices prioritize recycling, composting, and
            responsible disposal, ensuring that we minimize waste generation and
            promote a circular economy. Additionally, we actively engage with
            the local community through various initiatives, supporting
            conservation projects, educational programs, and empowering local
            businesses to foster sustainable development and create a positive
            impact on the environment and society.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import HeroBanner from "@/components/HeroBanner.vue";

let amenities = ref([
  {
    name: "Pool",
    icon: "fa-solid:swimming-pool",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Restaurant",
    icon: "material-symbols:restaurant-menu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Casino",
    icon: "cil:casino",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Spa",
    icon: "material-symbols:spa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Casino",
    icon: "game-icons:martini",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
  {
    name: "Gym",
    icon: "mdi:gym",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero repellat consectetur saepe facilis.",
  },
]);
</script>
