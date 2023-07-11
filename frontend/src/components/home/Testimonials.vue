<template>
  <section class="container mx-auto py-20 px-0 md:py-32">
    <div class="test-wrap">
      <h2
        class="test-title full-clip-path mb-0 py-4 text-center font-Playfair text-4xl text-beaver md:mb-8 md:text-5xl"
      >
        What our customers say
      </h2>

      <!-- cards  -->
      <div
        class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- testimonial -->
        <template v-for="(testimonial, index) in testimonials" :key="index">
          <Testimonial
            :testimonial="testimonial"
            :class="{ [testimonialClass[index]]: true }"
            class="full-clip-path"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import Testimonial from "@/components/Testimonial.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = ref([
  {
    name: "Alex",
    text: "I was blown away by the personalized service at the beach resort! The staff went above and beyond to ensure that my stay was comfortable and enjoyable. I also loved the sustainable tourism practices and the resort's commitment to the environment.",
    img: "test-1.jpg",
    rating: 5,
  },
  {
    name: "Maya",
    text: "I stayed at the beach resort with my family and we had a fantastic time! There were so many activities to choose from, and the kids' club kept my little ones entertained while my husband and I enjoyed some much-needed relaxation time.",
    img: "test-2.jpg",
    rating: 5,
  },
  {
    name: "David",
    text: "The beach resort was the perfect place for me to unwind and recharge. The serene environment and the sound of the ocean helped me relax and destress. I also loved the spa services and the delicious meals at the onsite restaurants.",
    img: "test-3.jpg",
    rating: 4,
  },
  {
    name: "Emily",
    text: "I had an amazing time at the beach resort! The accommodations were luxurious and the staff was incredibly friendly and helpful. I especially loved the sunset cruises and the delicious food at the onsite restaurants.",
    img: "test-4.jpg",
    rating: 4,
  },
  {
    name: "Daniel",
    text: "I would highly recommend the beach resort to anyone looking for a dream vacation. The location was unbeatable, with stunning views of the ocean and easy access to nearby attractions. The luxury accommodations and world-class dining made it an unforgettable experience.",
    img: "test-5.jpg",
    rating: 4,
  },
]);

const testimonialClass = ref([
  "bg-slate-700 sm:col-span-2",
  "bg-stone-600",
  "bg-gray-700 sm:row-span-2 md:col-start-3 md:row-start-1 lg:col-start-4",
  "bg-neutral-700",
  "col-span-1 bg-zinc-800 sm:col-span-2 md:col-span-3 lg:col-span-2",
]);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: { ease: "Expo.easeOut", duration: 1.5, delay: 0.5 },
    scrollTrigger: {
      trigger: ".test-wrap",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.from(".test-title", {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.from(
    ".testimonial",
    {
      y: -100,
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      autoAlpha: 0,
      duration: 1.2,
      ease: "Power4.easeOut",
      stagger: {
        grid: [4, 2],
        from: "random",
        amount: 0.5,
      },
    },
    0.3
  );
});
</script>
