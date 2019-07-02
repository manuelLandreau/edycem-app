import axios from 'axios'

const user = {
  namespaced: true,
  state: () => ({
    id: null,
    email: null,
    firstname: null,
    lastname: null,
    gender: null
  }),
  getters: {
    id: state => state.id,
    email: state => state.email,
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    gender: state => state.gender
  },
  mutations: {
    setId: (state, payload) => (state.id = payload),
    setEmail: (state, payload) => (state.email = payload),
    setFirstname: (state, payload) => (state.firstname = payload),
    setLastname: (state, payload) => (state.lastname = payload),
    setGender: (state, payload) => (state.gender = payload)
  },
  actions: {
    fetchUserData({ commit }) {
      return axios
        .post(`/user/me`)
        .then(({ data }) => {
          commit('setId', data.id)
          commit('setEmail', data.email)
          commit('setFirstname', data.firstname)
          commit('setLastname', data.lastname)
          commit('setGender', data.gender)
          return Promise.resolve()
        })
        .catch(e => Promise.reject(e))
    }
  }
}

export default user
