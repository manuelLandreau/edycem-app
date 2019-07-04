import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import './registerServiceWorker'

// https://vuex.vuejs.org/
Vue.use(Vuex)

Vue.use(VueRouter)

// https://bootstrap-vue.js.org
Vue.use(BootstrapVue)

// https://github.com/axios/axios
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL =
  process && process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://rugged-shenandoah-91940.herokuapp.com'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
