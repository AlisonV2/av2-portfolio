<template>
  <nav class="navbar">
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
  methods: {
    toggleSidenav() {
      this.$emit("toggleSidenav");
    }
  }
};
</script>

<style lang="scss">

.navbar-container {
  padding-top: 2rem;
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

@media screen and (min-width: 768px) {
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
