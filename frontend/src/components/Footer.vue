<template>
  <footer
    class="relative flex justify-center space-x-20 bg-zinc-900 p-4 text-white"
  >
    <div class="w-56">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div>
      <h3 class="font-Playfair text-2xl font-bold text-secondary">
        Navigation Links
      </h3>
      <ul>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'package' }">Packages</router-link></li>
        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
      </ul>
    </div>
    <div>
      <h3 class="font-Playfair text-2xl font-bold text-primary">Contact Us</h3>
      <div>
        <ul>
          <li>
            <font-awesome-icon
              icon="fas fa-map-marker-alt"
              class="mr-2 text-2xl text-gray-500"
            />
            <span>P-5 Brgy. Magang, Daet, Camarines Norte</span>
          </li>
          <li>
            <font-awesome-icon
              icon="fas fa-phone-alt"
              class="mr-2 text-2xl text-gray-500"
            />
            <span>+(63) 929-8244-464</span>
          </li>
          <li>
            <font-awesome-icon
              icon="fas fa-envelope"
              class="mr-2 text-2xl text-gray-500"
            />
            <span>P-5 Brgy. Magang, Daet, Camarines Norte</span>
          </li>
          <li>
            <h3 class="font-Playfair text-2xl font-bold text-primary">
              Follow us on:
            </h3>
            <font-awesome-icon
              icon="fab fa-facebook-f"
              class="text-2xl text-gray-500"
            />
            <font-awesome-icon
              icon="fab fa-instagram"
              class="text-2xl text-gray-500"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
