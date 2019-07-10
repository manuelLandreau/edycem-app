<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<template>
  <div>
    <div v-if="!loading" id="app">
      <img
        src="./assets/img/logo-edycem.jpg"
        style="width: 200px"
        class="mb-3 img-responsive"
        alt="edycem"
      />
      <div v-if="isAuth" class="logout" @click="logoutAndRedirect">
        <div class="btn btn-danger">
          Logout
        </div>
      </div>
      <router-view></router-view>
      <notifications group="success" position="top center" />
      <notifications group="error" position="top center" />
      <Footer />
    </div>
    <div v-else class="text-center mt-5 pt-5"><b-spinner big></b-spinner></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Footer from './components/Footer'

export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'app',
  components: {
    Footer
  },
  data: () => ({ loading: true }),
  computed: {
    ...mapGetters({ isAuth: 'auth/isAuth' })
  },
  created() {
    this.initAuth().then(() => (this.loading = false))
  },
  methods: {
    ...mapActions({
      initAuth: 'auth/initAuth',
      logout: 'auth/logout'
    }),
    logoutAndRedirect() {
      this.logout().then(() => this.$router.push('/'))
    }
  }
}
</script>

<style lang="scss">
@import 'assets/main';

.logout {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}
</style>
