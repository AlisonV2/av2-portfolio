<template>
   <div class="row resume-row">
      <div class="col-12 col-lg-6">
        <div class="link-wrapper">
          <AppLink :href="''">{{ $t("about.download") }}</AppLink>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="button-wrapper">
          <AppButton>{{ $t("about.btn") }}</AppButton>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.resume-row {
  .col-12 {
    @include col-flex;
    justify-content: center;
  }
  .link-wrapper {
    margin-bottom: 3rem;
  }
}
</style>
