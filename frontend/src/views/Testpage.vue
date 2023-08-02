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
</template>

<script setup>
import { useTodosStore } from "@/store/TodoStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const newTodo = ref("");

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};

const todosStore = useTodosStore();

const { filteredTodos, filter } = storeToRefs(todosStore);
const { addTodo, toggleTodo } = todosStore;
</script>
