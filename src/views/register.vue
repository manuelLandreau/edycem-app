<template>
  <div>
    <main-title class="mt-3">Inscription</main-title>
    <b-form class="mt-3" @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-radio-group v-model="gender">
            <b-form-radio value="2" checked>
              Mme
            </b-form-radio>
            <b-form-radio value="1">Mr</b-form-radio>
          </b-form-radio-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="6">
          <label for="firstname">Prénom</label>
          <b-form-input
            id="firstname"
            v-model="firstname"
            placeholder="Votre prénom"
            required
          />
        </b-col>
        <b-col sm="6">
          <label for="lastname">Nom</label>
          <b-form-input
            id="lastname"
            v-model="lastname"
            placeholder="Votre nom"
            required
          />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="6">
          <label for="email">Email</label>
          <b-form-input
            id="email"
            v-model="email"
            :state="validEmail"
            placeholder="Votre email"
            class="mb-2 mr-sm-2 mb-sm-0"
            required
          />
          <b-form-invalid-feedback :state="validEmail">
            Email invalide
          </b-form-invalid-feedback>
        </b-col>
        <b-col sm="6">
          <label for="firstname">
            Mot de passe
          </label>
          <b-input
            v-model="password"
            :state="validPassword"
            placeholder="Mot de passe"
            type="password"
            required
          />
          <b-form-invalid-feedback :state="validEmail">
            Mot de passe trop court
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="6"> </b-col>
        <b-col sm="6">
          <b-input
            v-model="password2"
            :state="validPassword"
            placeholder="Retaper le mot de passe"
            type="password"
            required
          />
          <b-form-invalid-feedback :state="matchPassword">
            Les mots de passe ne correspondent pas
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <b-form-checkbox v-model="cgu" class="mb-2 mr-sm-2 mb-sm-0">
            <p v-html="'CGU ici'"></p>
          </b-form-checkbox>
        </b-col>
      </b-row>
      <div class="clearfix">
        <b-button
          :disabled="
            !(
              !!firstname &&
              !!lastname &&
              validEmail &&
              validPassword &&
              matchPassword &&
              cgu
            )
          "
          variant="primary"
          type="submit"
          class="float-right"
        >
          <b-spinner v-if="loading" small></b-spinner>
          Envoyer
        </b-button>
      </div>
      <b-alert :show="error" variant="danger" class="mt-2">
        {{ error }}
      </b-alert>
    </b-form>
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
    gender: '2',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    cgu: false,
    // eslint-disable-next-line no-useless-escape
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  }),
  computed: {
    ...mapGetters({ error: 'auth/error', loading: 'auth/loading' }),
    validEmail() {
      return (
        this.email === '' ||
        (this.email.length > 4 && this.reg.test(this.email))
      )
    },
    validPassword() {
      return this.password === '' || this.password.length > 3
    },
    matchPassword() {
      return this.password === this.password2
    }
  },
  methods: {
    ...mapActions({ register: 'auth/register' }),
    // eslint-disable-next-line vue/return-in-computed-property
    submit() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      this.register({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        gender: this.gender
      })
        .then(() => this.$router.push('/login'))
        .catch(console.log)
    }
  }
}
</script>

<style></style>
