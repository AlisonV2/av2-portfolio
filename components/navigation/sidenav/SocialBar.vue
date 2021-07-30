<template>
  <div class="social-icons">
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
.social-icons-col {
  display: none;
}

@include bp-up(sm) {
  .social-icons-col {
    @include col-flex;
    justify-content: center;
    align-items: center;
    .social-icons {
      @include col-flex;
    }
    a {
      padding-top: 2.5rem;
      color: $primary;
      line-height: $line-height-md;
      justify-content: center;
      svg {
        font-size: 4.5rem;
        &:hover {
          color: $accent;
        }
      }
    }
  }
}
</style>
