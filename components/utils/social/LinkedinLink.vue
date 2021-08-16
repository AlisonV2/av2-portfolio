<template>
  <span class="linkedin-link">
    <a
      href="https://www.linkedin.com/in/alison-vandromme/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <font-awesome-icon :icon="linkedin" />
    </a>
  </span>
</template>

<script>
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default {
  computed: {
    linkedin() {
      return faLinkedin;
    }
  }
};
</script>

<style>

</style>
