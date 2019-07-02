<template>
  <footer class="page-footer pt-4">
    <div class="footer-copyright text-center py-3">
      2019
      <a href="https://gide.net"> Edycem</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  height: 10vh;
  font-size: small;
  color: #fff;
  .page-footer {
    bottom: 0;
  }
  a {
    color: #fff;
  }
  .footer-copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #011844;
  }
}
</style>
