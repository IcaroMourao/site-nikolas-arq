import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import project from './modules/project';
import contact from './modules/contact';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    project,
    contact,
  },
});
