<template>
  <div class="container scroll-container">
    <div class="row">
      <div class="col-12 col-xl-6 project-col">
        <div class="project-header">
          <h4>{{ $t("projects.pretitle") }}</h4>
          <h2>{{ project.title }}</h2>
        </div>
        <div class="project-preview">
          <p class="preview" v-if="$i18n.locale === 'en'">
            {{ project.preview.en }} | Made in
            {{ project.date.en }}
          </p>
          <p class="preview" v-if="$i18n.locale === 'fr'">
            {{ project.preview.fr }} | Réalisé en
            {{ project.date.fr }}
          </p>
        </div>
        <div class="project-description">
          <p class="text" v-if="$i18n.locale === 'en'">
            <span class="emphasis">Demand: </span>{{ project.description.en }}
          </p>
          <p class="text" v-if="$i18n.locale === 'fr'">
            <span class="emphasis">Demande: </span>{{ project.description.fr }}
          </p>
        </div>
        <div class="project-stack">
          <p class="text">
            <span class="emphasis">Stack: </span>{{ project.stack }}
          </p>
        </div>
        <div>
          <AppLink :href="project.liveLink">{{ $t("projects.live") }}</AppLink>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <img
          :src="project.thumbnail"
          :alt="project.title"
          class="img-fluid project-img"
        />
        <BackLink />
      </div>
    </div>
  </div>
</template>

<script>
import { projectsCollection } from "@/plugins/firebase";
import BackLink from "@/components/projects/BackLink";

export default {
  props: ["id", "href"],
  components: {
    BackLink
  },
  data() {
    return {
      project: {
        title: "",
        preview: {
          en: "",
          fr: ""
        },
        description: {
          en: "",
          fr: ""
        },
        date: {
          en: "",
          fr: ""
        },
        stack: "",
        liveLink: "",
        thumbnail: ""
      }
    };
  },
  async mounted() {
    const docSnapshot = await projectsCollection
      .doc(this.$route.params.id)
      .get();
    if (!docSnapshot.exists) {
      this.$router.push("/projects");
      return;
    }
    const data = docSnapshot.data();
      this.project.title = data.title;
      this.project.preview.en = data.preview.en;
      this.project.preview.fr = data.preview.fr;
      this.project.description.en = data.description.en;
      this.project.description.fr = data.description.fr;
      this.project.date.en = data.date.en;
      this.project.date.fr = data.date.fr;
      this.project.stack = data.stack;
      this.project.liveLink = data.liveLink;
      this.project.thumbnail = data.thumbnail;
    console.log(docSnapshot.data().description.fr);
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
