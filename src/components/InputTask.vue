<template>
  <div>
    <input
      type="text"
      class="form-control p-3 w-50 m-auto mt-4" 
      placeholder="O que precisa ser feito?"
      @keyup.enter="addTask"
      v-focus
    />
  </div>
</template>

<script>
  import { Task } from '@/models/Task.js';

  export default {
    name: "InputTask",
    methods: {
      addTask($event){
        let value = $event.target.value
        let task = value != '' ? this.createTask(value) : alert('Preencha o campo, por favor.')
        this.$store.commit('addTask', { task })
        this.clearField($event)
      },
      createTask(value){
        let task = new Task()
        task.completed = false
        task.title = value
        
        return task
      },
      
      clearField(){
        this.$el.querySelector("input").value = ''
      }
    }
  }
</script>

<style>

</style>