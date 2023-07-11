<template>
  <!-- wave -->
  <div class="footer-wave relative w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 300 2400 250"
      opacity="1"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad">
          <stop
            stop-color="hsla(196, 42%, 55%, 1.00)"
            stop-opacity="1"
            offset="0%"
          ></stop>
          <stop stop-color="#164e63" stop-opacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g fill="#164e63" transform="matrix(1,0,0,1,0,-17.049041748046875)">
        <path
          d="M 0 330.359212526045 Q 480 450 480 284.09805533139905 Q 960 450 960 349.91586566858626 Q 1440 450 1440 354.6289408250575 Q 1920 450 1920 341.12045201841283 Q 2400 450 2400 344.80060654819755 L 2400 500 L 0 500 L 0 333.5358130160081 Z"
          transform="matrix(1,0,0,1,0,60)"
          opacity="0.37"
        ></path>
        <path
          d="M 0 330.359212526045 Q 480 450 480 284.09805533139905 Q 960 450 960 349.91586566858626 Q 1440 450 1440 354.6289408250575 Q 1920 450 1920 341.12045201841283 Q 2400 450 2400 344.80060654819755 L 2400 450 L 0 450 L 0 333.5358130160081 Z"
          transform="matrix(1,0,0,1,0,90)"
          opacity="0.68"
        ></path>
        <path
          d="M 0 330.359212526045 Q 480 450 480 284.09805533139905 Q 960 450 960 349.91586566858626 Q 1440 450 1440 354.6289408250575 Q 1920 450 1920 341.12045201841283 Q 2400 450 2400 344.80060654819755 L 2400 450 L 0 450 L 0 333.5358130160081 Z"
          transform="matrix(1,0,0,1,0,120)"
          opacity="1.00"
        ></path>
      </g>
    </svg>
  </div>

  <footer
    class="footer relative bg-cyan-900 p-4 font-Montserrat text-sm text-white"
  >
    <div
      class="container flex flex-wrap justify-start text-center md:text-left"
    >
      <!-- logo -->
      <div class="w-full p-4 text-center md:w-1/2 md:text-justify lg:w-1/4">
        <img
          src="../assets/img/logo.png"
          alt=""
          class="mx-auto w-24 sm:w-28 md:w-32 lg:w-36"
        />
        <p class="backgr text-gray-200">Rest your soul in paradise.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illum
          veritatis deserunt praesentium temporibus molestiae maiores laudantium
          beatae. Quis, aperiam.
        </p>
      </div>

      <!-- site links -->
      <div class="w-full p-4 md:w-auto">
        <h3 class="font-bold">Site Links</h3>
        <ul>
          <li class="my-2 hover:text-secondary">
            <router-link :to="{ name: 'Home' }"><span>Home</span></router-link>
          </li>
          <li class="my-2 hover:text-secondary">
            <router-link :to="{ name: 'About' }">About</router-link>
          </li>
          <li class="my-2 hover:text-secondary">
            <router-link :to="{ name: 'Rooms' }">Accommodation</router-link>
          </li>
          <li class="my-2 hover:text-secondary">
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- contact -->
      <div class="w-full p-4 md:w-60 lg:w-1/4">
        <h3 class="font-bold">Contact Us</h3>
        <ul>
          <li class="my-2">
            <font-awesome-icon
              icon="fas fa-map-marker-alt"
              class="mr-2 text-base"
            />
            <span>P-5 Brgy. Magang, Daet, Camarines Norte</span>
          </li>
          <li class="my-2">
            <font-awesome-icon icon="fas fa-phone-alt" class="mr-2 text-base" />
            <span>+(63) 929-8244-464</span>
          </li>
          <li class="my-2">
            <font-awesome-icon icon="fas fa-envelope" class="mr-2 text-base" />
            <span>P-5 Brgy. Magang, Daet, Camarines Norte</span>
          </li>
          <li class="mt-8 mb-2">
            <h3 class="font-bold">Follow us on:</h3>
            <a href="https://www.facebook.com" target="_blank">
              <font-awesome-icon
                icon="fab fa-facebook-f"
                class="hover:text-secondaryLight m-2 text-4xl hover:text-secondary"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <font-awesome-icon
                icon="fab fa-instagram"
                class="hover:text-secondaryLight m-2 text-4xl hover:text-secondary"
              />
            </a>
          </li>
        </ul>
      </div>

      <!-- get in touch -->
      <div class="w-full grow p-4 md:w-1/2 lg:w-1/4">
        <h3 class="text-4xl font-bold">Get in touch</h3>
        <p>
          Get updated to our latest promos and discounts for your dream
          vacation!
        </p>

        <div class="relative block text-gray-400 focus-within:text-gray-600">
          <font-awesome-icon
            icon="fas fa-envelope"
            class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400"
          />
          <input
            id="email"
            class="block w-full rounded-full py-3 pl-11 ring-cyan-500 focus:outline-none focus:ring-2"
            :class="{ 'ring-red-500': !isValidEmail }"
            autocomplete="off"
            name="email"
            placeholder="email@kemuscorp.com"
            type="email"
            v-model="email"
          />
        </div>
        <button
          class="button button-secondary mt-4 w-full rounded-full p-3 disabled:bg-slate-400"
          :disabled="!isValidEmail"
        >
          Subscribe
        </button>

        <p>
          By clicking "subscribe", you agree to receive emails from Paradise
          Beach Resort and accept our web terms of use and privacy and cookie
          policy.
        </p>
      </div>
    </div>

    <!-- foot note -->
    <div class="container mx-auto">
      <hr class="border-gray-300" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus
        in odio laboriosam et iusto ut excepturi fuga doloremque accusantium?
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";

const email = ref("");

const isValidEmail = computed(() => {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(email.value);
});
</script>

<style scoped>
.router-link-active {
  @apply text-secondary;
}
</style>
