<template>
  <div class="round-button-wrapper">
    <a
      class="round-button"
      href="mailto:alison.vandromme@outlook.fr"
      v-if="currentPage"
    >
      <font-awesome-icon :icon="contact" />
    </a>
    <nuxt-link class="round-button" :to="localePath('/contact')" v-if="!currentPage">
      <font-awesome-icon :icon="contact" />
    </nuxt-link>
  </div>
</template>

<script>
import { faComments } from "@fortawesome/free-regular-svg-icons";

export default {
  data() {
    return {
      currentPage: false
    };
  },
  computed: {
    contact() {
      return faComments;
    },
    watchPage() {
      if (this.$route.path === "/contact/") {
        return this.currentPage = true;
      } else {
        return this.currentPage = false;
      }
    }
  }
};
</script>

<style lang="scss">
.round-button {
  border: 2px solid $light;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  text-align: center;
  justify-content: center;
  font-size: 2.5rem;
  padding: 1.1rem;
  color: $primary;
  display: block;
  &:hover {
    background-color: $light;
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba($light, 0);
    transform: scale(1.3);
    svg {
      color: $primary;
    }
  }
  svg {
    color: $light;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $light;
  }
}
</style>
