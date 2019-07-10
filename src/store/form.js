import axios from 'axios'

const form = {
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
        .then(({ data }) => {
          const projects = data['hydra:member'].map(project => ({
            value: project.id,
            text: project.name
          }))
          commit('setProjects', projects)
        })
        .catch(e => Promise.reject(e))
    },
    // soumission d'un projet
    submitProjectForm(context, payload) {
      return axios.post('/projects', payload)
    },
    submitDeclareForm(context, payload) {
      return axios.post('/forms', payload)
    }
  }
}

export default form
