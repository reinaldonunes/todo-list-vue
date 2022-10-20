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
      addTask($event){
        let value = $event.target.value
        let task = this.createTask(value)
        this.broadCast(task)
        this.clearField($event)
      },
      createTask(value){
        let task = new Task()
        task.completed = false
        task.title = value
        
        return task
      },
      broadCast(task){
        this.$emit('newTask', task)
      },
      clearField(){
        this.$el.querySelector("input").value = ''
      }
    }
  }
</script>

<style>

</style>