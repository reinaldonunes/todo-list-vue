<template>
  <section id="app">
    <header class="container text-center pt-5 pb-2">
      <h1 class="fw-normal text-primary h-plus-size">Tarefas</h1>
      <InputTask @newTask="addTask"></InputTask>
    </header>
    <TaskList :todoList="tasks"></TaskList>
  </section>
</template>

<script>
  import InputTask from '@/components/InputTask.vue';
  import TaskList from '@/views/TaskList.vue';
  import { Task } from '@/models/Task.js';

  let tasks = []
  let task = new Task()
  task.completed = false
  task.title = 'Tarefa'
  
  tasks.push(task)
  tasks.push(task)
  tasks.push(task)

  export default {
    name: 'App',
    components: {
      InputTask,
      TaskList
    },
    data(){
      return{
        tasks: tasks
      }
    },
    methods:{
      addTask(task){
        this.tasks.push(task)
      }
    }
  }
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;900&display=swap');

  html, body{
    background:#eee;
    height:100%;
    font-family:'Montserrat', 'Segoe UI', Helvetica, sans-serif;
  }
  body{
    padding:32px;
  }
  .h-plus-size{
    letter-spacing: -4px;
    font-size:4.5rem;
  }
</style>
