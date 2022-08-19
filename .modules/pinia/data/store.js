/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 *        @/data/store.js
 *
 */
import { defineStore } from "pinia";

export const useTodosStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [
      { id: 1, name: "first todo", completed: false },
      { id: 2, name: "second todo", completed: true },
      { id: 3, name: "third todo", completed: false },
      { id: 4, name: "fourth todo", completed: true },
      { id: 5, name: "fifth todo", completed: false },
    ],
  }),
  getters: {
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
  actions: {
    async addTodo(name) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.todos.push({
            id: Math.random() * 1000,
            name,
            completed: false,
          });
          resolve();
        }, 100); // add a delay for yo spinnas beyatch
      });
    },
    deleteTodo(itemID) {
      console.log("yo delete");
      this.todos = this.todos.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
});

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "yo pinia yo",
  }),
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});
