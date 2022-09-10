<script setup>
import { reactive, onMounted } from 'vue';

import TodoHeader from './components/TodoHeader.vue';
import Todos from './components/Todos.vue';

const todos = reactive([]);

onMounted(() => {
  const oldTodos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(...oldTodos);
});

const addTodo = (todo) => {
  todos.push(todo);

  updateStorageTodos();
}

const checkTodo = (todo) => {
  const foundTodo = todos.find(item => item === todo);

  foundTodo.checked = !foundTodo.checked;
  updateStorageTodos();
}

const deleteTodo = (index) => {
  todos.splice(index, 1);
}

const updateStorageTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}
</script>

<template>
  <TodoHeader @todo-added="addTodo" />

  <Todos :todos="todos" @delete-todo="deleteTodo" @check-todo="checkTodo" />
</template>

<style scoped>
</style>
