<template>
  <div class="social-div" :class="socialStyle">
    <GithubLink />
    <LinkedinLink />
    <MaltLink />
    <MailLink />
  </div>
</template>

<script>
import GithubLink from "@/components/utils/social/GithubLink";
import LinkedinLink from "@/components/utils/social/LinkedinLink";
import MailLink from "@/components/utils/social/MailLink";
import MaltLink from "@/components/utils/social/MaltLink";

export default {
  components: {
    GithubLink,
    LinkedinLink,
    MailLink,
    MaltLink
  },
  props: {
    socialStyle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
.social-div {
  @include row-flex;
  margin-top:6rem;
  justify-content: center;
  align-items: center;
  a {
  line-height: $line-height-md;
  justify-content: center;
  padding-top: 3rem;
  svg {
    font-size: 4.5rem;
    color: $primary;
    &:hover {
      color: $accent!important;
    }
  }
}
}

.github-link,
.linkedin-link,
.malt-link {
  margin-right: 3rem;
}

.contact-social {
    svg {
      color: $light!important;
    }
}
</style>
