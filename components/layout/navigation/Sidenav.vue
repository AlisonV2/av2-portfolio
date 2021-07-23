<template>
  <div class="container" v-if="show" fluid>
    <div class="sidenav-backdrop" @click="closeSidenav"></div>
    <div class="row" id="sidenav-drawer">
      <div class="col-12 close-icon-wrapper">
        <CloseIcon
          @click="closeSidenav"
        />
      </div>
      <div class="col-12 col-sm-6 social-icons">
        <SocialBar />
      </div>
      <div class="col-12 col-sm-6 nav-menu">
        <ul class="nav-list" @click="closeSidenav">
          <li class="nav-item">
            <nuxt-link :to="localePath('/')">{{ $t("path.home") }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/about')">{{
              $t("path.about")
            }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/projects')">{{
              $t("path.projects")
            }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/contact')">{{
              $t("path.contact")
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-6 divider">
        <hr size="2" />
      </div>
      <div class="col-12 footer-text">
        <h4>I have no idea</h4>
      </div>
      <div class="col-12 copyright">
        <SidenavFooter />
      </div>
    </div>
  </div>
</template>

<script>
import SidenavFooter from "@/components/layout/navigation/sidenav/SidenavFooter";
import SocialBar from "@/components/layout/navigation/sidenav/SocialBar";
import CloseIcon from "@/components/icons/CloseIcon";

export default {
  name: "Sidenav",
  emits: ["closeSidenav"],
  components: {
    SidenavFooter,
    SocialBar,
    CloseIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    close() {
      return faTimes;
    }
  },
  methods: {
    closeSidenav() {
      this.$emit("closeSidenav");
    }
  }
};
</script>

<style lang="scss">
.sidenav-backdrop {
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

#sidenav-drawer {
  padding: 2rem 0rem;
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  margin: 0;
}

.close-icon-wrapper {
  padding: 1rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .close-icon {
    color: #1d1d1d;
    height: 5rem;
    cursor: pointer;
  }
}
.copyright,
.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.nav-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 8rem;
}

@media screen and (min-width: 960px) {
  #sidenav-drawer {
    width: 50%;
  }
}

/* Mobile only menu */

@media screen and (max-width: 600px) {
  .nav-menu {
    text-align: center;
  }
  .close-icon-wrapper {
    .close-icon {
      height: 4rem;
    }
  }
  .social-icons,
  .footer-text,
  .divider {
    display: none;
  }
}
</style>
