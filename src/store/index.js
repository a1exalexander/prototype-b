import Vue from 'vue'
import Vuex from 'vuex'
import structure from './modules/structure';
import types from './modules/types';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    structure,
    types,
  },
});

export default store;