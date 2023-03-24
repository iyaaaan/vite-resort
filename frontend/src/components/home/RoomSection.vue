<template>
  <section
    class="relative my-24 flex shadow-[0_0px_30px_#d1cfcf] after:absolute after:-top-64 after:-z-10 after:h-screen after:w-full after:bg-gray-100 after:content-['']"
  >
    <div class="flex flex-1 flex-col items-center justify-center bg-white">
      <div class="max-w-lg">
        <h2 class="font-Playfair text-5xl font-bold text-primary">
          Comfortable Stay
        </h2>
        <p class="my-4 text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          quisquam excepturi ut animi id ipsam vel, vitae corporis maxime
          repellat?
        </p>
        <router-link :to="{ name: 'package' }" class="underline"
          >View More</router-link
        >
      </div>
    </div>
    <div class="h-[30rem] flex-1">
      <img
        src="@/assets/img/room/room-1.jpg"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
  </section>
</template>
