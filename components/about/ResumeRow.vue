<template>
  <div class="row resume-row">
    <div class="col-12 col-lg-6">
      <div class="link-wrapper">
        <AppLink :href="downloadCv">{{ $t("about.download") }}</AppLink>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="button-wrapper">
        <nuxt-link :to="localePath('/projects')">
          <AppButton>{{ $t("about.btn") }}</AppButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadCv: "https://res.cloudinary.com/dhlpkwga4/image/upload/v1627199738/AlisonVandromme-CV_p3bsmu.pdf"
    }
  }
};
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
