<template>
  <div class="social-icons">
    <a href="/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="github" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="linkedin" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="linkedin" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <MaltIcon />
    </a>
  </div>
</template>

<script>
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MaltIcon from "@/components/icons/MaltIcon";

export default {
  components: {
    MaltIcon
  },
  computed: {
    github() {
      return faGithubSquare;
    },
    linkedin() {
      return faLinkedin;
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
    color: #1d1d1d;
    line-height: 9.1rem;
    svg {
      font-size: 4.5rem;
    }
  }
}
</style>
