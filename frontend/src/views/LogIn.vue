<template>
  <div class="flex h-screen w-full items-center justify-center px-4">
    <div>
      <form
        @submit.prevent="handleLogin"
        class="min-w-[500px] max-w-2xl rounded-md border bg-white p-10"
      >
        <div class="mb-14 flex items-center justify-center">
          <Icon
            icon="eos-icons:admin-outlined"
            class="text-6xl text-stone-700"
          />
          <h2 class="ml-2 text-lg font-bold text-stone-700">LoginX</h2>
        </div>

        <BaseInput
          id="username"
          label="Username"
          type="text"
          v-model="login.username"
        />

        <BaseInput
          id="password"
          label="Password"
          type="password"
          v-model="login.password"
        />

        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import axios from "axios";
import BaseInput from "@/components/BaseInput.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const login = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const response = await axios.post(`http://localhost:5000/admin/login/`, {
      username: login.value.username,
      password: login.value.password,
    });
    if (!response.data) {
      router.push({ name: "Login" });
      console.log("Error logging in");
      console.log(response);
    } else {
      router.push({ name: "Admin" });
      console.log(response);
      console.log("Logged in successfuly");
    }

    console.log(login.value.username);
    console.log(login.value.password);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
