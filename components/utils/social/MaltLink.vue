<template>
  <span>
    <a
      href="https://www.malt.fr/profile/alisonvandromme1"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'en'"
      v-tooltip="'Hire me on Malt'"
    >
      <MaltIcon />
    </a>
    <a
      href="https://www.malt.fr/profile/alisonvandromme1"
      target="_blank"
      rel="noopener noreferrer"
      v-if="$i18n.locale === 'fr'"
      v-tooltip="'M\'engager sur Malt'"
    >
      <MaltIcon />
    </a>
  </span>
</template>

<script>
// import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import MaltIcon from '@/components/icons/MaltIcon';

export default {
  components: {MaltIcon}
  // computed: {
  //   freelance() {
  //     return faExternalLinkSquareAlt;
  //   }
  // }
};
</script>

<style lang="scss">

</style>
