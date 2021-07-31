<template>
  <div class="row resume-row">
    <div class="col-12 col-lg-6">
      <div class="link-wrapper">
        <AppLink :href="downloadCv" v-if="$i18n.locale === 'fr'">{{ $t("about.download") }}</AppLink>
        <AppLink :href="downloadResume" v-if="$i18n.locale === 'en'">{{ $t("about.download") }}</AppLink>
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
      downloadCv: "https://res.cloudinary.com/dhlpkwga4/image/upload/v1627729677/AlisonVandromme-CV_b1tzbq.pdf",
      downloadResume: "https://res.cloudinary.com/dhlpkwga4/image/upload/v1627729856/AlisonVandromme-Resume_tw1f8l.pdf"
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
