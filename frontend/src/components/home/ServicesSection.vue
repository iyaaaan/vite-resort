<template>
  <div class="my-24">
    <h2 class="text-center font-Playfair text-5xl font-bold text-primary">
      Services
    </h2>
    <ul class="mx-auto flex max-w-5xl space-x-10">
      <template v-for="(service, index) in services" :key="index">
        <li
          class="mt-10 rounded-md border border-solid border-zinc-100 bg-white p-4 text-center shadow-lg"
        >
          <font-awesome-icon
            :icon="`fas fa-${service.icon}`"
            class="text-4xl text-gray-400"
          />
          <h3 class="my-3 font-Playfair text-xl font-bold text-secondary">
            {{ service.name }}
          </h3>
          <p class="text-justify text-gray-700">{{ service.text }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  services: Array,
});
</script>
