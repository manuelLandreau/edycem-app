<template>
  <div>
    <div v-if="isAuth" class="logout" @click="logoutAndRedirect">
      Logout
    </div>
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
