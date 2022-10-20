import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import router from './router.js';

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.directive('focus',{
  inserted: function(el){
    el.focus()
  }
})

new Vue({
  router,
  VueResource,
  render: h => h(App),
}).$mount('#app')
