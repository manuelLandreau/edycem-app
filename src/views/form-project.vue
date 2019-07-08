<!-- formulaire pour la soumission de proposition d'un projet -->
<template>
  <div class="container">
    <main-title class="mt-3">Proposition d'un nouveau projet</main-title>
    <b-form class="mt-3" @submit.prevent="submit">
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <label for="society">Nom de la société :</label>
          <b-form-input id="society" v-model="society" placeholder="Société"/>
      
          <label for="name-applicant">Nom du demandeur :</label>
          <b-form-input id="name-applicant" v-model="name_applicant" placeholder="Demandeur"/>

          <label for="project">Site concerné ou projet :</label>
          <b-form-input id="project" v-model="project" placeholder="Sites concernés / projet"/>

          <label for="name-project">Nom du projet :</label>
          <b-form-input id="name-project" v-model="name_project" placeholder="Projet"/>

          <label for="dir">Eligible CIR :</label>
          <b-form-select id="cir" v-model="selectedCir" :options="selectCirOpt">
            <option :value="null" disabled>CIR</option>
          </b-form-select>
      
          <label for="low-type-activity">Sous-type d'activité :</label>
          <b-form-input id="low-type-activity" v-model="low_type_activity" placeholder="Sous-type"/>
        
          <label for="priority">Priorité :</label>
          <b-form-input id="priority" v-model="priority" placeholder="Priorité"/>
      
          <label for="document">Document à prévoir :</label>
          <b-form-select
            id="document"
            v-model="selectedDoc"
            :options="selectDocOpt"
          ><option :value="null" disabled>Document</option>
          </b-form-select>
    
          <label for="echeance">Echéance previsionnelle du projet :</label>
          <date-picker v-model="date" :config="optionsDate"></date-picker>
      
          <b-form-checkbox
            id="chair"
            v-model="status"
            name="Dans le cadre de la Chair"
            value="Oui"
            unchecked-value="Non"
            switch
          ><label for="echeance">Dans le cadre de la Chair</label>
          </b-form-checkbox>
        
          <label for="objectif" class="mt-3">Objectif du projet :</label>
          <b-form-textarea
            id="objectif"
            v-model="objectif"
            placeholder="Objectif"
            rows="3"
            max-rows="6"
          ></b-form-textarea>

            <div class="text-right mt-3">
              <b-button class="btn btn-success" type="submit">
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
      // TODO
      return true
    }
  }
}
</script>
<style>
@import '~pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
</style>
