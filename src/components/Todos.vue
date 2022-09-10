<script setup>
const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});

const emits = defineEmits(['deleteTodo', 'checkTodo']);

const checkTodo = (todo) => {
  emits('checkTodo', todo);
}

const deleteTodo = (index) => {
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
      <span class="close" @click="deleteTodo(index)">×</span>
    </li>
  </ul>
</template>
