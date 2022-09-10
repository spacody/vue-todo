<script setup>
import { reactive, ref } from 'vue';

import TodoHeader from './components/TodoHeader.vue';

const todos = reactive([]);

const inputText = ref('');

const addTodo = (todo) => {
  todos.push(todo);
}

const deleteTodo = (index) => {
  todos.splice(index, 1);
}
</script>

<template>
  <TodoHeader @todo-added="addTodo" />

  <ul>
    <li
      v-for="(todo, index) in todos"
      :class="{ checked: todo.checked }"
      :key="todo.text"
      @click="todo.checked = !todo.checked"
    >
      {{ todo.text }}
      <span class="close" @click="deleteTodo(index)">×</span>
    </li>
  </ul>
</template>

<style scoped>
</style>
