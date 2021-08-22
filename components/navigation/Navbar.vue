<template>
  <nav class="navbar fixed-top" :class="{ 'on-scroll': !topOfPage}">
    <div class="container navbar-container">
    <nuxt-link :to="localePath('/')" class="navbar-brand">
      <BrandDesktop />
      <BrandMobile />
    </nuxt-link>
    <div class="spacer"></div>
    <div role="button" class="navbar-toggle" @click="toggleSidenav">
      <MenuDesktop />
      <MenuMobile />
    </div>
    </div>
  </nav>
</template>

<script>
import MenuDesktop from "@/components/icons/MenuDesktop";
import MenuMobile from "@/components/icons/MenuMobile";
import BrandDesktop from "@/components/icons/BrandDesktop";
import BrandMobile from "@/components/icons/BrandMobile";

export default {
  name: "Navbar",
  components: {
    MenuDesktop,
    MenuMobile,
    BrandDesktop,
    BrandMobile
  },
  emits: ["toggleSidenav"],
  data() {
    return {
      topOfPage: true
    }
  },
  methods: {
    toggleSidenav() {
      this.$emit("toggleSidenav");
    },
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
nav {
  background-color: transparent;
  width: 100%;
  transition: all .2s ease-in-out;
  &.on-scroll {
    box-shadow: 0 0 1rem $accent;
    background-color: $primary;
  }
  .navbar-container {
  padding: 1.5rem 2rem;
  }
}

.brand-desktop,
.brand-mobile {
  height: 50px;
  width: auto;
}

.brand-desktop,
.menu-desktop {
  display: none;
}

@include bp-up(md) {
  .brand-desktop,
  .menu-desktop {
    display: inline-block;
  }
  .brand-mobile {
    display: none;
  }
  .menu-mobile {
    display: none;
  }
}
</style>
