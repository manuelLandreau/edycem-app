<template>
  <div class="clearfix border-bottom mb-4">
    <h3 class="py-1 px-4 text-white">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      // https://getbootstrap.com/docs/4.3/utilities/colors/
      type: String,
      // :class="`border-${color}`"
      default: 'danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom-color: #006f8a;
}
h3 {
  float: left;
  margin-bottom: 0;
  background-color: #006f8a;
}
</style>
