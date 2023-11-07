<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");

const addUser = async () => {
  await axios
    .post("users", {
      id: Math.floor(Math.random() * 100000),
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      username.value = "";
      password.value = "";

      router.push("/users");
    });
};
</script>

<template>
  <h2>Create a User</h2>

  <form @submit.prevent="addUser">
    <label>
      <span>Username</span>
      <input type="text" v-model="username" class="border p-2" />
    </label>
    <label>
      <span>Password</span>
      <input type="text" v-model="password" class="border p-2" />
    </label>
    <button>Submit</button>
  </form>
</template>
