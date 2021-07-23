<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <h4>{{ $t("about.pretitle") }}</h4>
        <h2>{{ $t("about.title") }}</h2>
        <p class="description">
          {{ $t("about.description") }}
        </p>
        <div class="button-wrapper">
        <AppButton>{{ $t("about.btn") }}</AppButton>
        </div>
      </div>
      <div class="col-12 col-md-4 home-img-col">
        <img :src="imageUrl"
          alt="AboutPage Image"
          class="img-fluid about-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://preview.redd.it/6tyoifoj7l201.jpg?width=960&crop=smart&auto=webp&s=4c9c5b228252cfc3b8d510930989de7d7833b9fc"
    };
  }
};
</script>

<style lang="scss">
.button-wrapper {
  margin-top: 5rem;
}
</style>
