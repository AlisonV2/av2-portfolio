<template>
  <span class="mail-link">
    <a
      href="mailto:alisonvandromme.pro@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
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
