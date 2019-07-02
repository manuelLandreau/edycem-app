<template>
  <div id="app">
    <h1>Edycem</h1>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import 'assets/main';
</style>
