import Vue from 'vue';

import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Slick from 'vue-slick';
import VueAxios from 'vue-axios';

import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Slick);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = process.env.VUE_APP_API;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
