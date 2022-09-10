<script setup>
import { ref } from 'vue';

const emits = defineEmits(['todoAdded']);

const inputText = ref('');

const addTodo = () => {
  if (! inputText.value) return;

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
    <input type="text" placeholder="Title..." v-model="inputText" />
    <span @click="addTodo" class="addBtn">Add</span>
  </div>
</template>
