import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import project from './project'

Vue.use(Vuex)

// https://vuex.vuejs.org
export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    user,
    project
  }
})
