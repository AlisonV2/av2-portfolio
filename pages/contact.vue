<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 contact-text">
        <AppHeader>
          <template v-slot:pretitle>{{ $t("contact.pretitle") }}</template>
          <template v-slot:title>{{ $t("contact.title") }}</template>
        </AppHeader>
        <p class="text">
          {{ $t("contact.description") }}
        </p>
        <br />
        <br />
        <p class="text">
          {{ $t("contact.social") }}
        </p>
        <div><SocialDiv social-style="contact-social"/></div>
      </div>
      <div class="col-12 col-lg-6 contact-form">
        <AppForm />
      </div>
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/utils/AppForm";
import SocialDiv from "@/components/utils/SocialDiv";

export default {
  components: {
    AppForm,
    SocialDiv
  }
};
</script>

<style lang="scss">
@include bp-up(lg) {
  .contact-form {
    display: flex;
    justify-content: flex-end;
  }
  .contact-text {
    padding-right: 10rem;
  }
}
</style>
