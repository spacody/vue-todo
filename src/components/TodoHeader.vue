<script setup lang="ts">
import { ref, onMounted } from 'vue';

import type TodoType from '../types/TodoType';

const emits = defineEmits({
  todoAdded: (todo: TodoType) => {
    return true;
  }
});

const inputRef = ref<HTMLInputElement | null>(null);
const inputText = ref('');

onMounted(() => {
  inputRef.value?.focus();
})

const addTodo = () => {
  if (! inputText.value) {
    alert('You have to enter some text!');

    return;
  }

  emits('todoAdded', {
    text: inputText.value,
    checked: false
  });

  inputText.value = '';
}
</script>

<template>
  <div class="header">
    <h2>My To Do List</h2>
    <input ref="inputRef" type="text" placeholder="Title..." v-model="inputText" />
    <span @click="addTodo" class="addBtn">Add</span>
  </div>
</template>
