<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h4>{{ $t("projects.pretitle") }}</h4>
        <h2>{{ $t("projects.title") }}</h2>
        <p class="description">
          {{ $t("projects.description") }}
        </p>
        <p class="description">
          {{ $t("projects.stack") }}
        </p>
        <div class="live-link">
          <font-awesome-icon class="link-icon" :icon="link" role="button" />
          <a class="project-link" href="">{{ $t("projects.live") }}</a>
        </div>
      </div>
      <div class="col-12 col-md-6 projects-img-col">
        <div>
        <img :src="imageUrl"
          alt="Project Image"
          class="img-fluid project-img"
        />
        </div>
        <div class="projects-links">
          <a class="project-link" href="">{{ $t("projects.back") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      imageUrl:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
  },
  computed: {
    link() {
      return faLink;
    }
  }
};
</script>

<style lang="scss">
.project-img-col {
  display: none;
}

.project-image {
  border-radius: 15px;
  justify-content: flex-end;
}

@media screen and (min-width: 1264px) {
  .project-img-col {
    display: flex;
  }
}

.projects-links {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.live-link {
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.link-icon {
  font-size: 2.5rem;
}
</style>
