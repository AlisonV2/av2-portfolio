<template>
  <form ref="form">
    <div class="input-block">
      <input type="text" required />
      <span class="placeholder">{{ $t("contact.form.name") }}</span>
    </div>
    <div class="input-block">
      <input type="email" required />
      <span class="placeholder">{{ $t("contact.form.email") }}</span>
    </div>
    <div class="input-block">
      <textarea required />
      <span class="placeholder">{{ $t("contact.form.msg") }}</span>
    </div>
    <div class="form-btn">
      <AppButton type="submit" @click.prevent="onSubmit">{{
        $t("contact.btn")
      }}</AppButton>
    </div>
  </form>
</template>

<style lang="scss">
.form-btn {
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-end;
}
</style>
