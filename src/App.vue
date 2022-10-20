<template>
  <section id="app">
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'App',
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
