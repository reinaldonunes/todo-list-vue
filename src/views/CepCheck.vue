<template>
  <section class="cepChecker">
    <header class="container text-center pt-5 pb-2">
        <h1 class="fw-normal text-primary h-plus-size">Digite seu CEP</h1>
        <input
          type="text"
          class="form-control p-3 w-50 m-auto mt-4" 
          placeholder="Seu CEP"
        />
        <router-link to="/" class="text-decoration-none m-auto d-block text-secondary mt-4" style="width:fit-content">Adicionar tarefas</router-link>
    </header>
  </section>
</template>

<script>
    export default {
        name: 'CepChecker',
        data(){
          return{

          }
        }
    }
</script>

<style>

</style>