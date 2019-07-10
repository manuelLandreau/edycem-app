<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<template>
  <div class="container">
    <main-title class="mt-3">Formulaire de saisie</main-title>
    <b-form v-if="!loading" class="mt-3" @submit.prevent="submit">
      <div class="row">
        <div class="col-md-6">
          <label class="mt-3" for="project">Projet :</label>
          <b-form-select
            id="project"
            :select-size="4"
            v-model="selectedProject"
            :options="projectOptions"
            multiple
          />
          <label class="mt-3" for="activity">Activité :</label>
          <b-form-select
            id="activity"
            v-model="selectedActivity"
            :options="activityOptions"
          />
          <label class="mt-3" for="task">Tâche :</label>
          <b-form-select
            id="task"
            v-model="selectedtask"
            :options="taskOptions"
          />
          <label class="mt-3" for="duration">Temps passé :</label>
          <b-input id="duration" v-model="duration" type="number" step="5" />
          <h4>Ajouter un collaborateur</h4>
          <b-input id="add" type="text" />
          <div class="clearfix mt-2">
            <b-button class="float-right" variant="primary" type="submit">
              <b-spinner v-if="loading" small></b-spinner>
              Envoyer
            </b-button>
          </div>
          <b-alert :show="error" variant="danger" class="mt-2">
            {{ error }}
          </b-alert>
        </div>
      </div>
    </b-form>
    <div v-else class="text-center">
      <b-spinner v-if="loading" big></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainTitle from '../components/MainTitle'

export default {
  components: {
    MainTitle
  },
  data: () => ({
    loading: false,
    error: '',
    selectedProject: null,
    selectedActivity: null,
    selectedtask: null,
    activityOptions: [
      { value: null, text: 'Toutes les activités' },
      { value: 'Sourcing Produit', text: 'Sourcing Produit' },
      { value: 'Innovation', text: 'Innovation' },
      { value: 'Gestion laboratoire', text: 'Gestion laboratoire' },
      { value: 'Développement Produit', text: 'Développement Produit' }
    ],
    duration: 60 // todo
  }),
  computed: {
    ...mapGetters({
      projectOptions: 'form/allProjects',
      userId: 'user/id'
    }),
    taskOptions() {
      switch (this.selectedActivity) {
        case 'Sourcing Produit':
          return [
            { value: null, text: 'Toutes les tâches' },
            { value: 'Veille technologique', text: 'Veille technologique' },
            { value: 'Annalyse', text: 'Annalyse' }
          ]
        case 'Innovation':
          return [
            { value: null, text: 'Toutes les tâches' },
            {
              value: 'Définition du cahier des charges',
              text: 'Définition du cahier des charges'
            },
            { value: 'Prototypage', text: 'Prototypage' }
          ]
        case 'Gestion laboratoire':
          return [
            { value: null, text: 'Toutes les tâches' },
            { value: 'Essai labo', text: 'Essai labo' },
            { value: 'Essai centrale', text: 'Essai centrale' }
          ]
        case 'Développement Produit':
          return [
            { value: null, text: 'Toutes les tâches' },
            {
              value: 'Suivi chantier expérimental',
              text: 'Suivi chantier expérimental'
            },
            { value: 'Point technique', text: 'Point technique' }
          ]
        default:
          return [{ value: null, text: 'Toutes les tâches' }]
      }
    }
  },
  created() {
    this.loading = true
    this.fetchProjects().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions({
      fetchProjects: 'form/fetchProjects',
      submitDeclareForm: 'form/submitDeclareForm'
    }),
    // eslint-disable-next-line vue/return-in-computed-property
    submit() {
      this.loading = true
      this.submitDeclareForm({
        project: `/projects/${this.selectedProject}`,
        activity: this.selectedActivity,
        task: this.selectedtask,
        duration: this.duration,
        user: `/users/${this.userId}`
      }).then(() => {
        this.$notify({
          group: 'success',
          text: 'Le formulaire à bien été soumis avec succès !'
        })
        this.loading = false
        this.$router.push('/')
      })
    }
  }
}
</script>

<style></style>
