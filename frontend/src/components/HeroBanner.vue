<template>
  <section data-scroll data-scroll-section>
    <div
      :style="{
        'background-image':
          'linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(/src/assets/img/banner/' +
          banner +
          '.jpg)',
      }"
      class="flex h-screen w-full items-center bg-cover bg-fixed bg-no-repeat font-Montserrat"
      :class="banner === 'home' ? 'bg-bottom' : 'bg-center'"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  banner: String,
});
</script>
