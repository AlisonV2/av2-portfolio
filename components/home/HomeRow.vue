<template>
    <div class="row" id="#home-row">
    <div class="col-12 col-xl-7">
      <h1>
        {{ $t("landing.hi") }}, <br />
        {{ $t("landing.im") }}<span class="name"> Alison</span>, <br />
        {{ $t("landing.webdev") }}
      </h1>
      <h3>{{ $t("landing.subtitle") }}</h3>
      <div class="home-btn">
      <nuxt-link :to="localePath('/projects')">
        <AppButton>{{ $t("landing.btn") }}</AppButton>
      </nuxt-link>
      </div>
    </div>
    <div class="col-12 col-xl-5 home-img-col">
      <HomeImg />
    </div>
  </div>

</template>

<script>
import HomeImg from "@/components/home/HomeImg";
export default {
  components: {
    HomeImg
  }
};
</script>

<style lang="scss">
#home-row {
  align-items: center;
  height: 80vh;
  width: 100%;
}
  .home-btn {
  margin-top: 5rem;
}

.name {
  color: $accent;
}

.home-img-col {
  display: none;
}

@include bp-up(xl) {
  .home-img-col {
    @include col-flex;
    align-items: flex-end;
  }
}
</style>

