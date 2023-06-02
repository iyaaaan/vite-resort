<template>
  <!-- booking form -->
  <div class="border-gray-300">
    <form
      action=""
      class="mb-4 rounded border border-gray-300 bg-white p-6 px-8 pt-6 pb-8 shadow-md"
    >
      <h2 class="mb-10 font-Playfair text-xl font-bold text-beaver">
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
          :disabled-date="backDates"
        ></date-picker>
      </div>

      <div class="flex gap-4">
        <BaseInput
          class="w-full"
          id="adult"
          label="Adult"
          type="number"
          min="1"
          max="3"
          v-model="form.adult"
        />

        <BaseInput
          class="w-full"
          id="child"
          label="Child"
          type="number"
          min="1"
          max="3"
          v-model="form.child"
        />
      </div>

      <BaseButton button-type="secondary" class="w-full"
        >Check Availability</BaseButton
      >
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";

// date
let date = ref([]);

// form data
let form = ref([{ checkIn: "" }, { checkOut: "" }, { adult: 0 }, { child: 0 }]);

// set value if checIn/checkOut after selecting a date
watch(date, () => {
  form.value.checkIn = date.value[0];
  form.value.checkOut = date.value[1];
});

// disable back dates in the calendar
function backDates(date) {
  const today = new Date();
  return date < today;
}
</script>

<style lang="scss" scoped></style>
