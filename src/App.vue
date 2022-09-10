<script setup lang="ts">
import { reactive, onMounted, watch } from 'vue';

import type TodoType from './types/TodoType'

import TodoHeader from './components/TodoHeader.vue';
import Todos from './components/Todos.vue';

const todos: TodoType[] = reactive([]);

watch(todos, (newValue: TodoType[]) => {
  localStorage.setItem('todos', JSON.stringify(newValue));
});

onMounted(() => {
  const oldTodos = JSON.parse(localStorage.getItem('todos') || '') || [];
  todos.push(...oldTodos);
});

const addTodo = (todo: TodoType) => {
  todos.push(todo);
}

const checkTodo = (todo: TodoType) => {
  const foundTodo: TodoType|undefined = todos.find(item => item === todo);

  if (! foundTodo) {
    return;
  }

  foundTodo.checked = !foundTodo.checked;
}

const deleteTodo = (index: number) => {
  todos.splice(index, 1);
}
</script>

<template>
  <TodoHeader @todo-added="addTodo" />

  <Todos :todos="todos" @delete-todo="deleteTodo" @check-todo="checkTodo" />
</template>

<style scoped>
</style>
