<template>
  <footer class="container fixed-bottom" :class="{ 'on-scroll': !topOfPage}">
    <div class="row">
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
  },
  data() {
    return {
      topOfPage: true
    }
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false
      } else {
        if (!this.topOfPage) this.topOfPage = true
      }
    }
  },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
  },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
footer {
  background-color: transparent;
  transition: all .2s ease-in-out;
  background-color: $primary-opacity-80;
  &.on-scroll {
    box-shadow: 0 0 1rem $accent;
  }
  .row {
    padding: .5rem 1rem;
  }
}

.row,
.switcher {
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
