<script setup>
import { ref } from 'vue';

const inputText = ref('');

const addTodo = () => {
  // TODO 
}
</script>

<template>
  <div class="header">
    <h2>My To Do List</h2>
    <input type="text" placeholder="Title..." v-model="inputText" />
    <span @click="addTodo" class="addBtn">Add</span>
  </div>

  <ul>
    <li>Hit the gym</li>
    <li class="checked">Pay bills</li>
    <li>Meet George</li>
    <li>Buy eggs</li>
    <li>Read a book</li>
    <li>Organize office</li>
  </ul>
</template>

<style scoped>
</style>
