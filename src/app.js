

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { routes } from './routes';

import App from './components/layouts/App';

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

const router = new VueRouter({
    routes
});

Vue.router = router;
App.router = Vue.router;
new Vue(App).$mount('#app');