<template>
  <div>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ isAuth: 'auth/isAuth' })
  }
}
</script>
