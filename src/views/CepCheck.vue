<template>
  <section class="cepChecker">
    <header class="container text-center pt-5 pb-2">
        <h1 class="fw-normal text-primary h-plus-size">Digite seu CEP</h1>
        <input
          type="text"
          class="form-control p-3 w-50 m-auto mt-4" 
          placeholder="Seu CEP"
          @keyup.enter="getCep"
        />
        <router-link to="/" class="text-decoration-none m-auto d-block text-secondary mt-4" style="width:fit-content">Adicionar tarefas</router-link>

        <transition mode="out-in">
          <InfoCep :address="address" v-show="hasAddress()"></InfoCep>
        </transition>
    </header>
  </section>
</template>

<script>
  import InfoCep from '@/views/InfoCep.vue';
  
    export default {
        name: 'CepChecker',
        components:{
          InfoCep
        },
        data(){
          return{
            address: []
          }
        },
        methods:{
          getCep($event){
            let cep = $event.target.value
            this.$http.get(`http://api.postmon.com.br/v1/cep/${cep}`)
              .then(response => {
                this.address = response.body
              }, error => {
                console.log(error)
              })
          },

          hasAddress(){
            return Object.keys(this.address).length > 0
          }
        }
    }
</script>

<style>

</style>