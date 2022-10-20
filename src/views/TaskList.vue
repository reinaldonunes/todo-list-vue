<template>
  <ul class="list-group max-size-list m-auto mt-4 mb-4">
    <transition v-for="(todo, index) in sortedTasks" :key="index" appear mode="out-in">
      <li class="list-group-item py-3">
        <div>
          <input type="checkbox" class="form-check-input me-2" @click="completeTask(todo)" :checked="todo.completed"  />
          <label v-if="todo.completed" class="todo-completed">{{ todo.title }}</label>
          <label v-else>{{ todo.title }}</label>
        </div>
      </li>
      </transition>
  </ul>
</template>

<script>
  export default {
    name: 'TaskList',
    props: ["todoList"],
    data(){
      return{
        isChecked: ''
      }
    },
    computed:{
      sortedTasks(){
        const sorted = this.$store.state.tasks
        return sorted.sort(function(a, b){
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          
          return 0
        })
      }
    },
    methods:{
      completeTask(task){
        this.$store.commit('completeTask', { task })
      }
    }
  }
</script>

<style scoped>
  .max-size-list{
    max-width:655px;
  }

  .todo-completed{
    text-decoration: line-through;
    color:#6598a2;
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