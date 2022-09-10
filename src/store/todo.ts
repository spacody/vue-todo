import { defineStore } from 'pinia';
import type TodoType from '../types/TodoType';

export default defineStore('todo', {
  state: () => ({
    todos: [] as TodoType[]
  }),
  actions: {
    loadTodos() {
      const oldTodos = JSON.parse(localStorage.getItem('todos') || '') || [];
      this.todos.push(...oldTodos);
    },
    addTodo(todo: TodoType) {
      this.todos.push(todo);
    },
    checkTodo(todo: TodoType) {
      const foundTodo: TodoType|undefined = this.todos.find(item => item === todo);

      if (! foundTodo) {
        return;
      }
    
      foundTodo.checked = !foundTodo.checked;
    },
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    }
  }
})
