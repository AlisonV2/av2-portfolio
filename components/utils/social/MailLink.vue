<template>
  <span class="mail-link">
    <a
      href="mailto:alisonvandromme.pro@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'Or simply send me a mail'"
    >
      <font-awesome-icon :icon="mail" />
    </a>
    <a
      href="mailto:alison.vandromme@outlook.fr"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'fr'"
      v-tooltip="'M\'envoyer un mail'"
    >
      <font-awesome-icon :icon="mail" />
    </a>
  </span>
</template>

<script>
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    mail() {
      return faEnvelopeSquare;
    }
  }
};
</script>

<style></style>
