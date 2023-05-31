<template>
  <!-- Hero -->
  <HeroBanner banner="accommodation-hero" />

  <!-- room name -->
  <div
    class="container flex -translate-y-1/2 items-center justify-between bg-beaver p-6 text-white"
    v-if="room"
  >
    <div class="flex flex-wrap items-center">
      <h2 class="mr-4 mb-2 inline-block font-Playfair text-4xl">
        {{ room.name }}
      </h2>
      <template v-for="(n, index) in room.rating" :key="index">
        <font-awesome-icon icon="fas fa-star" class="text-xl text-yellow-300" />
        <!-- additional stars -->
        <template v-for="x in 5 - room.rating">
          <font-awesome-icon
            v-if="index === room.rating - 1"
            class="text-xl text-gray-200"
            icon="fas fa-star"
          />
        </template>
      </template>
      <div class="basis-full font-light">{{ room.inclusion }}</div>
    </div>
    <div>
      <span class="text-2xl font-semibold">{{ room.price }}</span>
      <span>/ night</span>
    </div>
  </div>

  <div class="container mt-20 grid grid-cols-3 gap-4" v-if="room">
    <!-- room gallery -->
    <div class="col-span-2 bg-red-200">
      <img
        :src="`/src/assets/img/room/${room.img}`"
        :alt="room.img"
        class="h-auto w-full"
      />
    </div>

    <!-- booking form -->
    <div class="border-gray-300">
      <form
        action=""
        class="mb-4 rounded-lg border border-gray-300 bg-white p-6 px-8 pt-6 pb-8 shadow-md"
      >
        <h2 class="mb-10 font-Playfair text-xl font-bold text-gray-700">
          Book this room
        </h2>

        <div class="mb-4">
          <label class="custom-label" for="bookDate">
            Check-In ~ Check-Out
          </label>
          <date-picker
            range
            v-model:value="date"
            class="w-full"
            placeholder="Check-In ~ Check-Out"
            :editable="false"
            input-class="custom-input"
            :input-attr="{ id: 'bookDate' }"
            value-type="YYYY/MM/DD"
            format="ddd, MMMM DD, YYYY"
            :disabled-date="disabledBeforeTodayAndAfterAWeek"
          ></date-picker>
        </div>

        <div v-if="form.date">
          {{ form.date[0] }}
        </div>
        <div v-if="form.date">
          {{ form.date[1] }}
        </div>

        <div class="flex gap-4">
          <BaseInput
            id="adult"
            label="Adult"
            type="number"
            v-model="form.adult"
          />

          <BaseInput
            id="child"
            label="Child"
            type="number"
            v-model="form.child"
          />
        </div>

        <BaseButton button-type="secondary" class="w-full"
          >Check Availability</BaseButton
        >
      </form>
    </div>
  </div>

  <div>HELLO</div>
  <div v-if="room">
    <h1>{{ room.name }}</h1>
    <span>{{ room.id }}</span>
    <p>{{ room.desc }}</p>
    <p>{{ room.img }}</p>
  </div>
  <div v-else>
    <h1><strong>Loading room details..</strong></h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";

const props = defineProps(["id"]);

let room = ref(null);
let date = ref(null);

let form = ref([{ checkIn: "" }, { checkOut: "" }, { adult: 0 }, { child: 0 }]);

onMounted(() => {
  fetch(`http://localhost:3000/room/${props.id}`)
    .then((res) => res.json())
    .then((data) => (room.value = data))
    .catch((err) => console.log(err.message));
});

function disabledBeforeTodayAndAfterAWeek(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  console.log(today);

  return date < today;
}

let d = new Date("yy-mm-dd");
console.log(d);
</script>

<style lang="scss" scoped></style>
