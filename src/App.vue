<script setup>
import { reactive, ref } from 'vue';

const todos = reactive([]);

const inputText = ref('');

const addTodo = () => {
  todos.push({
    text: inputText.value,
    checked: false
  });

  inputText.value = '';
}
</script>

<template>
  <div class="header">
    <h2>My To Do List</h2>
    <input type="text" placeholder="Title..." v-model="inputText" />
    <span @click="addTodo" class="addBtn">Add</span>
  </div>

  <ul>
    <li
      v-for="todo in todos"
      :class="{ checked: todo.checked }"
      :key="todo.text"
      @click="todo.checked = !todo.checked"
    >
      {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped>
</style>
