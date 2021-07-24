<template>
  <div class="live-link">
    <font-awesome-icon class="link-icon" :icon="link" role="button" />
    <a
      class="project-link"
      target="_blank"
      rel="noopener noreferrer"
      :href="href">
      <slot/></a>
  </div>
</template>

<script>
import { faLink } from "@fortawesome/free-solid-svg-icons";
export default {
  props: ["href"],
  computed: {
    link() {
      return faLink;
    }
  }
};
</script>

<style lang="scss">

.live-link {
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.link-icon {
  font-size: 2.5rem;
  color: $accent;
}
</style>
