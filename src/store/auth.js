import axios from 'axios'

const auth = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    loading: false,
    error: null
  }),
  getters: {
    isAuth: state => state.isAuth,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    setAuth: (state, payload) => (state.isAuth = payload),
    setLoading: (state, payload) => (state.loading = payload),
    setError: (state, payload) => (state.error = payload)
  },
  actions: {
    initAuth({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setAuth', true)
        const token = localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      } else if (sessionStorage.getItem('token')) {
        commit('setAuth', true)
        const token = sessionStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    },
    login({ commit, dispatch }, payload) {
      commit('setLoading', true)
      return axios
        .post('/authentication_token', payload)
        .then(({ data }) => {
          // noinspection JSUnresolvedVariable
          axios.defaults.headers.common.Authorization = `Bearer ${data.token}`

          // noinspection JSUnresolvedVariable
          if (payload.remember) {
            localStorage.setItem('token', data.token)
          } else {
            sessionStorage.setItem('token', data.token)
          }

          commit('setAuth', true)

          return dispatch('user/fetchUserData', null, { root: true })
            .then(() => {
              commit('setLoading', false)
              commit('setError', null)
              return Promise.resolve()
            })
            .catch(e => Promise.resolve(e))
        })
        .catch(e => {
          commit('setLoading', false)
          commit('setError', e.message)
          return Promise.reject(e)
        })
    },
    logout({ commit }) {
      commit('setAuth', false)
      axios.defaults.headers.common.Authorization = null
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      return Promise.resolve()
    }
  }
}

export default auth
