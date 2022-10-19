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
        let task = new Task()
        task.completed = false
        task.title = value
        this.$emit('newTask', task)
        $event.target.value = ''
      }
    }
  }
</script>

<style>

</style>