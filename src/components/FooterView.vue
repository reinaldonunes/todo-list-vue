<template>
  <footer>
    <slot></slot>
    <slot name="cep"></slot>
  </footer>
</template>

<script>
  export default {
    name: "FooterView"
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
  }
</style>