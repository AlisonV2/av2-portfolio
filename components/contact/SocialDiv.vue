<template>
  <div class="social-links">
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
  }
};
</script>

<style lang="scss">
.social-links {
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
    color: $light;
    border-color: $primary;
    &:hover {
      color: $accent;
    }
  }
}
}

  .github-link, .linkedin-link, .malt-link { margin-right: 3rem;}
</style>
