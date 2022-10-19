<template>
  <ul class="list-group max-size-list m-auto mt-4">
    <transition v-for="todo in todoList" :key="todo.id" appear mode="out-in">
      <li class="list-group-item py-3">
        <div>
          <label>{{ todo.title }}</label>
        </div>
      </li>
      </transition>
  </ul>
</template>

<script>
  export default {
    name: 'TaskList',
    props: ["todoList"]
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