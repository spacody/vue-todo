<script setup>
import { ref, onMounted } from 'vue';

const emits = defineEmits(['todoAdded']);

const inputRef = ref(null);
const inputText = ref('');

onMounted(() => {
  inputRef.value.focus();
})

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
    <input ref="inputRef" type="text" placeholder="Title..." v-model="inputText" />
    <span @click="addTodo" class="addBtn">Add</span>
  </div>
</template>
