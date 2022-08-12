<template>
    <div id="hello-pinia">
        <div>🍍🍍🍍🍍{{ storeCounter.title }}🍍🍍🍍🍍</div>
        <div class="font-extrabold text-2xl">🍍🍍🍍🍍 {{ storeCounter.count }} 🍍🍍🍍🍍</div>
        <!-- storeCounter actions -->
        <div class="btn-group justify-center my-4">
            <button @click="storeCounter.decreaseCounter(2)" class="btn btn-sm">--</button>
            <button @click="storeCounter.decrementCount" class="btn btn-sm">-</button>
            <button @click="storeCounter.incrementCount" class="btn btn-sm">+</button>
            <button @click="storeCounter.increaseCounter(2)" class="btn btn-sm">++</button>
        </div>
        <!-- title edit -->
        <div class="form-control mb-8 gap-2">
            <label class="input-group px-16 mt-4 mx-auto ">
                <span class="bg-primary text-primary-content font-bold uppercase flex-none whitespace-nowrap">Page
                    Title</span>
                <input v-model="storeCounter.title" type="text" placeholder="New App title..."
                    class="input input-bordered flex w-full" />
            </label>
        </div>
        <!-- todos -->
        <div class="bg-base-300 flex flex-col items-start p-14 rounded-3xl">
            <div class="text-2xl font-extrabold mb-6">Todos:</div>
            <div v-for="todo in todos" :key="todo.id" class="flex items-start bg-primary/40 rounded w-96 p-3 mb-1">
                <!-- completed toggle -->
                <label class="btn btn-ghost hover:bg-transparent btn-circle swap swap-rotate flex-none ">
                    <!-- this hidden checkbox controls the state -->
                    <input class="hidden" type="checkbox" v-model="todo.completed" />
                    <!-- not done icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
                        class="swap-off h-4 w-4 ml-0.5 text-accent/50 dark:text-accent ">
                        <g fill="none" stroke="currentColor" stroke-width="2" data-name="Rectangle 1">
                            <path stroke="none" d="M0 0h18v18H0z" />
                            <path d="M1 1h16v16H1z" />
                        </g>
                    </svg>
                    <!-- done icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="swap-on h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </label>
                <!-- todo name -->
                <div class=" grow text-start text-lg ">
                    <div class=" grow text-start  text-lg ">
                        <input v-model="todo.name" type="text" placeholder="Enter todo..."
                            class="input input-bordered flex w-full text-lg bg-transparent border-none" />
                    </div>
                </div>
                <div class="flex-none">
                    <button
                        class="btn btn-circle btn-ghost hover:bg-transparent hover:text-warning text-warning/50 dark:text-warning/40"
                        @click="handleDeleteTodoClick(todo.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="text-2xl font-extrabold mb-6 mt-10">Completed Todos:</div>
            <div v-for="todo in completedTodos" :key="todo.id"
                class="flex items-start bg-primary/40 rounded w-96 p-3 mb-1">
                <!-- completed toggle -->

                <label class="btn btn-ghost hover:bg-transparent btn-circle swap swap-rotate flex-none ">
                    <!-- this hidden checkbox controls the state -->
                    <input class="hidden" type="checkbox" v-model="todo.completed" />
                    <!-- not done icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
                        class="swap-off h-4 w-4 ml-0.5 text-accent/50 dark:text-accent ">
                        <g fill="none" stroke="currentColor" stroke-width="2" data-name="Rectangle 1">
                            <path stroke="none" d="M0 0h18v18H0z" />
                            <path d="M1 1h16v16H1z" />
                        </g>
                    </svg>
                    <!-- done icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="swap-on h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </label>
                <div class=" grow text-start  text-lg ">
                    <input v-model="todo.name" type="text" placeholder="Enter todo..."
                        class="input input-bordered flex w-full text-lg bg-transparent border-none" />
                </div>
                <div class="flex-none">
                    <button
                        class="btn btn-circle btn-ghost hover:bg-transparent hover:text-warning text-warning/50 dark:text-warning/40"
                        @click="handleDeleteTodoClick(todo.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- add a todo -->
            <div class="form-control mb-8 gap-2">
                <label class="input-group px-16 mt-4 mx-auto ">
                    <span class="bg-primary text-primary-content font-bold uppercase flex-none whitespace-nowrap">
                        TODO</span>
                    <input v-model="todoInput" type="text" placeholder="Enter a New Todo"
                        class="input input-bordered flex w-full" />
                </label>
                <button :disabled="todoInput === ''" class="btn btn-accent btn-xl w-48 mx-auto mt-4 "
                    @click="handleTodoInputSubmit">enter todo</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore, useTodosStore } from '../data/store'
const storeCounter = useCounterStore()
const { todos, completedTodos } = storeToRefs(useTodosStore())
const todoInput = ref('')
const todosStore = useTodosStore()
const handleTodoInputSubmit = async () => {
    console.log('yo, submit...')
    await todosStore.addTodo(todoInput.value)
    todoInput.value = ''
}
const handleDeleteTodoClick = (todoID) => {
    todosStore.deleteTodo(todoID)
}
</script>