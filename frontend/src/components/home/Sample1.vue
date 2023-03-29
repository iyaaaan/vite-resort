<template>
  <section id="sticky" data-scroll-section class="yellow">
    <div class="service-text">
      <h1
        data-scroll
        data-scroll-sticky
        data-scroll-target="#sticky"
        data-scroll-speed="9"
      >
        Services we Offer
      </h1>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
      voluptas. Omnis quis placeat hic tempore debitis et voluptas officiis, quo
      alias accusamus? Pariatur odit porro officia dolorem quisquam asperiores
      vel.
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi sed,
      qui eaque facere laboriosam dolor aperiam quia modi vel rerum quae
      voluptatem veniam nulla possimus itaque voluptatum cum obcaecati fugiat
      ipsum esse quod ut repellendus iusto impedit. Corporis molestiae nobis
      minima repellendus vel magnam voluptates suscipit ullam expedita
      perferendis, voluptate a commodi doloribus nam libero? Sequi sed quasi
      ipsum alias, maxime ratione itaque earum tenetur iste at similique quod
      ducimus? Veritatis, animi qui in soluta cumque nostrum iste dolorem
      molestiae explicabo, eveniet laudantium ut debitis praesentium ad,
      laboriosam numquam dignissimos sunt non eaque tempore temporibus
      aspernatur. Cupiditate deserunt beatae ex! XX
    </div>
  </section>

  <Sample2 />
</template>

<script>
import Sample2 from "./Sample2.vue";

export default {
  components: {
    Sample2,
  },
};
</script>

<style scoped>
.yellow {
  background-color: yellow;
  min-height: 100vh;
}
</style>
