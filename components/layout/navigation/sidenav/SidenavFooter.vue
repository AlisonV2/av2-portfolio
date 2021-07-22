<template>
    <div class="sidenav-footer">
      <span>&copy; Copyright {{ new Date().getFullYear() }} | Alison Vandromme | v.1.0 </span>
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
  justify-content: center;
  color: #1D1D1D;
  font-size: 1.5rem;
}

</style>
