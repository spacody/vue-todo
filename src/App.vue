<script setup lang="ts">
import { onMounted } from 'vue';

import TodoHeader from './components/TodoHeader.vue';
import Todos from './components/Todos.vue';

import useTodoStore from './store/todo';
const todoStore = useTodoStore();

todoStore.$subscribe((mutations, { todos }) => {
  localStorage.setItem('todos', JSON.stringify(todos));
})

onMounted(() => {
  todoStore.loadTodos();
});
</script>

<template>
  <TodoHeader />

  <Todos
    :todos="todoStore.todos"
    @delete-todo="todoStore.deleteTodo"
    @check-todo="todoStore.checkTodo"
  />
</template>

<style scoped>
</style>
