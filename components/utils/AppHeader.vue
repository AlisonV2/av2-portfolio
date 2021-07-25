<template>
  <div class="row">
    <div class="col-12 app-header">
      <h4><slot name="pretitle"/></h4>
      <h2><slot name="title"/></h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-header {
  margin-bottom: 2rem;
}

@include bp-up(lg) {
  .app-header {
    margin-bottom: 3rem;
  }
}
</style>
