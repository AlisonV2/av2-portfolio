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
    <div class="form-btn">
      <AppButton type="submit">{{
        $t("contact.btn")
      }}</AppButton>
    </div>
  </form>
</template>

<script></script>

<style lang="scss">
.form-btn {
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-end;
}

@include bp-down(md) {
  form {
    padding-top: 3rem;
  }
}
</style>
