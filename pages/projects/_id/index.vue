<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-xl-6 project-col">
        <div class="project-header">
          <h4>{{ $t("projects.pretitle") }}</h4>
          <h2>{{ loadedPosts.title }}</h2>
        </div>
        <div class="project-preview">
          <p class="preview" v-if="$i18n.locale === 'en'">
            {{ loadedPosts.preview.en }}
          </p>
          <p class="preview" v-if="$i18n.locale === 'fr'">
            {{ loadedPosts.preview.fr }}
          </p>
          <!-- <p class="date" v-if="$i18n.locale === 'en'">Made in {{ loadedPosts.date.en }}</p>
        <p class="date" v-if="$i18n.locale === 'fr'">Réalisé en {{ loadedPosts.date.fr }}</p> -->
        </div>
        <div class="project-description">
          <p class="description" v-if="$i18n.locale === 'en'">
            <span class="emphasis">Demand: </span
            >{{ loadedPosts.description.en }}
          </p>
          <p class="description" v-if="$i18n.locale === 'fr'">
            <span class="emphasis">Demande: </span
            >{{ loadedPosts.description.fr }}
          </p>
        </div>
        <div class="project-stack">
          <p class="description">
            <span class="emphasis">Stack: </span>{{ loadedPosts.stack }}
          </p>
        </div>
        <div>
          <AppLink :href="loadedPosts.liveLink">{{
            $t("projects.live")
          }}</AppLink>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <img
          :src="loadedPosts.thumbnail"
          :alt="loadedPosts.title"
          class="img-fluid project-img"
        />
        <BackLink />
      </div>
    </div>
  </div>
</template>

<script>
import BackLink from "@/components/projects/BackLink";

export default {
  props: ["href"],
  components: {
    BackLink
  },
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
  }
};
</script>

<style lang="scss">
@include bp-up(xl) {
  .project-img {
    justify-content: flex-end;
    margin-bottom: 3rem;
    margin-top: 5rem;
  }
  .project-col {
    padding-right: 10rem;
    padding-top: 5rem;
  }
  .description {
    font-size: 2.5rem;
  }
  .emphasis {
    font-size: 2.5rem;
  }
}

.project-img {
  border-radius: 0.5rem;
  opacity: 0.9;
}

.description {
  font-size: 1.8rem !important;
  font-family: $default-font;
  font-weight: 300;
  color: $primary-lighter-80;
  line-height: 3rem;
}

.emphasis {
  font-weight: $font-weight-bold;
  color: $accent;
  font-size: 1.8rem;
}

.preview {
  font-size: 2.5rem;
  color: $primary-lighter-50;
}

.project-preview {
  margin-bottom: 3rem;
}

.project-stack {
  margin-bottom: 4rem;
}
</style>
