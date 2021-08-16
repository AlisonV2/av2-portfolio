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
        <ContactButton />
      </div>
    </div>
  </footer>
</template>

<script>
import ContactButton from "@/components/icons/ContactButton";

export default {
  components: {
    ContactButton
  }
};
</script>

<style lang="scss">
#app-footer,
.switcher  {
  display: flex;
  align-items: center;
}

.lang {
  @include link($primary-lighter-50, $accent-font, $light);
  font-size: 2.5rem;
  align-items: center;
  margin-right: 0.5rem;
  &.nuxt-link-exact-active {
    color: $light !important;
  }
}

.info-button {
  display: flex;
  justify-content: flex-end;
}
</style>
