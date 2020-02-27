import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const axiosInstance = axios.create({
  baseURL: 'https://www.wienerlinien.at/ogd_realtime',
})

Vue.prototype.$axios = axiosInstance
Vuex.Store.prototype.$axios = axiosInstance

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

store.dispatch('stops/fetchFavorites')
