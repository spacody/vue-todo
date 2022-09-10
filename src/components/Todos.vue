<script setup lang="ts">
import type TodoType from '../types/TodoType';

import useTodoStore from '../store/todo';
const todoStore = useTodoStore();

const props = defineProps<{
  todos: TodoType[]
}>();
</script>

<template>
  <ul>
    <li
      v-for="(todo, index) in props.todos"
      :class="{ checked: todo.checked }"
      :key="todo.text"
      @click="todoStore.checkTodo(todo)"
    >
      {{ todo.text }}
      <span class="close" @click.stop="todoStore.deleteTodo(index)">×</span>
    </li>
  </ul>
</template>
