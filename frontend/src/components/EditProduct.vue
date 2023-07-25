<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

// id prop
const { id } = defineProps(["id"]);

const router = useRouter();

const productName = ref("");
const productPrice = ref("");

const getProductById = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = response.data.product_name;
    productPrice.value = response.data.product_price;
    console.log(response);
    console.log(id);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getProductById();
});

const updateProduct = async () => {
  try {
    await axios.put(`http://localhost:5000/products/${id}`, {
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
      <button @click="updateProduct">Update Product</button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
