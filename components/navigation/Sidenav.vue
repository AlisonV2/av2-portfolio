<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="closeSidenav"></div>
    <transition name="slide-side">
      <div v-if="show" class="row sidenav">
        <div class="col-12 close-icon-wrapper">
          <CloseIcon @click="closeSidenav" />
        </div>
        <div class="col-12 nav-menu">
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
        <div class="col-12 social-icons-col">
          <SocialDiv />
        </div>
        <div class="col-12 copyright">
          <SidenavFooter />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SidenavFooter from "@/components/navigation/sidenav/SidenavFooter";
import SocialDiv from "@/components/utils/SocialDiv";
import CloseIcon from "@/components/icons/CloseIcon";

export default {
  name: "Sidenav",
  emits: ["closeSidenav"],
  components: {
    SidenavFooter,
    SocialDiv,
    CloseIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
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
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav-backdrop {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
}

.sidenav {
  padding: 2rem 0rem;
  height: 100vh;
  width: 100%;
  background: url('../../assets/images/light-background.svg') no-repeat;
  background-color: $accent-lighter-90;
  background-size: cover;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  margin: 0;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.close-icon-wrapper {
  @include row-flex;
  padding: 1rem 5rem;
  justify-content: flex-end;
  .close-icon {
    color: $primary;
    height: 5rem;
    cursor: pointer;
  }
}
.copyright,
.footer-text {
  @include col-flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-menu {
  @include col-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: $line-height-lg;
}

@include bp-up(lg) {
  .sidenav {
    width: 50%;
  }
}

/* Mobile only menu */

@include bp-down(sm) {
  .nav-menu {
    text-align: center;
    padding-top: 3rem;
  }
  .close-icon-wrapper {
    .close-icon {
      height: 4rem;
    }
  }
  .sidenav-footer {
      padding-bottom: 3rem;
  }
}
</style>
