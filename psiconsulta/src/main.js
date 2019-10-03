import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VAnimateCss from 'v-animate-css';

import axios from'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios);


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

