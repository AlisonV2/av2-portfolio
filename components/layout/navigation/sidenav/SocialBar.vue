<template>
  <div class="social-icons">
    <a
      href="https://github.com/AlisonV2"
      target="_blank"
      rel="noopener noreferrer"
      v-tooltip="'See my work on GitHub'"
    >
      <font-awesome-icon :icon="github" />
    </a>
    <a
      href="https://www.linkedin.com/in/alison-vandromme/"
      target="_blank"
      rel="noopener noreferrer"
      v-tooltip="'Let\'s connect on LinkedIn'"
    >
      <font-awesome-icon :icon="linkedin" />
    </a>
    <a
      href="https://www.malt.fr/profile/alisonvandromme1"
      target="_blank"
      rel="noopener noreferrer"
      v-tooltip="'Hire me on Malt'"
    >
      <font-awesome-icon :icon="freelance" />
    </a>
    <a href="tel:+33754517210" target="_blank" rel="noopener noreferrer" v-tooltip="'Or simply give me a call'">
      <font-awesome-icon :icon="phone" />
    </a>
  </div>
</template>

<script>
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faExternalLinkSquareAlt
} from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    github() {
      return faGithubSquare;
    },
    linkedin() {
      return faLinkedin;
    },
    phone() {
      return faPhoneSquareAlt;
    },
    freelance() {
      return faExternalLinkSquareAlt;
    }
  }
};
</script>

<style lang="scss">
.social-icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: $dark-color;
    line-height: 9rem;
    svg {
      font-size: 4.5rem;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
