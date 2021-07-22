<template>
  <div class="row">
    <div class="col-12 col-md-5 contact-text">
      <h2>{{ $t("contact.title") }}</h2>
      <p class="description">
        {{ $t("contact.description") }}
      </p>
      <h4>contact@alisonvandromme.com</h4>
    </div>
    <div class="col-12 col-md-7 contact-form">
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
.contact-form {
  display: flex;
  justify-content: flex-end;
}
</style>
