<template>
  <div class="row" id="#home-row">
    <div class="col-12 col-xl-7">
      <h1>
        {{ $t("landing.hi") }}, <br />
        {{ $t("landing.im") }}<span class="name"> Alison</span>, <br />
        {{ $t("landing.webdev") }}
      </h1>
      <h3>{{ $t("landing.subtitle") }}</h3>
      <nuxt-link :to="localePath('/projects')"
        ><AppButton>{{ $t("landing.btn") }}</AppButton></nuxt-link
      >
    </div>
    <div class="col-12 col-xl-5 home-img-col">
      <HomeCode />
    </div>
  </div>
</template>

<script>
import HomeCode from "@/components/layout/images/HomeCode";
export default {
  components: {
    HomeCode
  }
};
</script>

<style lang="scss">
.home-img-col, .home-img {
  display: none;
}

#home-row {
  align-items: center;
  height: 80vh;
  width: 100%;
  .home-text {
    text-align: flex-start;
  }
}

.home-img-col {
  @include col-flex;
  align-items: flex-end;
}

.name {
  color: $accent;
}
@include bp-up(xl) {
  .home-img-col, .home-img {
    display: flex;
  }
}
</style>
