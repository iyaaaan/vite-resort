<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const items = ref([]);

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    items.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <section class="container my-40">
    <router-link :to="{ name: 'AddProduct' }">Add Product</router-link>
    <table class="border p-4">
      <thead class="">
        <tr>
          <th class="border p-2">Id</th>
          <th class="border p-2">Name</th>
          <th class="border p-2">Price</th>
          <th class="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.product_id">
          <td class="border p-2">{{ item.product_id }}</td>
          <td class="border p-2">{{ item.product_name }}</td>
          <td class="border p-2">{{ item.product_price }}</td>
          <td>
            <router-link
              :to="{ name: 'EditProduct', params: { id: item.product_id } }"
              >Edit</router-link
            >
            <span @click="deleteProduct(item.product_id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped></style>
