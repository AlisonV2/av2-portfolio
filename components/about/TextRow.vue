<template>
  <div class="row">
    <div class="col-12">
      <p class="text">
        <span class="emphasis">{{ $t("about.p1.title") }}: </span>{{ $t("about.p1.text") }}
      </p>
      <p class="text">
        <span class="emphasis">{{ $t("about.p2.title") }}: </span>{{ $t("about.p2.text") }}
      </p>
      <p class="text">
        <span class="emphasis">{{ $t("about.p3.title") }}: </span>{{ $t("about.p3.text") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
p.preview {
  color: $primary-lighter-50;
  font-size: 1.8rem;
}

p.text {
  font-weight: $font-weight-light;
}

.emphasis {
  color: $accent;
  font-weight: $font-weight-bold;
}
</style>
