<template>
  <div class="row" :class="headerClass">
    <div class="col-12 app-header">
      <h4><slot name="pretitle"/></h4>
      <h2><slot name="title"/></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    headerClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">

</style>
