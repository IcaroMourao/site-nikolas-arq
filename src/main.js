import Vue from 'vue';

import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Slick from 'vue-slick';
import UUID from 'vue-uuid';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import './validators/vee-validate';

import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Slick);
Vue.use(VueAxios, axios);
Vue.use(UUID);
Vue.use(VueCookies);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

axios.defaults.baseURL = process.env.VUE_APP_API;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
