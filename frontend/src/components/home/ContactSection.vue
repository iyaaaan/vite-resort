<template>
   <section class="container px-0 py-48 text-neutral-600">
        <div class="text-center">
            <h2 class="font-Playfair text-4xl md:text-5xl">What are you waiting for?</h2>
            <p class="font-light">Experience the ultimate beach getaway at our resort!</p>
        </div>

        <div class="flex justify-end items-start flex-wrap mt-16">
            <div class="w-full md:w-1/2 px-4 hidden md:block">
                <img src="src/assets/img/banner/book-now.jpg" alt="" class="w-full" />
            </div>
            <div class="w-full md:w-1/2 px-4">
                <form action="#">
                    <div class="mb-4">
                        <label class="text-beaver">Name</label>
                        <input type="text" placeholder="Enter your name" class="block outline-none px-4 py-2 rounded-lg w-full" autocomplete="off">
                    </div>

                    <div class="mb-4">
                        <label class="text-beaver">E-mail</label>
                        <input type="email" placeholder="Enter your e-mail" class="block outline-none px-4 py-2 rounded-lg w-full" autocomplete="off">
                    </div>

                    <div class="mb-4">
                        <label class="text-beaver">Message</label>
                        <textarea id="message" class="block w-full px-4 py-2" rows="5" placeholder="Message" autocomplete="off"></textarea>
                    </div>

                    <div>
                        <BaseButton
                            button-type="secondary"
                            class="w-full md:w-auto"
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

<style lang="scss" scoped>

</style>