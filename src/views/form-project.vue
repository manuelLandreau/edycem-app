<!-- formulaire pour la soumission de proposition d'un projet -->
<template>
  <div class="container">
    <main-title class="mt-3">Proposition d'un nouveau projet</main-title>
    <b-form class="mt-3" @submit.prevent="submit">
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <label for="society">Nom de la société :</label>
          <b-form-input id="society" v-model="society" placeholder="Société"/>
      
          <label for="name-applicant" class="mt-2">Nom du demandeur :</label>
          <b-form-input id="name-applicant" v-model="name_applicant" placeholder="Demandeur"/>

          <label for="project" class="mt-2">Site concerné ou projet :</label>
          <b-form-input id="project" v-model="project" placeholder="Sites concernés / projet"/>

          <label for="name-project" class="mt-2">Nom du projet :</label>
          <b-form-input id="name-project" v-model="name_project" placeholder="Projet"/>

          <label for="dir" class="mt-2">Eligible CIR :</label>
          <b-form-select id="cir" v-model="selectedCir" :options="selectCirOpt">
            <option :value="null" disabled>CIR</option>
          </b-form-select>
      
          <label for="low-type-activity" class="mt-2">Sous-type d'activité :</label>
          <b-form-input id="low-type-activity" v-model="low_type_activity" placeholder="Sous-type"/>
        
          <label for="priority" class="mt-2">Priorité :</label>
          <b-form-input id="priority" v-model="priority" placeholder="Priorité"/>
      
          <b-form-group for="document" label="Document à prévoir :" class="mt-2">
            <b-form-checkbox-group
              v-model="selectedDoc"
              :options="selectDocOpt"
              name="document"
            ></b-form-checkbox-group>
          </b-form-group>
    
          <label for="echeance" class="mt-2">Echéance previsionnelle du projet :</label>
          <date-picker v-model="date" :config="optionsDate"></date-picker>
      
          <b-form-checkbox
            id="chair"
            v-model="status"
            name="Dans le cadre de la Chair"
            value="Oui"
            unchecked-value="Non"
            switch
            class="mt-2"
          ><label for="echeance">Dans le cadre de la Chair</label>
          </b-form-checkbox>
        
          <label for="objectif" class="mt-2">Objectif du projet :</label>
          <b-form-textarea
            id="objectif"
            v-model="objectif"
            placeholder="Objectif"
            rows="3"
            max-rows="6"
          ></b-form-textarea>

            <div class="text-right mt-3">
              <b-button class="btn btn-success" @click="submit">
                Soumettre
              </b-button>
            </div>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle'
import datePicker from 'vue-bootstrap-datetimepicker';

export default {
  components: {
    MainTitle,
    datePicker
  },
  data: () => ({
    society: '',
    name_applicant: '',
    project: '',
    name_project: '',
    selectedCir: null,
    selectCirOpt: [
      { text: '2017', value :'2017', disabled: false },
      { text: '2018', value :'2018', disabled: false },
      { text: '2019', value :'2019', disabled: false },
      { text: '2020', value :'2020', disabled: false }
    ],
    low_type_activity: '',
    priority: '',
    selectedDoc: null,
    selectDocOpt: [
      { text: 'Contrat de confidentialité', value :'contrat', disabled: false },
      { text: 'Licence', value :'licence', disabled: false },
      { text: 'Brevet', value :'brevet', disabled: false }
    ],
    date: new Date(),
    optionsDate: {
      format: 'DD/MM/YYYY',
      useCurrent: false,
    },
    status: null,
    objectif: '',
  }),
  methods: {
    submit() {
      this.$store.dispatch('form/submitProjectForm', {
        society: this.society,
        name_applicant: this.name_applicant,
        project: this.project,
        name_project: this.name_project,
        selectCirOpt: this.selectCirOpt,
        low_type_activity: this.low_type_activity,
        priority: this.priority,
        selectDocOpt: this.selectedDocOpt,
        date: this.date,
        status: this.status,
        objectif: this.objectif
      })
      .then(response => {
        console.log(response)
        this.$notify({
          group: 'success',
          title: 'Succes',
          text: 'Votre projet à bien été soumis'
        });
      })
      .catch(error => {
        console.log(error)
        this.$notify({
          group: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue'
        });
      })
    }
  }
}
</script>
<style>
@import '~pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
</style>
