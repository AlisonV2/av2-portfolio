<template>
  <div class="container scroll-container">
    <div class="row">
      <div class="col-12">
        <AppHeader>
          <template v-slot:pretitle>{{ $t("projects.pretitle") }}</template>
          <template v-slot:title>{{ $t("projects.title") }}</template>
        </AppHeader>
      </div>
    </div>
    <div class="row">
    <div class="col-12 col-lg-6 col-xl-4 mb-4 project-cols" v-for="project in projects" :key="project.id">
      <ProjectItem :project="project" />
    </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/projects/ProjectItem";

export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      projects: []
    }
  },
  async created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
        const projectsCollection = this.$fire.firestore.collection('projects');
        const snap = await projectsCollection.orderBy('datePosted', 'desc').get();
        this.projects = [];
        snap.forEach((doc) => [
          this.projects.push({
            id: doc.id,
            ...doc.data(),
          }),
        ]);
      },
  }
};
</script>
