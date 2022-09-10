<script setup>
import { reactive, ref } from 'vue';

import TodoHeader from './components/TodoHeader.vue';
import Todos from './components/Todos.vue';

const todos = reactive([]);

const addTodo = (todo) => {
  todos.push(todo);
}

const checkTodo = (todo) => {
  const foundTodo = todos.find(item => item === todo);

  foundTodo.checked = !foundTodo.checked;
}

const deleteTodo = (index) => {
  todos.splice(index, 1);
}
</script>

<template>
  <TodoHeader @todo-added="addTodo" />

  <Todos :todos="todos" @delete-todo="deleteTodo" @check-todo="checkTodo" />
</template>

<style scoped>
</style>
