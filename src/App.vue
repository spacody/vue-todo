<script setup lang="ts">
import { onMounted } from 'vue';

import type TodoType from './types/TodoType'

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

const addTodo = (todo: TodoType) => {
  todoStore.addTodo(todo);
}

const checkTodo = (todo: TodoType) => {
  todoStore.checkTodo(todo);
}

const deleteTodo = (index: number) => {
  todoStore.deleteTodo(index);
}
</script>

<template>
  <TodoHeader @todo-added="addTodo" />

  <Todos :todos="todoStore.todos" @delete-todo="deleteTodo" @check-todo="checkTodo" />
</template>

<style scoped>
</style>
