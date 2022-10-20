<template>
  <section class="card max-size-card m-auto mt-4 bg-secondary text-white">
    <div class="card-body text-left">
      <p class="card-text"><strong>Cidade:</strong> {{ address.cidade }}</p>
      <p class="card-text"><strong>Cep:</strong> {{ address.cep }}</p>
      <p class="card-text"><strong>Estado:</strong> {{ address.estado }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "InfoCep",
    props: ["address"]
  }
</script>

<style scoped>
  .max-size-card{
    max-width:655px;
  }
</style>