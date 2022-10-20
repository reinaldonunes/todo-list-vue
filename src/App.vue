<template>
  <section id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterView>&copy; Alguns direitos reservados - ToDo List License</FooterView>
  </section>
</template>

<script>
  import FooterView from '@/components/FooterView.vue';

  export default {
    name: 'App',
    data(){
      return{
        showDataFooter: ''
      }
    },
    components: {
        FooterView
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

  /* transitions */
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
