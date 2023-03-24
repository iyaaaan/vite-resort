<template>
  <footer class="bg-cyan-900 p-4 font-Montserrat text-sm text-white">
    <div class="mx-auto flex max-w-7xl justify-start space-x-8">
      <!-- logo -->
      <div class="max-w-xs p-4 text-justify">
        <img src="../assets/img/logo.png" alt="" class="mx-auto w-36" />
        <p class="text-gray-200">Rest your soul in paradise.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illum
          veritatis deserunt praesentium temporibus molestiae maiores laudantium
          beatae. Quis, aperiam.
        </p>
      </div>

      <!-- site links -->
      <div class="shrink-0 p-4">
        <h3 class="font-bold">Site Links</h3>
        <ul>
          <li class="my-2 hover:text-primaryLight">
            <router-link :to="{ name: 'home' }"><span>Home</span></router-link>
          </li>
          <li class="my-2 hover:text-primaryLight">
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="my-2 hover:text-primaryLight">
            <router-link :to="{ name: 'package' }">Packages</router-link>
          </li>
          <li class="my-2 hover:text-primaryLight">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- contact -->
      <div class="shrink-0 p-4">
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
                class="m-2 text-lg hover:text-secondaryLight"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <font-awesome-icon
                icon="fab fa-instagram"
                class="m-2 text-lg hover:text-secondaryLight"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="p-4">
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
          class="button button-secondary mt-4 w-full p-3 disabled:bg-slate-400"
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
    <div class="mx-auto max-w-7xl">
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

<style lang="scss" scoped></style>
