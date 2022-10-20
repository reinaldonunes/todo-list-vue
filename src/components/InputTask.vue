<template>
  <div>
    <input
      type="text"
      class="form-control p-3 w-50 m-auto mt-4" 
      placeholder="O que precisa ser feito?"
      @keyup.enter="addTask"
    />
  </div>
</template>

<script>
  import { Task } from '@/models/Task.js';

  export default {
    name: "InputTask",
    data(){
      return{

      }
    },
    methods: {
      createTask(value){
        let task = new Task()
        task.completed = false
        task.title = value
        
        return task
      },
      clearField(){
        this.$el.querySelector("input").value = ''
      },
      broadCast(task){
        this.$emit('newTask', task)
      },
      addTask($event){
        let value = $event.target.value
        let task = this.createTask(value)
        this.broadCast(task)
        this.clearField($event)
      }
    }
  }
</script>

<style>

</style>