import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import store from '@/store/index.js';

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
  store,
  VueResource,
  render: h => h(App),
}).$mount('#app')
