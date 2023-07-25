<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const productName = ref("");
const productPrice = ref("");

const saveProduct = async () => {
  try {
    await axios.post("http://localhost:5000/products", {
      product_name: productName.value,
      product_price: productPrice.value,
    });

    productName.value = "";
    productPrice.value = "";

    router.push({ name: "ProductIndex" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section class="container my-40">
    <h2>Product Form</h2>

    <div>
      <label for="name">Product Name</label>
      <input
        type="text"
        v-model="productName"
        placeholder="Enter product name"
        id="name"
      />
    </div>

    <div>
      <label for="price">Product Price</label>
      <input
        type="text"
        v-model="productPrice"
        placeholder="Enter product price"
        id="price"
      />
    </div>

    <div>
      <button @click="saveProduct">Add Product</button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
