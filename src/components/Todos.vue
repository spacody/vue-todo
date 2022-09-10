<script setup lang="ts">
import type TodoType from '../types/TodoType';

const props = defineProps<{
  todos: TodoType[]
}>();

const emits = defineEmits<{
  (eventName: 'checkTodo', todo: TodoType): void
  (eventName: 'deleteTodo', index: number): void
}>();

const checkTodo = (todo: TodoType) => {
  emits('checkTodo', todo);
}

const deleteTodo = (index: number) => {
  emits('deleteTodo', index);
}
</script>

<template>
  <ul>
    <li
      v-for="(todo, index) in props.todos"
      :class="{ checked: todo.checked }"
      :key="todo.text"
      @click="checkTodo(todo)"
    >
      {{ todo.text }}
      <span class="close" @click.stop="deleteTodo(index)">×</span>
    </li>
  </ul>
</template>
