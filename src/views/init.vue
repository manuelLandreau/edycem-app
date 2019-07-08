<!--suppress HtmlUnknownTag, CheckEmptyScriptTag -->
<template>
  <static-layout>
    <main-title class="mt-3">Initialisation du mot de passe</main-title>
    <b-form class="mt-3" @submit.prevent="submit">
      <b-row class="my-3">
        <b-col sm="6">
          <label for="password1">
            Mot de passe
          </label>
          <b-input
            id="password1"
            v-model="password"
            :state="validPassword"
            placeholder="Saisissez un mot de passe"
            type="password"
            required
          />
          <b-form-invalid-feedback :state="validPassword">
            Mot de passe trop court
          </b-form-invalid-feedback>
        </b-col>
        <b-col sm="6">
          <b-input
            v-model="password2"
            :state="validPassword"
            placeholder="resaisir le mot de passe"
            type="password"
            required
          />
          <b-form-invalid-feedback :state="matchPassword">
            Les mots de passe ne correspondent pas
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <div class="clearfix">
        <b-button
          :disabled="!(validPassword && matchPassword)"
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
  </static-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainTitle from '../components/MainTitle'

export default {
  components: {
    MainTitle
  },
  data: () => ({
    token: '',
    password: '',
    password2: ''
  }),
  computed: {
    ...mapGetters({ error: 'auth/error', loading: 'auth/loading' }),
    validPassword() {
      return this.password === '' || this.password.length > 3
    },
    matchPassword() {
      return this.password === this.password2
    }
  },
  created() {
    this.token = this.$route.params.token
  },
  methods: {
    ...mapActions({ init: 'auth/init' }),
    // eslint-disable-next-line vue/return-in-computed-property
    submit() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      this.init({
        token: this.token,
        password: this.password,
        gender: this.gender
      })
        .then(() => this.$router.push('/login'))
        .catch(console.log)
    }
  }
}
</script>
