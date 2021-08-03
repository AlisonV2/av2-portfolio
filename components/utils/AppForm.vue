<template>
  <form data-bss-recipient="7a59f2e5aeebae6264fc305b96b63dcf">
    <div class="input-block">
      <input type="text" name="name" required />
      <span class="placeholder">{{ $t("contact.form.name") }}</span>
    </div>
    <div class="input-block">
      <input type="email" name="email" required />
      <span class="placeholder">{{ $t("contact.form.email") }}</span>
    </div>
    <div class="input-block">
      <textarea name="message" required />
      <span class="placeholder">{{ $t("contact.form.msg") }}</span>
    </div>
    <div class="form-check form-check-inline input-rgpd">
      <input class="form-check-input" type="checkbox" value="" />
      <label class="rgpd" v-if="$i18n.locale === 'en'">
        {{ $t("contact.form.rgpd.acceptance") }}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="rgpd-link"
          :href="Gdpr"
          >{{ $t("contact.form.rgpd.link") }}</a
        ></label
      >
      <label class="rgpd" v-if="$i18n.locale === 'fr'">
        {{ $t("contact.form.rgpd.acceptance") }}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="rgpd-link"
          :href="Rgpd"
          >{{ $t("contact.form.rgpd.link") }}</a
        ></label
      >
    </div>
    <div class="form-btn">
      <AppButton type="submit">{{ $t("contact.btn") }}</AppButton>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      Rgpd: "https://res.cloudinary.com/dhlpkwga4/image/upload/v1627635542/RGPD_vbf3kf.pdf",
      Gdpr: "https://res.cloudinary.com/dhlpkwga4/image/upload/v1627635549/GDPR_r9f1nt.pdf"
    }
  }
};
</script>

<style lang="scss">
.form-btn {
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-end;
}

.input-rgpd {
  margin-bottom: 2rem;
}

.rgpd-link {
  color: $accent !important;
  font-family: $default-font;
}

@include bp-down(md) {
  form {
    padding-top: 3rem;
  }
}
</style>
