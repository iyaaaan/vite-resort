<template>
  <section class="container px-0 py-48 text-neutral-700">
    <div class="text-center">
      <h2 class="font-Playfair text-4xl text-beaver md:text-5xl">
        What are you waiting for?
      </h2>
      <p class="font-light">
        Experience the ultimate beach getaway at our resort!
      </p>
    </div>

    <div class="mt-16 flex flex-wrap items-start justify-end">
      <div class="hidden w-full px-4 md:block md:w-1/2">
        <img src="src/assets/img/banner/book-now.jpg" alt="" class="w-full" />
      </div>
      <div class="w-full px-4 md:w-1/2">
        <form action="#">
          <div class="mb-4">
            <label class="text-beaver">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              class="block w-full rounded-lg px-4 py-2 outline-none"
              autocomplete="off"
            />
          </div>

          <div class="mb-4">
            <label class="text-beaver">E-mail</label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              class="block w-full rounded-lg px-4 py-2 outline-none"
              autocomplete="off"
            />
          </div>

          <div class="mb-4">
            <label class="text-beaver">Message</label>
            <textarea
              id="message"
              class="block w-full px-4 py-2"
              rows="5"
              placeholder="Message"
              autocomplete="off"
            ></textarea>
          </div>

          <div>
            <BaseButton button-type="secondary" class="w-full md:w-auto"
              >Reserve your spot</BaseButton
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<style lang="scss" scoped></style>
