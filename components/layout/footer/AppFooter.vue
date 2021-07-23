<template>
  <footer class="container">
    <div class="row" id="#app-footer">
      <div class="col-6 switcher">
      <div class="lang-switcher">
        <span>
          <nuxt-link class="lang" :to="switchLocalePath('en')">EN</nuxt-link>
        </span>
        <span class="lang">&#9679;</span>
        <span>
          <nuxt-link class="lang" :to="switchLocalePath('fr')">FR</nuxt-link>
        </span>
      </div>
      </div>
      <div class="col-6 info-button">
      <RoundButton />
      </div>
    </div>
  </footer>
</template>

<script>
import RoundButton from "@/components/icons/RoundButton";

export default {
  components: {
    RoundButton
  }
};
</script>

<style lang="scss">
#app-footer {
  display: flex;
  align-items: center;
  padding-bottom: 4rem!important;
}

.switcher {
  display: flex;
  align-items: center;
}

.lang {
  font-family: "Alice", serif;
  font-size: 2.5rem;
  align-items: center;
  margin-right: 0.5rem;
  color: #797979 !important;
  &.nuxt-link-exact-active {
    color: #fff !important;
  }
}

.info-button {
  display: flex;
  justify-content: flex-end;
}
</style>
