import axios from 'axios'

const user = {
  namespaced: true,
  state: () => ({
    id: null,
    email: null,
    codeMetier: null,
    cir: true,
    gdprValidation: true
  }),
  getters: {
    id: state => state.id,
    email: state => state.email,
    codeMetier: state => state.codeMetier,
    cir: state => state.cir,
    gdprValidation: state => state.gdprValidation
  },
  mutations: {
    setId: (state, payload) => (state.id = payload),
    setEmail: (state, payload) => (state.email = payload),
    setCodeMetier: (state, payload) => (state.codeMetier = payload),
    setCir: (state, payload) => (state.cir = payload),
    setGdprValidation: (state, payload) => (state.gdprValidation = payload)
  },
  actions: {
    fetchUserData({ commit }) {
      return axios
        .post(`/user/me`)
        .then(({ data }) => {
          commit('setId', data.id)
          commit('setEmail', data.email)
          commit('setCodeMetier', data.codeMetier)
          commit('setCir', data.cir)
          commit('setGdprValidation', data.gdprValidation)
          return Promise.resolve()
        })
        .catch(e => Promise.reject(e))
    }
  }
}

export default user
