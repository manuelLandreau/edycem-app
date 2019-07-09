import axios from 'axios'

const project = {
  namespaced: true,
  state: () => ({
    allProjects: []
  }),
  getters: {
    allProjects: state => state.allProjects
  },
  mutations: {
    setProjects: (state, payload) => (state.allProjects = payload)
  },
  actions: {
    fetchProjects({ commit }) {
      return axios
        .get(`/projects`)
        .then(({ data }) => commit('setProjects', data))
        .catch(e => Promise.reject(e))
    },
    // soumission d'un projet
    newProject(context, payload) {
      console.log(payload)
      return axios.post('http://monrul.com', {
        society: payload.society
      })
    }
  }
}

export default project
