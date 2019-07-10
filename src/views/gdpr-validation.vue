<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<template>
  <div>
    <div class="my-5 p-3 text-center">
      <h2 class="mb-4">Bienvenue !</h2>
      <p class="text-justify">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur.
      </p>
      <form class="clearfix" @submit.prevent="submit">
        <b-button class="float-right" variant="primary" type="submit">
          <b-spinner v-if="loading" small></b-spinner>
          Valider RGPD
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({ loading: false }),
  computed: {
    ...mapGetters({ userId: 'user/id' })
  },
  methods: {
    ...mapActions({
      submitGDPR: 'auth/submitGDPR',
      fetchUserData: 'user/fetchUserData'
    }),
    submit() {
      this.loading = true
      this.submitGDPR(this.userId).then(() => {
        this.fetchUserData().then(() => {
          this.$router.push('/')
          this.loading = false
        })
      })
    }
  }
}
</script>
