<template>
  <Navbar></Navbar>

  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>

  <Footer></Footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
