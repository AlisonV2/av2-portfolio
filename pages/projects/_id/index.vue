<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h4>{{ $t("projects.pretitle") }}</h4>
        <h2 v-if="$i18n.locale === 'en'">{{ loadedPosts.title.en }}</h2>
        <h2 v-if="$i18n.locale === 'fr'">{{ loadedPosts.title.fr }}</h2>
        <p class="description" v-if="$i18n.locale === 'en'">
          {{ loadedPosts.description.en }}
        </p>
        <p class="description" v-if="$i18n.locale === 'fr'">
          {{ loadedPosts.description.fr }}
        </p>
        <p class="description" v-if="$i18n.locale === 'en'">
          {{ loadedPosts.stack.en }}
        </p>
        <p class="description" v-if="$i18n.locale === 'fr'">
          {{ loadedPosts.stack.fr }}
        </p>
        <div class="live-link">
          <font-awesome-icon class="link-icon" :icon="link" role="button" />
          <a class="project-link" href="">{{ $t("projects.live") }}</a>
        </div>
      </div>
      <div class="col-12 col-md-6 projects-img-col">
        <div>
          <img
            :src="loadedPosts.thumbnail"
            alt="Project Image"
            class="img-fluid project-img"
          />
        </div>
        <div class="projects-links">
          <nuxt-link
            :to="localePath('/projects')"
            class="project-link"
            href=""
            >{{ $t("projects.back") }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPosts: context.payload.postData
      };
    }
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then(data => {
        return {
          loadedPosts: data
        };
      })
      .catch(e => context.error(e));
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
