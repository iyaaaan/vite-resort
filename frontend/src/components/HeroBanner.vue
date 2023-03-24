<template>
  <div
    ref="hero"
    :style="{
      'background-image': 'url(/src/assets/img/banner/' + banner + '.jpg)',
    }"
    class="flex h-screen w-full items-center bg-cover bg-fixed bg-center bg-no-repeat font-Montserrat"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

defineProps({
  banner: String,
});

const hero = ref(null);

onMounted(() => {
  gsap.from(hero.value, {
    scale: 0.8,
    duration: 1.4,
    autoAlpha: 0,
    ease: "power2.out",
  });
});
</script>
