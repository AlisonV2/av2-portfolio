<template>
  <span>
     <a
      href="https://github.com/AlisonV2"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'See my work on Github'"
    >
      <font-awesome-icon :icon="github" />
    </a>
    <a
      href="https://github.com/AlisonV2"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'fr'"
      v-tooltip="'Mon profil Github'"
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
