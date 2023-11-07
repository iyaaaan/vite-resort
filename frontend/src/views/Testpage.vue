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

  <section>
    <div></div>
  </section>
</template>

<script setup>
import { useTodosStore } from "@/store/TodoStore";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";

// Data
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = ref([]);

// Generate time slots from 7:00 AM to 5:30 PM with 30-minute intervals
const generateTimeSlots = () => {
  let currentTime = new Date(0, 0, 0, 7, 0); // Start at 7:00 AM
  const endTime = new Date(0, 0, 0, 17, 30); // End at 5:30 PM

  while (currentTime <= endTime) {
    timeSlots.value.push(
      currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    currentTime = new Date(currentTime.getTime() + 30 * 60 * 1000); // Increment by 30 minutes
  }
};

const classSlots = ref([]);
// Generate empty class slots for each time slot and day
const generateClassSlots = () => {
  days.forEach((day) => {
    timeSlots.value.forEach((timeSlot) => {
      classSlots.value.push({ day, timeSlot, className: "" });
    });
  });
};

const getClassName = (day, timeSlot) => {
  const slot = classSlots.value.find(
    (slot) => slot.day === day && slot.timeSlot === timeSlot
  );
  return slot ? slot.className : "";
};

const action = ref("add");

const products = ref([]);
const productId = ref("");
const newProduct = ref("");
const price = ref("");

// product
const getProducts = async () => {
  const res = await axios.get("products");
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
    .post("products", {
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
  const product = await axios.get(`products/${id}`);

  productId.value = id;
  newProduct.value = product.data.name;
  price.value = product.data.price;
};

const updateProduct = async () => {
  await axios
    .put(`products/${productId.value}`, {
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
    await axios.delete(`products/${id}`).then((res) => {
      console.log(res);
      getProducts();
    });
  } catch (error) {
    if (error) console.log(error);
  }
};

onMounted(() => {
  getProducts();

  generateTimeSlots();
  generateClassSlots();
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
