<template>
  <footer class="d-grid border">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: "FooterView",
  }
</script>

<style scoped>
  footer{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    text-align:center;
    padding: 40px 0 30px 0;
    background:#fff;
    line-height:50%;
  }
  footer a{
    text-decoration:none;
  }
</style>