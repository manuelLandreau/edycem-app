import axios from 'axios'

const user = {
  namespaced: true,
  state: () => ({
    id: null,
    email: null,
    codeMetier: null,
    cir: true,
    gdpr: true
  }),
  getters: {
    id: state => state.id,
    email: state => state.email,
    codeMetier: state => state.codeMetier,
    cir: state => state.cir,
    gdpr: state => state.gdpr
  },
  mutations: {
    setId: (state, payload) => (state.id = payload),
    setEmail: (state, payload) => (state.email = payload),
    setCodeMetier: (state, payload) => (state.codeMetier = payload),
    setCir: (state, payload) => (state.cir = payload),
    setGdpr: (state, payload) => (state.gdpr = payload)
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
          commit('setGdpr', data.gdpr)
          return Promise.resolve()
        })
        .catch(e => Promise.reject(e))
    }
  }
}

export default user
