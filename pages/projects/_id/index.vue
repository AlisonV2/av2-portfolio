<template>
  <div class="container scroll-container">
    <div class="row">
      <div class="col-12 col-xl-6 project-col">
        <div class="project-header">
          <h4>{{ $t("projects.pretitle") }}</h4>
          <h2>{{ loadedProjects.title }}</h2>
        </div>
        <div class="project-preview">
          <p class="preview" v-if="$i18n.locale === 'en'">
            {{ loadedProjects.preview.en }} | Made in {{ loadedProjects.date.en }}
          </p>
          <p class="text" v-if="$i18n.locale === 'fr'">
            {{ loadedProjects.preview.fr }} | Réalisé en {{ loadedProjects.date.fr }}
          </p>
        </div>
        <div class="project-description">
          <p class="text" v-if="$i18n.locale === 'en'">
            <span class="emphasis">Demand: </span
            >{{ loadedProjects.description.en }}
          </p>
          <p class="text" v-if="$i18n.locale === 'fr'">
            <span class="emphasis">Demande: </span
            >{{ loadedProjects.description.fr }}
          </p>
        </div>
        <div class="project-stack">
          <p class="text">
            <span class="emphasis">Stack: </span>{{ loadedProjects.stack }}
          </p>
        </div>
        <div>
          <AppLink :href="loadedProjects.liveLink">{{
            $t("projects.live")
          }}</AppLink>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <img
          :src="loadedProjects.thumbnail"
          :alt="loadedProjects.title"
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
        loadedProjects: context.payload.projectData
      };
    }
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then(data => {
        return {
          loadedProjects: data
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
}

.project-img {
  border-radius: 0.5rem;
  opacity: 0.9;
}

.project-preview {
  margin-bottom: 3rem;
}

.project-stack {
  margin-bottom: 4rem;
}

p.preview {
  color: $primary-lighter-50;
  font-size: 1.8rem;
}

p.text {
  font-weight: $font-weight-light;
}

.emphasis {
  color: $accent;
  font-weight: $font-weight-bold;
}
</style>
