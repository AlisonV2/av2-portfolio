<template>
  <span class="github-link">
     <a
      href="https://github.com/AlisonV2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <font-awesome-icon :icon="github" />
    </a>
  </span>
</template>

<script>
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default {
  computed: {
    github() {
      return faGithubSquare;
    },
  }
}
</script>

<style>

</style>
