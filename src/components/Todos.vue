<script setup lang="ts">
import { onMounted } from 'vue';

import useTodoStore from '../store/todo';
const todoStore = useTodoStore();

todoStore.$subscribe((mutations, { todos }) => {
  localStorage.setItem('todos', JSON.stringify(todos));
})

onMounted(() => {
  todoStore.loadTodos();
});
</script>

<template>
  <ul>
    <li
      v-for="(todo, index) in todoStore.todos"
      :class="{ checked: todo.checked }"
      :key="todo.text"
      @click="todoStore.checkTodo(todo)"
    >
      {{ todo.text }}
      <span class="close" @click.stop="todoStore.deleteTodo(index)">×</span>
    </li>
  </ul>
</template>
