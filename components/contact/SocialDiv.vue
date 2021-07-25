<template>
<div>
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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
