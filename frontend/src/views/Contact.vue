<template>
  <!-- Hero -->
  <HeroBanner banner="about-hero">
    <div class="mx-auto max-w-5xl px-4 text-center font-light text-white">
      <p>
        From thrilling water sports to energizing beachside activities, our
        beach resort offers a wide range of experiences to satisfy your inner
        adventurer. Whether you're seeking a heart-pounding adrenaline rush or a
        leisurely day under the sun, our carefully curated selection of
        activities promises endless fun and unforgettable memories for guests of
        all ages and interests.
      </p>
    </div>
  </HeroBanner>
  <!-- ./Hero -->

  <section class="container py-20">
    <h2
      class="mb-12 px-4 text-center font-Playfair text-4xl text-beaver md:text-4xl"
    >
      Contact Us Today to Book Your Unforgettable Beach Resort Experience!
    </h2>

    <!-- form-warpper -->
    <div class="mx-auto max-w-3xl rounded bg-white px-8 py-14 shadow-lg">
      <!-- header -->
      <div class="mb-8 flex items-center justify-between">
        <div>
          <span>Got some questions?</span>
          <h2 class="text-3xl font-bold text-stone-700">Connect with us!</h2>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank">
            <font-awesome-icon
              icon="fab fa-facebook-f"
              class="m-1 h-8 w-8 rounded-full bg-stone-500 p-2 text-4xl text-white hover:bg-stone-700"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <font-awesome-icon
              icon="fab fa-instagram"
              class="m-1 h-8 w-8 rounded-full bg-stone-500 p-2 text-4xl text-white hover:bg-stone-700"
            />
          </a>
        </div>
      </div>
      <form action="">
        <BaseInput
          class="w-full"
          id="contactName"
          label="Name"
          type="text"
          v-model="form.name"
        />

        <BaseInput
          class="w-full"
          id="contactEmail"
          label="E-mail"
          type="email"
          v-model="form.email"
        />

        <BaseTextArea
          class="w-full"
          id="contactMessage"
          label="Message"
          type="textarea"
          v-model="form.message"
        />

        <BaseButton
          button-type="secondary"
          class="contact-sec-btn w-full md:w-auto"
          >Send</BaseButton
        >
      </form>
    </div>
  </section>

  <!-- map -->
  <section class="relative top-44">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4911.829108287153!2d122.98175637597885!3d14.135509188292373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398ae08a0de8c11%3A0x645b6d833e59210f!2sBagasbas%20Beach!5e1!3m2!1sen!2sph!4v1684887984201!5m2!1sen!2sph"
      width="100%"
      height="800"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="mt-20"
      scrolling="yes"
    ></iframe>
  </section>
</template>

<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";
import { ref } from "vue";

const form = ref([{ name: "" }, { email: "" }, { message: "" }]);
</script>
