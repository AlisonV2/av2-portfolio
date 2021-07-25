<template>
  <div class="back-link" :class="backlinkClass">
    <font-awesome-icon
      class="back-icon"
      :icon="back"
      role="button"
    />
    <nuxt-link :to="localePath('/projects')" class="project-link">{{
      $t("projects.back")
    }}</nuxt-link>
  </div>
</template>

<script>
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BackLink",
  props: {
    backlinkClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    back() {
      return faAngleDoubleLeft;
    }
  }
};
</script>

<style lang="scss">
.back-link {
  display: flex;
  justify-content: center;
  align-items: center;
  a:hover {
    color: $accent !important;
  }
}
.back-icon {
  color: $accent;
  font-size: 3rem;
}
</style>
