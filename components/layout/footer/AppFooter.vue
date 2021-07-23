<template>
  <footer class="container">
    <div class="row" id="#app-footer">
      <div class="col-6">
        <span>
          <nuxt-link class="lang" :to="switchLocalePath('en')">EN</nuxt-link>
        </span>
        <span class="lang">&#9679;</span>
        <span>
          <nuxt-link class="lang" :to="switchLocalePath('fr')">FR</nuxt-link>
        </span>
      </div>
      <div class="col-6 hi-toggle"><HiToggle /></div>
    </div>
  </footer>
</template>

<script>
import HiToggle from "@/components/icons/HiToggle";

export default {
  components: {
    HiToggle
  }
};
</script>

<style lang="scss">
#app-footer {
  display: flex;
  align-items: center;
  padding-bottom: 4rem!important;
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

.hi-toggle {
  display: flex;
  justify-content: flex-end;
}
</style>
