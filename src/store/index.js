import Vue from 'vue'
import Vuex from 'vuex'
import favorites from './modules/favorites';
import stops from './modules/stops';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    favorites,
    stops,
  },
})

export default store;
