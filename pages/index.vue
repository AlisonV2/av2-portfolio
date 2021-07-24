<template>
  <div class="row" id="#home-row">
    <div class="col-12 col-lg-7">
      <h1>
        {{ $t("landing.hi") }}, <br />
        {{ $t("landing.im") }}<span class="name"> Alison</span>, <br />
        {{ $t("landing.webdev") }}
      </h1>
      <h3>{{ $t("landing.subtitle") }}</h3>
      <nuxt-link :to="localePath('/contact')"
        ><AppButton>{{ $t("landing.btn") }}</AppButton></nuxt-link
      >
    </div>
    <div class="col-12 col-lg-5 home-img-col">
      <!-- <img :src="imageUrl"
          alt="HomePage Image"
          class="img-fluid home-img"
        /> -->
      <HomeCode />
    </div>
  </div>
</template>

<script>
import HomeCode from "@/components/layout/images/HomeCode";
export default {
  components: {
    HomeCode
  },
  data() {
    return {
      imageUrl:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
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
@include bp-up(lg) {
  .home-img-col, .home-img {
    display: flex;
  }
}
</style>
