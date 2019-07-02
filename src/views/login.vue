<template>
  <div class="container">
    <main-title class="mt-3">Login</main-title>
    <b-form class="mt-3" @submit.prevent="submit">
      <div class="row justify-content-center">
        <div class="col-md-12 col-md-5">
          <b-input
            v-model="email"
            :state="validLogin"
            placeholder="Email"
            class="my-2"
          />
          <b-form-invalid-feedback :state="validLogin">
            Email invalide
          </b-form-invalid-feedback>
          <b-input
            v-model="password"
            :state="validPassword"
            placeholder="Mot de passe"
            class="my-2"
            type="password"
          />
          <b-form-invalid-feedback :state="validLogin">
            Mot de passe trop court
          </b-form-invalid-feedback>
          <b-form-checkbox v-model="remember" class="my-2">
            Remember me
          </b-form-checkbox>
          <div class="clearfix">
            <b-button
              :disabled="!(validLogin && validPassword)"
              class="float-right"
              variant="primary"
              type="submit"
            >
              <b-spinner v-if="loading" small></b-spinner>
              Connexion
            </b-button>
          </div>
          <b-alert :show="error" variant="danger" class="mt-2">
            {{ error }}
          </b-alert>
        </div>
      </div>
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
    email: '',
    password: '',
    remember: false,
    // eslint-disable-next-line no-useless-escape
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  }),
  computed: {
    ...mapGetters({ error: 'auth/error', loading: 'auth/loading' }),
    validLogin() {
      return (
        this.email === '' ||
        (this.email.length > 4 && this.reg.test(this.email))
      )
    },
    validPassword() {
      return this.password === '' || this.password.length > 3
    }
  },
  methods: {
    ...mapActions({ login: 'auth/login' }),
    // eslint-disable-next-line vue/return-in-computed-property
    submit() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      this.login({
        email: this.email,
        password: this.password,
        remember: this.remember
      })
        .then(() => this.$router.push('/'))
        .catch(console.log)
    }
  }
}
</script>

<style></style>
