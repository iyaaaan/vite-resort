<template>
  <main>
    <div class="flex">
      <button @click="filter = 'all'">all</button>
      <button @click="filter = 'finished'">finished</button>
      <button @click="filter = 'unfinished'">unfinished</button>
    </div>
    <input type="text" v-model="newTodo" />
    <button @click="addNewTodo(newTodo)">AddXS</button>

    <div v-for="(todo, index) in filteredTodos" :key="index" class="flex">
      <h2 :class="{ 'line-through': todo.isFinished }" class="mr-4">
        {{ todo.text }}
      </h2>
      <button @click="toggleTodo(todo.id)">toggle</button>
    </div>
  </main>

  <div class="my-20">
    <h2 class="mb-5">Products</h2>
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="getProductById(product.id)">Edit</button>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="my-20">
    <form @submit.prevent="handleSubmit">
      <label class="mr-4">
        <span class="mr-4">Product:</span>
        <input class="border p-2" type="text" v-model="newProduct" />
      </label>

      <label class="mr-4">
        <span class="mr-4">Price:</span>
        <input class="border p-2 px-4" type="text" v-model="price" />
      </label>

      <button type="submit" class="rounded bg-stone-500 p-2 text-white">
        Add
      </button>
    </form>
  </div>
</template>

<script setup>
import { useTodosStore } from "@/store/TodoStore";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";

const action = ref("add");

const products = ref([]);
const productId = ref("");
const newProduct = ref("");
const price = ref("");

// product
const getProducts = async () => {
  const res = await axios.get("http://localhost:3000/products");
  products.value = res.data;
};

const handleSubmit = () => {
  if (action.value === "add") {
    addProduct();
  }
  if (action.value === "edit") {
    updateProduct();
  }
};

const addProduct = async () => {
  await axios
    .post("http://localhost:3000/products", {
      id: Math.floor(Math.random() * 100000),
      name: newProduct.value,
      price: price.value,
    })
    .then((res) => {
      getProducts();
      console.log(res);
      newProduct.value = "";
      price.value = "";
    });
};

const getProductById = async (id) => {
  action.value = "edit";
  const product = await axios.get(`http://localhost:3000/products/${id}`);

  productId.value = id;
  newProduct.value = product.data.name;
  price.value = product.data.price;
};

const updateProduct = async () => {
  await axios
    .put(`http://localhost:3000/products/${productId.value}`, {
      name: newProduct.value,
      price: price.value,
    })
    .then((res) => {
      getProducts();
      console.log(res);
      productId.value = "";
      newProduct.value = "";
      price.value = "";
    });
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      console.log(res);
      getProducts();
    });
  } catch (error) {
    if (error) console.log(error);
  }
};

onMounted(() => {
  getProducts();
});

const newTodo = ref("");

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};

const todosStore = useTodosStore();

const { filteredTodos, filter } = storeToRefs(todosStore);
const { addTodo, toggleTodo } = todosStore;
</script>
