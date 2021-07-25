<template>
  <span class="linkedin-link">
    <a
      href="https://www.linkedin.com/in/alison-vandromme/"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'Let\'s connect on Linkedin'"
    >
      <font-awesome-icon :icon="linkedin" />
    </a>
    <a
      href="https://www.linkedin.com/in/alison-vandromme/"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'fr'"
      v-tooltip="'Mon profil Linkedin'"
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
