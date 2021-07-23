<template>
  <div class="row">
    <div class="col-12 col-lg-6 contact-text">
      <h2>{{ $t("contact.title") }}</h2>
      <p class="description">
        {{ $t("contact.description") }}
      </p>
    </div>
    <div class="col-12 col-lg-6 contact-form">
      <AppForm />
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/utils/AppForm";

export default {
  components: {
    AppForm
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
