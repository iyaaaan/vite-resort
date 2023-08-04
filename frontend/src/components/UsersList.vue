<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref([]);
const getUsers = async () => {
  await axios.get("http://localhost:3000/users").then((res) => {
    users.value = res.data;
  });
};

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
    console.log(res);
    getUsers();
  });
};

onMounted(() => {
  getUsers();
});
</script>

<template>
  <h2>Users List</h2>
  <router-link to="add-user">Add User</router-link>
  <table class="table">
    <thead>
      <th>ID</th>
      <th>Username</th>
      <th>Password</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.password }}</td>
        <td>
          <router-link :to="{ name: 'UpdateUser', params: { id: user.id } }"
            >Edit</router-link
          >
          <button @click="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
