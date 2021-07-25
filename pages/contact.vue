<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 contact-text">
        <AppHeader>
          <template v-slot:pretitle>{{ $t("contact.pretitle") }}</template>
          <template v-slot:title>{{ $t("contact.title") }}</template>
        </AppHeader>
        <p class="description">
          {{ $t("contact.description") }}
        </p>
        <p class="description">
          {{ $t("contact.social") }}
        </p>
        <div><SocialDiv /></div>
      </div>
      <div class="col-12 col-lg-6 contact-form">
        <AppForm />
      </div>
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/utils/AppForm";
import SocialDiv from "@/components/contact/SocialDiv";

export default {
  components: {
    AppForm,
    SocialDiv
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 992px) {
  .contact-form {
    display: flex;
    justify-content: flex-end;
  }
  .contact-text {
    padding-right: 10rem;
  }
}
</style>
