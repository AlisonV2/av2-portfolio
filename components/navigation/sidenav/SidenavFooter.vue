<template>
    <div class="sidenav-footer">
      <p class="copyright">Alison Vandromme - Portfolio 1.0</p>
      <span>&copy; Copyright {{ new Date().getFullYear() }} | {{ $t("copyright.rights") }} </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fixed: true
        }
    }
}
</script>

<style lang="scss">

.sidenav-footer {
  text-align: center;
  justify-content: center;
  color: #1D1D1D;
  font-size: 1.5rem;
  .copyright {
    font-weight: $font-weight-bold;
    color: $accent-darker-10;
    font-size: 1.6rem;
  }
}

</style>
