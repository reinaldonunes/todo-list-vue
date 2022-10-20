import Vue from "vue";
import Router from 'vue-router';

import TaskView from '@/views/TaskView.vue'
import CepCheck from '@/views/CepCheck.vue';

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: TaskView
        },
        {
            path: '/cep',
            name: 'cep',
            component: CepCheck
        }
    ]
})