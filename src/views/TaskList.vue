<template>
  <ul class="list-group max-size-list m-auto mt-4">
    <transition v-for="(todo, index) in sortedTasks" :key="index" appear mode="out-in">
      <li class="list-group-item py-3">
        <div>
          <label :class="{ 'todo-completed': todo.completed }">{{ todo.title }}</label>
        </div>
      </li>
      </transition>
  </ul>
</template>

<script>
  export default {
    name: 'TaskList',
    props: ["todoList"],
    computed:{
      sortedTasks: function(){
        let sorted = this.todoList.slice()
        return sorted.sort(function(a, b){
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          
          return 0
        })
      }
    }
  }
</script>

<style scoped>
  .max-size-list{
    max-width:700px;
  }

  .v-enter,
  .v-leave-to {
  opacity:0
  }
  .v-enter {
  -webkit-transform:translate3d(0,-20px,0);
  transform:translate3d(0,-20px,0)
  }
  .v-leave-to {
  -webkit-transform:translate3d(0,20px,0);
  transform:translate3d(0,20px,0)
  }
  .v-enter-active,
  .v-leave-active {
  -webkit-transition:all .3s;
  transition:all .3s
  }
</style>