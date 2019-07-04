<template>
  <div id="app">
    <h1>Edycem</h1>
    <div v-if="isAuth" class="logout" @click="logoutAndRedirect">
      Logout
    </div>
    <router-view></router-view>
    <Footer />
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
  computed: {
    ...mapGetters({ isAuth: 'auth/isAuth' })
  },
  mounted() {
    this.initAuth()
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
