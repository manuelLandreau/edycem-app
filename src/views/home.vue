<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<template>
  <div>
    <div class="my-5 text-center">
      <h2 class="mb-4">Bienvenue !</h2>
      <router-link v-if="!isAuth" to="/login">
        <b-button variant="outline-primary">Login</b-button>
      </router-link>
      <router-link v-if="isAuth" to="/formulaire">
        <b-button variant="outline-primary">Saisir vos temps</b-button>
      </router-link>
      <router-link v-if="isAuth" to="/projet">
        <b-button variant="outline-success">Proposition d'un projet</b-button>
      </router-link>
    </div>
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
