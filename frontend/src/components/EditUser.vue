<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { id } = defineProps({ id: String });

const userId = parseInt(id);
const username = ref("");
const password = ref("");

const getUserById = async () => {
  await axios.get(`users/${id}`).then((res) => {
    username.value = res.data.username;
    password.value = res.data.password;
  });
};

const updateUser = async () => {
  await axios
    .put(`users/${id}`, {
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

onMounted(() => {
  getUserById();
});
</script>

<template>
  <h2>Update a User</h2>

  <form @submit.prevent="updateUser">
    <label>
      <span>Username</span>
      <input type="text" v-model="username" class="border p-2" />
    </label>
    <label>
      <span>Password</span>
      <input type="text" v-model="password" class="border p-2" />
    </label>
    <button>Update</button>
  </form>
</template>
