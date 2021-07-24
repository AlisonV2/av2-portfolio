<template>
  <div class="social-icons">
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
    <a
      href="https://www.linkedin.com/in/alison-vandromme/"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'Let\'s connect on LinkedIn'"
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
    <a
      href="https://www.malt.fr/profile/alisonvandromme1"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'Hire me on Malt'"
    >
      <font-awesome-icon :icon="freelance" />
    </a>
    <a
      href="https://www.malt.fr/profile/alisonvandromme1"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'fr'"
      v-tooltip="'M\'engager sur Malt'"
    >
      <font-awesome-icon :icon="freelance" />
    </a>
    <a
      href="mailto:alison.vandromme@outlook.fr"
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
  </div>
</template>

<script>
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
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
    mail() {
      return faEnvelopeSquare;
    },
    freelance() {
      return faExternalLinkSquareAlt;
    }
  }
};
</script>

<style lang="scss">

.social-icons {
  display: none;
}

@include bp-up(sm) {
  .social-icons {
    @include col-flex;
    justify-content: center;
    align-items: center;
    a {
      padding-top: 2rem;
      color: $dark-color;
      line-height: $line-height-md;
      justify-content:center;
      svg {
        font-size: 4.5rem;
        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
