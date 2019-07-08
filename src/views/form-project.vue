<!-- formulaire pour la soumission de proposition d'un projet -->
<template>
  <div class="container">
    <div class="card">
      <h1 class="card-header">Proposition d'un nouveau projet</h1>
      <div class="card-body">
        <b-form class="mt-3" @submit.prevent="submit">
          <div class="row">
            <div class="col">
              <label for="society">Société :</label>
              <b-form-input id="society" v-model="society" placeholder="Société"/>
            </div>
            <div class="col">
              <label for="name-applicant">Nom du demandeur :</label>
              <b-form-input id="name-applicant" v-model="name_applicant" placeholder="Demandeur"/>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <label for="project">Site concerné ou projet :</label>
              <b-form-input id="project" v-model="project" placeholder="Sites concernés / projet"/>
            </div>
            <div class="col">
              <label for="name-project">Projet :</label>
              <b-form-input id="name-project" v-model="name_project" placeholder="Nom du projet"/>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <label for="dir">Eligible CIR :</label>
              <b-form-select id="cir" v-model="selectedCir" :options="selectCirOpt">
                <option :value="null" disabled>Eligible CIR</option>
              </b-form-select>
            </div>
            <div class="col">
              <label for="low-type-activity">Sous-type d'activité :</label>
              <b-form-input id="low-type-activity" v-model="low_type_activity" placeholder="Sous type d'activité"/>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <label for="priority">Priorité :</label>
              <b-form-input id="priority" v-model="priority" placeholder="Priorité"/>
            </div>
            <div class="col">
              <label for="document">Document à prévoir :</label>
              <b-form-select
              id="document"
              v-model="selectedDoc"
              :options="selectDocOpt"
              >
              <option :value="null" disabled>Document à prévoir</option>
              </b-form-select>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <label for="echeance">Echéance previsionnelle du projet :</label>
              <date-picker v-model="date" :config="optionsDate"></date-picker>
            </div>
            <div class="col">
              <b-form-checkbox
              id="chair"
              class="mt-5"
              v-model="status"
              name="Dans le cadre de la Chair"
              value="Oui"
              unchecked-value="Non"
              switch
              >
              <label for="echeance">Dans le cadre de la Chair</label>
          </b-form-checkbox>
            </div>
          </div>
          
          <label for="objectif" class="mt-3">Objectif du projet :</label>
          <b-form-textarea
            id="objectif"
            v-model="objectif"
            placeholder="Objectif du projet"
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <div class="text-right mt-3">
            <b-button class="btn btn-success" type="submit">
              Soumettre
            </b-button>
          </div>
        </b-form>
      </div>
    </div>
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
    low_type_activity: '',
    selectedCir: null,
    selectCirOpt: [
      { text: '2017', value :'2017', disabled: false },
      { text: '2018', value :'2018', disabled: false },
      { text: '2019', value :'2019', disabled: false },
      { text: '2020', value :'2020', disabled: false }
    ],
    priority: '',
    status: null,
    date: new Date(),
    optionsDate: {
      format: 'DD/MM/YYYY',
      useCurrent: false,
    },  
    objectif: '',
    selectedDoc: null,
    selectDocOpt: [
      { text: 'Contrat de confidentialité', value :'contrat', disabled: false },
      { text: 'Licence', value :'licence', disabled: false },
      { text: 'Brevet', value :'brevet', disabled: false }
    ]
  }),
  methods: {
    submit() {
      return true;
    }
  }
}
</script>
<style>
@import '~pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
</style>
